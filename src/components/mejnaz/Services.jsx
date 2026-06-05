import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight, GraduationCap, BookOpen, TreePine } from 'lucide-react';

const SERVICE_IMGS = {
  admission: 'https://media.base44.com/images/public/6a218b5dcff8773efd420c23/0164208db_generated_image.png',
  exams: 'https://media.base44.com/images/public/6a218b5dcff8773efd420c23/23aa4342a_generated_image.png',
  camps: 'https://media.base44.com/images/public/6a218b5dcff8773efd420c23/071593655_generated_image.png',
};

const services = [
  {
    id: 'admission',
    icon: GraduationCap,
    title: 'Подготовка к поступлению',
    subtitle: 'University Admission Prep',
    items: ['Personal Statement (мотивационное эссе)', 'LOR (рекомендательные письма)', 'Scholarship Applications (подача на стипендии)', 'Interview Prep (подготовка к интервью)', 'Article Publication (публикация статьи)'],
    img: SERVICE_IMGS.admission,
  },
  {
    id: 'exams',
    icon: BookOpen,
    title: 'Подготовка к экзаменам',
    subtitle: 'Standardized Exams Prep',
    items: ['IELTS', 'SAT', 'HSK'],
    img: SERVICE_IMGS.exams,
  },
  {
    id: 'camps',
    icon: TreePine,
    title: 'Образовательные лагеря',
    subtitle: 'Educational Camps',
    items: ['Летняя программы в Шанхае', 'Академические интенсивы', 'Международные поездки'],
    img: SERVICE_IMGS.camps,
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image: 60% height */}
      <div className="relative overflow-hidden" style={{ height: '260px' }}>
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/50 via-transparent to-transparent" />

        {/* Icon badge */}
        <div className="absolute top-5 left-5 w-12 h-12 bg-[#FAF7F2]/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md">
          <Icon size={22} className="text-[#1B4332]" aria-hidden="true" />
        </div>
      </div>

      {/* Content: 40% */}
      <div className="flex flex-col flex-1 p-6 bg-[#FAF7F2]">
        <div className="text-[#C18C5D] text-[11px] font-semibold tracking-[0.12em] uppercase mb-2">
          {service.subtitle}
        </div>
        <h3 className="font-playfair text-[#141414] text-[22px] font-bold leading-tight mb-4">
          {service.title}
        </h3>
        <ul className="flex flex-col gap-2 flex-1">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[#3D3D3D] text-[15px]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C18C5D] mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6">
          <motion.button
            animate={hovered ? { width: '100%' } : { width: 'auto' }}
            transition={{ duration: 0.3 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-[#1B4332] font-semibold text-[14px] group-hover:bg-[#C18C5D] group-hover:text-[#141414] group-hover:w-full px-4 py-2.5 rounded-lg transition-all duration-300 focus-bronze"
            aria-label={`Узнать подробнее о ${service.title}`}
          >
            Оставить заявку
            <ChevronRight size={16} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F0EBE1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C18C5D]" />
            <span className="text-[#C18C5D] text-[13px] font-semibold tracking-[0.15em] uppercase">Наши программы</span>
          </div>
          <h2 className="font-playfair text-[#141414] font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Услуги
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}