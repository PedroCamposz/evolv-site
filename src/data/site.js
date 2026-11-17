// Conteúdo do site concentrado em um só lugar.
// Para mudar um texto, link ou item de menu, altere aqui — não nos componentes.

export const links = {
  github: 'https://github.com/PedroCamposz/evolv',
  // Preencha quando o sistema estiver publicado (Render ou outra hospedagem)
  sistema: '',
}

export const menu = [
  { rota: '/', rotulo: 'Início' },
  { rota: '/projeto', rotulo: 'O Projeto' },
  { rota: '/funcionalidades', rotulo: 'Funcionalidades' },
  { rota: '/tecnologias', rotulo: 'Tecnologias' },
  { rota: '/equipe', rotulo: 'Equipe' },
  { rota: '/documentacao', rotulo: 'Documentação' },
]

export const numeros = [
  { valor: '3', rotulo: 'perfis de acesso' },
  { valor: '13', rotulo: 'requisitos funcionais' },
  { valor: '4', rotulo: 'tipos de ranking' },
  { valor: 'LGPD', rotulo: 'privacidade desde o projeto' },
]

export const passos = [
  {
    titulo: 'O professor cria',
    texto: 'Monta o quiz, define o limite de tentativas e o tempo por questão, e publica para a turma.',
  },
  {
    titulo: 'O aluno joga',
    texto: 'Responde uma questão por vez, vê o resultado na hora e ganha XP a cada tentativa.',
  },
  {
    titulo: 'Todos acompanham',
    texto: 'Dashboards mostram a evolução do aluno e os erros mais comuns para o professor agir.',
  },
]

export const perfis = [
  {
    nome: 'Aluno',
    resumo: 'Responde quizzes, acumula XP, sobe de nível, disputa o ranking e desbloqueia conquistas.',
  },
  {
    nome: 'Professor',
    resumo: 'Cria e publica quizzes, controla tentativas e tempo, e analisa onde a turma mais erra.',
  },
  {
    nome: 'Administrador',
    resumo: 'Gerencia usuários, gera senhas temporárias e acompanha a auditoria do sistema.',
  },
]

// ---------------------------------------------------------
// Página O Projeto (textos baseados na monografia e na ficha do PFC)
// ---------------------------------------------------------
export const projeto = {
  problema:
    'Muitos alunos têm dificuldade para acompanhar a própria evolução e perceber quais conteúdos precisam melhorar. Para os professores, também é difícil reunir os resultados das atividades e identificar quais questões a turma mais erra — apenas visualizar as notas não mostra onde estão as dificuldades.',
  pergunta:
    'Como desenvolver uma plataforma web educacional que reúna quizzes, correção automática, gamificação e análise de desempenho, ajudando os estudantes a acompanhar sua evolução e os professores a identificar possíveis dificuldades de aprendizagem?',
  objetivoGeral:
    'Desenvolver uma plataforma web educacional gamificada para criar e realizar quizzes, corrigir as respostas automaticamente, acompanhar o desempenho dos alunos e ajudar os professores a identificar dificuldades de aprendizagem.',
  objetivosEspecificos: [
    'Criar login e controle de acesso para alunos, professores e administradores.',
    'Permitir que professores criem e publiquem quizzes e que os alunos possam realizá-los.',
    'Corrigir os quizzes automaticamente e calcular resultados, XP, níveis, ranking e conquistas.',
    'Criar dashboards e históricos para alunos e professores acompanharem o desempenho.',
    'Identificar as questões e conteúdos com maior número de erros.',
    'Aplicar segurança, LGPD, testes, versionamento e documentação durante o desenvolvimento.',
  ],
  escopoDentro: [
    'Cadastro, login e três perfis de acesso',
    'Criação, publicação e realização de quizzes',
    'Correção automática, resultados e histórico',
    'XP, níveis, ranking e conquistas',
    'Dashboards e análise de erros',
    'Auditoria, segurança e LGPD',
  ],
  escopoFora: [
    'Geração de questões por inteligência artificial',
    'Aplicativo mobile nativo',
    'Integração com outros sistemas educacionais',
  ],
}

export const cronograma = [
  { periodo: 'Ago/2026', etapa: 'Definição do problema', entrega: 'Contexto, objetivos e limites da primeira versão' },
  { periodo: 'Ago–Set/2026', etapa: 'Requisitos', entrega: 'Requisitos funcionais e não funcionais, histórias de usuário' },
  { periodo: 'Set/2026', etapa: 'Modelagem e protótipo', entrega: 'UML, DER, arquitetura e protótipo no Figma' },
  { periodo: 'Set–Out/2026', etapa: 'Implementação — ciclo 1', entrega: 'Acesso, perfis, quizzes, questões e persistência' },
  { periodo: 'Out–Nov/2026', etapa: 'Implementação — ciclo 2', entrega: 'Resultados, gamificação, dashboards e auditoria' },
  { periodo: 'Nov/2026', etapa: 'Testes e validação', entrega: 'Testes unitários, integração e avaliação' },
  { periodo: 'Nov–Dez/2026', etapa: 'Deploy e documentação', entrega: 'Versão final, manual e monografia' },
  { periodo: 'Dez/2026', etapa: 'Apresentação final', entrega: 'Slides, vídeo e demonstração' },
]

