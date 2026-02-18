import { motion } from 'motion/react';

const translations = {
  es: {
    sectionTag: "CONTACTO",
    title: "¿Trabajamos juntos?",
    subtitle: "Estoy abierto a nuevas oportunidades. Si tienes un proyecto en mente o simplemente quieres conectar, no dudes en escribirme.",
    email: "Enviar email",
  },
  en: {
    sectionTag: "CONTACT",
    title: "Let's work together?",
    subtitle: "I'm open to new opportunities. If you have a project in mind or just want to connect, feel free to reach out.",
    email: "Send email",
  }
};

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Tinoco06" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jorge-tinoco-9a01b9165/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
  })
};

export default function Contact({ language }) {
  const t = translations[language];

  return (
    <div className="relative w-full bg-black px-8 md:px-16 py-24">

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
        className="text-white text-3xl md:text-5xl font-bold mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={fadeUp}
      >
        {t.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-white/60 text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
        variants={fadeUp}
      >
        {t.subtitle}
      </motion.p>

      {/* Email display */}
      <motion.p
        className="text-white/40 text-sm tracking-wide mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2.5}
        variants={fadeUp}
      >
        tinocojorge6@gmail.com
      </motion.p>

      {/* Email CTA */}
      <motion.a
        href="mailto:tinocojorge6@gmail.com"
        className="inline-block text-white border border-white/40 px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
        variants={fadeUp}
      >
        {t.email} →
      </motion.a>

      {/* Social links */}
      <motion.div
        className="flex gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={4}
        variants={fadeUp}
      >
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-sm tracking-wide hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
