// --- CONFIGURACIÓN DE RUTAS ---
const RUTA_IMG_LANG = "assets/img/lang/";
const RUTA_IMG_PROG = "assets/img/program_lang/";

// --- DATOS ---
const IDIOMAS = [
    { nombre: "Catalán", nivel: "Nativo", flag: "cat.svg" },
    { nombre: "Castellano", nivel: "Nativo", flag: "es.svg" },
    { nombre: "Inglés", nivel: "B2", flag: "uk.svg" }
];

const SKILLS = {
    frontend: [
        { nombre: "JavaScript", img: "javascript.svg" },
        { nombre: "Vue.js", img: "vue.svg" },
        { nombre: "Angular", img: "angular.svg" },
        { nombre: "Tailwind", img: "tailwind.svg" },
        { nombre: "Flutter", img: "flutter.svg" },
        { nombre: "HTML", img: "html.svg" },
        { nombre: "CSS", img: "css.svg" }
    ],
    backend: [
        { nombre: "Go", img: "go.svg" },
        { nombre: "PHP", img: "php.svg" },
        { nombre: "MySQL", img: "mysql.svg" },
        { nombre: "Java", img: "java.svg" },
        { nombre: "Sage X3", img: "sage.svg" },
        { nombre: "Git", img: "git.svg" }
    ]
};

const PROYECTOS = [
    {
        titulo: "Pokedex",
        desc: "Pokedex usando la PokeAPI",
        tags: ["Angular", "Tailwind"],
        codeUrl: "https://github.com/Renegados2/Pokedex",
        webUrl: "https://pokedex.joanvila.dev"
    },
    {
        titulo: "SpotyDAW",
        desc: "Spotify usando localstorage",
        tags: ["Angular", "Tailwind"],
        codeUrl: "https://github.com/Renegados2/SpotyDAW"
    },
    {
        titulo: "Chose your Life",
        desc: "Proyecto creado para la HackEPS 2025",
        tags: ["Angular", "Tailwind", "Express"],
        codeUrl: "https://github.com/Renegados2/Chose-your-life-CyL"
    },
    {
        titulo: "Wumpus Project",
        desc: "Juego wunpus creado en ciclo de DAW",
        tags: ["Java"],
        codeUrl: "https://github.com/Renegados2/A3P3WumpusProject"
    },
    {
        titulo: "Castle Defense Project",
        desc: "Juego Defensa de castillo creado en ciclo de DAW",
        tags: ["Java"],
        codeUrl: "https://github.com/Renegados2/A2P2CastleDefenseProject"
    },
    {
        titulo: "Hangmans Game Project",
        desc: "Juego del colgado creado en ciclo de DAW",
        tags: ["Java"],
        codeUrl: "https://github.com/Renegados2/A1P1HangmansGameProject"
    }
];

// --- FUNCIONES DE RENDERIZADO ---
function renderPortfolio() {
    // 1. Idiomas
    const langContainer = document.getElementById('languages-container');
    if (langContainer) {
        IDIOMAS.forEach(i => {
            langContainer.innerHTML += `
                <div class="lang-item">
                    <img src="${RUTA_IMG_LANG}${i.flag}" alt="${i.nombre}">
                    <div><strong>${i.nombre}</strong><p>${i.nivel}</p></div>
                </div>`;
        });
    }

    // 2. Skills
    const frontContainer = document.getElementById('skills-front');
    const backContainer = document.getElementById('skills-back');

    if (frontContainer && backContainer) {
        SKILLS.frontend.forEach(s => {
            frontContainer.innerHTML += `
                <div class="skill-card">
                    <img src="${RUTA_IMG_PROG}${s.img}" alt="${s.nombre}">
                    <span>${s.nombre}</span>
                </div>`;
        });
        SKILLS.backend.forEach(s => {
            backContainer.innerHTML += `
                <div class="skill-card">
                    <img src="${RUTA_IMG_PROG}${s.img}" alt="${s.nombre}">
                    <span>${s.nombre}</span>
                </div>`;
        });
    }

    // 3. Proyectos con lógica condicional para webUrl
    const projContainer = document.getElementById('projects-grid');
    if (projContainer) {
        PROYECTOS.forEach(p => {
            projContainer.innerHTML += `
                <div class="project-card">
                    <h3>${p.titulo}</h3>
                    <p>${p.desc}</p>
                    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
                    <div class="project-links">
                        <a href="${p.codeUrl}" target="_blank">Ver código →</a>
                        ${p.webUrl ? `<a href="${p.webUrl}" target="_blank">Ver web →</a>` : ''}
                    </div>
                </div>`;
        });
    }
}

document.addEventListener('DOMContentLoaded', renderPortfolio);