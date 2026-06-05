import { motion } from 'framer-motion';

const destinations = [
  { flag: '🇺🇸', name: 'США', subtitle: 'Ivy League & Top Universities' },
  { flag: '🇬🇧', name: 'Великобритания', subtitle: 'Oxford, Cambridge & Russell Group' },
  { flag: '🇰🇷', name: 'Южная Корея', subtitle: 'SKY Universities & KAIST' },
  { flag: '🇭🇰', name: 'Гонконг', subtitle: 'HKU, HKUST & CUHK' },
  { flag: '🇨🇳', name: 'Китай', subtitle: 'Tsinghua, Fudan & PKU' },
  { flag: '🇮🇹', name: 'Италия', subtitle: 'Bocconi, Politecnico & La Sapienza' },
  { flag: '🇦🇺', name: 'Австралия', subtitle: 'Group of Eight Universities' },
  { flag: '🇵🇱', name: 'Польша', subtitle: 'UW, AGH & Jagiellonian' },
  { flag: '🇨🇦', name: 'Канада', subtitle: 'UofT, UBC & McGill' },
];

export default function Destinations() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C18C5D]" />
            <span className="text-[#C18C5D] text-[13px] font-semibold tracking-[0.15em] uppercase">Направления</span>
          </div>
          <h2 className="font-playfair text-[#141414] font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Топ 9 стран для обучения
          </h2>
          <p className="text-[#3D3D3D] text-[18px] mt-4 max-w-xl leading-relaxed">
            Среди наших студентов популярны данные страны.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-center gap-4 bg-white border border-[#E8E0D5] rounded-2xl px-5 py-5 hover:border-[#C18C5D]/40 hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <span className="text-4xl leading-none flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {dest.flag}
              </span>
              <div>
                <div className="font-playfair text-[#141414] font-bold text-[17px] leading-tight">{dest.name}</div>
                <div className="text-[#C18C5D] text-[13px] font-medium mt-0.5 leading-tight">{dest.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}