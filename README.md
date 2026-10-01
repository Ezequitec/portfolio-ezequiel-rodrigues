# Portfólio — Ezequiel Rodrigues

Portfólio pessoal criado com Next.js, React, TypeScript e Tailwind CSS. Os cinco cases são projetos reais em produção; os impactos foram relatados qualitativamente, sem métricas quantitativas.

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura desta fase

- `src/app/page.tsx`: header, hero, ilustração dos módulos, processo, sobre e contato provisórios.
- `src/app/globals.css`: tokens visuais, animações leves, estados de foco, responsividade e suporte a movimento reduzido.
- `src/app/layout.tsx`: idioma e metadados iniciais.
- `src/data/projects.ts`: conteúdo dos cinco cases, sem nomes de empresas ou dados operacionais confidenciais.
- `src/app/projetos/[slug]/page.tsx`: página detalhada reutilizada pelos cases, com o status de produção e a ressalva sobre métricas.

As próximas fases podem separar conteúdo em `src/data/` e componentes em `src/components/` conforme as seções evoluírem.
