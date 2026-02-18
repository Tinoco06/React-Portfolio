import { motion } from 'motion/react';

const translations = {
  es: {
    sectionTag: "SOBRE MÍ",
    title: "Un poco sobre quién soy",
    p1: "Soy Ingeniero en Ciencias de la Computación apasionado por el desarrollo de software y la tecnología. Me especializo en crear soluciones web modernas, eficientes y con gran atención al detalle.",
    p2: "Tengo experiencia trabajando con tecnologías como React, Node.js, y bases de datos tanto SQL como NoSQL. Siempre estoy buscando aprender nuevas herramientas y mejorar mis habilidades.",
    p3: "Mi objetivo es formar parte de equipos internacionales donde pueda aportar valor, crecer profesionalmente y enfrentar retos que me lleven al siguiente nivel.",
    stats: [
      { value: "+2", label: "Años de experiencia" },
      { value: "+9", label: "Proyectos completados" },
      { value: "+10", label: "Tecnologías de trabajo" },
    ]
  },
  en: {
    sectionTag: "ABOUT ME",
    title: "A little about who I am",
    p1: "I'm a Computer Science Engineer passionate about software development and technology. I specialize in building modern, efficient web solutions with great attention to detail.",
    p2: "I have experience working with technologies like React, Node.js, and both SQL and NoSQL databases. I'm always looking to learn new tools and improve my skills.",
    p3: "My goal is to join international teams where I can add value, grow professionally, and face challenges that take me to the next level.",
    stats: [
      { value: "+2", label: "Years of experience" },
      { value: "+9", label: "Projects completed" },
      { value: "+10", label: "Working technologies" },
    ]
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
  })
};

export default function PersonalInfo({ language }) {
  const t = translations[language];

  return (
    <div className="relative w-full min-h-screen bg-black px-8 md:px-16 py-24">

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

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">

        {/* Left: text */}
        <div className="flex flex-col gap-6">
          {[t.p1, t.p2, t.p3].map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-white/70 text-base md:text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i + 2}
              variants={fadeUp}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Right: stats */}
        <div className="flex flex-col justify-center gap-10">
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="border-l-2 border-white/20 pl-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i + 2}
              variants={fadeUp}
            >
              <p className="text-white text-4xl md:text-5xl font-bold">{stat.value}</p>
              <p className="text-white/50 text-sm tracking-wide mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>

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
