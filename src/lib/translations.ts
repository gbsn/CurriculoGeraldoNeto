export type Locale = "pt" | "en" | "zh";

export interface Dictionary {
  nav: {
    tecnologia: string;
    gestao: string;
    experiencias: string;
    sobre: string;
  };
  home: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    invite: string;
    p1: string;
    p2: string;
    quote: string;
    p3: string;
    statsPeople: string;
    statsKpi: string;
    statsYears: string;
    continueReading: string;
    cardTecTitle: string;
    cardTecDesc: string;
    cardGesTitle: string;
    cardGesDesc: string;
    cardOquasiTitle: string;
    cardOquasiDesc: string;
  };
  stub: {
    tecnologia: { eyebrow: string; title: string; desc: string };
    gestao: { eyebrow: string; title: string; desc: string };
    experiencias: { eyebrow: string; title: string; desc: string };
    sobre: { eyebrow: string; title: string; desc: string };
    oquasi: { eyebrow: string; title: string; desc: string };
  };
  gestaoPage: {
    eyebrow: string;
    headline: string;
    intro: string;
    roles: {
      title: string;
      company: string;
      period: string;
      location: string;
      desc: string;
    }[];
    certsTitle: string;
    certs: string[];
    statPeople: string;
    statKpi: string;
    statYears: string;
  };
  experienciasPage: {
    eyebrow: string;
    headline: string;
    intro: string;
    draftNote: string;
    roles: {
      title: string;
      company: string;
      period: string;
      location: string;
      desc: string;
    }[];
  };
  tecnologiaPage: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    formacaoTitle: string;
    formacaoText: string;
    portfolioTitle: string;
    privateLabel: string;
    projects: {
      name: string;
      description: string;
      tags: string[];
      links: { label: string; url: string }[];
    }[];
  };
  sobrePage: {
    eyebrow: string;
    headline: string;
    intro: string;
    themes: { id: string; label: string; blurb: string }[];
  };
  sobreGate: {
    title: string;
    subtitle: string;
    placeholder: string;
    submit: string;
    wrong: string;
    questions: { id: string; q: string; answers: string[] }[];
  };
  contact: {
    talk: string;
    pillLabel: string;
    chooseIntro: string;
    writeHere: string;
    requestInfo: string;
    back: string;
    iAmLabel: string;
    iAmPlaceholder: string;
    dateLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    requestIntro: string;
    emailPlaceholder: string;
    requestSubmit: string;
    sent: string;
    close: string;
  };
}

