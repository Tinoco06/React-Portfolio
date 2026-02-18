import { motion } from 'motion/react';
import LogoLoop from './effects/LogoLoop';

const translations = {
  es: {
    sectionTag: "EXPERIENCIA",
    title: "Empresas y marcas con las que he trabajado",
  },
  en: {
    sectionTag: "EXPERIENCE",
    title: "Companies & brands I've worked with",
  }
};

// Reemplaza estos con los logos reales de las empresas con las que has trabajado
// Puedes usar URLs de logos o importar imágenes locales
// Formato: { src: "url-del-logo", alt: "Nombre empresa" }
const companyLogos = [
  { node: <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>EMPRESA 1</span>, alt: "Empresa 1" },
  { node: <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>EMPRESA 2</span>, alt: "Empresa 2" },
  { node: <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>EMPRESA 3</span>, alt: "Empresa 3" },
  { node: <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>EMPRESA 4</span>, alt: "Empresa 4" },
  { node: <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>EMPRESA 5</span>, alt: "Empresa 5" },
  { node: <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>EMPRESA 6</span>, alt: "Empresa 6" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
  })
};

export default function Brands({ language }) {
  const t = translations[language];

  return (
    <div className="relative w-full bg-black px-8 md:px-16 py-24 overflow-hidden">

      {/* Section tag */}
      <motion.p
        className="text-white/40 text-sm tracking-[0.3em] mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
        variants={fadeUp}
      >
        {t.sectionTag}
      </motion.p>

      {/* Title */}
      <motion.h2
        className="text-white text-3xl md:text-5xl font-bold mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={fadeUp}
      >
        {t.title}
      </motion.h2>

      {/* Logo Loop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <LogoLoop
          logos={companyLogos}
          speed={80}
          direction="left"
          logoHeight={40}
          gap={80}
          pauseOnHover={true}
          fadeOut={false}
          scaleOnHover={true}
        />
      </motion.div>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-white/10 mt-24"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
