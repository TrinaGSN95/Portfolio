document.addEventListener('DOMContentLoaded', () => {
    // Translation object
    const translations = {
        en: {
            'english': 'English',
            'spanish': 'Spanish',
            'home': 'Home',
            'meetMe': 'Meet me',
            'projects': 'Projects',
            'moreProjects': 'More Projects',
            'contact': 'Contact',
            'whoIsTrina': 'Who is Trina Susaña?',
            'introText': ' I am a UI/UX Designer and Front-End Dev with a foundation in design and development tools such as Figma, WordPress, Webflow, HTML, CSS, and React. My journey has taken me through diverse roles, ranging from freelance projects to positions within companies, including serving as a PM. My experience has honed both my technical expertise and leadership abilities. Born on February 21, 1995, in Santo Domingo, Dominican Republic, I pursued higher education at UNAPEC, a university renowned for fostering talent. My bilingual fluency has been an asset in connecting with a variety of clients and collaborators.',
            'bioText': 'I was born on February 21, 1995, in Santo Domingo, Dominican Republic, and studied at UNAPEC, a university known for fostering talent...',
            'softSkills': 'Soft Skills:',
            'hardSkills': 'Technical Skills:',
            'seeMyWork': 'See my work',
            'someOfMyWork': 'Some of my work',
            'projectsList': ['Codemera', 'Energy Efficiency Mexico', 'Skyboss.io', 'Mallen Pets', 'Medina Clinic', 'Cacao Mae'],
            'contactEmail': 'email: trinagsn@gmail.com',
            'contactPhone': 'Phone: +1 829-480-3740',
            'letsTalk': 'Let’s talk',
            'contactText': 'You can message me via email or WhatsApp anytime — I usually respond between 7:00 AM and 6:00 PM.',
            'codemeraText': 'I worked at this company, where I created a fully functional website.',
            'somWo':  'Some of my Work',
            "visitSite": "Visit Site",
            "eficienciaText": "Small business in Mexico contacted me to create a full website.",
            "skybossText": "Tech group in the Czech Republic requested a website to capture clients.",
            "mallenText": "Project created to help find the perfect food for pets and pet-friendly places in DR.",
            "clinicaText": "Website for a dental clinic in Spain, showcasing their clinic, work and collaborators.",
            "cacaoText": "Business that sells cacao, e-commerce website that showcases the product and has a store.",
            "problemSolving": "Problem-solving",
  "effectiveCommunication": "Effective Communication",
  "adaptability": "Adaptability",
  "leadership": "Leader",
  "creativeThinking": "Creative Thinking",
  "design": "Design",
  "coding": "Coding",
  "projectManagement": "Project Management",
  "ux": "UX",
  "learnTo": "Maintaining your WordPress site, Learn2Engage, is crucial to ensuring its functionality, security, and user experience. Regular updates to themes, plugins, and the core WordPress platform can prevent vulnerabilities and enhance performance. Backing up the site frequently safeguards your data against unexpected issues. Monitoring site traffic and performance metrics allows for timely optimizations and improvements.",
  "IglDom": "For Iglesia Doméstica, I designed and developed the entire website, all sections were thoughtfully organized to meet their needs. Is not only visually appealing but also functional, including a feature that allows users to make donations seamlessly.",
  "impulsaCapital": "I played a key role in the development of various functionalities for the site, enhancing its overall structure and user experience. Through careful implementation and optimization,  pdated and improved to ensure the platform operates efficiently. Additionally, I worked on refining key aspects of the site to prepare it for a seamless transition into production, guaranteeing stability and performance for its users.",
  "email": "email",
  "phone": "Phone",
  "conTit": "Let's Talk",
  "description": "You can text me over email or Whatsapp at anytime, usually respond between",
  "descriptionTwo": "7:00 AM and 6:00 PM",
  "button": "Contact me!",
  "send": "Send",
  "thanks": "Thanks! Your message has been sent.",
  "copyRight": "© 2025 Trina | Built with my own hands",
  "last": "Contact me",
            // Add more translations here as needed...
        },
        es: {
            "visitSite": "Visita el Sitio",
            'english': 'Inglés',
            'spanish': 'Español',
            'home': 'Inicio',
            'meetMe': 'Conóceme',
            'projects': 'Proyectos',
            'moreProjects': 'Más Proyectos',
            'contact': 'Contacto',
            'whoIs': '¿Quién es Trina Susaña?',
            'intro': 'Soy Diseñadora UI/UX y Desarrolladora Front-End con una base sólida en herramientas de diseño y desarrollo como Figma, WordPress, Webflow, HTML, CSS y React. Mi trayectoria me ha llevado a desempeñar roles diversos, desde proyectos freelance hasta posiciones dentro de empresas, incluyendo funciones como Project Manager. Esta experiencia ha fortalecido tanto mis habilidades técnicas como mi capacidad de liderazgo.Nací el 21 de febrero de 1995 en Santo Domingo, República Dominicana, y cursé estudios superiores en la UNAPEC, una universidad reconocida por fomentar el talento. Mi fluidez bilingüe ha sido una ventaja para conectar con una variedad de clientes y colaboradores',
            'bioText': 'Nací el 21 de febrero de 1995 en Santo Domingo, República Dominicana, y estudié en la UNAPEC, una universidad reconocida por fomentar el talento...',
            'softSkills': 'Habilidades Blandas:',
            'hardSkills': 'Habilidades Técnicas:',
            'seeMyWork': 'Ver mi trabajo',
            'someOfMyWork': 'Algunos de mis trabajos',
            'projectsList': ['Codemera', 'Eficiencia Energética México', 'Skyboss.io', 'Mallen Mascotas', 'Clínica Medina', 'Cacao Mae'],
            'contactEmail': 'correo: trinagsn@gmail.com',
            'contactPhone': 'Teléfono: +1 829-480-3740',
            'letsTalk': 'Hablemos',
            'contactText': 'Puedes enviarme un mensaje por correo electrónico o WhatsApp en cualquier momento, generalmente respondo entre las 7:00 AM y las 6:00 PM',
            'codemeraText': 'Trabajé en esta empresa, donde les creé un sitio web completamente funcional.',
            'somWo':  'Mi Trabajo',
            "eficienciaText": "Pequeña empresa en México me contactó para crear un sitio web completo.",
            "skybossText": "Grupo tecnológico en la República Checa solicitó un sitio web para captar clientes.",
            "mallenText": "Proyecto creado para ayudar a encontrar la comida ideal para mascotas y lugares pet-friendly en RD.",
            "clinicaText": "Sitio web para una clínica dental en España, mostrando su clínica, trabajo y colaboradores.",
            "cacaoText": "Negocio que vende cacao, sitio e-commerce que muestra el producto y cuenta con tienda en línea.",
            "problemSolving": "Resolución de problemas",
  "effectiveCommunication": "Comunicación efectiva",
  "adaptability": "Adaptabilidad",
  "leadership": "Liderazgo",
  "creativeThinking": "Pensamiento creativo",
  "design": "Diseño",
  "coding": "Programación",
  "projectManagement": "Gestión de proyectos",
  "ux": "UX",
  "learnTo": "Mantenimiento para Learn2Engage, crucial para garantizar su funcionalidad, seguridad y UX. Las actualizaciones regulares de temas, plugins y la plataforma principal de WordPress pueden prevenir vulnerabilidades y mejora de rendimiento. Copias de seguridad con frecuencia protegiendo datos ante imprevistos. Monitorear el tráfico del sitio y métricas.",
  "IglDom": "Para Iglesia Doméstica, diseñé y desarrollé todo el sitio web, todas las secciones estan organizadas cuidadosamente para satisfacer sus necesidades. No solo es visualmente atractiva, sino también funcional, incluyendo una función que permite a los usuarios hacer donaciones sin complicaciones.",
  "impulsaCapital": "Desempeñé un papel clave en el desarrollo para el sitio web , mejorando su estructura general y UX. Mediante implementación y optimización cuidadosa, Actualize para asegurar que la plataforma funcione de manera eficiente. Trabajé en aspectos clave para prepararlo para una transición fluida a producción, garantizando estabilidad y rendimiento para sus usuarios.",
  "email": "correo",
  "phone": "Teléfono",
  "conTit": "Hablemos",
  "description": "Puedes escribirme por correo o WhatsApp en cualquier momento, usualmente respondo entre",
  "descriptionTwo": "7:00 AM y 6:00 PM",
  "button": "¡Contáctame!",
  "send": "Enviar",
  "thanks": "¡Gracias! Tu mensaje ha sido enviado.",
  "copyRight": "© 2025 Trina | Hecho con mis propias manos",
  "last": "Contáctame",
            // Add more translations here as needed...
        }
    };

    // Function to switch language
    function switchLanguage(lang) {
        // Change the lang attribute on <html> tag
        document.documentElement.lang = lang;

        // Loop through each element and translate based on its 'data-i18n' key
        const elements = document.querySelectorAll('[data-i18n]');  // Ensure the elements are selected
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // If the translation includes HTML (e.g., a link), use innerHTML
                if (key.startsWith('visitSite')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    // Otherwise, just update the textContent
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Use AppLang.sectionNames to get the current section name properly
        if (window.currentAnchor && AppLang.sectionNames[window.currentAnchor]) {
            const secSpan = document.getElementById('currentSectionName');
            const sectionName = AppLang.sectionNames[window.currentAnchor][lang];
            if (sectionName && secSpan) {
              secSpan.textContent = sectionName;
            }
          }

        // Toggle active class on language switcher
        document.querySelectorAll('.lang').forEach(langElement => {
            langElement.classList.remove('active');
        });
        document.querySelector(`.lang[data-lang="${lang}"]`).classList.add('active');
    }


    // Event listener for language spans
    document.querySelectorAll('.lang').forEach(span => {
        span.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    });

    // Default language (optional)
    switchLanguage('en');  // You can change this to 'es' to default to Spanish
});
