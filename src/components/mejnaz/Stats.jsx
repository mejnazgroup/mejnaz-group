import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '95%+', label: 'Успешного поступления' },
  { value: '350+', label: 'Студентов в Топ-50 вузах' },
  { value: '15+', label: 'Стран охвата' },
  { value: '85%', label: 'Получают стипендии' },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#1B4332]/15 rounded-2xl overflow-hidden bg-white/60 shadow-sm">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center justify-center py-10 px-6 text-center relative ${
                i < stats.length - 1
                  ? 'border-r border-[#1B4332]/10 border-b lg:border-b-0'
                  : ''
              } ${i === 1 ? 'border-b lg:border-b-0' : ''}`}
            >
              <div className="font-playfair font-bold text-[#1B4332] leading-none mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {stat.value}
              </div>
              <div className="text-[#3D3D3D] text-[14px] font-medium tracking-wide uppercase leading-tight max-w-[120px]">
                {stat.label}
              </div>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-[#1B4332]/15" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}