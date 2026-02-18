const translations = {
  es: {
    rights: "Todos los derechos reservados.",
    builtWith: "Hecho con React + Vite",
  },
  en: {
    rights: "All rights reserved.",
    builtWith: "Built with React + Vite",
  }
};

export default function Footer({ language }) {
  const t = translations[language];

  return (
    <footer className="w-full bg-black border-t border-white/10 px-8 md:px-16 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          &copy; {new Date().getFullYear()} Jorge Tinoco. {t.rights}
        </p>
        <p className="text-white/20 text-xs">
          {t.builtWith}
        </p>
      </div>
    </footer>
  );
}
