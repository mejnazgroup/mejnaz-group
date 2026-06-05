import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Почему мы', href: '#why-us' },
  { label: 'Контакты', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(27,67,50,0.08)]'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group focus-bronze rounded-sm">
            <div className="w-10 h-10 bg-[#1B4332] rounded-lg flex items-center justify-center shadow-md group-hover:bg-[#2D6A4F] transition-colors">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 18V6L11 3L19 6V18" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 18V12H15V18" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
                <path d="M11 12V8" stroke="#C18C5D" strokeWidth="2" strokeLinecap="round" />
                <circle cx="11" cy="7" r="1.5" fill="#C18C5D" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="text-[#1B4332] font-bold text-[17px] tracking-tight leading-tight">MEJNAZ</div>
              <div className="text-[#C18C5D] text-[11px] tracking-[0.12em] uppercase font-semibold">Group</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-[#3D3D3D] hover:text-[#1B4332] text-[15px] font-medium tracking-wide transition-colors relative group focus-bronze rounded-sm py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C18C5D] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-[#C18C5D] hover:bg-[#A8784A] text-[#141414] font-bold text-[14px] tracking-[0.05em] uppercase px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 focus-bronze"
            >
              Консультация
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#1B4332] focus-bronze"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Открыть меню"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[#FAF7F2] border-t border-[#E8E0D5] px-6 pb-6 pt-4"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-[#3D3D3D] hover:text-[#1B4332] text-[16px] font-medium text-left py-2 border-b border-[#E8E0D5] last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="bg-[#C18C5D] text-[#141414] font-bold text-[14px] tracking-wide uppercase px-6 py-3 rounded-full mt-2 hover:bg-[#A8784A] transition-colors"
              >
                Консультация
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}