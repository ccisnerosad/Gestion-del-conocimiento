# Inventario Temas/Desarrollo web/ → src/content/cursos/desarrollo-web/

Mapeo archivo-por-archivo. Marca con ✅ lo que tiene destino claro, ⚠️ lo que requiere decisión.

| Archivo origen | Tipo | Destino propuesto | Estado | Notas |
|---|---|---|---|---|
| `Plan de estudio - Desarrollo web.md` | overview del curso | `curso.md` (frontmatter + body) | ✅ | Secciones 1-4:概述 del bootcamp, metodología, sesiones 1-4, tareas 1-4. El body de `curso.md` lista sesiones 1-4; solo sesión 1 tiene archivos por separado. |
| `Sesión 1/Sesión 1 Fundamentos, -Hola Mundo- y Vibecoding.md` | overview de la sesión | `sesion-1/sesion.md` | ✅ | Convertir tabla de módulos a `modulos: [modulo-0, …, modulo-4]` en frontmatter. Wikilink `[[Tarea 1 - Sesión 1]]` → `[Tarea 1](tareas.md)`. |
| `Sesión 1/Modulo 0.md` | setup | `sesion-1/modulo-0.md` | ✅ | Quitar emojis 🕒, wikilinks de nav, blockquote "Sesión:". Conservar substance + analogías. |
| `Sesión 1/Modulo 1.md` | contenido Astro/HTML | `sesion-1/modulo-1.md` | ✅ | Contiene un bloque `html` largo (anatomía de un archivo Astro). Conservar literal. Quitar emojis + nav. |
| `Sesión 1/Modulo 2.md` | contenido Tailwind | `sesion-1/modulo-2.md` | ✅ | Conservar el prompt de vibecoding tal cual (es didáctico). |
| `Sesión 1/Modulo 3.md` | contenido Markdown | `sesion-1/modulo-3.md` | ✅ | Corto (35 líneas), ningún cambio de substance. |
| `Sesión 1/Modulo 4.md` | contenido Git | `sesion-1/modulo-4.md` | ✅ | Conservar los "cuatro comandos sagrados" verbatim. |
| `Tareas/Tarea 1 - Sesión 1.md` | tarea | `sesion-1/tareas.md` | ✅ | Tres sub-tareas: Reflexión, Experimentación, Rompe-y-Arregla. Se conservan como secciones en el body. `deadline: "antes de la Sesión 2"`, `type: tarea`. |

## Archivos sin destino claro

- `Temas/Desarrollo web/.obsidian/` — config del editor, no contenido. **No migra.**

## Archivos que NO migran (en este plan)

- `Sesión 2 / Sesión 3 / Sesión 4` — descritas en el plan de estudio pero **no existen como archivos** en `Temas/`. Se mencionan como roadmap en `curso.md` y se integrarán en un plan futuro cuando tengan contenido.
- `Tareas/Tarea 2`, `Tarea 3`, `Tarea 4` — no existen. Idem.

## Reescrituras aplicadas

- **Wikilinks** (todos): `[[X|Etiqueta]]` → `[Etiqueta](ruta-relativa)`. Lista de conversiones:
  - `[[Sesión 1 Fundamentos, -Hola Mundo- y Vibecoding|Sesión 1]]` → sin link (referencia al archivo actual, redundante)
  - `[[Modulo 0]]` → `[Módulo 0](modulo-0.md)`
  - `[[Modulo 0|🕒 El Taller (VS Code y Terminal)]]` → `[Módulo 0: El Taller](modulo-0.md)` (sin emoji)
  - `[[Modulo 1|Módulo 1: Astro y HTML Básico →]]` → `[Módulo 1: Astro y HTML Básico](modulo-1.md)`
  - `[[Tarea 1 - Sesión 1]]` → `[Tarea 1](tareas.md)`
  - `[[Modulo 0|← Módulo 0: El Taller]]` → `[← Módulo 0: El Taller](modulo-0.md)`
  - `[[Modulo 1|← Módulo 1: Astro y HTML Básico]]` → `[← Módulo 1: Astro y HTML Básico](modulo-1.md)`
  - `[[Modulo 2|← Módulo 2: Tailwind CSS y Vibecoding]]` → `[← Módulo 2: Tailwind CSS y Vibecoding](modulo-2.md)`
  - `[[Modulo 3|← Módulo 3: Markdown]]` → `[← Módulo 3: Markdown](modulo-3.md)`
- **Emojis 🕒** (4 módulos): se eliminan de los títulos. Se conservan en el `title` del frontmatter como emoji decorativo opcional, pero el body de cada modulo empieza con `# Módulo N: <título>` sin emoji.
- **Emoji 📚** (en título de tarea): se elimina.
- **Blockquote "Sesión: / Siguiente: / Anterior:"** al inicio de cada modulo: se elimina (redundante con la nav lateral que provee la UI).
- **Blockquote "La Filosofía de hoy"** en `sesion.md`: se conserva como contenido.
- **Títulos de la fuente**: "Módulo 0: El Taller (VS Code y Terminal) - _45 mins_" → "Módulo 0: El Taller (VS Code y Terminal)" (la duración va al frontmatter).