// ---------------------------------------------------------
// Página Funcionalidades
// ---------------------------------------------------------
export const funcionalidades = {
  Aluno: [
    { titulo: 'Quizzes disponíveis', texto: 'Lista os quizzes publicados, com tela de instruções antes de começar.' },
    { titulo: 'Uma questão por vez', texto: 'Foco total na pergunta. Com tempo definido, não é possível voltar e tempo esgotado conta como erro.' },
    { titulo: 'Resultado na hora', texto: 'Correção automática com anel de pontuação, acertos e XP ganho.' },
    { titulo: 'Desempenho e histórico', texto: 'Indicadores próprios e o histórico de todas as tentativas.' },
    { titulo: 'Ranking', texto: 'Pódio com classificação geral, mensal, semestral e anual.' },
    { titulo: 'Conquistas', texto: 'Medalhas com barra de progresso até o desbloqueio.' },
  ],
  Professor: [
    { titulo: 'Meus quizzes', texto: 'Cartões com filtros por status: publicado, rascunho e encerrado.' },
    { titulo: 'Criação de quizzes', texto: 'Cadastro de questões, alternativas, resposta correta e categoria.' },
    { titulo: 'Tentativas e tempo', texto: 'Limite de 1 a 10 tentativas (ou ilimitadas) e tempo por questão de 15 s a 3 min.' },
    { titulo: 'Publicar e encerrar', texto: 'Controle de quando o quiz fica disponível para a turma.' },
    { titulo: 'Análise de erros', texto: 'Tela dedicada para ver as questões e conteúdos que a turma mais erra.' },
    { titulo: 'Dashboard', texto: 'Números principais e gráficos de desempenho da turma.' },
  ],
  Administrador: [
    { titulo: 'Gestão de usuários', texto: 'Busca, filtros, paginação e cadastro de novos usuários.' },
    { titulo: 'Senha temporária', texto: 'Gera senha válida por 1, 24 ou 72 horas, com troca obrigatória no primeiro acesso.' },
    { titulo: 'Dados completos', texto: 'Visualização detalhada de cada usuário cadastrado.' },
    { titulo: 'Auditoria', texto: 'Registro das ações relevantes de administração e segurança.' },
    { titulo: 'Dashboard próprio', texto: 'Visão geral do uso da plataforma.' },
    { titulo: 'Termos e privacidade', texto: 'Aceite dos Termos de Uso e da Política de Privacidade no primeiro acesso.' },
  ],
}

export const regrasGamificacao = [
  { valor: '+10 XP', texto: 'por concluir um quiz' },
  { valor: '+5 XP', texto: 'por acerto, em toda tentativa' },
  { valor: 'XP ÷ 100 + 1', texto: 'fórmula do nível (divisão inteira)' },
]

export const conquistas = [
  { icone: '🎯', nome: 'Primeiros passos', texto: 'Concluir o primeiro quiz' },
  { icone: '🏆', nome: 'Gabaritou!', texto: 'Acertar todas as questões de um quiz' },
  { icone: '📚', nome: 'Dedicado', texto: 'Concluir 10 quizzes diferentes' },
  { icone: '🚀', nome: 'Em evolução', texto: 'Chegar ao nível 5' },
]

// ---------------------------------------------------------
// Página Tecnologias
// ---------------------------------------------------------
export const camadas = [
  { nome: 'Front-end', tecnologias: 'React · Vite · JavaScript · HTML5 · CSS3', papel: 'Telas, navegação, formulários e dashboards responsivos.' },
  { nome: 'API REST', tecnologias: 'JSON · HTTP · JWT', papel: 'Comunicação entre a interface e o servidor, com token em cada requisição.' },
  { nome: 'Back-end', tecnologias: 'Java · Spring Boot · Spring Security', papel: 'Regras de negócio, correção, gamificação, permissões e auditoria.' },
  { nome: 'Banco de dados', tecnologias: 'PostgreSQL', papel: 'Usuários, quizzes, respostas, resultados, XP, conquistas e logs.' },
]

export const ferramentas = [
  { nome: 'Git e GitHub', uso: 'Versionamento e colaboração' },
  { nome: 'GitHub Projects', uso: 'Gestão das tarefas com Scrum' },
  { nome: 'Figma', uso: 'Protótipo de interface' },
  { nome: 'JUnit', uso: 'Testes unitários das regras' },
  { nome: 'UML e DER', uso: 'Modelagem do sistema e dos dados' },
  { nome: 'VS Code', uso: 'Ambiente de desenvolvimento' },
]

