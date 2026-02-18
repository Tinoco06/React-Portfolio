import { motion } from 'motion/react';
import DomeGallery from './effects/DomeGallery';

const translations = {
  es: {
    sectionTag: "HABILIDADES",
    title: "Tecnologías y herramientas",
    drag: "Arrastra para explorar",
  },
  en: {
    sectionTag: "SKILLS",
    title: "Technologies & tools",
    drag: "Drag to explore",
  }
};

const techLogos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", alt: "Laravel" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", alt: "Express" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", alt: "Sequelize" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg", alt: "SQL Server" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", alt: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", alt: "Vite" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "Linux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", alt: "Ansible" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", alt: "Bash" },
];

const skillCategories = [
  {
    title: { es: "Lenguajes", en: "Languages" },
    skills: ["JavaScript", "C#", "Java", "PHP", "Python", "C++", "SQL"],
  },
  {
    title: { es: "Frontend", en: "Frontend" },
    skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: { es: "Backend", en: "Backend" },
    skills: ["Node.js", "Laravel", "Express", "Sequelize", "Nodemailer"],
  },
  {
    title: { es: "Bases de datos", en: "Databases" },
    skills: ["MySQL", "SQL Server", "MongoDB"],
  },
  {
    title: { es: "Herramientas", en: "Tools" },
    skills: ["Git", "GitHub", "VS Code", "Vite", "HBS", "Less", "Linux", "Claude Code"],
  },
  {
    title: { es: "DevOps / Automatización", en: "DevOps / Automation" },
    skills: ["Ansible", "Shell Scripting (Bash)", "Cron Jobs", "YAML Playbooks"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" }
  })
};

export default function Skills({ language }) {
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
        className="text-white text-3xl md:text-5xl font-bold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={fadeUp}
      >
        {t.title}
      </motion.h2>

      {/* Dome Gallery */}
      <motion.div
        className="w-full h-[500px] md:h-[600px] mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <DomeGallery
          images={techLogos}
          overlayBlurColor="#000000"
          grayscale={false}
          imageBorderRadius="12px"
          segments={35}
          fit={0.55}
          minRadius={400}
        />
        <p className="text-center text-white/30 text-xs mt-2 tracking-wider">
          {t.drag}
        </p>
      </motion.div>

      {/* Skills list below */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={catIndex}
            variants={fadeUp}
          >
            <h3 className="text-white text-sm font-bold mb-3 border-b border-white/10 pb-2">
              {category.title[language]}
            </h3>
            <div className="flex flex-col gap-1.5">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-white/50 text-xs"
                >
                  {skill}
                </span>
              ))}
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
