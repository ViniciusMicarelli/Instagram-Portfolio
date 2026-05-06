export type Language = "pt" | "en";

export interface StorySlide {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export interface Post {
  caption: string;
  likes: number;
  comments: number;
  image: string;
  date: string;
}

export interface TranslationData {
  username: string;
  fullName: string;
  bio: string;
  posts: string;
  followers: string;
  following: string;
  stories: {
    projects: string;
    technologies: string;
    experiences: string;
    aboutMe: string;
  };
  storyContents: {
    projects: StorySlide[];
    technologies: StorySlide[];
    experiences: StorySlide[];
    aboutMe: StorySlide[];
  };
  postData: Post[];
}

const icons = {
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  streamlit: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  rabbitmq: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  linkedin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
};

import postIlac from "@/assets/post-ilac.png"
import postMl from "@/assets/post-ml.jpg";
import postGraduation from "@/assets/post-graduation.jpg";
import postBioma from "@/assets/bioma-genetics.png";
import logoBioma from "@/assets/bioma-genetics.png";
import logoQualiconsig from "@/assets/qualiconsig.png";

export const translations: Record<Language, TranslationData> = {
  pt: {
    username: "vinicius.micarelli",
    fullName: "Vinícius Ribeiro Micarelli",
    bio: "💻 Analista de Sistemas Jr - Bioma Genetics\n🎓 Eng. de Computação — FIAP\n📚 Pós em ML Engineering — FIAP\n🌎 Fluente em Português & Inglês",
    posts: "publicações",
    followers: "seguidores",
    following: "seguindo",
    stories: {
      projects: "Projetos",
      technologies: "Tecnologias",
      experiences: "Experiências",
      aboutMe: "Sobre Mim",
    },
    storyContents: {
      projects: [
        {
          title: "🔀 Github Clone",
          description: "Clone funcional do GitHub construído com Vite + FastAPI. Inclui autenticação, criação e visualização de repositórios, navegação de arquivos, branches, pull requests e muito mais.",
          image: icons.github,
          link: "https://github.com/ViniciusMicarelli/ProcessVersioning.git",
        },
        {
          title: "⚡ LiftOS",
          description: "API REST completa desenvolvida com FastAPI. Sistema é um clone do app GymRats, tendo o intuito de criar uma competição saudável entre amigos através da saúde.",
          image: icons.fastapi,
          link: "https://github.com/ViniciusMicarelli/LiftOS.git",
        },
        {
          title: "🌐 Câmbio + — React App",
          description: "Aplicação frontend em React para consulta e conversão de câmbio de moedas em tempo real. Interface limpa e responsiva com integração a APIs externas.",
          image: icons.react,
          link: "https://github.com/ViniciusMicarelli/Cambio-",
        },
        {
          title: "📊 Agenda — Streamlit",
          description: "Aplicação interativa de agenda construída com Streamlit. Interface intuitiva para gerenciamento de contatos e eventos com visualização de dados.",
          image: icons.streamlit,
          link: "https://github.com/ViniciusMicarelli/Agenda",
        },
      ],
      technologies: [
        {
          title: "🐍 Python & Frameworks",
          description: "FastAPI, Django Streamlit, Agno e LangChain compõem meu stack principal. Desenvolvimento de APIs escaláveis, aplicações web robustas e dashboards interativos de dados.",
          image: icons.python,
        },
        {
          title: "⚛️ Frontend com React",
          description: "Construção de interfaces modernas e reativas. Experiência com componentização, hooks, gerenciamento de estado e integração com APIs REST.",
          image: icons.react,
        },
        {
          title: "🗄️ Bancos de Dados & Middleware",
          description: "Sólida experiência com PostgreSQL e MongoDB, além de implementação de cache-aside com Redis e mensageria distribuída com RabbitMQ.",
          image: icons.postgresql,
        },
        {
          title: "🔧 DevOps & Ferramentas",
          description: "Git para versionamento, Docker para containerização, CI/CD para deploys automatizados. Automação de processos e boas práticas de desenvolvimento.",
          image: icons.git,
        },
      ],
      experiences: [
        {
          title: "🧬 Analista de Sistemas Jr",
          description: "Bioma Genetics | Abr/2026 – Atualmente\n\nFoco no desenvolvimento de sistemas genéticos escaláveis utilizando FastAPI e Agno. Responsável por arquitetura de microsserviços integrando Redis para cache, RabbitMQ para mensageria, além de MongoDB e PostgreSQL para persistência de dados. Atuo na conteinerização com Docker para garantir escalabilidade e eficiência na prática clínica.",
          image: logoBioma,
          link: "https://biomagenetics.com.br/",
        },
        {
          title: "🐍 Desenvolvedor Python Jr",
          description: "Qualiconsig | Jan/2026 – Abr/2026\n\nDesenvolvimento de backend com FastAPI/Django e frontend em React. Projetos principais:\n• Sistema Financeiro: Processamento de créditos/débitos com consolidação automática conforme DRE.\n• Compras Corporativas: Fluxo de aprovação hierárquico para governança.\n• R&S: Sistema de vagas com Kanban e controle de acesso.\n• Automação: Central de robôs unificada com logs detalhados.",
          image: logoQualiconsig,
          link: "https://qualiconsig.com.br/",
        },
        {
          title: "👨‍💻 Estagiário de Desenvolvimento",
          description: "Qualiconsig | Mar/2025 – Dez/2025\n\nCriação de aplicações web e APIs com FastAPI e Django, além de interfaces com React. Atuação com MongoDB e PostgreSQL. Iniciei no Suporte Técnico (Qualisystem/Anydesk), garantindo a continuidade das operações antes de transicionar para o time de desenvolvimento focado em automação e rotinas internas.",
          image: logoQualiconsig,
        },
      ],
      aboutMe: [
        {
          title: "👨‍💻 Quem sou eu?",
          description: "Engenheiro de Computação formado pela FIAP, apaixonado por tecnologia e desenvolvimento de software. Atuo como analista de sistemas Jr na Bioma Genetics, criando soluções backend escaláveis.",
          link: "https://github.com/ViniciusMicarelli",
          image: icons.github,
        },
        {
          title: "🇨🇦 Intercâmbio no Canadá",
          description: "4 meses de inglês intensivo no ILAC Toronto (Nov/2023 – Fev/2024). Certificado High Advanced. Uma experiência que ampliou minha visão profissional e cultural.",
          link: "https://www.ilac.com",
        },
        {
          title: "🎓 Pós-graduação em ML",
          description: "Pós-graduando em Machine Learning Engineering pela FIAP, com início em Março/2026. Explorando IA, aprendizado de máquina, LLMs e aplicações inteligentes.",
          link: "https://www.fiap.com.br",
        },
        {
          title: "🎯 Objetivo",
          description: "Evoluir como desenvolvedor full-stack com foco em Python, contribuir em projetos open-source e aplicar Machine Learning em soluções reais. Sempre aprendendo, sempre construindo.",
        },
      ],
    },
    postData: [
      {
        caption: "🧬 Muito feliz em compartilhar que agora faço parte do time da Bioma Genetics como Analista de Sistemas Jr! Ansioso para contribuir com soluções tecnológicas que transformam a prática clínica através da genética e do microbioma. 🚀\n\n#BiomaGenetics #SystemsAnalyst #Genetics #Microbiome #HealthTech #NewJob",
        likes: 245,
        comments: 42,
        image: postBioma,
        date: "06 de abril de 2026",
      },
      {
        caption: "🤖 Próximo passo desbloqueado: Pós-graduação em Machine Learning Engineering pela FIAP! Pronto para mergulhar no universo de IA, redes neurais e LLMs.\n\n#MachineLearning #AI #FIAP #PostGrad #DeepLearning #MLEngineering",
        likes: 198,
        comments: 31,
        image: postMl,
        date: "10 de março de 2026",
      },
      {
        caption: "🎓 Formado em Engenharia de Computação pela FIAP! 5 anos de dedicação, projetos desafiadores e muito crescimento profissional. Gratidão por cada aprendizado!\n\n#FIAP #Graduation #ComputerEngineering #Engineering #Formatura",
        likes: 356,
        comments: 67,
        image: postGraduation,
        date: "20 de janeiro de 2026",
      },
      {
        caption: "🚀 Certificado High Advanced de inglês pelo ILAC Toronto! 4 meses de imersão total no Canadá que transformaram minha carreira e visão de mundo.\n\n#English #ILAC #Toronto #Canada #StudyAbroad #HighAdvanced",
        likes: 142,
        comments: 23,
        image: postIlac,
        date: "15 de fevereiro de 2024",
      },
    ],
  },
  en: {
    username: "vinicius.micarelli",
    fullName: "Vinícius Ribeiro Micarelli",
    bio: "💻 Systems Analyst Jr · Bioma Genetics\n🎓 Computer Engineering — FIAP\n📚 ML Engineering Postgrad — FIAP\n🌎 Fluent in Portuguese & English",
    posts: "posts",
    followers: "followers",
    following: "following",
    stories: {
      projects: "Projects",
      technologies: "Technologies",
      experiences: "Experience",
      aboutMe: "About Me",
    },
    storyContents: {
      projects: [
        {
          title: "🔀 Github Clone",
          description: "A fully functional GitHub clone built with Vite + FastAPI. Features include authentication, repository management, file browsing, branches, pull requests, and more.",
          image: icons.github,
          link: "https://github.com/ViniciusMicarelli/ProcessVersioning.git",
        },
        {
          title: "⚡ LiftOS API",
          description: "Complete REST API built with FastAPI for managing fitness challenges among friends. Features endpoints for user authentication, fitness challenge management, and progress tracking.",
          image: icons.fastapi,
          link: "https://github.com/ViniciusMicarelli/LiftOS",
        },
        {
          title: "🌐 Currency Exchange — React",
          description: "React frontend application for real-time currency exchange rates and conversion. Clean, responsive interface integrated with external APIs.",
          image: icons.react,
          link: "https://github.com/ViniciusMicarelli/Cambio-",
        },
        {
          title: "📊 Agenda — Streamlit",
          description: "Interactive agenda app built with Streamlit. Intuitive interface for managing contacts and events with data visualization capabilities.",
          image: icons.streamlit,
          link: "https://github.com/ViniciusMicarelli/Agenda",
        },
      ],
      technologies: [
        {
          title: "🐍 Python & Frameworks",
          description: "FastAPI, Django, Streamlit, Agno and LangChain make up my core stack. Building scalable APIs, robust web apps, and interactive data dashboards.",
          image: icons.python,
        },
        {
          title: "⚛️ Frontend with React",
          description: "Building modern, reactive interfaces. Experience with componentization, hooks, state management, and REST API integration.",
          image: icons.react,
        },
        {
          title: "🗄️ Databases & Middleware",
          description: "Solid experience with PostgreSQL and MongoDB, along with cache-aside implementation using Redis and distributed messaging with RabbitMQ.",
          image: icons.postgresql,
        },
        {
          title: "🔧 DevOps & Tools",
          description: "Git for version control, Docker for containerization, CI/CD for automated deployments. Process automation and development best practices.",
          image: icons.git,
        },
      ],
      experiences: [
        {
          title: "🧬 Jr Systems Analyst",
          description: "Bioma Genetics | Apr/2026 – Present\n\nDeveloping scalable genetic systems using FastAPI and Agno. Responsible for microservices architecture integrating Redis for caching, RabbitMQ for messaging, alongside MongoDB and PostgreSQL. Utilizing Docker for containerization to ensure scalability and efficiency in clinical environments.",
          image: logoBioma,
          link: "https://biomagenetics.com.br/en/",
        },
        {
          title: "🐍 Jr Python Developer",
          description: "Qualiconsig | Jan/2026 – Apr/2026\n\nBackend development with FastAPI/Django and frontend with React. Key projects:\n• Financial System: Credit/debit processing with automatic consolidation.\n• Corporate Procurement: Hierarchical approval workflow for governance.\n• R&S: Job management system with Kanban and access control.\n• Automation: Centralized robot platform with detailed audit logs.",
          image: logoQualiconsig,
          link: "https://qualiconsig.com.br/",
        },
        {
          title: "👨‍💻 Software Dev Intern",
          description: "Qualiconsig | Mar/2025 – Dec/2025\n\nBuilt web apps and APIs with FastAPI and Django, and interfaces with React. Worked with MongoDB and PostgreSQL. Started in IT Technical Support (Qualisystem/Anydesk) before transitioning to the dev team focused on automation and internal routines.",
          image: logoQualiconsig,
        },
      ],
      aboutMe: [
        {
          title: "👨‍💻 Who am I?",
          description: "Computer Engineer graduated from FIAP, passionate about technology and software development. Currently working as a systems analyst jr at Bioma Genetics, creating scalable backend solutions.",
          link: "https://github.com/ViniciusMicarelli",
          image: icons.github,
        },
        {
          title: "🇨🇦 Exchange in Canada",
          description: "4 months of intensive English at ILAC Toronto (Nov/2023 – Feb/2024). High Advanced certificate. An experience that broadened my professional and cultural perspective.",
          link: "https://www.ilac.com",
        },
        {
          title: "🎓 ML Postgraduate",
          description: "Pursuing a postgraduate degree in Machine Learning Engineering at FIAP, starting March/2026. Exploring AI, machine learning, LLMs, and intelligent applications.",
          link: "https://www.fiap.com.br",
        },
        {
          title: "🎯 Goal",
          description: "Grow as a full-stack developer with a Python focus, contribute to open-source projects, and apply Machine Learning to real-world solutions. Always learning, always building.",
        },
      ],
    },
    postData: [
      {
        caption: "🧬 So happy to share that I'm now part of the Bioma Genetics team as a Jr Systems Analyst! Looking forward to contributing with technological solutions that transform clinical practice through genetics and the microbiome. 🚀\n\n#BiomaGenetics #SystemsAnalyst #Genetics #Microbiome #HealthTech #NewJob",
        likes: 245,
        comments: 42,
        image: postBioma,
        date: "April 06, 2026",
      },
      {
        caption: "🤖 Next level unlocked: Postgraduate in Machine Learning Engineering at FIAP! Ready to dive into AI, neural networks, and LLMs.\n\n#MachineLearning #AI #FIAP #PostGrad #DeepLearning #MLEngineering",
        likes: 198,
        comments: 31,
        image: postMl,
        date: "March 10, 2026",
      },
      {
        caption: "🎓 Graduated in Computer Engineering from FIAP! 5 years of dedication, challenging projects, and incredible professional growth. Grateful for every lesson learned!\n\n#FIAP #Graduation #ComputerEngineering #Engineering #Gratitude",
        likes: 356,
        comments: 67,
        image: postGraduation,
        date: "January 20, 2026",
      },
      {
        caption: "🚀 English High Advanced Certificate from ILAC Toronto! 4 months of full immersion in Canada that transformed my career and worldview.\n\n#English #ILAC #Toronto #Canada #StudyAbroad #HighAdvanced",
        likes: 142,
        comments: 23,
        image: postIlac,
        date: "February 15, 2024",
      },
    ],
  },
};
