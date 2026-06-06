# Planes de contenido

Esta carpeta contiene planes de **integración o actualización de un tema** a la estructura de curso de la biblioteca. Antes de crear uno, lee `/AGENTS.md` (reglas globales, modelo de curso, pipeline) y este archivo.

## Cuándo crear un plan aquí

Crea un plan en `planes/contenido/` cuando vas a:

- Tomar las ideas crudas de `Temas/<carpeta>/` y convertirlas en un curso estructurado.
- Actualizar un curso ya integrado (añadir sesión, corregir error, reorganizar módulos).
- Mapea explícitamente cada archivo de `Temas/` a su destino en el curso público.

**No** crees un plan aquí para:

- Cambios de diseño o funcionalidad del sitio → `planes/dev/`.
- Cambios que no tocan la estructura de un curso.

## Input: `Temas/`

`Temas/` es un vault Obsidian con **formato libre**. Convenciones observadas:

```
Temas/<carpeta-tema>/
├── .obsidian/                          ← config Obsidian (IGNORAR)
├── Plan de estudio - <nombre>.md       ← overview del tema (obligatorio)
├── Sesión N/                           ← cero o más sesiones
│   ├── Sesión N <título>.md            ← overview de la sesión
│   ├── Modulo 0.md                     ← setup / entorno (opcional)
│   ├── Modulo 1.md                     ← contenido técnico (en orden)
│   ├── Modulo 2.md
│   ├── ...
│   └── Modulo N.md                     ← suele ser Git u otro workflow
└── Tareas/                             ← opcional
    └── Tarea N - <descripción>.md
```

Los archivos usan **wikilinks de Obsidian** (`[[Nombre|Etiqueta]]`), negritas para términos, y listas anidadas. **No asumas un frontmatter fijo** — los archivos pueden o no tenerlo. Tu trabajo es entender la estructura local y proponer la conversión.

## Estructura canónica de un curso público

El curso se materializa en `src/content/cursos/<slug>/` (Astro Content Collections). Convención derivada de la observación de `Temas/Desarrollo web/`:

```
src/content/cursos/<slug>/
├── curso.md              ← frontmatter + descripción general
├── sesion-1/
│   ├── sesion.md         ← overview de la sesión
│   ├── modulo-0.md       ← setup / entorno (opcional)
│   ├── modulo-1.md       ← contenido (en orden)
│   ├── modulo-2.md
│   ├── ...
│   ├── modulo-N.md       ← último módulo (suele ser Git u otro workflow)
│   └── tareas.md         ← tarea(s) final(es) de la sesión (opcional)
├── sesion-2/
│   └── ...
├── examenes/             ← opcional
│   └── <slug>.md
├── aplicativos/          ← opcional, mini-apps interactivas
│   └── <slug>/index.astro
├── recursos/             ← opcional, PDFs, imágenes, archivos auxiliares
└── README.md             ← índice navegable (generable automáticamente)
```

**Reglas:**

- **Módulo 0 es opcional.** Solo incluir si el curso requiere setup/entorno previo al contenido (desarrollo web lo tiene, mailjet no).
- **Módulo N (último) suele ser workflow técnico** (Git, despliegue, observabilidad). Trátalo como módulo, no como tarea.
- **Tareas van al final de la sesión**, no intercaladas con los módulos.
- **Examen es opcional** y separado de las sesiones. Un examen cubre el curso completo o un subconjunto de sesiones.
- **Aplicativos son opcionales** — son mini-apps interactivas que se construyen como islas Astro/React/Solid dentro del sitio.

### Schemas de frontmatter (Zod)

Estos son los schemas que se implementarán en `src/content.config.ts`. El agente de contenido debe generar frontmatter que los cumpla.

**`curso.md`:**

```yaml
---
title: string                          # "Desarrollo Web"
slug: string                           # "desarrollo-web" (kebab-case, sin espacios)
description: string                    # 1-2 frases para el catálogo
track: enum                            # ver /AGENTS.md y planes/categorias.md
  - desarrollo-web
  - apis-comunicacion
  - devops-infra
  - ia-automatizacion
  - datos
level: enum                            # fundamentos | aplicado | maestria
format: enum                           # bootcamp | taller | crash-course | tutorial
duration: string                       # "4 sesiones × 3 horas"
stack: array(enum)                     # ver planes/categorias.md (multi-valor)
audience: string                       # descripción libre
prerequisites: array(string)           # ["HTML básico", "Node.js 20+"]
instructor: string                     # nombre o handle
created: date
updated: date
status: enum                           # draft | published | archived
order: number                          # para ordenar en el catálogo
---
```

**`sesion-N/sesion.md`:**

```yaml
---
title: string                          # "Sesión 1: Fundamentos"
order: number                          # 1-based
duration: string                       # "3 horas"
objectives: array(string)              # objetivos de aprendizaje
modulos: array(string)                 # ["modulo-0", "modulo-1", ..., "modulo-N"]
tareas: array(string)                  # ["tareas"] si existe
prerequisites: array(string)           # prerequisitos específicos de esta sesión
---

# Sesión N: <título>

Overview pedagógico. Lo que el estudiante debería poder hacer al terminar.
```

**`sesion-N/modulo-Y.md`:**

```yaml
---
title: string                          # "Módulo 0: Setup del entorno"
order: number                          # 0-based
duration: string                       # "30 min"
objectives: array(string)              # objetivos específicos del módulo
---

# Módulo Y: <título>

Contenido del módulo. Texto, ejemplos, snippets de código, llamadas a la acción.
```

**`sesion-N/tareas.md`:**

