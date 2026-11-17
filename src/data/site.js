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
