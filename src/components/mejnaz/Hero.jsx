import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/6a218b5dcff8773efd420c23/450735813_generated_image.png';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] pt-20 overflow-hidden flex items-center">
      {/* Background subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #1B4332 40px, #1B4332 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #1B4332 40px, #1B4332 41px)`
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#C18C5D]" />
                <span className="text-[#C18C5D] text-[13px] font-semibold tracking-[0.15em] uppercase">
                  Диверсифицированная образовательно-консалтинговая компания
                </span>
              </div>

              <h1 className="font-playfair text-[#141414] leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>
                DARE TO DREAM<br />
                <em className="text-[#1B4332] not-italic">STUDY ABROAD</em>
              </h1>

              <p className="text-[#3D3D3D] text-[18px] leading-[1.65] mb-10 max-w-lg">
                Персональное сопровождение и поступление в мировые вузы для амбициозных абитуриентов.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={scrollToContact}
                  className="group bg-[#1B4332] hover:bg-[#2D6A4F] text-[#FAF7F2] font-semibold text-[15px] px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-[#1B4332]/20 hover:scale-105 focus-bronze"
                >
                  Начать свой путь
                </button>
                <button
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#1B4332] font-semibold text-[15px] underline-bronze hover:text-[#C18C5D] transition-colors focus-bronze rounded-sm py-1"
                >
                  Узнать больше
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Arched Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px]">
              {/* Arch frame decoration */}
              <div className="absolute -inset-4 border-2 border-[#C18C5D]/20 rounded-[50%_50%_20%_20%/30%_30%_20%_20%] pointer-events-none" />
              <div className="absolute -inset-8 border border-[#1B4332]/10 rounded-[50%_50%_20%_20%/30%_30%_20%_20%] pointer-events-none" />

              {/* Main arch image container */}
              <div
                className="overflow-hidden shadow-2xl shadow-[#1B4332]/20"
                style={{ borderRadius: '50% 50% 8% 8% / 30% 30% 8% 8%' }}
              >
                <img
                  src={HERO_IMG}
                  alt="Престижный университетский кампус"
                  className="w-full h-[480px] lg:h-[560px] object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
                {/* Golden overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 via-transparent to-[#C18C5D]/10" />
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-6 bottom-16 bg-[#FAF7F2] rounded-2xl shadow-xl p-4 border border-[#E8E0D5]"
              >
                <div className="text-[#1B4332] font-playfair font-bold text-2xl leading-none">100%</div>
                <div className="text-[#3D3D3D] text-[12px] mt-1 font-medium">Успешных<br />зачислений</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -right-4 top-20 bg-[#1B4332] rounded-2xl shadow-xl p-4"
              >
                <div className="text-[#C18C5D] font-playfair font-bold text-2xl leading-none">10 лет</div>
                <div className="text-[#FAF7F2]/80 text-[12px] mt-1 font-medium">Опыта в подготовке<br />документов</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
    </section>
  );
}