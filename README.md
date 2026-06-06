# Biblioteca de Conocimiento

Plataforma web para acceder y gestionar el conocimiento que se comparte. Construida con **Astro 6 + Tailwind 4**, servida con **nginx** en el contenedor `:8082`.

**URL de producción:** [biblioteca.astillerodigital.com](https://biblioteca.astillerodigital.com)

## Qué hay en este repositorio

| Carpeta | Qué contiene | Lo ve el público |
|---|---|---|
| `src/content/cursos/` | Cursos estructurados (Markdown + frontmatter). | Sí |
| `src/pages/` | Rutas del sitio (catálogo, cursos, landing, errores). | Sí |
| `Temas/` | Vault Obsidian personal con ideas crudas de cursos. | No |
| `planes/` | Directrices y planes de trabajo para agentes. | No |
| `dist/` | Build estático (generado por `pnpm run build`). | Sí |

## Quick start

```bash
# Dev local
pnpm run dev          # http://localhost:4321

# Build
pnpm run build        # genera ./dist/

# Preview
pnpm run preview      # sirve ./dist/ localmente

# Despliegue local (requiere grupo docker)
sg docker -c "docker compose up -d --build"   # :8082
```

## Para agentes

Lee [`/AGENTS.md`](./AGENTS.md) antes de cualquier tarea. Es el contrato global del proyecto. Las directrices específicas por tipo de agente viven en `planes/dev/README.md` y `planes/contenido/README.md`.

## Stack

- **Astro 6.4.4** (output estático, Content Collections con Zod).
- **Tailwind 4.3** vía `@tailwindcss/vite`, **sin `tailwind.config`**. Los tokens visuales viven en `src/styles/global.css` → `@theme {}`.
- **pnpm 11** como gestor (no usar `npm` ni `yarn`).
- **Node 24** en Docker (`node:24-alpine`).
- **nginx:alpine** sirve el build en `:8082`.
- **Docker Compose v2**.

## Estilo visual

Inspirado en [astillerodigital.com](https://astillerodigital.com). Tokens en `src/styles/global.css`:

- Color: `--color-accent: #cfab80` (gold/cream, solo para CTAs), `--color-bg: #181818` (dark principal), `--color-text: #e8e8e8`.
- Tipografía: `--font-display: "Montserrat"` (headings), `--font-body: "Nunito"` (cuerpo).
- Geometría: `--radius-default: 4px`, `--radius-lg: 8px`.
- Clases utilitarias: `.btn-primary`, `.card`, `.badge`.

Reglas:
- **Dark mode first.**
- **Accent solo para CTAs y elementos interactivos.**
- **No hardcodear valores** — usar siempre las variables CSS o las utilities de Tailwind que las exponen.

## Licencia

Privado.
