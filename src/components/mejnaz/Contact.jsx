import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+77001234567';
const BG_IMG = 'https://media.base44.com/images/public/6a218b5dcff8773efd420c23/450735813_generated_image.png';

const services = [
  'Подготовка к поступлению',
  'Подготовка к экзаменам',
  'Образовательные лагеря',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-transparent border-0 border-b-2 py-3 text-[#141414] text-[16px] placeholder-[#9B9B9B] outline-none transition-all duration-300 ${
      focused === field ? 'border-[#1B4332]' : 'border-[#D1C9BF]'
    }`;

  return (
    <section id="contact" className="py-0 relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[580px]">

        {/* Left: Dark emerald with background */}
        <div className="relative flex flex-col justify-center px-10 lg:px-16 py-20 overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img src={BG_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
            <div className="absolute inset-0 bg-[#1B4332]/88" />
          </div>

          {/* Decorative arch */}
          <div className="absolute top-0 right-0 w-48 h-64 border-2 border-[#C18C5D]/20 rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C18C5D]/10 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C18C5D]" />
              <span className="text-[#C18C5D] text-[12px] font-semibold tracking-[0.15em] uppercase">Бесплатная консультация</span>
            </div>

            <h2 className="font-playfair text-[#FAF7F2] font-bold leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Сделайте шаг к ВУЗу мечты.
            </h2>

            <p className="text-[#FAF7F2]/75 text-[17px] leading-relaxed mb-8">
              Запишитесь на бесплатную консультацию и узнайте, как мы поможем вам поступить в лучшие университеты мира.
            </p>



            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в WhatsApp"
              className="mt-8 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-[15px] px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl whatsapp-pulse focus-bronze"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Написать в WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-[#FAF7F2] flex flex-col justify-center px-10 lg:px-16 py-20">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-[#1B4332]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-[#1B4332]" aria-hidden="true" />
              </div>
              <h3 className="font-playfair text-[#141414] text-[28px] font-bold mb-3">Заявка отправлена!</h3>
              <p className="text-[#3D3D3D] text-[17px] leading-relaxed">
                Мы свяжемся с вами в течение 24 часов. Также вы можете написать нам напрямую в WhatsApp.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-[#1B4332] font-semibold underline-bronze text-[15px] focus-bronze rounded-sm"
              >
                Отправить ещё одну заявку
              </button>
            </motion.div>
          ) : (
            <>
              <h3 className="font-playfair text-[#141414] text-[26px] font-bold mb-2">
                Записаться на консультацию
              </h3>
              <p className="text-[#3D3D3D] text-[16px] mb-8">Заполните форму.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#3D3D3D] text-[13px] font-semibold uppercase tracking-wide mb-1 block">Имя *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ваше имя"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      className={inputClass('name')}
                    />
                  </div>
                  <div>
                    <label className="text-[#3D3D3D] text-[13px] font-semibold uppercase tracking-wide mb-1 block">Телефон *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused('')}
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#3D3D3D] text-[13px] font-semibold uppercase tracking-wide mb-1 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className={inputClass('email')}
                  />
                </div>

                <div>
                  <label className="text-[#3D3D3D] text-[13px] font-semibold uppercase tracking-wide mb-1 block">Интересующая услуга</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    onFocus={() => setFocused('service')}
                    onBlur={() => setFocused('')}
                    className={`${inputClass('service')} cursor-pointer bg-transparent`}
                  >
                    <option value="">Выберите услугу</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[#3D3D3D] text-[13px] font-semibold uppercase tracking-wide mb-1 block">Сообщение</label>
                  <textarea
                    placeholder="Расскажите о своей цели..."
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-[#FAF7F2] font-bold text-[15px] tracking-wide py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-[#1B4332]/20 disabled:opacity-60 focus-bronze mt-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-[#FAF7F2]/40 border-t-[#FAF7F2] rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} aria-hidden="true" />
                      Записаться на бесплатную консультацию
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}