import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Благодаря MEJNAZ я поступила в Йель! Их экспертиза и поддержка были неоценимыми. Я не могла бы достичь этого без их помощи.',
    name: 'Аина К.',
    role: 'Студентка Yale University',
    country: '🇰🇿',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face',
  },
  {
    quote: 'Профессионализм команды превзошёл все ожидания. Мой сын поступил в Лондонскую школу экономики. Рекомендую!',
    name: 'Сергей П.',
    role: 'Родитель студента LSE',
    country: '🇷🇺',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
  },
  {
    quote: 'Лучшее решение для будущего моего ребёнка. Индивидуальный подход и постоянная поддержка сделали невозможное возможным. Спасибо, MEJNAZ!',
    name: 'Ольга Д.',
    role: 'Родитель студентки NUS',
    country: '🇺🇿',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
  },
  {
    quote: 'Помогли разобраться во всех тонкостях поступления в Канаду. Теперь я учусь в University of Toronto — мечта стала реальностью!',
    name: 'Дмитрий М.',
    role: 'Студент University of Toronto',
    country: '🇰🇿',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F0EBE1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C18C5D]" />
            <span className="text-[#C18C5D] text-[13px] font-semibold tracking-[0.15em] uppercase">Истории успеха</span>
          </div>
          <h2 className="font-playfair text-[#141414] font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Наши студенты
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E0D5] hover:shadow-xl hover:border-[#C18C5D]/30 transition-all duration-400 flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-[#1B4332]/8 rounded-xl flex items-center justify-center mb-5">
                <Quote size={18} className="text-[#1B4332]" aria-hidden="true" />
              </div>

              <p className="text-[#3D3D3D] text-[15px] leading-[1.7] flex-1 mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#C18C5D]/30"
                />
                <div>
                  <div className="font-semibold text-[#141414] text-[15px] flex items-center gap-1.5">
                    {t.name} <span className="text-base">{t.country}</span>
                  </div>
                  <div className="text-[#C18C5D] text-[13px] font-medium">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}