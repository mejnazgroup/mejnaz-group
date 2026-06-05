import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="about" className="bg-[#141414] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-[#1B4332] rounded-lg flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 18V6L11 3L19 6V18" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M7 18V12H15V18" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M11 12V8" stroke="#C18C5D" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="11" cy="7" r="1.5" fill="#C18C5D" />
                </svg>
              </div>
              <div className="leading-none">
                <div className="text-[#FAF7F2] font-bold text-[17px] tracking-tight">MEJNAZ</div>
                <div className="text-[#C18C5D] text-[11px] tracking-[0.12em] uppercase font-semibold">Group</div>
              </div>
            </div>
            <p className="text-[#FAF7F2]/55 text-[15px] leading-relaxed max-w-[200px]">
              Поступи c нами за границу с первого раза.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C18C5D] text-[12px] font-semibold tracking-[0.12em] uppercase mb-5">Навигация</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Услуги', href: '#services' },
                { label: 'Почему мы', href: '#why-us' },
                { label: 'Контакты', href: '#contact' },
              ].map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#FAF7F2]/65 hover:text-[#C18C5D] text-[15px] transition-colors text-left focus-bronze rounded-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#C18C5D] text-[12px] font-semibold tracking-[0.12em] uppercase mb-5">Услуги</h4>
            <ul className="flex flex-col gap-3">
              {['Подготовка к поступлению', 'Подготовка к экзаменам', 'Образовательные лагеря'].map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-[#FAF7F2]/65 hover:text-[#C18C5D] text-[15px] transition-colors text-left focus-bronze rounded-sm"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C18C5D] text-[12px] font-semibold tracking-[0.12em] uppercase mb-5">Контакт</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+77472389157" className="flex items-start gap-2.5 text-[#FAF7F2]/65 hover:text-[#C18C5D] text-[15px] transition-colors focus-bronze rounded-sm group">
                  <Phone size={15} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  +7 (747) 238-91-57
                </a>
              </li>
              <li>
                <a href="mailto:mejnazgroup@gmail.com" className="flex items-start gap-2.5 text-[#FAF7F2]/65 hover:text-[#C18C5D] text-[15px] transition-colors focus-bronze rounded-sm group">
                  <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  mejnazgroup@gmail.com
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-[#FAF7F2]/65 hover:text-[#C18C5D] text-[15px] transition-colors focus-bronze rounded-sm group">
                  <Instagram size={15} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-[#FAF7F2]/55 text-[15px]">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                  Алматы, Казахстан
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#FAF7F2]/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <button className="text-[#FAF7F2]/45 hover:text-[#C18C5D] text-[15px] transition-colors focus-bronze rounded-sm">
              Политика конфиденциальности
            </button>
            <button className="text-[#FAF7F2]/45 hover:text-[#C18C5D] text-[15px] transition-colors focus-bronze rounded-sm">
              Условия использования
            </button>
          </div>
          <div className="text-[#FAF7F2]/35 text-[15px]">
            © {year} MEJNAZ Group. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}