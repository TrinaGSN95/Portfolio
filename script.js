document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById("menuToggle");
  const icon = toggleButton.querySelector(".iconmen");
  const menu = document.getElementById("menu");
  const currentSectionName = document.getElementById("currentSectionName");
  const squareLogo = document.getElementById("squareLogo");

  // Toggle de menú hamburguesa
  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible");
    icon.textContent = menu.classList.contains("visible") ? "✖" : "☰";
  });

  // Tema oscuro
  const themeSwitcher = document.getElementById("themeSwitcher");
  themeSwitcher.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });

  const sectionNames = {
    'home': { en: 'Home', es: 'Inicio' },
    'meetme': { en: 'Meet Me', es: 'Conóceme' },
    'proyects': { en: 'Projects', es: 'Proyectos' },
    'proyectos': { en: 'Other Projects', es: 'Otros Proyectos' },
    'contact': { en: 'Contact', es: 'Contacto' }
  };
 // ① Read current language (must match your lang.js storage key)
 let currentLang = localStorage.getItem("lang") || "en";
 // ② We'll store the last anchor here for the lang switcher to read
 window.currentAnchor = "home";

  let isMobile = window.innerWidth <= 1190;
  let fullpageInstance = null;

  function setupLayout() {
    isMobile = window.innerWidth <= 1190;

    if (fullpageInstance) {
      fullpageInstance.destroy('all');
      fullpageInstance = null;
      document.body.style.overflow = 'auto';
    }

    if (!isMobile) {
      fullpageInstance = new fullpage('#fullpage', {
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        scrollOverflow: false,
        navigation: true,
        navigationPosition: 'left',
        anchors: ['home', 'meetme', 'proyects', 'proyectos', 'contact'],
        menu: '#menu',

        afterLoad: function(origin, destination) {
          // ③ remember which section we're on
          window.currentAnchor = destination.anchor;

          if (destination.anchor !== 'home') {
            // Make sure AppLang and current language are available
            const lang = window.AppLang?.current || 'en';
            const names = window.AppLang?.sectionNames?.[destination.anchor];
          
            if (names && names[lang]) {
              currentSectionName.textContent = names[lang];
            } else {
              currentSectionName.textContent = '';
            }
          
            squareLogo.classList.add('show-logo');
          } else {
            currentSectionName.textContent = '';
            squareLogo.classList.remove('show-logo');
          }
        }
      });
    }
  }
  setupLayout();

  window.addEventListener('resize', () => {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      setupLayout();
    }, 300);
  });
});
