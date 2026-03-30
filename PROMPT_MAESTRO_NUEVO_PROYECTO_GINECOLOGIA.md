# Prompt Maestro: Nuevo Proyecto Ginecología (Astro + Sanity)

Usa este prompt tal cual con un agente técnico para crear un proyecto nuevo desacoplado de Erislaine.

```text
Quiero que me prepares un proyecto NUEVO llamado `angel-landing-page` en:

/Users/andy/WebstormProjects/angel-landing-page

Objetivo:
Crear una landing + blog para un doctor/a ginecólogo/a usando Astro + Sanity + pnpm workspaces, tomando como referencia la arquitectura del proyecto `erislaine-landing-page` pero SIN reutilizar configuración de producción actual.

Requisitos obligatorios:

1) Proyecto totalmente desacoplado del actual
- No usar ni copiar IDs/hosts/env de Erislaine.
- Crear configuración nueva para Sanity project y Studio host.
- Nuevo repositorio Git independiente (historial limpio).
- No compartir webhooks ni deployment hooks del proyecto viejo.

2) Estructura técnica
- Mantener monorepo con:
  - `astro-app/` (frontend Astro)
  - `studio/` (Sanity Studio)
- Scripts pnpm equivalentes (`dev`, `build`, `check`, `seed`).
- Tipado TS y consultas GROQ para landing + posts.

3) Dominio de contenido (ginecología)
- Adaptar schema `landingPage` a ginecología:
  - Hero, servicios, sobre doctora/doctor, contacto/agenda, SEO.
- Mantener blog editable en Sanity.
- Seed inicial con contenido de ejemplo ginecológico (no lorem genérico).

4) Variables de entorno nuevas (sin valores heredados)
- `astro-app/.env.example`:
  - PUBLIC_SITE_URL
  - PUBLIC_SANITY_PROJECT_ID
  - PUBLIC_SANITY_DATASET
  - PUBLIC_STUDIO_URL
- `studio/.env.example`:
  - SANITY_STUDIO_PROJECT_ID
  - SANITY_STUDIO_DATASET
  - SANITY_STUDIO_STUDIO_HOST

5) Limpieza de identidad anterior
- Eliminar todo texto/marca/referencias a “Erislaine”.
- Renombrar package names y metadatos al nuevo proyecto.
- Verificar que no queden URLs, IDs o nombres anteriores en código.

6) Salida esperada
- Lista de archivos creados/modificados.
- Comandos exactos para:
  - instalar dependencias
  - correr local (`pnpm dev`)
  - deploy Studio
  - deploy Cloudflare Pages
- Checklist final de validación:
  - build pasa
  - studio levanta
  - landing consume el NUEVO dataset
  - webhook (opcional) apunta al NUEVO proyecto

Restricciones:
- No toques ni edites `/Users/andy/WebstormProjects/erislaine-landing-page`.
- Trabaja solo en `/Users/andy/WebstormProjects/angel-landing-page`.
- Si falta dato (nombre final del doctor, colores, copy), usa placeholders claros y centralizados para reemplazo rápido.
```

## Comandos de validación sugeridos (post-implementación)

```bash
cd /Users/andy/WebstormProjects/angel-landing-page
rg -n "kbufg24l|erislaine|erislaine-studio|PUBLIC_SANITY_PROJECT_ID=\"kbufg24l\"|SANITY_STUDIO_PROJECT_ID=\"kbufg24l\"" .
pnpm check
pnpm build
git remote -v
```

## Criterios de aceptación

- No existen referencias a IDs/hosts de Erislaine en el nuevo proyecto.
- `astro-app` y `studio` apuntan al mismo project/dataset nuevo.
- `pnpm check` y `pnpm build` pasan.
- El repositorio remoto del nuevo proyecto no coincide con el remoto de Erislaine.