```yaml
---
title: string                          # "Tarea: Construir tu primer servidor"
order: number
type: enum                             # tarea | proyecto | examen
deadline: string                       # "fin de sesión" o duración
deliverable: string                    # qué se entrega
rubric: array(object)                  # opcional, criterios de evaluación
---

# <título de la tarea>

Enunciado completo, recursos, criterios de aceptación, hints.
```

## Ejemplo canónico

`planes/contenido/ejemplos/desarrollo-web/` contiene un esqueleto completo que demuestra la estructura con `Temas/Desarrollo web/` como referencia. Úsalo como blueprint al integrar un nuevo curso.

## Estructura de un plan

```
planes/contenido/
└── NNN-slug-tema/
    ├── README.md       ← el plan (obligatorio)
    ├── inventario.md   ← mapeo archivo-por-archivo (obligatorio)
    └── (opcional)      ← borradores, comparaciones, ejemplos
```

- `NNN` = número incremental de 3 dígitos.
- `slug-tema` = kebab-case que identifique el tema (`desarrollo-web`, `mailjet`).
- `README.md` (no `plan.md`) — así GitHub lo renderiza al entrar a la carpeta.

## Template del README.md

```markdown
# [NNN] Integración: <nombre del tema>

**Estado:** borrador | en-progreso | listo | cancelado | superseded-by-NNN
**Fuente:** `Temas/<carpeta-tema>/`
**Destino:** `src/content/cursos/<slug>/`
**Clasificación:** ver `planes/categorias.md`
**Agente:** <nombre o "—">
**Fecha:** YYYY-MM-DD

## Resumen

Una o dos frases. ¿Qué tema se va a integrar y por qué?

## Inventario de fuente

Ver `inventario.md` para el mapeo archivo-por-archivo.

Resumen: N sesiones, M módulos, K tareas detectadas en `Temas/`.

## Estructura propuesta del curso

```
src/content/cursos/<slug>/
├── curso.md
├── sesion-1/
│   ├── sesion.md
│   ├── modulo-0.md
│   ├── ...
│   └── tareas.md
└── ...
```

### Sesiones (en orden)

1. **Sesión N: <título>** — objetivo, módulos que la componen, duración estimada.
2. ...

### Tareas y exámenes

- Tareas detectadas en la fuente: N
- Tareas nuevas que se deberían crear: ...
- Examen: ¿se propone? ¿qué preguntas / competencias evalúa?

### Aplicativos didácticos

Para cada uno: qué enseña, qué necesita el estudiante, tecnologías Astro/React/Solid que se usarían.

- [ ] `<slug-aplicativo>`: <descripción corta>

## Clasificación (taxonomía)

Aplicar la taxonomía de `planes/categorias.md`:

- **track**: <valor>
- **level**: <valor>
- **format**: <valor>
- **stack**: [<valores>]
- **audience**: <descripción>

## Lagunas detectadas

Cosas que el material fuente no cubre pero el curso necesitaría:

- [ ] Ejercicios prácticos de X
- [ ] Examen de Y
- [ ] Aplicativo de Z

## Reescritura — qué se reescribe y qué se conserva

El contenido de `Temas/` es **borrador personal**. La versión pública:

- **Se conserva**: el orden pedagógico, los conceptos, los nombres de los módulos.
- **Se reescribe**: el tono (de notas personales a material público), los wikilinks (a links Markdown estándar), el formato (a frontmatter + body).

Lista explícita de decisiones de reescritura:

- ...

## Criterios de aceptación

- [ ] El curso aparece en el catálogo público.
- [ ] Las sesiones se navegan en orden.
- [ ] Los aplicativos cargan como islas interactivas.
- [ ] `pnpm run build` no genera warnings.
- [ ] El sitio responde HTTP 200 en :8082.
- [ ] El frontmatter de `curso.md` cumple el schema Zod.
- [ ] Cada `modulo-*.md` tiene frontmatter válido.

## Decisiones pendientes

Preguntas que el humano debe responder antes de implementar.
```

## Template del inventario.md

```markdown
# Inventario Temas/ → curso

Mapeo archivo-por-archivo. Marca con ✅ lo que tiene destino claro, ⚠️ lo que requiere decisión.

| Archivo origen | Tipo | Destino propuesto | Estado | Notas |
|---|---|---|---|---|
| `Plan de estudio - X.md` | overview | `curso.md` | ✅ | Frontmatter completo. |
| `Sesión 1/Modulo 0.md` | setup | `sesion-1/modulo-0.md` | ✅ | Convertir wikilinks a links estándar. |
| `Sesión 1/Sesión 1 <título>.md` | overview sesión | `sesion-1/sesion.md` | ✅ | |
| `Tareas/Tarea 1.md` | tarea | `sesion-1/tareas.md` (sección) | ⚠️ | Decidir si va inline o como archivo aparte. |
| ... | | | | |

## Archivos sin destino claro

- `Temas/<carpeta>/archivo-sin-mapeo.md` — razón: ...

## Archivos que NO migran

- `.obsidian/` — config del editor, no contenido.
- (otros) — razón: ...
```

## Convenciones específicas de contenido

- **No copies `Temas/` palabra por palabra.** Extrae la intención, reescribe para formato público.
- **Respeta el modelo de `/AGENTS.md`**: sesión → módulos 0..N → tareas → examen → aplicativo.
- **Módulo 0 siempre es entorno/setup** (si existe). No lo mezcles con contenido.
- **El último módulo suele ser Git** (workflow). Trátalo como módulo técnico, no como tarea.
- **Las tareas van al final de la sesión**, no intercaladas con los módulos.
- **Convierte wikilinks** `[[X|Etiqueta]]` → `[Etiqueta](ruta/X.md)` o `[Etiqueta](ruta#anchor)`.
- Si el plan es grande, divídelo en sub-planes (`001-a`, `001-b`) en vez de un solo README monolítico.
- No commitees — el dueño hace el commit.
