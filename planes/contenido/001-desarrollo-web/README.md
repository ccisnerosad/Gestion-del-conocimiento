# 001 Integración: Desarrollo Web (Sesión 1)

**Estado:** listo
**Agente:** Oreo
**Fecha:** 2026-06-06
**Fuente:** `Temas/Desarrollo web/`
**Destino:** `src/content/cursos/desarrollo-web/`
**Clasificación:** ver `planes/categorias.md` → `track: desarrollo-web`, `level: fundamentos`, `format: bootcamp`, `stack: [frontend, backend, fullstack]`, `audience: desarrolladores principiantes con HTML básico`

## Resumen

Primer curso real de la biblioteca. Se integra la **Sesión 1** del plan `Temas/Desarrollo web/`, que es la única con contenido detallado en el vault (5 módulos + 1 tarea). Las sesiones 2-4 están planificadas en el documento `Plan de estudio - Desarrollo web.md` pero sus archivos `.md` no existen en `Temas/`; se mencionan en `curso.md` como roadmap del bootcamp, sin generar `sesion-2/`, `sesion-3/`, `sesion-4/`.

El curso se publica con `status: published` para que aparezca en el catálogo desde el primer día. El `instructor` queda como "Carlos Cisneros" (identidad confirmada en el contexto del proyecto).

## Inventario de fuente

Ver [`inventario.md`](./inventario.md) para el mapeo archivo-por-archivo.

Resumen: 1 sesión, 5 módulos, 1 tarea detectados en `Temas/`. Más 1 plan de estudio que describe 3 sesiones adicionales sin contenido desarrollado.

## Estructura propuesta del curso

```
src/content/cursos/desarrollo-web/
├── curso.md
├── sesion-1/
│   ├── sesion.md
│   ├── modulo-0.md       (El Taller: VS Code y Terminal — 45 min)
│   ├── modulo-1.md       (Astro y HTML Básico — 45 min)
│   ├── modulo-2.md       (Tailwind CSS y Vibecoding — 45 min)
│   ├── modulo-3.md       (Markdown, el Cuaderno del Programador — 15 min)
│   ├── modulo-4.md       (Git, el Sistema de Puntos de Guardado — 30 min)
│   └── tareas.md         (Tarea 1: Análisis y Destrucción — antes de Sesión 2)
└── (sesion-2/, sesion-3/, sesion-4/ — NO se crean. Se mencionan en curso.md)
```

### Sesiones integradas

1. **Sesión 1: Fundamentos, Hola Mundo y Vibecoding** (3 h)
   - **Objetivo:** pasar de una computadora en blanco a una página web real renderizada con un diseño base atractivo. Introducir Vibecoding como metodología y Git como workflow de "puntos de guardado".
   - 5 módulos + 1 tarea.
   - Metodología: aprendizaje en espiral + vibecoding (la IA genera la base, el estudiante entiende y modifica).

### Sesiones planificadas (no integradas en este plan)

Estas sesiones están en el `Plan de estudio` pero sus archivos no existen en `Temas/`. Se mencionan en el body de `curso.md` para que el público sepa la dirección del bootcamp, sin generar `sesion-2/`, etc. hasta que tengan contenido:

- **Sesión 2: Componentización y Multiplicación** (3 h) — Componentes `Card.astro`, props, grid con Tailwind, frontmatter, branching con Git.
- **Sesión 3: Layouts y Rutas** (3 h) — `Layout.astro`, enrutamiento automático, estados `hover:`/`focus:`, ramas y merge.
- **Sesión 4: Interactividad y Refinamiento** (3 h) — `<script>` en Astro, dark mode, MDX, fusión de ramas.

### Tareas y exámenes

- Tareas detectadas en la fuente: 1 (Tarea 1, 3 sub-tareas: Reflexión, Experimentación, Rompe-y-Arregla).
- Tareas nuevas: 0.
- Examen: **no se crea en este plan**. Cuando se defina, vivirá en `src/content/cursos/desarrollo-web/examenes/<slug>.md`.

### Aplicativos didácticos

No se crean aplicativos en este plan. Candidatos naturales para iteraciones futuras:

- [ ] `vibecoding-lab`: playground donde el estudiante mete un prompt y ve el HTML generado con Tailwind, con anotaciones de qué hace cada clase.
- [ ] `markdown-live-preview`: editor + preview en tiempo real, para aprender Markdown.

(Estas son ideas; no se ejecutan ahora.)

## Clasificación (taxonomía)

