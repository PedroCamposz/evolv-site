# EVOLV — Site do Projeto

Site institucional do **EVOLV**, uma plataforma web de quizzes educacionais gamificados desenvolvida como Projeto Final de Curso (PFC) de Sistemas de Informação na Universidade de Mogi das Cruzes (UMC), em 2026.

- **Site publicado:** _(link da Vercel)_
- **Sistema EVOLV (código):** https://github.com/PedroCamposz/evolv

## Páginas

| Rota | Página |
|---|---|
| `/` | Início |
| `/projeto` | O Projeto |
| `/funcionalidades` | Funcionalidades |
| `/tecnologias` | Tecnologias |
| `/equipe` | Equipe |
| `/documentacao` | Documentação |

## Tecnologias

- React 19 + Vite
- React Router (navegação entre páginas)
- React Icons
- CSS puro com variáveis (sem framework de estilo)
- Hospedagem: Vercel

## Como rodar localmente

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/   # Header, Footer, Layout, Logo
├── pages/        # uma página por arquivo
├── data/site.js  # textos, menu e links do site
├── App.jsx       # rotas
├── main.jsx      # ponto de entrada
└── index.css     # estilos globais
```

## Publicação na Vercel

1. Envie o projeto para um repositório no GitHub.
2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite sozinha (build: `npm run build`, saída: `dist`).
4. O arquivo `vercel.json` redireciona todas as rotas para o `index.html`, para que recarregar uma página como `/equipe` não dê erro 404.

## Uso de Inteligência Artificial

Este site foi desenvolvido com apoio de IA (Claude, da Anthropic), como proposto na atividade. O processo de solicitação, revisão e correção está registrado em [`PROCESSO_IA.md`](PROCESSO_IA.md).

## Autores

- Pedro Henrique Campos
- Matheus Gende Rodrigues

Orientador: Prof. Oscar Alves Evangelista
