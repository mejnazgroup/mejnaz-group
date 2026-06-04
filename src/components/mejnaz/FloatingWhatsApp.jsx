import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+77001234567';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1DA851] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 whatsapp-pulse focus-bronze"
    >
      <MessageCircle size={28} className="text-white" aria-hidden="true" />
    </a>
  );
}