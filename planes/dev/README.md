# Planes de desarrollo

Esta carpeta contiene planes de **funcionalidad, diseño y correcciones de bugs** del sitio. Antes de crear uno, lee `/AGENTS.md` (reglas globales) y este archivo.

## Cuándo crear un plan aquí

Crea un plan en `planes/dev/` cuando vas a:

- Añadir una feature nueva (catálogo, búsqueda, perfil, modo oscuro, etc.).
- Mejorar el diseño (nueva página, componente, layout, tipografía).
- Corregir un bug (404 roto, estilo inconsistente, build fallando).
- Modificar la estructura del proyecto, dependencias, o infra (Docker, nginx, scripts).

**No** crees un plan aquí para:

- Convertir un `Temas/` en curso → eso va en `planes/contenido/`.
- Cambios triviales (typo, un color suelto) → hazlo directo sin plan.

## Skills del agente

Este agente es el **mantenedor de la plataforma**. Debe demostrar dominio de las siguientes skills antes de ejecutar cambios.

### Stack

| Componente | Versión objetivo | Notas |
|---|---|---|
| **Astro** | 6.x (actual: 6.4.4) | Output estático. Content Collections con Zod, View Transitions, `getStaticPaths` para rutas dinámicas. |
| **Tailwind** | 4.x (actual: 4.3) | Sin `tailwind.config.js`. Plugin `@tailwindcss/vite`. Tema en `@theme {}` dentro de `src/styles/global.css`. |
| **TypeScript** | estricto | Tipar frontmatter, helpers de Content Collections, props de componentes. |
| **nginx** | alpine | Sirve `dist/` como archivos estáticos. Config en `nginx.conf` (raíz), copia a `/etc/nginx/conf.d/default.conf` en runtime. Escucha en `:8082`. |
| **Docker Compose** | v2 (plugin) | `docker compose` (sin guión). Compose v1 NO usar. Servicio `biblioteca`, puerto host `8082 → 8082` container. |
| **pnpm** | latest | Único package manager. Nunca `npm` ni `yarn`. `corepack enable` ya en el Dockerfile. |
| **Node** | 24 (runtime), ≥22.12.0 (engines en package.json) | Dockerfile usa `node:24-alpine`. |

**URL del sitio (producción):** `https://biblioteca.astillerodigital.com`
**Puerto dev (Astro):** `4321`
**Puerto producción (nginx):** `8082`

### Sistema visual (heredado de astillerodigital.com)

El sistema visual está definido como tokens en `src/styles/global.css` dentro del bloque `@theme {}`. **Siempre lee ese archivo antes de añadir estilos nuevos** — la fuente de verdad es el código, no esta documentación.

Tokens actuales (resumen; verificar en `src/styles/global.css` para valores exactos):

```css
@theme {
  /* Color */
  --color-accent: #cfab80;          /* gold/cream — solo para CTAs */
  --color-accent-hover: #d9bb96;
  --color-bg: #181818;              /* dark bg principal */
  --color-bg-elevated: #1f1f1f;     /* cards, modales */
  --color-bg-muted: #242424;        /* zonas de fondo secundario */
  --color-border: #2a2a2a;
  --color-text: #e8e8e8;            /* texto principal */
  --color-text-muted: #9a9a9a;      /* texto secundario */
  --color-danger: #d96b6b;

  /* Tipografía */
  --font-display: "Montserrat", ui-sans-serif, system-ui, sans-serif;  /* headings */
  --font-body: "Nunito", ui-sans-serif, system-ui, sans-serif;          /* body */

  /* Geometría */
  --radius-default: 4px;            /* inputs, botones, cards */
  --radius-sm: 2px;
  --radius-lg: 8px;                 /* modales, diálogos */
}
```

Reglas:

- **Dark mode first.** El sitio es oscuro por defecto; claro es opt-in (`color-scheme: dark` en `:root`).
- **Accent solo para CTAs y elementos interactivos.** No pintar backgrounds grandes con `#cfab80`.
- **Radius `default` (4px)** en inputs, botones, cards. `lg` solo en modales/diálogos.
- **Tipografía**: `--font-body` (Nunito) para cuerpo, `--font-display` (Montserrat) para headings.
- Si necesitas un valor que no está como token, **añádelo al `@theme {}` en `global.css` primero**, no lo hardcodees.
- **No dupliques tokens en componentes.** Usa siempre las variables CSS (`var(--color-accent)`, etc.) — Tailwind 4 las expone automáticamente como utilities.

### Estructura del proyecto

