# Contexto do Projeto — CurriculoGeraldoNeto

> Este arquivo existe pra que qualquer sessão (mesmo interrompida, mesmo
> com perda de contexto de conversa) consiga retomar o trabalho sabendo
> exatamente o que já existe, como funciona, e o que falta. Regra: toda
> mudança relevante ganha uma linha no Changelog no fim deste arquivo,
> e a seção do "universo" correspondente é atualizada se o status mudou.
>
> Antes de editar qualquer página, leia a seção dela aqui E rode
> `git pull` — não confie só na memória da conversa.

## Sistemas transversais (afetam todas as páginas)

- **LanguageProvider** (`src/components/LanguageProvider.tsx`) — contexto
  global de idioma (PT/EN/ZH), persiste em localStorage. Textos ficam em
  `src/lib/translations.ts`.
- **Topbar** (`src/components/Topbar.tsx`) — nav fixa com indicador líquido,
  seletor de idioma.
- **RubberBandGate** (`src/components/RubberBandGate.tsx`) — mola elástica
  no topo/fim do scroll; insistir navega pra `prevHref`/`nextHref`. Cadeia
  atual: Início → Tecnologia → Gestão → Curriculum Vitae → Sobre → Início
  (ciclo fechado).
- **PageTransition** (`src/components/PageTransition.tsx`) — transição de
  "virar página" (rotateY 3D) entre rotas.
- **ContactPopup** (`src/components/ContactPopup.tsx`) — pill de contato
  que nasce do scroll, expande em card com 2 rotas (mensagem direta /
  solicitar contato). Envio ainda é mock (Sprint 2: integração real).
- **Sistema de vidro** (`globals.css`, classe `.glass`) — Liquid Glass:
  blur 34px, saturação 200%, `--glass-bg` translúcido. Elementos glass
  dentro de ancestrais com `transform` (RubberBandGate, PageTransition)
  precisam de `[transform:translateZ(0)] isolate` pra o blur renderizar
  certo — bug já mordido duas vezes, sempre aplicar em glass novo.

## Universo: Início — `/` (`src/app/page.tsx`)

**Status:** conteúdo final, texto revisado com o usuário parágrafo a
parágrafo. Storytelling: convite → ONG 2011 → escala operacional →
quote → formação/IA. 3 cards de trilha (Tecnologia, Gestão, Fora do
expediente/oQuasi) com entrada saltando + hover de vidro. Números
animados (1.400 pessoas, 94%+ KPI, 15 anos) reiniciam a cada 15s
visíveis.

## Universo: Tecnologia — `/tecnologia`

**Status:** conteúdo final. Formação (Sistemas + Economia) + marquee de
stack real + 7 cards de portfólio (CurriculoGeraldoNeto, UZIr+Companion,
QuasimoDOVS-Clock, NowApocalypse, moderaIA, ThePHPLogin, AllVueJs) com
links reais do GitHub. Fundo exclusivo dessa página: `CodeBackdrop.tsx`
— código sintaticamente colorido (VS Code Dark+) com deriva lenta +
100 easter eggs sorteados (6 por carregamento, só em `lg:` pra cima).

## Universo: Gestão — `/gestao`

**Status:** conteúdo final. Timeline de 4 cargos (Teleperformance x3 +
QuasiUbi CEO), certificações (SCRUM Master, Six Sigma), números de prova
(1.400 pessoas, 94%+ KPI, 8+ anos Teleperformance). **Não** inclui as
experiências de vendas (Oi Telecom) nem TI de suporte — essas foram
deliberadamente removidas e foram pro Curriculum Vitae.

## Universo: Curriculum Vitae — `/experiencias` (nome no menu, rota não trocada)

**Status:** conteúdo em modo "anotação bruta" — 7 experiências que não
cabem em Gestão/Tecnologia (Itautec, Oi Telecom PF, Oi Telecom PJ, ACOM,
Cabo Telecom, TecnoTech, JMTweb), lista cronológica simples, sem
storytelling nem glass pesado ainda. **Pendência conhecida:** redesenho
narrativo mais forte, e possível troca de rota pra `/curriculo` — ambos
combinados como "revisitar depois", ainda não feito.

## Universo: Sobre mim — `/sobre`

**Status:** em iteração ativa (é o mais mexido/instável dos 5). Conceito:
sala escura "dentro da cabeça" — vídeo do cérebro (`/public/media/
cerebro-cerebrando.mp4`) em loop, cobrindo a tela inteira (fundo de
verdade, não elemento contido). 7 raios de luz entrando por cima/lados,
quase invisíveis por padrão, clareiam com varredura "amanhecer" ao
ativar (hover no desktop, toque no mobile). Bolinha de cada tema:
preta/contorno branco em repouso, acende em cor neon pastel (uma por
tema, ordem do arco-íris) ao ativar. Painel de conteúdo do tema ativo é
um **portal fixo na base da tela** (`ActiveThemePanel`, via
`createPortal` pro `document.body`) — decisão deliberada: ancorar embaixo
de cada ponto é frágil perto das bordas (pontos a 82%/74%/16% estouravam
a largura no mobile).

