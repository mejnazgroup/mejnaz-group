import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("notion");

    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // First, search for a database named "Student Inquiries" or create a page entry
    // We'll create a page in the user's Notion — they need to share a database with the integration
    // Try to find a database called "Student Inquiries"
    const searchRes = await fetch("https://api.notion.com/v1/search", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
      },
      body: JSON.stringify({
        query: "Student Inquiries",
        filter: { value: "database", property: "object" }
      })
    });

    const searchData = await searchRes.json();
    let databaseId = searchData.results?.[0]?.id;

    // If no database found, create one in the workspace
    if (!databaseId) {
      // Get the first page to use as parent
      const pagesRes = await fetch("https://api.notion.com/v1/search", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28"
        },
        body: JSON.stringify({ filter: { value: "page", property: "object" } })
      });
      const pagesData = await pagesRes.json();
      const parentPageId = pagesData.results?.[0]?.id;

      if (!parentPageId) {
        return Response.json({ error: "Please share at least one page with the Notion integration." }, { status: 400 });
      }

      const createDbRes = await fetch("https://api.notion.com/v1/databases", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28"
        },
        body: JSON.stringify({
          parent: { type: "page_id", page_id: parentPageId },
          title: [{ type: "text", text: { content: "Student Inquiries" } }],
          properties: {
            "Name": { title: {} },
            "Email": { email: {} },
            "Phone": { phone_number: {} },
            "Service": { rich_text: {} },
            "Message": { rich_text: {} },
            "Date": { date: {} }
          }
        })
      });
      const createDbData = await createDbRes.json();
      databaseId = createDbData.id;
    }

    // Add a new row to the database
    const pageRes = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          "Name": { title: [{ text: { content: name || "" } }] },
          "Email": { email: email || null },
          "Phone": { phone_number: phone || null },
          "Service": { rich_text: [{ text: { content: service || "" } }] },
          "Message": { rich_text: [{ text: { content: message || "" } }] },
          "Date": { date: { start: new Date().toISOString().split("T")[0] } }
        }
      })
    });

    const pageData = await pageRes.json();
    if (pageData.object === "error") {
      return Response.json({ error: pageData.message }, { status: 400 });
    }

    return Response.json({ success: true, notionPageId: pageData.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});