```
/                          ← raíz del repo
├── AGENTS.md              ← contrato global (raíz por auto-descubrimiento)
├── docker-compose.yml     ← stack de despliegue (puerto host 8082)
├── Dockerfile             ← multi-stage: build con node:24-alpine, runtime con nginx:alpine
├── nginx.conf             ← config nginx (escucha :8082, gzip, cache 1y, security headers)
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── astro.config.mjs
├── tsconfig.json
├── src/
│   ├── pages/             ← rutas (file-based)
│   ├── components/        ← componentes .astro (PascalCase)
│   ├── layouts/           ← layouts reutilizables
│   ├── styles/
│   │   └── global.css     ← tokens + directivas Tailwind 4
│   ├── content.config.ts  ← Zod schemas para Content Collections
│   └── content/
│       └── cursos/        ← cursos publicables (frontmatter validado)
├── planes/                ← directrices + planes (NUNCA público)
│   ├── contenido/
│   ├── dev/
│   └── categorias.md
├── Temas/                 ← vault Obsidian personal (NUNCA público)
└── public/                ← assets estáticos servidos tal cual
```

### Workflow obligatorio

1. **Lee el plan completo** antes de tocar archivos. Si el plan no existe, créalo primero.
2. **Verifica el estado actual** — `git status`, leer archivos relevantes, no asumas.
3. **Ejecuta los pasos** en orden. Si un paso falla, cancela y re-planifica.
4. **Verifica criterios de aceptación** — todos deben cumplirse.
5. **Documenta el resultado real** — añade sección "Resultado real" al plan con desviaciones, comandos ejecutados, evidencia.
6. **No commitees** — el dueño hace el commit.

### Pitfalls específicos del proyecto

- **Docker Compose v2**: usar `docker compose` (sin guión). `docker-compose` v1 NO está soportado.
- **Tailwind 4 no tiene `tailwind.config.js`.** El tema va en `src/styles/global.css` con `@theme {}`.
- **Content Collections requieren `src/content.config.ts`** (no `src/content/config.ts` como en versiones antiguas de Astro).
- **npm NO está disponible** por PEP 668. Usar `pnpm` o crear venv con `uv`.
- **El plan debe numerarse**: mira el último `NNN-` existente en `planes/dev/` antes de crear el siguiente.
- **Los wikilinks de Obsidian `[[X]]` NO se renderizan en Astro** — convertir a Markdown estándar `[X](ruta)` en la migración de contenido.
- **npm vs pnpm**: si clonas y haces `npm install`, el proyecto puede quedar inconsistente con `pnpm-lock.yaml`. Borrar `node_modules` y reinstalar con `pnpm`.

## Estructura de un plan

```
planes/dev/
└── NNN-slug-corto/
    ├── README.md   ← el plan (obligatorio)
    └── (opcional)  ← bocetos, comparaciones, código de prueba
```

- `NNN` = número incremental de 3 dígitos (`000`, `001`, `002`, …). Mira el último existente antes de numerar.
- `slug-corto` = kebab-case que describa la tarea en 2-4 palabras (`buscar-cursos`, `landing-hero-v2`).
- `README.md` (no `plan.md`) — así GitHub lo renderiza al entrar a la carpeta.

## Template del README.md

Copia y rellena:

```markdown
# [NNN] <Título descriptivo>

**Tipo:** feature | mejora-diseño | bugfix | infra
**Estado:** borrador | en-progreso | listo | cancelado | superseded-by-NNN
**Agente:** <nombre o "—">
**Fecha:** YYYY-MM-DD

## Contexto

¿Por qué hace falta? ¿Qué problema resuelve? Referencia a
`/AGENTS.md` para convenciones globales y a este README para convenciones de dev.

## Estado actual

Qué existe hoy relevante a este plan. Inspección real, no suposiciones.

## Propuesta

Lista de cambios concretos:

- [ ] Cambio 1
- [ ] Cambio 2
- [ ] Cambio 3

## Archivos afectados

- `src/pages/...`
- `src/components/...`
- `src/styles/global.css`
- (lo que aplique)

## Pasos

1. Paso 1
2. Paso 2
3. Verificar con `pnpm run build` y `curl -sI http://localhost:8082/`

## Criterios de aceptación

- [ ] La página X muestra Y
- [ ] El build pasa sin warnings (`pnpm run build`)
- [ ] El sitio responde HTTP 200 en :8082 (`curl -sI http://localhost:8082/`)
- [ ] Los nuevos tokens visuales están en `@theme {}` (no hardcoded en componentes)

## Resultado real

(Dejar vacío al crear. Rellenar al terminar con: comandos ejecutados, evidencia, desviaciones del plan.)

## Notas

Riesgos, alternativas consideradas, dependencias de otros planes.
```

## Convenciones específicas de dev

- **Comandos**: usa `pnpm`, nunca `npm` ni `yarn`.
- **Tema visual**: añade tokens nuevos en `@theme {}` dentro de `src/styles/global.css`, no dupliques valores en componentes.
- **Rutas**: usa kebab-case para archivos y carpetas (`/docs/guia-rapida`, no `/docs/GuiaRapida`).
- **Componentes**: ponlos en `src/components/` con PascalCase (`CardCurso.astro`).
- **Páginas**: rutas dinámicas en `src/pages/<ruta>/[slug].astro` con `getStaticPaths`.
- **Frontmatter**: validar con Zod en `src/content.config.ts` (no en cada página).
- **No commitees.** El dueño hace el commit.
- Si un plan queda obsoleto, márcalo `superseded-by: NNN` o `cancelado`. No lo borres.
