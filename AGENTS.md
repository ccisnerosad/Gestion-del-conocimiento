# Biblioteca de Conocimiento — Guía para agentes

> **Lee este archivo antes de cualquier tarea en este repo.** Es el contrato estable del proyecto.
>
> **Ubicación:** vive en la **raíz del repositorio** por convención — herramientas como Cursor, Claude Code, Aider, Continue, etc. lo buscan ahí automáticamente. Si lo mueves a una subcarpeta, deja de ser auto-descubierto.
>
> **Extensiones por tipo de agente:**
> - `planes/dev/README.md` — directrices + skills para el agente de plataforma (Astro, Tailwind, Docker, nginx, sistema visual).
> - `planes/contenido/README.md` — directrices + estructura canónica de cursos para el agente de contenido.
> - `planes/categorias.md` — taxonomía multi-eje (track, level, format, stack, audience).
> - `planes/cursos-actuales.md` — mapeo de los cursos del vault `Temas/` a la taxonomía.

## Qué es este proyecto

Una **biblioteca pública de cursos** construida con Astro 6 + Tailwind 4, servida con nginx en el puerto `8082`. Cada curso tiene teoría, tareas, exámenes y aplicativos web didácticos interactivos (mini-apps construidas sobre el mismo Astro).

## La regla más importante — lee esto dos veces

| Carpeta | Propósito | Lo ve el público |
|---|---|---|
| `Temas/` | Cuaderno personal Obsidian. El dueño **boceta ideas** de cursos en formato libre. | ❌ **Nunca** |
| `planes/` | Documentos de planificación y directrices para agentes. | ❌ **Nunca** |
| `src/content/cursos/` (objetivo) | Cursos estructurados y revisados. | ✅ **Sí** |
| `dist/` | Build estático servible. | ✅ **Sí** |

- Si un agente necesita contenido público, lo lee/escribe en `src/content/cursos/`.
- Si necesita ideas crudas, lee de `Temas/`.
- **Jamás publiques nada de `Temas/` directamente**. La transformación es deliberada.

## Modelo objetivo de un curso

```
Curso
├── metadata: título, descripción, nivel, duración, tecnologías, tags
├── sesiones (ordenadas)
│   └── Sesión
│       ├── metadata: título, orden, duración, objetivos
│       ├── módulos (en orden)
│       │   └── Módulo
│       │       ├── teoría (markdown, base pedagógica)
│       │       ├── tareas (1..n, con starter / solución opcional)
│       │       ├── examen (opcional, preguntas: opción múltiple, código, abiertas)
│       │       └── aplicativo (opcional, mini-app interactiva — isla Astro/React/Solid)
│       └── referencias / material extra
└── proyecto final (opcional)
```

Convenciones observadas en `Temas/` que el modelo debe respetar:
- **Módulo 0** = entorno y setup.
- **Módulos 1..N** = contenido técnico, en orden de complejidad creciente.
- **Último módulo** suele ser Git (flujo de trabajo, no contenido).
- **Tareas** van al final de la sesión, no mezcladas con los módulos.

## Pipeline: Temas/ → biblioteca

```
[Temas/<carpeta>/*.md]   ← borrador Obsidian (formato libre, wikilinks)
        │
        ▼ agente de contenido (lee AGENTS.md + planes/contenido/README.md)
[planes/contenido/NNN-tema/]   ← plan de integración (inventario + estructura)
        │
        ▼ humano aprueba
[src/content/cursos/<slug>/]   ← curso estructurado (contenido público)
        │
        ▼ pnpm build
[dist/]   ← HTML servible
```

1. El dueño escribe la idea cruda en `Temas/` (formato libre Obsidian).
2. Un agente de contenido produce `planes/contenido/NNN-tema/` con el mapeo Temas/ → curso.
3. El humano revisa y aprueba el plan.
4. Otro agente (o el mismo) materializa el plan en `src/content/cursos/`.
5. La build genera el sitio público.

## Stack y comandos

- **Astro 6.4** (output estático, no SSR).
- **Tailwind 4.3** vía `@tailwindcss/vite` — **sin `tailwind.config`**. Los tokens viven en `src/styles/global.css` dentro de `@theme {}`.
- **pnpm 11** como gestor. `pnpm-lock.yaml` es la fuente de verdad. **No usar npm ni yarn.**
- **Node 24** (vía nvm). Para usarlo en esta sesión: `export PATH=/home/ccisneros/.nvm/versions/node/v24.16.0/bin:$PATH`.
- **nginx:alpine** sirve en `:8082` dentro del contenedor.
- **Docker Compose v2** (puerto host `8082 → 8082`).

```bash
# Dev local
pnpm run dev

# Build de producción
pnpm run build

# Deploy local (requiere grupo docker; usa sg docker en este host)
sg docker -c "docker compose up -d --build"

# Verificar respuesta
curl -sI http://localhost:8082/
```

## Sistema visual

Definido en `src/styles/global.css` → `@theme {}`. **Usar siempre los tokens, nunca hardcodear.**

- Colores: `--color-accent: #cfab80`, `--color-bg: #181818`, `--color-bg-elevated: #1f1f1f`, `--color-border: #2a2a2a`, `--color-text: #e8e8e8`, `--color-text-muted: #9a9a9a`.
- Tipografía: `--font-display: "Montserrat"`, `--font-body: "Nunito"`.
- Geometría: `--radius-default: 4px`, `--radius-sm: 2px`, `--radius-lg: 8px`.
- Clases utilitarias ya definidas: `.btn-primary`, `.card`, `.badge`.

## Convenciones duras

- **No tocar `Temas/`** salvo que la tarea lo pida explícitamente.
- **No commitear.** El dueño hace el commit manualmente.
- **No exponer puertos internos** en páginas de error (regla heredada de la infra de astillerodigital.com).
- **Frases en español**, código en inglés.
- **Un plan por carpeta**, con prefijo numérico incremental (`001-…`, `002-…`). No borrar planes obsoletos: marcarlos como `cancelado` o `superseded-by: NNN`.
- Cada plan debe tener su propio `README.md` siguiendo el template de su subcarpeta.

## Tipos de agente

| Tipo | Carpeta de planes | Hace |
|---|---|---|
| **Dev** | `planes/dev/` | Funcionalidad, diseño, correcciones de bugs del sitio. |
| **Contenido** | `planes/contenido/` | Integración o actualización de un tema (`Temas/`) a la estructura de curso. |

Antes de crear un plan, lee el `README.md` de la subcarpeta correspondiente.