export const seguranca = [
  { titulo: 'Senhas com BCrypt', texto: 'As senhas nunca são guardadas em texto puro.' },
  { titulo: 'Autenticação com JWT', texto: 'Cada requisição carrega um token que identifica o usuário.' },
  { titulo: 'Acesso por perfil', texto: 'Aluno não acessa funções de professor nem de administrador.' },
  { titulo: 'Auditoria', texto: 'Ações importantes ficam registradas com o usuário responsável.' },
  { titulo: 'LGPD', texto: 'Sem dados sensíveis, com Termos, Política de Privacidade e consentimento.' },
  { titulo: 'Validações', texto: 'Dados conferidos no front-end e no back-end.' },
]

// ---------------------------------------------------------
// Página Equipe
// ---------------------------------------------------------
export const equipe = [
  {
    nome: 'Pedro Henrique Campos',
    papel: 'Desenvolvedor',
    texto: 'Aluno de Sistemas de Informação na UMC.',
    github: 'https://github.com/PedroCamposz',
  },
  {
    nome: 'Matheus Gende Rodrigues',
    papel: 'Desenvolvedor',
    texto: 'Aluno de Sistemas de Informação na UMC.',
    github: 'https://github.com/genderodriguesmatheus-hub',
  },
]

export const orientador = {
  nome: 'Prof. Oscar Alves Evangelista',
  papel: 'Orientador',
  texto: 'Professor responsável pela orientação do Projeto Final de Curso.',
}

// ---------------------------------------------------------
// Página Documentação
// ---------------------------------------------------------
export const recursos = [
  { titulo: 'Repositório do sistema', texto: 'Código do front-end (React) e do back-end (Spring Boot).', url: 'https://github.com/PedroCamposz/evolv' },
  { titulo: 'Protótipo no Figma', texto: 'Telas desenhadas antes da implementação.', url: 'https://www.figma.com/design/ABJ9zeGMQszU8ovk69MgJv/Evolv---tcc' },
  { titulo: 'Repositório deste site', texto: 'Código desta página, com o registro do uso de IA.', url: 'https://github.com/PedroCamposz/evolv-site' },
]

export const referencias = [
  'BODILY, R.; VERBERT, K. Review of Research on Student-Facing Learning Analytics Dashboards and Educational Recommender Systems. IEEE Transactions on Learning Technologies, 2017.',
  'BRASIL. Lei nº 13.709, de 14 de agosto de 2018. Lei Geral de Proteção de Dados Pessoais (LGPD).',
  'CASTILHO, E. P. A.; HAYDU, V. B. Utilização do Kahoot! em procedimentos de ensino: uma revisão sistemática da literatura. Revista Portuguesa de Educação, v. 37, n. 1, 2024.',
  'FIELDING, R. T. Architectural Styles and the Design of Network-based Software Architectures. 2000. Tese (Doutorado) — University of California, Irvine, 2000.',
  'FOWLER, M. Patterns of Enterprise Application Architecture. Boston: Addison-Wesley, 2002.',
  'INÁCIO, E. I. S.; ALCÂNTARA JÚNIOR, L. Q. A implementação da LGPD nas instituições de ensino: desafios e responsabilidades. Repositório IFAP, 2025.',
  'NOVAES, R. P.; OLIVEIRA, A. M.; SILVA, R. L. S. O uso da gamificação como prática pedagógica no processo de ensino e aprendizagem da Língua Portuguesa através do GCompris. Lynx, v. 2, 2022.',
  'VENÂNCIO, L. S.; MAIA, T. L.; MAIA, V. M. A gamificação como recurso metodológico no processo de ensino-aprendizagem. @rquivo Brasileiro de Educação, v. 11, n. 20, p. 324-343, 2023.',
  'VIEIRA, A. S. et al. O estado da arte das práticas de gamificação no processo de ensino e aprendizagem no Ensino Superior. Revista Brasileira de Ensino Superior, v. 4, n. 1, p. 5-23, 2018.',
]

export const perguntas = [
  {
    pergunta: 'O EVOLV é gratuito?',
    resposta: 'Sim. É um projeto acadêmico, desenvolvido como Projeto Final de Curso na UMC.',
  },
  {
    pergunta: 'Quem pode usar a plataforma?',
    resposta: 'Alunos, professores e administradores de instituições de ensino, cada um com seu perfil de acesso.',
  },
  {
    pergunta: 'Como os dados pessoais são tratados?',
    resposta: 'O sistema usa apenas nome e e-mail para identificação, não coleta dados sensíveis e segue os princípios da LGPD, com Termos de Uso e Política de Privacidade.',
  },
  {
    pergunta: 'Foi usada inteligência artificial no projeto?',
    resposta: 'Sim, como ferramenta de apoio. O uso está identificado na documentação, como pede a ficha do projeto.',
  },
]
