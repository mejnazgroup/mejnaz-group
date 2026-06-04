import { motion } from 'framer-motion';
import { Users, Trophy, BarChart2, Globe } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Экспертный совет',
    desc: 'Опытные консультанты с успешным опытом поступления в топовые университеты. Наши менторы — выпускники Ivy League и Oxbridge, которые знают систему изнутри.',
    accent: '#1B4332',
  },
  {
    icon: Trophy,
    title: 'Доказанные результаты',
    desc: 'Соответствующие высокие приёмные показатели и истории успеха студентов. Более 350 студентов поступили в Топ-50 вузов мира с нашей помощью.',
    accent: '#C18C5D',
  },
  {
    icon: BarChart2,
    title: 'Персонализированный подход',
    desc: 'Разрабатываем уникальные стратегии на основе индивидуальных целей, сильных сторон и особенностей каждого студента.',
    accent: '#1B4332',
  },
  {
    icon: Globe,
    title: 'Глобальная сеть',
    desc: 'Связи с университетами по всему миру. Наши выпускники создают поддерживающее международное сообщество в 15+ странах.',
    accent: '#C18C5D',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C18C5D]" />
            <span className="text-[#C18C5D] text-[13px] font-semibold tracking-[0.15em] uppercase">Наши преимущества</span>
          </div>
          <h2 className="font-playfair text-[#141414] font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Почему мы
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-6 p-8 bg-white rounded-2xl shadow-sm border border-[#E8E0D5] hover:shadow-lg hover:border-[#C18C5D]/30 transition-all duration-300 group"
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: r.accent === '#1B4332' ? '#1B4332' : '#FAF7F2', border: r.accent === '#C18C5D' ? '2px solid #C18C5D' : 'none' }}
                >
                  <Icon size={24} style={{ color: r.accent === '#1B4332' ? '#C18C5D' : '#C18C5D' }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-playfair text-[#141414] text-[20px] font-bold mb-3">{r.title}</h3>
                  <p className="text-[#3D3D3D] text-[16px] leading-[1.65]">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}