**SessionGate** (`src/components/SessionGate.tsx`): brincadeira de sessão
de 3 minutos por visita nessa página — expira, expulsa pra Início;
tentar voltar mostra névoa + pergunta sobre o site; acertar libera mais
3 minutos. Persiste expiração em localStorage.

**Pendências conhecidas nessa página:**
- Vídeo estava invisível no mobile (object-cover cortava demais em tela
  retrato + blend mode escondia o conteúdo) — corrigido pra
  `object-contain` no mobile, sem depender de blend mode.
- Sua foto (`/public/media/geraldo-neto.jpg`) já está no repo, mas
  **não está sendo usada em lugar nenhum ainda** — combinamos usar
  quando ele/ela decidir onde.
- Conteúdo dos 7 temas é genérico ("aprofundamos depois", palavras dele).

## Universo: oQuasi — `/oquasi`

**Status:** stub simples, sem a experiência de "mergulho"/portal completa
(isso é o Epic 7 do backlog original, ainda não começado).

## Pendências gerais do backlog (fora dos universos acima)

- PDF do currículo pra download (ATS-otimizado) — não iniciado.
- Envio real do formulário de contato (hoje é mock) — Sprint 2.
- i18n: ZH usado é Mandarim **Simplificado** (padrão assumido).

---

## Changelog (mais recente primeiro)

- **fc74d38** — feat: delay do sangramento reduzido pra 10s; contagem
  regressiva com números gigantes (3,2,1) nos últimos 3s antes do
  redirect.
- **53f7a37** — fix CRÍTICO: validação do mini-jogo aceitava qualquer coisa
  (inclusive vazio) em perguntas com resposta numérica — o regex de
  normalização apagava dígitos, então "4", "5" e "" todos viravam a
  mesma string vazia e combinavam entre si. Trocado por Unicode
  property escapes (`\p{L}\p{N}`), que de quebra também corrige
  suporte a respostas em 中文.
- **8b6f82c** — fix: sangramento dá 25s pra ler antes do redirect (vermelho
  sobe em 2.5s, segura o resto); cronômetro de 3min vira portal fixo;
  pontos de tema redistribuídos (container 150vh) — todos abaixo do
  painel do título, aceitando cortar mais o cérebro na 1ª tela.
- **f1b9501** — feat: escalada do mini-jogo (SessionGate) — erro 1: névoa
  tempestuosa/escura + pergunta mais fácil + flash; erro 2: tela sangra
  vermelho + aviso + expulsão + castigo de 3min (nav "Sobre mim" some,
  novo `src/lib/sobreLock.ts` compartilhado com a Topbar); fim do
  castigo volta ao estado normal.
- **0ddf618** — fix: vídeo volta pra object-cover (object-contain causava
  letterbox preto gigante no mobile, vídeo é landscape); painel do
  título compactado no mobile (ocupava espaço demais, escondia a cena).
- **6198950** — fix: pontos de tema e raios da Sobre empurrados pra baixo
  (hotspotTop +12/+14 pontos percentuais) — sobrepunham o painel do
  título antes.
- **3b4c81a** — fix: vídeo do cérebro invisível no mobile (object-contain
  + sem blend mode); painel de tema vira portal fixo na base (antes
  ancorado por ponto, estourava a tela perto das bordas); overflow-x
  travado globalmente.
- **07422e1** — feat: bolinhas de tema com cor neon pastel por tema;
  sistema de sessão de 3 minutos (SessionGate) na página Sobre.
- **3ad6a99** — feat: cena da página Sobre vira fundo de tela cheia
  (edge-to-edge); raios de luz com efeito de varredura "amanhecer".
- **c90df2c** — feat: redesenho de Sobre — cena "sala escura", vídeo do
  cérebro + raios de luz + hover-dropdown (substituiu o MindScape,
  removido).
- **15d606c** — feat: Sobre vira cena imersiva "dentro da cabeça" com
  7 pontos clicáveis (MindScape, depois substituído).
- **caf5e37** — feat: pool de 100 piadas nos easter eggs da Tecnologia,
  sorteio de 6 por carregamento.
- **c144237** — feat: glass mais opaco/líquido; easter eggs fixos na
  Tecnologia (versão anterior às 100 piadas).
- **906fe43** — feat: fundo de tela de IDE (CodeBackdrop) na Tecnologia.
- **f9a9103** — feat: conteúdo real de Tecnologia (formação, stack,
  7 cards de portfólio).
- **6e8ba88** / **3c6d074** — feat/fix: experiências da Oi Telecom
  adicionadas e depois removidas da Gestão (foram pro CV).
- **d4d8c62** — feat: conteúdo real de Gestão (timeline de cargos).
- **f76907b** — feat: sistema de tradução PT/EN/ZH funcional em todo o
  site.
- **86b68fe** — fix: bug de compositing da topbar (glass sem blur,
  causado pelo contexto 3D da transição de página); contador reinicia
  a cada 15s; cards de trilha com bounce + hover.
- **c0629a8** — feat: terceiro card "Fora do expediente" (oQuasi); mola
  elástica bidirecional entre todas as páginas.
- Commits anteriores (Sprint 1): setup do projeto, design system
  (Editorial + Liquid Glass), Topbar, ContactPopup, home inicial,
  animações (motion), deploy Vercel linkado ao GitHub.
