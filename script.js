const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
let projectIndex = 0;

const projects = document.querySelectorAll(".projects-carousel .project-card");
const dots = document.querySelectorAll(".dot");

function showProject(index) {
    if (index >= projects.length) {
        projectIndex = 0;
    }

    if (index < 0) {
        projectIndex = projects.length - 1;
    }

    projects.forEach((project) => {
        project.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    projects[projectIndex].classList.add("active");
    dots[projectIndex].classList.add("active");
}

function changeProject(direction) {
    projectIndex = projectIndex + direction;
    showProject(projectIndex);
}

function currentProject(index) {
    projectIndex = index;
    showProject(projectIndex);
}

showProject(projectIndex);

// Curated English translations. The HTML remains the Portuguese source.
(() => {
    const translations = {
    "Gabriel Fanado ": " Portfólio|Gabriel Fanado | Portfolio",
    "Bem-vindo ao meu portfólio": "Welcome to my portfolio",
    "Estudante de Engenharia da Informação": "Information Engineering Student",
    "São Paulo, Brasil": "São Paulo, Brazil",
    "Ver Projetos": "View Projects",
    "Entre em Contato": "Get in Touch",
    "Sobre mim": "About Me",
    "Conheça um pouco mais sobre minha trajetória e interesses": "Learn more about my background and interests",
    "Olá! Me chamo": "Hello! My name is",
    ", tenho 22 anos e sou estudante de Bacharelado em Ciência e Tecnologia (BC&T) e Engenharia da Informação na UFABC.": ", I am 22 years old and studying for a Bachelor’s degree in Science and Technology and a degree in Information Engineering at UFABC.",
    "Atualmente atuo na Comerc Energia como estagiário de Dados e Automação em Trading, desenvolvendo soluções em Python, Power BI, Power Apps e Power Automate para digitalizar processos e apoiar decisões no mercado de energia.": "I currently work at Comerc Energia as a Data and Automation Intern in Trading, developing solutions with Python, Power BI, Power Apps and Power Automate to digitize processes and support decisions in the energy market.",
    "Tenho grande interesse em Machine Learning, engenharia de prompts e no uso de dados para transformar informações complexas em insights estratégicos e soluções voltadas à tomada de decisão. Acredito no aprendizado contínuo como uma das principais ferramentas de crescimento, buscando estar sempre preparado para aprender novas tecnologias, desenvolver habilidades e evoluir profissionalmente.": "I am interested in machine learning, prompt engineering and using data to turn complex information into strategic insights and practical decision-making tools. I see continuous learning as essential to growth and actively seek to learn new technologies, develop skills and advance professionally.",
    "Dados": "Data",
    "Analytics e insights": "Analytics and insights",
    "Automação": "Automation",
    "Eficiência operacional": "Operational efficiency",
    "Negócios": "Business",
    "Valor e estratégia": "Value and strategy",
    "Tecnologia": "Technology",
    "Soluções escaláveis": "Scalable solutions",
    "Projetos": "Projects",
    "Migração para o Mercado Livre de Energia": "Transition to Brazil’s Free Energy Market",
    "Excel • Análise de Dados • Energia • Regulação • Business Case": "Excel • Data Analysis • Energy • Regulation • Business Case",
    "Estudo de caso utilizando dados reais da Universidade Federal do ABC para simular uma possível migração do mercado cativo para o mercado livre de energia.": "Case study using real data from the Federal University of ABC to simulate a potential transition from the regulated to the free energy market.",
    "Ver detalhes": "View details",
    "Reporte e Evolução de Preços": "Price Reporting and Trends",
    "Projeto baseado em dados públicos e/ou mockados para acompanhar a evolução de preços, identificar tendências e transformar dados em informações úteis para tomada de decisão.": "A project using public and/or simulated data to track price movements, identify trends and turn data into useful information for decision-making.",
    "Controle de Atividades e PMO": "Task Tracking and PMO",
    "Power Apps • Gestão de Processos • PMO • UX • Organização Operacional": "Power Apps • Process Management • PMO • UX • Operational Organization",
    "Aplicação para controle de atividades, dúvidas operacionais e acompanhamento de demandas em uma agenda corporativa específica, com foco em organização e eficiência.": "An application for tracking tasks, operational questions and requests within a corporate workflow, focusing on organization and efficiency.",
    "Indicadores e Maiores Ofensores": "Key Metrics and Main Issue Drivers",
    "Excel • SQL • Analytics • Estratégia de Mercado": "Excel • SQL • Analytics • Market Strategy",
    "Projeto que mensura os maiores indicadores junto aos maiores ofensores em excel": "An Excel project tracking key metrics and identifying the main drivers of operational issues.",
    "Museu Vivo — Arte e Biologia": "Museu Vivo — Art and Biology",
    "HTML • CSS • JavaScript • Three.js • Educação interativa": "HTML • CSS • JavaScript • Three.js • Interactive Learning",
    "Jogo educativo em um museu virtual 3D, desenvolvido para uma disciplina de Biologia da UFABC. Explore salas temáticas e descubra como a representação do corpo humano se transforma ao longo da história da arte, em uma experiência que conecta arte, ciência e aprendizagem. Disponível para computador e celular.": "An educational game set in a virtual 3D museum, developed for a Biology course at UFABC. Explore themed rooms and discover how representations of the human body have changed throughout art history, in an experience connecting art, science and learning. Available on desktop and mobile.",
    "Jogar ↗": "Play ↗",
    "Currículo & Experiência": "Resume & Experience",
    "Formação acadêmica, experiências profissionais e tecnologias": "Education, professional experience and technologies",
    "Estagiário de Dados e Automação em Trading": "Data and Automation Intern — Trading",
    "2026 — Atual": "2026 — Present",
    "Resumo da experiência": "Experience overview",
    "Atuação no time de trading e comercial, desenvolvendo soluções de dados e automação para apoiar a gestão de portfólios e digitalizar processos do mercado de energia.": "Working with the trading and commercial team, developing data and automation solutions to support portfolio management and digitize energy market processes.",
    "Principais projetos e entregas": "Key projects and contributions",
    "Curto prazo": "Short-term trading",
    "Automação do processo comercial de curto prazo com IA e Power Automate.": "Automation of the short-term commercial process using AI and Power Automate.",
    "MTM de portfólios": "Portfolio mark-to-market",
    "Criação de bases, rotinas em Python e dashboards em Power BI para acompanhamento diário do MTM de atacado e varejo.": "Creation of datasets, Python routines and Power BI dashboards for daily mark-to-market monitoring of wholesale and retail portfolios.",
    "Controle de garantias": "Guarantee tracking",
    "Estruturação da base, rotina de atualização e visualização para acompanhamento de garantias.": "Development of the dataset, update routine and reporting views for tracking guarantees.",
    "Digitalização do I-REC": "I-REC process digitization",
    "Reengenharia do processo, aplicativo em Power Apps para propostas e boletagem, automação do book com Python e Power Automate e integração com planilhas da Evident.": "Process redesign, a Power Apps application for proposals and trade booking, book automation with Python and Power Automate, and integration with Evident spreadsheets.",
    "Calculadora de MTM": "Mark-to-market calculator",
    "Desenvolvimento de uma calculadora web em HTML, CSS e JavaScript para análise de dados contratuais de potenciais clientes.": "Development of a web calculator using HTML, CSS and JavaScript to analyze prospective clients’ contract data.",
    "Habilidades desenvolvidas": "Skills developed",
    "Mapeamento de processos": "Process mapping",
    "Modelagem de dados": "Data modeling",
    "Validação de resultados": "Results validation",
    "Gestão de portfólios de energia": "Energy portfolio management",
    "Manutenção e governança": "Maintenance and governance",
    "Tecnologias utilizadas": "Technologies used",
    "IA generativa": "Generative AI",
    "Estagiário em Projetos e Operações de Chargeback": "Chargeback Projects and Operations Intern",
    "Atuação em projetos e operações de chargeback, utilizando dados e tecnologia para acompanhar indicadores, organizar demandas e melhorar processos operacionais.": "Working on chargeback projects and operations, using data and technology to monitor metrics, organize requests and improve operational processes.",
    "Dados e indicadores": "Data and metrics",
    "Consultas e tratamento de dados com SQL, Python e AWS Athena, S3 e Glue para análises e reportes operacionais.": "Data querying and processing with SQL, Python and AWS Athena, S3 and Glue for operational analysis and reporting.",
    "Gestão de demandas": "Request management",
    "Desenvolvimento de aplicações em Power Apps para apoiar a organização e o acompanhamento de atividades.": "Development of Power Apps applications to help organize and track activities.",
    "Reports operacionais": "Operational reporting",
    "Criação de dashboards em Excel e acompanhamento de indicadores ligados a chargeback, fraude, desacordo comercial e demandas relacionadas ao Bacen.": "Creation of Excel dashboards and monitoring of metrics related to chargebacks, fraud, transaction disputes and requests involving Brazil’s Central Bank.",
    "Melhoria de processos": "Process improvement",
    "Participação em iniciativas de digitalização, automação e uso de IA generativa nas operações.": "Participation in digitization, automation and generative AI initiatives within operations.",
    "Análise de dados operacionais": "Operational data analysis",
    "Comunicação de resultados": "Communicating results",
    "Acompanhamento de indicadores": "Metrics monitoring",
    "Melhoria contínua": "Continuous improvement",
    "Organização de demandas": "Request organization",
    "Estagiário — Comercial, Novos Negócios e Portfólio": "Commercial, New Business and Portfolio Intern",
    "Apoio às atividades comerciais e a estudos do mercado de energia, conectando análise de dados, propostas comerciais e desenvolvimento de novos negócios.": "Supporting commercial activities and energy market studies, connecting data analysis, commercial proposals and new business development.",
    "Propostas comerciais": "Commercial proposals",
    "Apoio ao envio de propostas de curto e longo prazo e de energia varejista, além de suporte às rotinas comerciais e de gestão.": "Support for short-term, long-term and retail energy proposals, alongside commercial and management activities.",
    "Mercado cativo e livre": "Regulated and free energy markets",
    "Estudos de clientes no mercado cativo para avaliação de oportunidades de migração ao mercado livre de energia.": "Analysis of clients in the regulated market to assess opportunities to transition to the free energy market.",
    "Geração Distribuída": "Distributed generation",
    "Prospecção de parceiros estratégicos e apoio à estruturação de bases, processos e produto de GD.": "Prospecting strategic partners and helping structure datasets, processes and the distributed generation offering.",
    "Portfólio e reports": "Portfolio and reporting",
    "Apoio às bases de MTM de atacado e varejo e à elaboração de reportes de fechamento, preços e contratos.": "Support for wholesale and retail mark-to-market datasets and the preparation of closing, pricing and contract reports.",
    "Novos negócios": "New business",
    "Análise e organização de informações para eletromobilidade e apoio às áreas de Comercial, Back Office e Novos Negócios.": "Analysis and organization of information for electric mobility and support for Commercial, Back Office and New Business teams.",
    "Mercado livre de energia": "Free energy market",
    "Análise comercial": "Commercial analysis",
    "Prospecção de parceiros": "Partner prospecting",
    "Estudos de viabilidade": "Feasibility studies",
    "Inteligência de mercado": "Market intelligence",
    "Análise de dados": "Data analysis",
    "Reports comerciais": "Commercial reporting",
    "Conheça minha trajetória profissional": "Explore my professional background",
    "Ver currículo completo": "View full resume",
    "Baixar CV": "Download resume",
    "Foto de Gabriel Fanado": "Photo of Gabriel Fanado",
    "Projeto Mercado Livre de Energia": "Free Energy Market project",
    "Projeto Reporte e Evolução de Preços": "Price Reporting and Trends project",
    "Projeto Controle de Atividades e PMO": "Task Tracking and PMO project",
    "Projeto Indicadores e Maiores Ofensores": "Key Metrics and Main Issue Drivers project",
    "Sala do Museu Vivo com obras de arte e cenários tridimensionais": "Museu Vivo gallery with artwork and three-dimensional exhibits",
    "Dados | Informação | Automação | Projetos": "Data | Information | Automation | Projects",
    "Gabriel Fanado | Portfólio": "Gabriel Fanado | Portfolio"
};
    const normalize = (text) => text.replace(/\s+/g, " ").trim();
    const params = new URLSearchParams(window.location.search);
    let saved;
    try { saved = localStorage.getItem("portfolio-language"); } catch (_) {}
    const requested = params.get("lang");
    const language = requested === "en" || requested === "pt-BR"
        ? requested : saved === "en" ? "en" : "pt-BR";
    document.documentElement.lang = language;
    if (language === "en") {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach((node) => {
            if (node.parentElement.closest("script, style, .language-switch")) return;
            const translated = translations[normalize(node.nodeValue)];
            if (translated) node.nodeValue = node.nodeValue.replace(/\S[\s\S]*\S|\S/, translated);
        });
        document.title = translations[document.title] || document.title;
        document.querySelectorAll("img[alt]").forEach((img) => {
            img.alt = translations[normalize(img.alt)] || img.alt;
        });
    }
    document.querySelectorAll("[data-language]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === language));
        button.addEventListener("click", () => {
            const next = button.dataset.language;
            if (next === language) return;
            try { localStorage.setItem("portfolio-language", next); } catch (_) {}
            const url = new URL(window.location.href);
            url.searchParams.set("lang", next);
            window.location.assign(url.href);
        });
    });
})();
