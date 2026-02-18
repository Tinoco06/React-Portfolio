import { motion } from 'motion/react';

const translations = {
  es: {
    sectionTag: "PROYECTOS",
    title: "Lo que he construido",
    liveDemo: "Demo",
    viewCode: "Código",
  },
  en: {
    sectionTag: "PROJECTS",
    title: "What I've built",
    liveDemo: "Demo",
    viewCode: "Code",
  }
};

const projects = [
  {
    title: "Facial Attendance System",
    description: {
      es: "Sistema de asistencia basado en reconocimiento facial. Permite registrar y verificar la asistencia de personas de forma automatizada usando la cámara.",
      en: "Attendance system based on facial recognition. Allows registering and verifying attendance automatically using the camera."
    },
    tech: ["TypeScript", "JavaScript", "React", "CSS"],
    codeUrl: "https://github.com/Tinoco06/Facial_Attendance_System",
  },
  {
    title: "Sistema de Recargas",
    description: {
      es: "Sistema web para gestión de recargas. Permite administrar transacciones, usuarios y reportes con una interfaz completa desarrollada en Laravel.",
      en: "Web system for managing top-ups/recharges. Manage transactions, users and reports with a full interface built in Laravel."
    },
    tech: ["Laravel", "PHP", "Blade", "JavaScript"],
    codeUrl: "https://github.com/Tinoco06/Recargas",
  },
  {
    title: "Bendito Verde HN",
    description: {
      es: "Página web para Bendito Verde, un negocio hondureño. Proyecto colaborativo desarrollado con React y Vite, enfocado en una experiencia moderna y responsive.",
      en: "Website for Bendito Verde, a Honduran business. Collaborative project built with React and Vite, focused on a modern and responsive experience."
    },
    tech: ["React", "JavaScript", "CSS", "Vite"],
    codeUrl: "https://github.com/karurosu-vihir/BenditoVerdeHN",
  },
  {
    title: "Reservas FINCASA",
    description: {
      es: "Sistema de reservas desarrollado en C# con WinForms. Permite gestionar reservaciones de forma eficiente con una interfaz de escritorio.",
      en: "Reservation system built with C# and WinForms. Efficiently manage bookings through a desktop interface."
    },
    tech: ["C#", "WinForms", "SQL Server"],
    codeUrl: "https://github.com/Tinoco06/ReservasFINCASA",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
  })
};

export default function Projects({ language }) {
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

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group border border-white/10 p-6 flex flex-col justify-between hover:border-white/30 transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i + 2}
            variants={fadeUp}
          >
            {/* Project number */}
            <p className="text-white/20 text-sm mb-4">
              {String(i + 1).padStart(2, '0')}
            </p>

            {/* Project title */}
            <h3 className="text-white text-xl font-bold mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {project.description[language]}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="text-white/50 text-xs border border-white/10 px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
                >
                  {t.liveDemo}
                </a>
              )}
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 text-sm px-4 py-2 hover:text-white transition-colors"
              >
                {t.viewCode} →
              </a>
            </div>
          </motion.div>
        ))}
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
