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

## Etapa 2 — _(próxima)_