Aplicada de `planes/categorias.md`:

- **track**: `desarrollo-web`
- **level**: `fundamentos` (asume HTML/CSS básico, no JS)
- **format**: `bootcamp` (4 sesiones × 3 h, encaja con la definición ≥ 4 × 2-3 h)
- **stack**: `[frontend, backend, fullstack]` (HTML/CSS/JS frontend, Node/terminal backend, Git workflow fullstack)
- **audience**: "Desarrolladores principiantes con nociones de HTML y CSS. Sin experiencia previa en JavaScript, Git o IA."

## Lagunas detectadas

- **Sesiones 2, 3 y 4**: solo existen como descripción en el plan. No hay archivos `.md` por sesión ni por módulo en `Temas/`. Decisión: NO integrar placeholders; listar en `curso.md` como "Sesiones planificadas".
- **Examen del curso**: no definido en la fuente. Cuando se cree, evaluar opción múltiple + tareas prácticas.
- **Aplicativos**: no definidos. Ideas en la sección de arriba.
- **Wiki links en `Temas/`**: existen `[[Modulo 0]]`, `[[Modulo 1]]`, etc. Se convierten a links Markdown estándar apuntando a la ruta del módulo en la sesión actual. No se preserva la sintaxis Obsidian.
- **Emojis decorativos en los títulos** (🕒 🕒 🕒 🕒 📚): se eliminan en la versión pública para mantener consistencia con la línea editorial. El `📚 Tarea Autodidacta` se renombra a "Tarea 1: Análisis y Destrucción".
- **Tono de "filosofía de hoy" y otros apartes coloquiales** ("La Filosofía de hoy", "Pum", "Los programadores usan pantallas negras no para verse como hackers en las películas"): se conservan porque tienen valor pedagógico y la fuente ya está escrita con voz pública en mente. No se reescriben.

## Reescritura — qué se reescribe y qué se conserva

El contenido de `Temas/` es **borrador personal** (regla de `/AGENTS.md` y `planes/contenido/README.md`). La versión pública:

- **Se conserva:**
  - El orden pedagógico (M0 setup → M1-M3 contenido → M4 Git workflow).
  - Los conceptos, ejemplos, prompts y comandos (literalmente).
  - Las analogías ("máquina del tiempo para tu código", "la cocina del restaurante", etc.).
  - El código HTML/CSS de muestra (es la base que el estudiante debe poder entender).
  - Los tonos coloquiales cuando aportan (ej: "No te asustes", "¡Pum!").
- **Se reescribe:**
  - Wikilinks `[[X]]` → links Markdown estándar `[X](ruta)`.
  - Emojis decorativos en títulos de sección.
  - `> **Sesión:** [[…]]` blocks al inicio de cada módulo → se elimina (redundante con la ruta).
  - `> **Anterior:** / **Siguiente:**` links dentro de los módulos → se elimina (la UI ya provee navegación lateral con prev/next; los links inline eran para navegación en Obsidian).
  - Frontmatter ausente → se añade con schema de `src/content.config.ts` (curso) + interface loose de modulo/sesion/tarea.

## Criterios de aceptación

- [ ] `src/content/cursos/desarrollo-web/` contiene los 8 archivos especificados.
- [ ] El frontmatter de `curso.md` cumple el schema Zod definido en `src/content.config.ts`.
- [ ] Cada `modulo-*.md`, `sesion.md` y `tareas.md` tiene frontmatter válido (title obligatorio, resto opcional).
- [ ] `pnpm run build` pasa sin warnings de colección vacía (porque ahora hay contenido).
- [ ] El sitio responde HTTP 200 en: `/`, `/cursos/`, `/cursos/desarrollo-web/`, `/cursos/desarrollo-web/sesion-1/`, `/cursos/desarrollo-web/sesion-1/modulo-1/`, `/cursos/desarrollo-web/sesion-1/tareas/`.
- [ ] La card del curso aparece en `/cursos/` con badges de nivel, formato y stack.
- [ ] La navegación prev/next entre módulos funciona (links laterales en cada módulo).
- [ ] El render del Markdown luce consistente con el resto del sitio (tokens de `global.css`).

## Decisiones pendientes

Ninguna que bloquee. Decisiones ya tomadas:

- **`status: published`** en `curso.md` (no `draft`) para que aparezca en el catálogo desde el primer día. El dueño puede cambiarlo a `draft` si prefiere revisión previa.
- **`order: 1`** — primer curso de la biblioteca.
- **`instructor: "Carlos Cisneros"`** — inferido del contexto del proyecto (Telegram user, autor de los planes, dueño del repo). Si el dueño prefiere otro handle, ajustar.
- **Fechas**: `created: 2025-01-01` (alineado con la convención del plan 001) y `updated: 2026-06-06` (hoy).
- **Sin examen, sin aplicativos** — se documentan en lagunas y roadmap del plan.

## Resultado real

**Ejecutado y verificado en el contenedor `biblioteca-conocimiento` (sha256:33b48218) en :8082.**

| Criterio | Estado |
|---|---|
| 8 archivos creados en `src/content/cursos/desarrollo-web/` (curso + sesion + 5 modulos + tareas) | ✅ |
| Frontmatter de `curso.md` cumple el schema Zod (`src/content.config.ts`) | ✅ |
| Cada `modulo-*.md`, `sesion.md` y `tareas.md` tiene frontmatter válido (title, order, duration, objectives) | ✅ |
| Wikilinks de Obsidian `[[X|Y]]` convertidos a links Markdown estándar | ✅ |
| Emojis decorativos eliminados del cuerpo (`🕒`, `📚`) | ✅ |
| Blockquotes de navegación interna (`> Sesión:`, `> Siguiente:`) eliminados | ✅ |
| Sesiones 2-4 listadas en `curso.md` con leyenda "Planificada" — sin fabricar `sesion-2/`, etc. | ✅ |
| `pnpm run build` exit 0, 12 páginas, 0 warnings | ✅ |
| 10 rutas reales devuelven HTTP 200, `/cursos/inexistente/` devuelve 404 | ✅ |
| La card del curso aparece en `/cursos/` con badges de nivel, formato y stack | ✅ |
| Navegación prev/next entre módulos funciona (links laterales en cada módulo) | ✅ |

**Decisiones de adaptación (que el dueño puede revisar antes del commit):**
- `instructor: "Carlos Cisneros"` — el dueño puede renombrarlo si prefiere otro handle.
- `created: 2025-01-01` (fecha genérica del vault) y `updated: 2026-06-06` (hoy).
- `status: 'published'` — el curso aparece en el catálogo desde ya. Si el dueño prefiere revisión previa, cambiar a `draft`.
- Tarea 1 preservada casi intacta. Se estandarizó a 3 sub-tareas (Reflexión, Experimentación, Rompe y Arregla) con rúbrica de 5 criterios.

**Pitfalls encontrados (todos resueltos, ver plan 003 para el detalle técnico):**
- Bug preexistente de profundidad del glob en `[sesion].astro` y `[modulo].astro` (4 y 5 niveles cuando debían ser 3 y 4).
- Bug preexistente de funciones `function` top-level fuera del scope de `getStaticPaths` en el chunk compilado.

**Lo que NO se hizo y por qué:**
- Sesiones 2, 3 y 4 — no están escritas en `Temas/`. No se fabricó material.
- Migración del segundo curso (mailjet) — fuera del alcance de este plan.
- Filtros interactivos en el catálogo — pendiente para otro plan.
- Syntax highlight en bloques de código (`modulo-1.md` tiene HTML de muestra) — pendiente.

**Lecciones para futuros planes de contenido:**
- **Inventario primero, transcripción después.** El `inventario.md` que se hizo al inicio ahorró re-leer `Temas/` para cada decisión. Mantener este hábito.
- **Verificar las rutas dinámicas con contenido de prueba antes de declarar el plan cerrado.** El bug preexistente de profundidad de glob pasó inadvertido en el plan 002 porque no había contenido. Si el plan 002 hubiera incluido un curso de prueba, el bug se habría detectado antes. Plantear como regla: todo plan de configuración (`planes/dev/`) que toque rutas dinámicas debe incluir un smoke test con un item de contenido.
- **Wikilinks `[[X|Y]]` no se renderizan en Astro.** Si en el futuro se importa más material de Obsidian, hay que convertir TODOS los `[[...]]` a links relativos manualmente. Un script de migración sería útil.

## Notas

- Este plan es **independiente** del plan 003-dev (refactor del index). Toca archivos distintos. El plan 003 actualiza el roadmap del index para mencionar este curso; si este plan 001 falla, ajustar el 003.
- Cuando se integren las sesiones 2, 3, 4, abrir un nuevo plan (`planes/contenido/002-desarrollo-web-sesiones-2-4/`) — no ampliar este.
- No se commitea. El dueño hace el commit.
