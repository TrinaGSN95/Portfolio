window.AppLang = {
  current: localStorage.getItem("lang") || "en",
  sectionNames: {
    home:       { en: "Home",          es: "Inicio" },
    meetme:     { en: "Meet Me",       es: "Conóceme" },
    proyects:   { en: "Projects",      es: "Proyectos" },
    proyectos:  { en: "Other Projects",es: "Otros Proyectos" },
    contact:    { en: "Contact",       es: "Contacto" }
  },
  setLang(lang) {
    this.current = lang;
    localStorage.setItem("lang", lang);
    window.dispatchEvent(new CustomEvent("AppLangChanged", { detail: lang }));
  }
};