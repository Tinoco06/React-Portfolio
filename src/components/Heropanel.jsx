import { motion } from 'motion/react';
import perfilPhoto from '../assets/perfil.jpg';
import DarkVeil from './effects/DarkVeil.jsx';
import DecryptedText from './effects/DecryptedText';

const translations = {
  es: {
    name1: "JORGE",
    name2: "TINOCO",
    title1: "INGENIERO EN",
    title2: "CIENCIAS DE LA",
    title3: "COMPUTACIÓN",
    welcome: "¡Bienvenido a mi portafolio!",
    viewMore: "Ver más ↓"
  },
  en: {
    name1: "JORGE",
    name2: "TINOCO",
    title1: "COMPUTER",
    title2: "SCIENCE",
    title3: "ENGINEER",
    welcome: "Welcome to my portfolio!",
    viewMore: "View more ↓"
  }
};

export default function Heropanel({ language }) {
  const t = translations[language];

  const handleViewMore = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      {/* Background - ocupa toda la pantalla */}
      <div className="absolute inset-0">
        <DarkVeil
          hueShift={15}
          noiseIntensity={0.05}
        />
      </div>

      {/* NOMBRE - arriba izquierda */}
      <div className="absolute top-20 left-6 sm:left-8 md:left-16 z-10">
        <h1 className="text-white font-bold">
          <div className="text-3xl sm:text-4xl md:text-6xl tracking-wider">
            <DecryptedText
              key={`name1-${language}`}
              text={t.name1}
              speed={100}
              maxIterations={10}
              sequential={true}
              animateOn="view"
              revealDirection="start"
            />
          </div>
          <div className="text-3xl sm:text-4xl md:text-6xl tracking-wider">
            <DecryptedText
              key={`name2-${language}`}
              text={t.name2}
              speed={100}
              maxIterations={10}
              sequential={true}
              animateOn="view"
              revealDirection="start"
            />
          </div>
        </h1>
      </div>

      {/* IMAGEN - centrada */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={perfilPhoto}
            alt="Jorge Tinoco"
            className="w-[160px] h-[210px] sm:w-[200px] sm:h-[260px] md:w-[280px] md:h-[370px] object-cover object-center rounded-md shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* PROFESIÓN - abajo derecha en desktop, abajo centro en móvil */}
      <div className="absolute bottom-28 sm:bottom-16 md:bottom-10 right-6 sm:right-8 md:right-16 text-right z-10">
        <h2 className="text-white font-bold">
          <div className="text-lg sm:text-2xl md:text-4xl tracking-wide">
            <DecryptedText
              key={`title1-${language}`}
              text={t.title1}
              speed={100}
              maxIterations={10}
              sequential={true}
              animateOn="view"
              revealDirection="start"
            />
          </div>
          <div className="text-lg sm:text-2xl md:text-4xl tracking-wide">
            <DecryptedText
              key={`title2-${language}`}
              text={t.title2}
              speed={100}
              maxIterations={10}
              sequential={true}
              animateOn="view"
              revealDirection="start"
            />
          </div>
          <div className="text-lg sm:text-2xl md:text-4xl tracking-wide">
            <DecryptedText
              key={`title3-${language}`}
              text={t.title3}
              speed={100}
              maxIterations={10}
              sequential={true}
              animateOn="view"
              revealDirection="start"
            />
          </div>
        </h2>
      </div>

      {/* Welcome + View More - abajo izquierda */}
      <div className="absolute bottom-6 sm:bottom-16 md:bottom-10 left-6 sm:left-8 md:left-16 z-10">
        <p className="text-white/60 text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
          {t.welcome}
        </p>
        <button
          onClick={handleViewMore}
          className="text-white text-xs sm:text-sm border border-white/40 px-4 sm:px-5 py-1.5 sm:py-2 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
        >
          {t.viewMore}
        </button>
      </div>

    </div>
  );
}