export const translations: Record<Locale, Dictionary> = {
  pt: {
    nav: {
      tecnologia: "Tecnologia",
      gestao: "Gestão",
      experiencias: "Curriculum Vitae",
      sobre: "Sobre",
    },
    home: {
      eyebrow: "Edição pessoal · Natal, RN",
      headline: "Conectando pessoas reais a tecnologia eficaz.",
      subtitle:
        "Disciplina, raciocínio econômico e gestão a serviço de processos que funcionam.",
      invite:
        "Antes dos cargos, dos números, dos KPIs — teve um começo. Vem comigo.",
      p1: "Em 2011, antes de qualquer cargo, havia uma ONG e um problema simples: adolescentes com problemas de socialização. Não havia orçamento, nem estrutura — havia muita vontade de agir e ajudar, e tarde livre. Foi ali que aprendi que sistema bom é aquele que resolve o problema de quem está na sua frente, não o que fica bonito num slide ou num site. Não existia IA acessível naquele momento.",
      p2: "Os anos seguintes levaram essa lógica para dentro de operações grandes e internacionais: da linha de frente ao comando de equipes de 30 a até 1.400 pessoas, sustentando indicadores de desempenho acima de 94%, tudo com base no Lean Six Sigma. Não é o mesmo tipo de sistema — mas é o mesmo tipo de problema: processo e informação que precisam se encontrar sem fricção.",
      quote: "A Tecnologia deve servir as Pessoas e solucionar problemas reais...",
      p3: "Formado em Análise de Sistemas e tendo estudado Ciências Econômicas a fundo, hoje reúno as duas coisas onde raramente coexistem, mas deveriam se completar: profundidade técnica e leitura de negócio. É essa combinação que está indo para Inteligência Artificial e Análise de Dados — não como modismo, mas como continuação natural de uma carreira que sempre tratou tecnologia como ferramenta de gente, não como fim em si.",
      statsPeople: "pessoas lideradas, pico operacional",
      statsKpi: "KPIs sustentados no período",
      statsYears: "anos entre operação, dev e gestão",
      continueReading: "Continue a leitura",
      cardTecTitle: "Tecnologia",
      cardTecDesc: "Formação, stack e o portfólio por trás do código.",
      cardGesTitle: "Gestão",
      cardGesDesc: "Operações, liderança e os números que provam isso.",
      cardOquasiTitle: "Fora do expediente",
      cardOquasiDesc: "Quem eu sou quando a câmera do trabalho desliga.",
    },
    stub: {
      tecnologia: {
        eyebrow: "Edição pessoal · em construção",
        title: "Tecnologia",
        desc: "Formação, stack e o portfólio por trás do código. Conteúdo chega no próximo sprint.",
      },
      gestao: {
        eyebrow: "Edição pessoal · em construção",
        title: "Gestão",
        desc: "Operações, liderança e os números que provam isso. Conteúdo chega no próximo sprint.",
      },
      experiencias: {
        eyebrow: "Edição pessoal · em construção",
        title: "Experiências",
        desc: "Vivências que não cabem nos temas principais, mas também contam a história. Conteúdo chega no próximo sprint.",
      },
      sobre: {
        eyebrow: "Edição pessoal · em construção",
        title: "Sobre mim",
        desc: "Um pouco de vida fora do trabalho — o suficiente pra você me conhecer melhor. Conteúdo chega no próximo sprint.",
      },
      oquasi: {
        eyebrow: "Fora do expediente · em construção",
        title: "oQuasi",
        desc: "Quem eu sou quando a câmera do trabalho desliga. A experiência completa desse portal chega em um sprint futuro.",
      },
    },
    gestaoPage: {
      eyebrow: "Edição pessoal · Gestão",
      headline: "Gestão de operações que sustentam resultado.",
      intro:
        "Aqui, os cargos e os números falam por si. Uma trajetória construída de dentro da operação para o comando dela.",
      roles: [
        {
          title: "Supervisor de Operações Bilíngue",
          company: "Teleperformance",
          period: "nov 2016 – jun 2018",
          location: "Parnamirim/RN",
          desc: "Facilitador de tarefas para produzir resultados positivos. Supervisão e gestão de operação de atendimento ao cliente, monitoramento de qualidade e coaching de habilidades motivacionais.",
        },
        {
          title: "Supervisor Técnico, Especialista de Backoffice",
          company: "Teleperformance",
          period: "jun 2018 – jun 2019",
          location: "Natal/RN",
          desc: "Apoio a líderes de equipe, gestão de documentação de jornada do cliente e do espaço de trabalho.",
        },
        {
          title: "Coordenador Bilíngue de Operações",
          company: "Teleperformance",
          period: "jun 2019 – mar 2025",
          location: "Natal/RN",
          desc: "Coordenação de operações, supervisores, staff e experts. Ponte de comunicação entre times, gestão de recursos operacionais, KPIs e relacionamento com contratantes.",
        },
        {
          title: "CEO",
          company: "QuasiUbi",
          period: "mar 2025",
          location: "Natal/RN",
          desc: "Iniciativa própria voltada a condutores de aplicativos, com foco em segurança e projeção de carreira para parceiros.",
        },
      ],
      certsTitle: "Certificações",
      certs: ["SCRUM Master", "Six Sigma Yellow Belt"],
      statPeople: "pessoas lideradas, pico operacional",
      statKpi: "KPIs sustentados no período",
      statYears: "anos na Teleperformance, do operacional à coordenação",
    },
    experienciasPage: {
      eyebrow: "Edição pessoal · Curriculum Vitae · em construção",
      headline: "Curriculum Vitae",
      intro:
        "Tudo que não coube em nenhum outro tema, reunido aqui em ordem cronológica.",
      draftNote:
        "Nota: essa seção ainda vai passar por um redesenho de storytelling mais pesado. Por ora, é só o registro bruto das experiências.",
      roles: [
        {
          title: "Técnico e agente de garantia",
          company: "Itautec",
          period: "fev 2008 – fev 2009",
          location: "Natal/RN",
          desc: "Seguia as ordens de garantia, trocando, consertando ou substituindo aparelhos fornecidos pela Itautec que precisassem de reparo em garantia.",
        },
        {
          title: "Agente de Vendas Pessoa Física — Linhas Móveis e Fixas",
          company: "Oi Telecom",
          period: "2008",
          location: "Natal/RN",
          desc: "Vendas externas e internas de linhas móveis e fixas (Oi Conta Total). Recordista em vendas durante três meses seguidos, promovido a Vendedor de Linhas Empresariais.",
        },
        {
          title: "Agente de Vendas Pessoa Jurídica — Linhas Móveis",
          company: "Oi Telecom",
          period: "2009",
          location: "Natal/RN",
          desc: "Prospecção, gestão e negociação com portfólio abrangente de produtos B2B, planos focados na necessidade do cliente, em parceria com equipes de backoffice e pós-venda. Destaque por melhor atendimento nos últimos dois meses do contrato.",
        },
        {
          title: "Suporte remoto (TI)",
          company: "ACOM Solutions, Inc.",
          period: "mai 2011 – nov 2012",
          location: "Natal/RN",
          desc: "Atendimento direto ao cliente remotamente, via SSH, VPN, telefone ou pessoalmente, buscando resolver problemas de rede ou sinal de TV.",
        },
        {
          title: "Agente de suporte TI",
          company: "Cabo Telecom",
          period: "jan 2013 – dez 2013",
          location: "Natal e Região",
          desc: "Atendimento ao cliente final via SSH, VPN, telefone ou pessoalmente, buscando resolver problemas de rede ou sinal de TV.",
        },
        {
          title: "Estagiário",
          company: "TecnoTech Sistemas LTDA",
          period: "fev 2014 – ago 2014",
          location: "Natal e Região",
          desc: "Gestão do suporte da empresa, mediando e organizando a interação dos programadores com o sistema de controle de demanda.",
        },
        {
          title: "Desenvolvedor de software júnior",
          company: "JMTweb",
          period: "jun 2015 – jun 2016",
          location: "Avenida Búzios, 9034",
          desc: "Desenvolvedor chefe de projetos web, em PHP e MySQL, usando BrainStorm IDE e phpMyAdmin. SEO com Google Tools, especialista em Google Sheets. Desenvolvimento de sistemas financeiros generalistas embarcados em websites, usando Scrum.",
        },
      ],
    },
    tecnologiaPage: {
      eyebrow: "Edição pessoal · Tecnologia",
      headline: "Tecnologia que resolve, não que só impressiona.",
      subtitle:
        "Formação em Análise de Sistemas, raciocínio de Economia, e uma pilha de projetos pra provar.",
      formacaoTitle: "Formação",
      formacaoText:
        "Formado em Análise de Sistemas, com passagem por Ciências Econômicas — a base técnica vem de um lado, a leitura de negócio do outro. O resto veio construindo: prática, projetos, e a teimosia de aprender fazendo.",
      portfolioTitle: "Portfólio",
      privateLabel: "repo privado",
      projects: [
        {
          name: "CurriculoGeraldoNeto",
          description:
            "Este currículo. Construído como projeto SCRUM real, com IA como parceira de desenvolvimento, do zero ao deploy.",
          tags: ["Next.js", "TypeScript", "Vercel"],
          links: [
            { label: "GitHub", url: "https://github.com/gbsn/CurriculoGeraldoNeto" },
          ],
        },
        {
          name: "UZIr",
          description:
            "Mod de contagem de mortes para Project Zomboid, pensado pra integrar partidas solo e multiplayer numa liga permanente online. Três peças: o mod do jogo, o serviço-ponte de dados, e o app web de ligas e registros (privado).",
          tags: ["Lua", "Go", "TypeScript"],
          links: [
            { label: "UZIr", url: "https://github.com/gbsn/UZIr" },
            { label: "UZIr-Companion", url: "https://github.com/gbsn/UZIr-Companion" },
          ],
        },
        {
          name: "QuasimoDOVS-Clock",
          description:
            "Mod de HUD para Vintage Story: painel de informações com cores sazonais, mostrando relógio, data, estação e temperatura. Evolução do meu primeiro mod do jogo.",
          tags: ["C#"],
          links: [
            { label: "GitHub", url: "https://github.com/gbsn/QuasimoDOVS-Clock" },
          ],
        },
        {
          name: "NowApocalypse",
          description:
            "Jogo idle interativo: você é o líder de uma horda zumbi que cresce de acordo com suas decisões. Sátira corporativa por trás do caos.",
          tags: ["Vue"],
          links: [],
        },
        {
          name: "moderaIA",
          description:
            "Agente de IA pra moderar lives — pensado pra criadores de conteúdo que precisam de outro par de olhos (e ouvidos) durante a transmissão.",
          tags: ["Python"],
          links: [{ label: "GitHub", url: "https://github.com/gbsn/moderaIA" }],
        },
        {
          name: "ThePHPLogin",
          description:
            "Rotina de login simples, feita pra mostrar nível de habilidade em PHP legado — direto ao ponto.",
          tags: ["PHP", "HTML"],
          links: [{ label: "GitHub", url: "https://github.com/gbsn/ThePHPLogin" }],
        },
        {
          name: "AllVueJs",
          description:
            "Projeto de teste técnico contratado por uma empresa em processo seletivo de freelancers. Prova de trabalho sob prazo real.",
          tags: ["Vue"],
          links: [{ label: "GitHub", url: "https://github.com/gbsn/AllVueJs" }],
        },
      ],
    },
    sobrePage: {
      eyebrow: "Edição pessoal · Sobre mim",
      headline: "Uma espiada por dentro",
      intro:
        "Clique nas luzes. Cada uma é um pedaço de mim fora do expediente — bem por cima, sem aprofundar demais.",
      themes: [
        {
          id: "economia",
          label: "Economia",
          blurb:
            "Onde tudo começou antes da tecnologia — meu outro diploma, e a lente que uso pra entender sistemas maiores que código.",
        },
        {
          id: "filosofia",
          label: "Filosofia",
          blurb:
            "Pergunto o porquê antes do como. Ajuda mais do que devia em reunião de gestão.",
        },
        {
          id: "antropologia",
          label: "Antropologia",
          blurb:
            "Curiosidade sobre como as pessoas se organizam — útil pra quem já liderou 1.400 delas.",
        },
        {
          id: "musica",
          label: "Música eletrônica & raves",
          blurb: "Onde a lógica descansa. Um beat repetitivo é só outro tipo de loop.",
        },
        {
          id: "scifi",
          label: "Ficção científica",
          blurb: "Meu jeito favorito de pensar sobre o futuro antes dele chegar.",
        },
        {
          id: "transumanismo",
          label: "Transumanismo",
          blurb: "A pergunta que fica: até onde tecnologia e humano se fundem?",
        },
        {
          id: "jogos",
          label: "Jogos",
          blurb:
            "Project Zomboid, Vintage Story, e um personagem em Ultima Online otimizado nas horas vagas. Mais de 3.500 horas praticando resolver problema sob pressão — a maioria virtual.",
        },
      ],
    },
    sobreGate: {
      title: "A névoa te bloqueia",
      subtitle: "Responda certo pra ganhar mais 3 minutos aqui dentro.",
      placeholder: "sua resposta",
      submit: "Responder",
      wrong: "Não foi dessa vez. Tenta de novo.",
      questions: [
        {
          id: "cidade",
          q: "Em que cidade o Geraldo mora?",
          answers: ["natal"],
        },
        {
          id: "persona",
          q: "Qual é o nome do persona de criador de conteúdo do Geraldo?",
          answers: ["oquasi"],
        },
        {
          id: "jogo",
          q: "Qual jogo o Geraldo já jogou por mais de mil horas?",
          answers: ["project zomboid", "zomboid"],
        },
        {
          id: "certificacao",
          q: "Além de SCRUM Master, qual outra certificação o Geraldo tem?",
          answers: ["six sigma", "six sigma yellow belt", "sixsigma"],
        },
        {
          id: "linguagem",
          q: "Em qual linguagem o mod UZIr foi escrito?",
          answers: ["lua"],
        },
        {
          id: "framework",
          q: "Qual framework foi usado pra construir este site?",
          answers: ["nextjs", "next"],
        },
        {
          id: "empresa",
          q: "Em qual empresa de telecom o Geraldo trabalhou por mais tempo?",
          answers: ["teleperformance"],
        },
      ],
    },
    contact: {
      talk: "Vamos conversar",
      pillLabel: "Falar comigo",
      chooseIntro:
        "Pode me escrever direto, ou pedir que eu te envie meus dados de contato.",
      writeHere: "Escrever uma mensagem por aqui",
      requestInfo: "Solicitar informações de contato",
      back: "← voltar",
      iAmLabel: "Eu sou ou represento:",
      iAmPlaceholder: "Nome / empresa / projeto",
      dateLabel: "Me comunico em:",
      messageLabel: "Mensagem",
      messagePlaceholder: "O que você quer tratar comigo",
      send: "Enviar",
      requestIntro:
        "Informo aqui seu e-mail e envio meus dados de contato junto com meu currículo em PDF.",
      emailPlaceholder: "seu@email.com",
      requestSubmit: "Solicitar informações de contato",
      sent: "Recebido. Retorno o quanto antes pelo canal informado.",
      close: "Fechar",
    },
  },

  en: {
    nav: {
      tecnologia: "Technology",
      gestao: "Management",
      experiencias: "Curriculum Vitae",
      sobre: "About",
    },
    home: {
      eyebrow: "Personal edition · Natal, Brazil",
      headline: "Connecting real people to effective technology.",
      subtitle:
        "Discipline, economic reasoning, and management in service of processes that work.",
      invite:
        "Before the titles, the numbers, the KPIs — there was a beginning. Come with me.",
      p1: "In 2011, before any job title, there was an NGO and a simple problem: teenagers dealing with social exclusion. There was no budget, no structure — just a lot of willingness to act and help, and free afternoons. That's where I learned that a good system is one that solves the problem of the person in front of you, not the one that looks good on a slide or a website. Accessible AI didn't exist yet at that time.",
      p2: "The years that followed took that same logic into large, international operations: from the front line to leading teams of 30 to as many as 1,400 people, sustaining performance indicators above 94%, all grounded in Lean Six Sigma. It's not the same kind of system — but it's the same kind of problem: process and information that need to meet without friction.",
      quote: "Technology should serve People and solve real problems...",
      p3: "Trained in Systems Analysis and having studied Economics in depth, I now bring together two things that rarely coexist — but should complement each other: technical depth and business insight. That combination is what's now heading toward Artificial Intelligence and Data Analysis — not as a trend, but as the natural continuation of a career that has always treated technology as a tool for people, not an end in itself.",
      statsPeople: "people led, peak operation",
      statsKpi: "KPIs sustained over the period",
      statsYears: "years across operations, dev, and management",
      continueReading: "Keep reading",
      cardTecTitle: "Technology",
      cardTecDesc: "Background, stack, and the portfolio behind the code.",
      cardGesTitle: "Management",
      cardGesDesc: "Operations, leadership, and the numbers that prove it.",
      cardOquasiTitle: "Off the clock",
      cardOquasiDesc: "Who I am when the work camera turns off.",
    },
    stub: {
      tecnologia: {
        eyebrow: "Personal edition · under construction",
        title: "Technology",
        desc: "Background, stack, and the portfolio behind the code. Content coming in the next sprint.",
      },
      gestao: {
        eyebrow: "Personal edition · under construction",
        title: "Management",
        desc: "Operations, leadership, and the numbers that prove it. Content coming in the next sprint.",
      },
      experiencias: {
        eyebrow: "Personal edition · under construction",
        title: "Experience",
        desc: "Experiences that don't fit the main themes, but are part of the story too. Content coming in the next sprint.",
      },
      sobre: {
        eyebrow: "Personal edition · under construction",
        title: "About me",
        desc: "A bit of life outside work — just enough for you to get to know me. Content coming in the next sprint.",
      },
      oquasi: {
        eyebrow: "Off the clock · under construction",
        title: "oQuasi",
        desc: "Who I am when the work camera turns off. The full portal experience is coming in a future sprint.",
      },
    },
    gestaoPage: {
      eyebrow: "Personal edition · Management",
      headline: "Management that sustains results.",
      intro:
        "Here, the roles and the numbers speak for themselves. A path built from inside the operation to leading it.",
      roles: [
        {
          title: "Bilingual Operations Supervisor",
          company: "Teleperformance",
          period: "Nov 2016 – Jun 2018",
          location: "Parnamirim, Brazil",
          desc: "Task facilitator focused on positive outcomes. Supervised and managed customer service operations, quality monitoring, and motivational skills coaching.",
        },
        {
          title: "Technical Supervisor, Backoffice Specialist",
          company: "Teleperformance",
          period: "Jun 2018 – Jun 2019",
          location: "Natal, Brazil",
          desc: "Supported team leaders, managed customer journey documentation and workspace organization.",
        },
        {
          title: "Bilingual Operations Coordinator",
          company: "Teleperformance",
          period: "Jun 2019 – Mar 2025",
          location: "Natal, Brazil",
          desc: "Coordinated operations, supervisors, staff, and experts. Bridged communication between teams, managed operational resources, KPIs, and client relationships.",
        },
        {
          title: "CEO",
          company: "QuasiUbi",
          period: "Mar 2025",
          location: "Natal, Brazil",
          desc: "Own venture focused on app-based drivers, centered on safety and career growth for partner drivers.",
        },
      ],
      certsTitle: "Certifications",
      certs: ["SCRUM Master", "Six Sigma Yellow Belt"],
      statPeople: "people led, peak operation",
      statKpi: "KPIs sustained over the period",
      statYears: "years at Teleperformance, from the floor to coordination",
    },
    experienciasPage: {
      eyebrow: "Personal edition · Curriculum Vitae · under construction",
      headline: "Curriculum Vitae",
      intro:
        "Everything that didn't fit into another theme, gathered here in chronological order.",
      draftNote:
        "Note: this section will still go through a heavier storytelling redesign. For now, it's just the raw record of experiences.",
      roles: [
        {
          title: "Warranty Technician & Agent",
          company: "Itautec",
          period: "Feb 2008 – Feb 2009",
          location: "Natal, Brazil",
          desc: "Followed warranty service orders, repairing, replacing, or exchanging Itautec equipment under warranty.",
        },
        {
          title: "Personal Lines Sales Agent — Mobile & Landline",
          company: "Oi Telecom",
          period: "2008",
          location: "Natal, Brazil",
          desc: "Handled inbound and outbound sales of mobile and landline plans (Oi Conta Total). Top seller for three consecutive months, promoted to Business Lines Sales Rep.",
        },
        {
          title: "Business Sales Agent — Mobile Lines (B2B)",
          company: "Oi Telecom",
          period: "2009",
          location: "Natal, Brazil",
          desc: "Prospected, managed, and negotiated a broad B2B product portfolio tailored to client needs, working alongside backoffice and after-sales teams. Recognized for best service in the contract's final two months.",
        },
        {
          title: "Remote IT Support",
          company: "ACOM Solutions, Inc.",
          period: "May 2011 – Nov 2012",
          location: "Natal, Brazil",
          desc: "Direct remote customer support via SSH, VPN, phone, or in person, resolving network and TV signal issues.",
        },
        {
          title: "IT Support Agent",
          company: "Cabo Telecom",
          period: "Jan 2013 – Dec 2013",
          location: "Natal Region, Brazil",
          desc: "End-customer support via SSH, VPN, phone, or in person, resolving network and TV signal issues.",
        },
        {
          title: "Intern",
          company: "TecnoTech Sistemas LTDA",
          period: "Feb 2014 – Aug 2014",
          location: "Natal Region, Brazil",
          desc: "Managed company support and mediated the interaction between developers and the demand-tracking system.",
        },
        {
          title: "Junior Software Developer",
          company: "JMTweb",
          period: "Jun 2015 – Jun 2016",
          location: "Avenida Búzios, 9034",
          desc: "Lead web developer, working in PHP and MySQL using BrainStorm IDE and phpMyAdmin. SEO with Google tools, Google Sheets specialist. Built general-purpose financial systems embedded in websites, using Scrum.",
        },
      ],
    },
    tecnologiaPage: {
      eyebrow: "Personal edition · Technology",
      headline: "Technology that solves, not just impresses.",
      subtitle:
        "A degree in Systems Analysis, an Economics mindset, and a stack of projects to back it up.",
      formacaoTitle: "Background",
      formacaoText:
        "Trained in Systems Analysis, with a background in Economics — technical foundation on one side, business thinking on the other. Everything else came from building: practice, projects, and the stubbornness to learn by doing.",
      portfolioTitle: "Portfolio",
      privateLabel: "private repo",
      projects: [
        {
          name: "CurriculoGeraldoNeto",
          description:
            "This very résumé. Built as a real Scrum project, with AI as a development partner, from zero to deployed.",
          tags: ["Next.js", "TypeScript", "Vercel"],
          links: [
            { label: "GitHub", url: "https://github.com/gbsn/CurriculoGeraldoNeto" },
          ],
        },
        {
          name: "UZIr",
          description:
            "A kill-count mod for Project Zomboid, built to bring solo and multiplayer runs into one permanent online league. Three pieces: the game mod, the data-bridge service, and the web league/registry app (private).",
          tags: ["Lua", "Go", "TypeScript"],
          links: [
            { label: "UZIr", url: "https://github.com/gbsn/UZIr" },
            { label: "UZIr-Companion", url: "https://github.com/gbsn/UZIr-Companion" },
          ],
        },
        {
          name: "QuasimoDOVS-Clock",
          description:
            "A HUD mod for Vintage Story: an info panel with season-based coloring showing clock, date, season, and temperature. An evolution of my first mod for the game.",
          tags: ["C#"],
          links: [
            { label: "GitHub", url: "https://github.com/gbsn/QuasimoDOVS-Clock" },
          ],
        },
        {
          name: "NowApocalypse",
          description:
            "An interactive idle game: you're the leader of a zombie horde that grows based on your decisions. Dark corporate satire underneath the chaos.",
          tags: ["Vue"],
          links: [],
        },
        {
          name: "moderaIA",
          description:
            "An AI agent for moderating livestreams — built for creators who need an extra pair of eyes (and ears) during a broadcast.",
          tags: ["Python"],
          links: [{ label: "GitHub", url: "https://github.com/gbsn/moderaIA" }],
        },
        {
          name: "ThePHPLogin",
          description:
            "A simple login routine, built to showcase legacy PHP skill level — straightforward and to the point.",
          tags: ["PHP", "HTML"],
          links: [{ label: "GitHub", url: "https://github.com/gbsn/ThePHPLogin" }],
        },
        {
          name: "AllVueJs",
          description:
            "A technical test project commissioned by a company during a freelancer hiring process. Proof of work under a real deadline.",
          tags: ["Vue"],
          links: [{ label: "GitHub", url: "https://github.com/gbsn/AllVueJs" }],
        },
      ],
    },
    sobrePage: {
      eyebrow: "Personal edition · About me",
      headline: "A peek inside",
      intro:
        "Click the lights. Each one's a piece of me off the clock — kept light, not too deep.",
      themes: [
        {
          id: "economia",
          label: "Economics",
          blurb:
            "Where it all started before technology — my other degree, and the lens I use to read systems bigger than code.",
        },
        {
          id: "filosofia",
          label: "Philosophy",
          blurb:
            "I ask why before how. Helps more than it should in management meetings.",
        },
        {
          id: "antropologia",
          label: "Anthropology",
          blurb:
            "Curiosity about how people organize themselves — useful for someone who's led 1,400 of them.",
        },
        {
          id: "musica",
          label: "Electronic music & raves",
          blurb: "Where logic gets to rest. A repetitive beat is just another kind of loop.",
        },
        {
          id: "scifi",
          label: "Science fiction",
          blurb: "My favorite way to think about the future before it arrives.",
        },
        {
          id: "transumanismo",
          label: "Transhumanism",
          blurb: "The question that stays with me: how far do technology and human blur together?",
        },
        {
          id: "jogos",
          label: "Games",
          blurb:
            "Project Zomboid, Vintage Story, and an Ultima Online character optimized in my spare time. 3,500+ hours practicing problem-solving under pressure — mostly virtual.",
        },
      ],
    },
    sobreGate: {
      title: "The fog blocks you",
      subtitle: "Answer correctly to earn 3 more minutes in here.",
      placeholder: "your answer",
      submit: "Answer",
      wrong: "Not this time. Try again.",
      questions: [
        {
          id: "cidade",
          q: "What city does Geraldo live in?",
          answers: ["natal"],
        },
        {
          id: "persona",
          q: "What's the name of Geraldo's content-creator persona?",
          answers: ["oquasi"],
        },
        {
          id: "jogo",
          q: "Which game has Geraldo played for over a thousand hours?",
          answers: ["project zomboid", "zomboid"],
        },
        {
          id: "certificacao",
          q: "Besides SCRUM Master, what other certification does Geraldo hold?",
          answers: ["six sigma", "six sigma yellow belt", "sixsigma"],
        },
        {
          id: "linguagem",
          q: "What language was the UZIr mod written in?",
          answers: ["lua"],
        },
        {
          id: "framework",
          q: "What framework was used to build this site?",
          answers: ["nextjs", "next"],
        },
        {
          id: "empresa",
          q: "Which telecom company did Geraldo work at the longest?",
          answers: ["teleperformance"],
        },
      ],
    },
    contact: {
      talk: "Let's talk",
      pillLabel: "Get in touch",
      chooseIntro:
        "You can write to me directly, or ask me to send you my contact details.",
      writeHere: "Write a message here",
      requestInfo: "Request contact details",
      back: "← back",
      iAmLabel: "I am / I represent:",
      iAmPlaceholder: "Name / company / project",
      dateLabel: "Reaching out on:",
      messageLabel: "Message",
      messagePlaceholder: "What you'd like to discuss",
      send: "Send",
      requestIntro:
        "Enter your email and I'll send you my contact details along with my PDF résumé.",
      emailPlaceholder: "you@email.com",
      requestSubmit: "Request contact details",
      sent: "Got it. I'll get back to you soon through the channel provided.",
      close: "Close",
    },
  },

  zh: {
    nav: {
      tecnologia: "技术",
      gestao: "管理",
      experiencias: "个人履历",
      sobre: "关于",
    },
    home: {
      eyebrow: "个人版 · 巴西纳塔尔",
      headline: "让真实的人们与高效的技术相连。",
      subtitle: "纪律、经济思维与管理，服务于真正有效的流程。",
      invite: "在职位、数字和KPI之前 —— 一切都有一个开始。跟我来。",
      p1: "2011年，在担任任何职务之前，有一个非政府组织和一个简单的问题：青少年面临社交融入困难。没有预算，也没有架构 —— 只有满满的行动意愿和自由的下午时光。正是在那里，我学到了好的系统是能解决眼前之人问题的系统，而不是在幻灯片或网站上好看的系统。那个时候，还没有触手可及的人工智能。",
      p2: "接下来的岁月里，这套逻辑被带入了更大规模的国际化运营中：从一线员工到带领30人至多达1,400人的团队，并以精益六西格玛为基础，将绩效指标维持在94%以上。这不是同一种系统 —— 但却是同一类问题：流程与信息需要毫无摩擦地衔接。",
      quote: "科技应当服务于人，解决真实的问题……",
      p3: "我毕业于系统分析专业，并深入学习过经济学，如今我将这两项很少并存、却理应互补的能力结合在一起：技术深度与商业洞察力。正是这种结合，正引领我走向人工智能与数据分析领域 —— 这不是追赶潮流，而是一份始终把技术当作服务于人的工具、而非目的本身的职业生涯的自然延续。",
      statsPeople: "巅峰时期带领的团队人数",
      statsKpi: "期间维持的绩效指标",
      statsYears: "跨运营、开发与管理的从业年限",
      continueReading: "继续阅读",
      cardTecTitle: "技术",
      cardTecDesc: "教育背景、技术栈，以及代码背后的作品集。",
      cardGesTitle: "管理",
      cardGesDesc: "运营、领导力，以及证明这一切的数据。",
      cardOquasiTitle: "下班之后",
      cardOquasiDesc: "当工作的镜头关闭后，我是谁。",
    },
    stub: {
      tecnologia: {
        eyebrow: "个人版 · 建设中",
        title: "技术",
        desc: "教育背景、技术栈，以及代码背后的作品集。内容将在下一个冲刺中呈现。",
      },
      gestao: {
        eyebrow: "个人版 · 建设中",
        title: "管理",
        desc: "运营、领导力，以及证明这一切的数据。内容将在下一个冲刺中呈现。",
      },
      experiencias: {
        eyebrow: "个人版 · 建设中",
        title: "经历",
        desc: "那些不属于主要主题、却同样重要的经历。内容将在下一个冲刺中呈现。",
      },
      sobre: {
        eyebrow: "个人版 · 建设中",
        title: "关于我",
        desc: "一点点工作之外的生活 —— 足以让你更了解我。内容将在下一个冲刺中呈现。",
      },
      oquasi: {
        eyebrow: "下班之后 · 建设中",
        title: "oQuasi",
        desc: "当工作的镜头关闭后，我是谁。这个入口的完整体验将在未来的冲刺中呈现。",
      },
    },
    gestaoPage: {
      eyebrow: "个人版 · 管理",
      headline: "支撑业绩的运营管理。",
      intro: "在这里，职位与数据本身就是最好的证明。一段从运营一线走向统筹指挥的历程。",
      roles: [
        {
          title: "双语运营主管",
          company: "Teleperformance",
          period: "2016年11月 – 2018年6月",
          location: "巴西帕纳米林",
          desc: "以促成积极成果为目标的任务协调者。负责客服运营的监督与管理、质量监控以及激励技能辅导。",
        },
        {
          title: "技术主管 / 后勤专员",
          company: "Teleperformance",
          period: "2018年6月 – 2019年6月",
          location: "巴西纳塔尔",
          desc: "为团队负责人提供支持，管理客户旅程文档及工作空间。",
        },
        {
          title: "双语运营协调员",
          company: "Teleperformance",
          period: "2019年6月 – 2025年3月",
          location: "巴西纳塔尔",
          desc: "统筹运营、主管、员工与专家团队。作为团队间沟通的桥梁，管理运营资源、KPI及客户关系。",
        },
        {
          title: "首席执行官（CEO）",
          company: "QuasiUbi",
          period: "2025年3月",
          location: "巴西纳塔尔",
          desc: "面向网约车司机的自主创业项目，专注于合作司机的安全保障与职业发展。",
        },
      ],
      certsTitle: "认证资质",
      certs: ["敏捷 Scrum Master 认证", "六西格玛黄带认证"],
      statPeople: "巅峰时期带领的团队人数",
      statKpi: "期间维持的绩效指标",
      statYears: "在Teleperformance从一线到统筹协调的从业年限",
    },
    experienciasPage: {
      eyebrow: "个人版 · 个人履历 · 建设中",
      headline: "个人履历",
      intro: "所有不属于其他主题的经历，按时间顺序汇总于此。",
      draftNote:
        "备注：这部分最终会经过更重的叙事化重新设计。目前，这里只是经历的原始记录。",
      roles: [
        {
          title: "保修技术员/代理",
          company: "Itautec",
          period: "2008年2月 – 2009年2月",
          location: "巴西纳塔尔",
          desc: "负责执行保修工单，对Itautec提供的设备进行更换、维修或替换。",
        },
        {
          title: "个人客户销售专员 —— 移动与固定线路",
          company: "Oi Telecom",
          period: "2008年",
          location: "巴西纳塔尔",
          desc: "负责移动和固定电话线路（Oi Conta Total）的内外销售。连续三个月蝉联销售冠军，晋升为企业线路销售员。",
        },
        {
          title: "法人客户销售专员 —— 移动线路（B2B）",
          company: "Oi Telecom",
          period: "2009年",
          location: "巴西纳塔尔",
          desc: "负责拓展、管理与谈判广泛的B2B产品组合，根据客户需求提供定制方案，并与后勤及售后团队协作。因合同最后两个月的最佳服务表现而获得认可。",
        },
        {
          title: "远程IT支持",
          company: "ACOM Solutions, Inc.",
          period: "2011年5月 – 2012年11月",
          location: "巴西纳塔尔",
          desc: "通过SSH、VPN、电话或现场方式为客户提供远程支持，解决网络及电视信号问题。",
        },
        {
          title: "IT支持专员",
          company: "Cabo Telecom",
          period: "2013年1月 – 2013年12月",
          location: "巴西纳塔尔地区",
          desc: "通过SSH、VPN、电话或现场方式为终端客户提供支持，解决网络及电视信号问题。",
        },
        {
          title: "实习生",
          company: "TecnoTech Sistemas LTDA",
          period: "2014年2月 – 2014年8月",
          location: "巴西纳塔尔地区",
          desc: "负责公司支持工作的管理，协调并组织程序员与需求管理系统之间的互动。",
        },
        {
          title: "初级软件开发工程师",
          company: "JMTweb",
          period: "2015年6月 – 2016年6月",
          location: "Avenida Búzios, 9034",
          desc: "使用PHP和MySQL担任项目主开发，工具为BrainStorm IDE与phpMyAdmin。负责Google工具SEO优化，精通Google表格。基于Scrum方法开发嵌入网站的通用财务系统。",
        },
      ],
    },
    tecnologiaPage: {
      eyebrow: "个人版 · 技术",
      headline: "技术应解决问题，而非仅仅令人印象深刻。",
      subtitle: "系统分析专业背景，经济学思维，再加上一系列项目作为证明。",
      formacaoTitle: "教育背景",
      formacaoText:
        "毕业于系统分析专业，并有经济学的学习背景 —— 技术基础来自一方，商业洞察来自另一方。其余的一切都是靠实践、项目，以及在实践中学习的执着积累而成。",
      portfolioTitle: "作品集",
      privateLabel: "私有仓库",
      projects: [
        {
          name: "CurriculoGeraldoNeto",
          description:
            "这份简历本身。以真实的Scrum项目形式构建，AI作为开发伙伴，从零到上线全程参与。",
          tags: ["Next.js", "TypeScript", "Vercel"],
          links: [
            { label: "GitHub", url: "https://github.com/gbsn/CurriculoGeraldoNeto" },
          ],
        },
        {
          name: "UZIr",
          description:
            "一个为《Project Zomboid》制作的击杀计数模组，旨在将单人与多人游戏整合进一个永久性的在线联赛系统。由三部分组成：游戏模组本身、数据桥接服务，以及联赛与记录的网页应用（私有）。",
          tags: ["Lua", "Go", "TypeScript"],
          links: [
            { label: "UZIr", url: "https://github.com/gbsn/UZIr" },
            { label: "UZIr-Companion", url: "https://github.com/gbsn/UZIr-Companion" },
          ],
        },
        {
          name: "QuasimoDOVS-Clock",
          description:
            "为《Vintage Story》制作的HUD模组：一个随季节变化配色的信息面板，显示时钟、日期、季节与温度。是我第一个游戏模组的进化版本。",
          tags: ["C#"],
          links: [
            { label: "GitHub", url: "https://github.com/gbsn/QuasimoDOVS-Clock" },
          ],
        },
        {
          name: "NowApocalypse",
          description:
            "一款互动放置类游戏：你是一支僵尸大军的首领，军队会根据你的决策不断壮大。混乱背后藏着企业讽刺。",
          tags: ["Vue"],
          links: [],
        },
        {
          name: "moderaIA",
          description:
            "一个用于直播审核的AI代理 —— 为需要在直播过程中多一双眼睛（和耳朵）的内容创作者而设计。",
          tags: ["Python"],
          links: [{ label: "GitHub", url: "https://github.com/gbsn/moderaIA" }],
        },
        {
          name: "ThePHPLogin",
          description:
            "一个简单的登录流程，用于展示传统PHP的技能水平 —— 直接、简明。",
          tags: ["PHP", "HTML"],
          links: [{ label: "GitHub", url: "https://github.com/gbsn/ThePHPLogin" }],
        },
        {
          name: "AllVueJs",
          description:
            "受聘为一家公司自由职业者招募流程中的技术测试项目。是在真实截止日期下完成工作的证明。",
          tags: ["Vue"],
          links: [{ label: "GitHub", url: "https://github.com/gbsn/AllVueJs" }],
        },
      ],
    },
    sobrePage: {
      eyebrow: "个人版 · 关于我",
      headline: "窥探内心一角",
      intro: "点击这些光点。每一个都是我下班后的一小部分 —— 点到为止，不深入。",
      themes: [
        {
          id: "economia",
          label: "经济学",
          blurb:
            "在踏入科技之前一切开始的地方 —— 我的另一个学位，也是我用来理解比代码更大系统的视角。",
        },
        {
          id: "filosofia",
          label: "哲学",
          blurb: "我总是先问为什么，再问怎么做。在管理会议上，这个习惯帮了不少忙。",
        },
        {
          id: "antropologia",
          label: "人类学",
          blurb: "对人们如何自我组织的好奇心 —— 对一个曾带领过1400人的人来说，这很有用。",
        },
        {
          id: "musica",
          label: "电子音乐与锐舞",
          blurb: "逻辑得以休息的地方。重复的节拍其实也是另一种循环。",
        },
        {
          id: "scifi",
          label: "科幻",
          blurb: "我最喜欢的思考未来的方式，在未来真正到来之前。",
        },
        {
          id: "transumanismo",
          label: "超人类主义",
          blurb: "始终萦绕心头的问题：科技与人类，究竟会融合到什么程度？",
        },
        {
          id: "jogos",
          label: "游戏",
          blurb:
            "《Project Zomboid》、《Vintage Story》，还有一个在业余时间精心打磨的《Ultima Online》角色。3500多个小时都在练习在压力下解决问题 —— 大多数是虚拟世界里的。",
        },
      ],
    },
    sobreGate: {
      title: "迷雾挡住了你",
      subtitle: "答对问题即可再获得3分钟。",
      placeholder: "你的答案",
      submit: "提交",
      wrong: "这次不对，再试一次。",
      questions: [
        { id: "cidade", q: "Geraldo住在哪个城市？", answers: ["natal"] },
        {
          id: "persona",
          q: "Geraldo的内容创作者身份叫什么名字？",
          answers: ["oquasi"],
        },
        {
          id: "jogo",
          q: "Geraldo玩了超过一千小时的是哪款游戏？",
          answers: ["project zomboid", "zomboid"],
        },
        {
          id: "certificacao",
          q: "除了SCRUM Master，Geraldo还持有哪个认证？",
          answers: ["six sigma", "six sigma yellow belt", "sixsigma"],
        },
        { id: "linguagem", q: "UZIr模组是用什么语言编写的？", answers: ["lua"] },
        {
          id: "framework",
          q: "这个网站是用什么框架搭建的？",
          answers: ["nextjs", "next"],
        },
        {
          id: "empresa",
          q: "Geraldo在哪家电信公司工作时间最长？",
          answers: ["teleperformance"],
        },
      ],
    },
    contact: {
      talk: "聊一聊",
      pillLabel: "联系我",
      chooseIntro: "你可以直接给我写信，也可以让我把联系方式发给你。",
      writeHere: "在这里写留言",
      requestInfo: "索取联系方式",
      back: "← 返回",
      iAmLabel: "我是 / 我代表：",
      iAmPlaceholder: "姓名 / 公司 / 项目",
      dateLabel: "联系时间：",
      messageLabel: "留言",
      messagePlaceholder: "你想和我聊的内容",
      send: "发送",
      requestIntro: "填写你的邮箱，我会把联系方式和我的PDF简历一起发给你。",
      emailPlaceholder: "you@email.com",
      requestSubmit: "索取联系方式",
      sent: "已收到。我会尽快通过你提供的方式回复你。",
      close: "关闭",
    },
  },
};
