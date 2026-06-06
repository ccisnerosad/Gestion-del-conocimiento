# Plan: Crear estructura de documentación `planes/`

> Plan retrospectivo — la ejecución ya ocurrió. Se documenta para servir de ejemplo del formato y dejar trazabilidad del cambio fundacional.

## Contexto

El proyecto `Gestion-del-conocimiento` acaba de iniciar como plataforma web (Astro + Tailwind 4 + nginx) para servir cursos. Hay dos tipos de agentes que van a colaborar:

- **Agentes de contenido**: convierten ideas del vault `Temas/` (Obsidian) en cursos publicables.
- **Agentes de dev**: mantienen el sitio Astro, infraestructura Docker, y el sistema de build.

Sin directrices explícitas, cada agente va a inventar su propio formato y van a colisionar. Necesitamos un sistema de planes versionados en git que:

1. Defina el contrato global del proyecto (qué es, qué no es, qué stack).
2. Separe directrices por tipo de agente para no mezclarlas.
3. Incluya templates reutilizables para que un agente nuevo pueda empezar sin ambigüedad.

## Estado actual (previo al cambio)

- Repo recién clonado en `/home/docker/Gestion-del-conocimiento`.
- Existe `Temas/` con planes de estudio en formato libre (sesiones, módulos 0-N, tareas).
- Existe `Desarrollo web/Sesión 1/` con apuntes de clase en formato Obsidian (wikilinks `[[...]]`).
- **No existe** `planes/`, `AGENTS.md`, `docker-compose.yml`, ni proyecto Astro.
- Sin convenciones documentadas para el trabajo de agentes.

## Propuesta

Crear la carpeta `planes/` con tres archivos fundacionales:

```
planes/
├── AGENTS.md           # Contrato global del proyecto (stack, comandos, modelo de curso, pipeline)
├── contenido/
│   └── README.md       # Directrices para agentes de contenido + templates
└── dev/
    └── README.md       # Directrices para agentes de dev + template de plan
```

Cada `README.md` en subcarpeta debe incluir, además de las directrices, **un template concreto** que el agente pueda copiar y rellenar. Sin template, las directrices son teoría.

## Archivos afectados

- `planes/AGENTS.md` (crear)
- `planes/contenido/README.md` (crear)
- `planes/dev/README.md` (crear)

## Pasos ejecutados

1. Inspeccionar `Temas/` y `Desarrollo web/` para detectar la convención real (sesiones, módulos, tareas, formato Obsidian).
2. Redactar `planes/AGENTS.md` con: distinción `Temas/` ≠ biblioteca, modelo objetivo de curso, pipeline, stack, comandos, sistema visual.
3. Redactar `planes/contenido/README.md` con: input esperado (vault Obsidian), output esperado (frontmatter mínimo en `src/content/cursos/`), dos templates (plan + inventario).
4. Redactar `planes/dev/README.md` con: cuándo usar plan, template de plan, convenciones de rutas/componentes/tema.

## Criterios de aceptación (cumplidos)

- [x] `AGENTS.md` distingue explícitamente `Temas/` (input del autor) de la biblioteca (output público).
- [x] El modelo de curso en `AGENTS.md` refleja la convención observada en `Temas/`: Módulo 0 = entorno, Módulos 1-N = contenido, último módulo = Git, tareas al final de la sesión.
- [x] Cada subcarpeta de agente tiene directrices Y templates.
- [x] El template de plan en `dev/README.md` es directamente rellenable.
- [x] El stack y comandos reflejan el estado real del proyecto (Astro + Tailwind 4 + nginx, puerto 8082, `sg docker -c` para esta sesión).
- [x] No se commiteó nada — el usuario hace el commit manualmente.

## Resultado real

Tres archivos creados:

```
planes/
├── AGENTS.md              (115 líneas)
├── contenido/README.md    (198 líneas)
└── dev/README.md          (81 líneas)
```

`git status` muestra `?? planes/` (untracked) — listo para `git add planes/`.

## Riesgos identificados (a futuro)

- **El modelo de curso describe features que no existen aún** (exámenes, aplicativos, certificados). El primer plan de contenido va a descubrir que faltan piezas (`src/content.config.ts`, layout de sesión, página de catálogo). Está bien: ese plan de contenido abrirá planes de dev para suplir lo que falte.
- **No se creó un plan de ejemplo rellenado.** El primer plan debería hacerlo el usuario (o pedírmelo) para validar el template con un caso real antes de que otros agentes lo usen.
- **Si se quiere que `AGENTS.md` sea auto-descubierto** por herramientas tipo Cursor/Claude, conviene duplicarlo a la raíz como `AGENTS.md`. Pendiente de decisión.

## Lecciones para el agente (yo)

Este plan se está creando **retrospectivamente**, después de que el trabajo ya se hizo. La causa raíz: la regla "todo cambio se documenta en `planes/dev/`" existe desde este mismo cambio, así que no había forma de aplicarla la primera vez. A partir de ahora, todo cambio — incluyendo cambios a `planes/` mismo, mejoras a templates, o correcciones a directrices — debe abrir un plan en `planes/dev/NNN-slug/README.md` antes de ejecutar, o documentarse retrospectivamente si se descubre a posteriori.
