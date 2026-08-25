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
      experiencias: "Experiências",
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
      experiencias: "Experience",
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
      experiencias: "经历",
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
