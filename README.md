# Erislaine Landing Page (Astro + Sanity + pnpm)

Base profesional para una landing page + blog administrable con Sanity Studio.

## Stack

- Astro (frontend)
- Sanity Studio (CMS)
- TypeScript
- GROQ
- Portable Text
- pnpm workspaces

## Estructura

```txt
.
├── astro-app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── blog/
│   │   │   ├── landing/
│   │   │   └── layout/
│   │   ├── layouts/
│   │   ├── lib/
│   │   │   ├── sanity/
│   │   │   └── utils/
│   │   ├── pages/
│   │   │   ├── blog/
│   │   │   │   ├── [slug].astro
│   │   │   │   └── index.astro
│   │   │   ├── index.astro
│   │   │   └── studio.astro
│   │   └── styles/
│   ├── astro.config.mjs
│   └── package.json
├── studio/
│   ├── scripts/
│   │   └── seed.ts
│   ├── src/
│   │   ├── schemaTypes/
│   │   │   ├── documents/
│   │   │   │   ├── author.ts
│   │   │   │   ├── category.ts
│   │   │   │   ├── landingPage.ts
│   │   │   │   ├── post.ts
│   │   │   │   └── siteSettings.ts
│   │   │   ├── objects/
│   │   │   │   └── blockContent.tsx
│   │   │   └── index.ts
│   │   └── structure.ts
│   ├── sanity.config.ts
│   └── package.json
├── package.json
└── pnpm-workspace.yaml
```

## Variables de entorno

### `astro-app/.env`

```bash
PUBLIC_SITE_URL="https://tu-dominio.com"
PUBLIC_SANITY_PROJECT_ID="tu-project-id"
PUBLIC_SANITY_DATASET="production"
PUBLIC_STUDIO_URL="http://localhost:3333"
```

### `studio/.env`

```bash
SANITY_STUDIO_PROJECT_ID="tu-project-id"
SANITY_STUDIO_DATASET="production"
SANITY_STUDIO_STUDIO_HOST=""
```

## Instalación y desarrollo

```bash
pnpm install
pnpm dev
```

- Astro: [http://localhost:4321](http://localhost:4321)
- Sanity Studio: [http://localhost:3333](http://localhost:3333)
- Ruta en Astro para acceder al panel: [http://localhost:4321/studio](http://localhost:4321/studio)

## Seed de contenido inicial

Incluye:

- 1 `landingPage`
- 1 `siteSettings`
- 2 `category`
- 2 `author`
- 3 `post`

Ejecuta:

```bash
pnpm seed
```

> Requiere sesión iniciada en Sanity CLI (`sanity login`) porque el script usa `--with-user-token`.

## Scripts útiles

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

## Flujo editorial (cliente)

1. Abrir Sanity Studio.
2. Editar `Landing Page` o `Posts`.
3. En posts: completar `title`, `slug`, `excerpt`, `publishedAt`, `author`, `category`, `coverImage`, `body`.
4. Publicar con `Publish`.

## Antes de desplegar en Netlify

1. Configura variables de entorno del frontend en Netlify (`PUBLIC_SITE_URL`, `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`, `PUBLIC_STUDIO_URL`).
2. Usa `astro-app` como base de build del frontend.
3. Verifica `pnpm build` sin errores.
4. Confirma que el contenido de Sanity está publicado (no draft).
5. Si vas a desplegar Studio por separado, ejecuta desde `studio`: `pnpm deploy`.

