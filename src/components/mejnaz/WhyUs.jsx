import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Star, Eye } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Без «обучения на вашем кейсе»',
    desc: 'Мы знаем скрытые требования вузов, логику оценивания, алгоритмы скоринга, и нюансы визовых процессов, накопленные за годы практики. Вы получаете надежность и предсказуемость результата крупной компании, но без конвейерного подхода.',
    accent: '#1B4332',
  },
  {
    icon: Lightbulb,
    title: 'Актуальные инсайды',
    desc: 'За 10 лет работы наши менторы досконально изучили "внутреннюю кухню" приемных комиссий. Мы знаем не только то, что написано на сайтах ВУЗов, но и негласные критерии отбора, актуальные тренды в эссе, и реальные сроки рассмотрения.',
    accent: '#C18C5D',
  },
  {
    icon: Star,
    title: 'Максимальная вовлеченность',
    desc: 'Как новый бренд, мы дорожим своей репутацией с первого дня, поэтому для нас каждый абитуриент становится флагманским проектом. Вы получаете 100% внимания и персональную стратегию, которую в крупных фирмах часто делегируют стажерам.',
    accent: '#1B4332',
  },
  {
    icon: Eye,
    title: 'Прозрачность на каждом этапе',
    desc: 'Даём объективную оценку, предлагаем реалистичную стратегию и всегда объясняем логику: почему именно такая структура эссе, почему этот университет, почему этот тайминг. Мы открыто говорим о реальных шансах, рисках и необходимом бюджете.',
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