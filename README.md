# Angel Landing Page (Astro + Sanity + pnpm)

Landing + blog para consulta de ginecologia, con contenido editable en Sanity Studio.

## Stack

- Astro (frontend)
- Sanity Studio (CMS)
- TypeScript
- GROQ
- pnpm workspaces

## Estructura

```txt
.
├── astro-app/
├── studio/
├── package.json
└── pnpm-workspace.yaml
```

## Variables de entorno

### `astro-app/.env`

```bash
PUBLIC_SITE_URL="https://tu-dominio.com"
PUBLIC_SANITY_PROJECT_ID="your-project-id"
PUBLIC_SANITY_DATASET="production"
PUBLIC_STUDIO_URL="http://localhost:3333"
```

### `studio/.env`

```bash
SANITY_STUDIO_PROJECT_ID="your-project-id"
SANITY_STUDIO_DATASET="production"
SANITY_STUDIO_STUDIO_HOST=""
```

## Instalacion y desarrollo

```bash
pnpm install
pnpm dev
```

- Astro: [http://localhost:4321](http://localhost:4321)
- Sanity Studio: [http://localhost:3333](http://localhost:3333)
- Ruta desde Astro al panel: [http://localhost:4321/studio](http://localhost:4321/studio)

## Seed de contenido inicial

Incluye:

- 1 `landingPage` (hero, servicios, sobre doctora, agenda y SEO)
- 1 `siteSettings`
- 2 `category`
- 2 `author`
- 3 `post`

Ejecuta:

```bash
pnpm seed
```

> Requiere login en Sanity CLI (`sanity login`) porque usa `--with-user-token`.

## Scripts utiles

```bash
pnpm dev
pnpm dev:app
pnpm dev:studio
pnpm build
pnpm build:app
pnpm build:studio
pnpm preview
pnpm check
pnpm seed
```

## Deploy Studio

```bash
cd studio
pnpm deploy
```

## Deploy Cloudflare Pages

```bash
cd astro-app
pnpm cf:deploy
```
