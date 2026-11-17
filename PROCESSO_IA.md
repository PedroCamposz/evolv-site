# Registro do processo com IA

Ferramenta utilizada: **Claude (Anthropic)**
Fluxo seguido: ideia → protótipo → código → ajustes → entrega

> Os campos marcados com ✍️ devem ser preenchidos por mim, com minhas palavras, depois de revisar cada etapa.

---

## Etapa 1 — Estrutura do projeto e página Início

### Prompt enviado

> Tenho uma atividade: criar a página inicial do meu PFC (EVOLV, plataforma de quizzes gamificados), moderna e bem estruturada, com no mínimo 5 páginas, em React, publicada no GitHub e na Vercel.
> Quero 6 páginas: Início, O Projeto, Funcionalidades, Tecnologias, Equipe e Documentação. Repositório separado do sistema. Faça em etapas para eu revisar cada uma. Nesta etapa: estrutura do projeto, rotas, cabeçalho, rodapé e a página Início completa, seguindo a identidade roxa do sistema.

### O que a IA gerou

- Projeto Vite + React com React Router (6 rotas + página 404)
- `Layout` com cabeçalho fixo, menu responsivo (vira menu "hambúrguer" no celular) e rodapé
- Página Início: hero com ilustração do resultado do quiz feita em CSS, faixa de números, "Como funciona", três perfis e chamada final
- Textos centralizados em `src/data/site.js`
- `vercel.json` para as rotas funcionarem na Vercel

### Ajustes feitos durante a geração

- A ilustração mostrava "+35 XP" para 8 acertos, mas pela regra do EVOLV (10 XP por concluir + 5 por acerto) o certo é **+50 XP**. A barra de nível foi ajustada para 70% (370 XP dentro do nível 4, que vai de 300 a 399).
- O número "100% alinhado à LGPD" foi trocado por "privacidade desde o projeto", porque não dá para afirmar 100%.
- No celular, as medalhas flutuantes cobriam o texto do cartão; foram reposicionadas.

### Minha revisão ✍️

- O que eu li e entendi do código:
- O que eu testei:
- O que pedi para mudar:
- O que aprendi:

---

## Etapa 2 — Páginas O Projeto, Funcionalidades, Tecnologias, Equipe e Documentação

### Prompt enviado

> Agora faça as outras 5 páginas (O Projeto, Funcionalidades, Tecnologias, Equipe e Documentação), usando como base o conteúdo da monografia e da ficha do PFC.

### O que a IA gerou

- **O Projeto:** problema, pergunta de pesquisa, objetivo geral e específicos, escopo (o que entra e o que fica fora) e cronograma em linha do tempo — textos tirados da monografia e da ficha
- **Funcionalidades:** abas por perfil (Aluno, Professor, Administrador) usando `useState`, regras de gamificação com exemplo de cálculo e as 4 conquistas
- **Tecnologias:** diagrama das camadas (front-end → API REST → back-end → banco), ferramentas e cartões de segurança/LGPD
- **Equipe:** cartões com avatar de iniciais (gerado por uma função), link do GitHub e o orientador
- **Documentação:** links (repositório, Figma, este site), perguntas frequentes em acordeão com `useState` e as referências em ABNT
- Componente `CabecalhoPagina` reaproveitado no topo de todas as páginas internas
- Todos os textos novos adicionados em `src/data/site.js`

### Ajustes feitos durante a geração

- A fórmula do nível (XP ÷ 100 + 1) dava a entender 3,7 + 1 no exemplo de 370 XP. Foi deixado explícito que é **divisão inteira** (370 ÷ 100 = 3, nível 4).
- A resposta sobre IA no FAQ afirmava "dentro do limite de 40%"; foi trocada por uma frase que não afirma um percentual.

### Minha revisão ✍️

- O que eu li e entendi do código:
- O que eu testei:
- O que pedi para mudar:
- O que aprendi:
