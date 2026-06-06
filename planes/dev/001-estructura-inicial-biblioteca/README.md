# Plan: Estructura inicial de cursos, categorías y agente experto

**Estado:** listo
**Cerrado:** 2025-01-01 (commit ba87331)

## Contexto

El proyecto `Gestion-del-conocimiento` está en su punto fundacional: ya existe `planes/` con directrices, ya están los dos cursos pensados (`mailjet`, `desarrollo web`) en `Temas/`, pero falta:

1. **`AGENTS.md` en la raíz** — para auto-descubrimiento por herramientas tipo Cursor/Claude (el estándar es que viva en la raíz del repo, no anidado).
2. **Agente experto de la plataforma** — el dev agent actual es genérico. Necesita skills explícitas: conocer el stack (Astro 6 + Tailwind 4 + nginx), el sistema visual (heredado de astillerodigital.com), el workflow de planes.
3. **Estructura canónica de cursos** — definida como convención en `planes/contenido/` y demostrada con un curso ejemplo. Hoy no hay blueprint; el primer agente de contenido lo va a inventar y van a salir cursos inconsistentes.
4. **Taxonomía de categorías** — el usuario tiene 2 cursos muy distintos (mailjet = capacitación interna no-dev, desarrollo web = bootcamp dev). Necesita un esquema que crezca.

## Estado actual

- `/home/docker/Gestion-del-conocimiento/AGENTS.md` — no existe.
- `planes/AGENTS.md` — existe (115 líneas), contrato global.
- `planes/dev/README.md` — existe (81 líneas), directrices + template, sin skills explícitas del stack.
- `planes/contenido/README.md` — existe (198 líneas), directrices + templates, sin estructura de curso definida.
- `Temas/mailjet/` — 1 archivo, 3 módulos, audiencia no-dev (capacitación interna RRHH/comms).
- `Temas/Desarrollo web/` — 1 plan + 1 sesión completa + tareas, audiencia dev, formato bootcamp 4×3h.

## Propuesta

### 1. Mover `AGENTS.md` a la raíz

`planes/AGENTS.md` → `/AGENTS.md`. La razón: el estándar de la industria (Cursor, Claude Code, Aider, Continue) es buscar `AGENTS.md`, `CLAUDE.md` o `.cursorrules` en la **raíz del repo**. Anidado en `planes/` no se descubre automáticamente.

### 2. Convertir el dev agent en experto de la plataforma

Expandir `planes/dev/README.md` con secciones de **skills explícitas** que el agente debe demostrar dominar:

- **Stack**: Astro 6 (Content Collections con Zod), Tailwind 4 (sin config, `@tailwindcss/vite`), nginx para servir `dist/`, Docker Compose.
- **Sistema visual**: tokens CSS (Montserrat + Nunito, accent `#cfab80`, dark bg `#181818`, radius 4px), convención de aplicar vía variables, no valores sueltos.
- **Estructura del proyecto**: layout de carpetas, dónde van los cursos, dónde van los planes, dónde van los assets.
- **Workflow de planes**: leer plan antes de actuar, verificar criterios de aceptación, dejar `Resultado real` con desviaciones.
- **Pitfalls**: cosas que ya sabemos que fallan (PEP 668, nvm no carga en .bashrc, TTS edge caps, etc. — solo las que aplican a este proyecto).

### 3. Definir estructura canónica de cursos

En `planes/contenido/README.md`, agregar sección **"Estructura de un curso"** con:

```
src/content/cursos/<slug>/
├── curso.md              # Frontmatter + descripción general
├── sesion-1/
│   ├── sesion.md         # Overview, objetivos, prerequisitos
│   ├── modulo-0.md       # Setup/entorno (opcional, solo si requiere setup)
│   ├── modulo-1.md       # Contenido
│   ├── modulo-N.md
│   └── tareas.md         # Tarea(s) final(es)
├── sesion-2/...
├── recursos/             # PDFs, imágenes (opcional)
└── README.md             # Índice navegable
```

Frontmatter schema (será el Zod schema de Content Collections en Astro):

```yaml
# curso.md
title: string
slug: string
description: string
track: enum(desarrollo-web | apis-comunicacion | devops-infra | ia-automatizacion | datos)
level: enum(fundamentos | aplicado | maestria)
format: enum(bootcamp | taller | crash-course | tutorial)
duration: string              # "4 sesiones × 3 horas"
stack: array(frontend|backend|fullstack|devops|mobile|data|ia|email)
audience: string              # descripción libre
prerequisites: array(string)
instructor: string
created: date
updated: date
status: enum(draft | published | archived)
order: number
```

```yaml
# sesion-X/sesion.md
title: string
order: number                 # 1-based
duration: string              # "3 horas"
objectives: array(string)
modulos: array(string)        # ["modulo-0", "modulo-1", ...]
tareas: array(string)         # ["tareas"]
prerequisites: array(string)
```

```yaml
# sesion-X/modulo-Y.md
title: string
order: number
duration: string              # "30 min"
objectives: array(string)
```

```yaml
# sesion-X/tareas.md
title: string
order: number
type: enum(tarea | proyecto | examen)
deadline: string              # "fin de sesión" o duración
deliverable: string          # qué se entrega
rubric: array(object)         # opcional, para autoevaluación
```

### 4. Crear curso ejemplo "Desarrollo Web"

`planes/contenido/ejemplos/desarrollo-web/` con un esqueleto que demuestra la estructura. No es un curso completo — es el blueprint que el primer agente de contenido va a copiar y rellenar. Como aún no existe `src/content/cursos/`, el ejemplo vive en `planes/` (es la convención, no el contenido público).

```
planes/contenido/ejemplos/desarrollo-web/
├── curso.md                   # Frontmatter rellenado
├── sesion-1/
│   ├── sesion.md
│   ├── modulo-0.md            # Setup entorno dev
│   ├── modulo-1.md            # Placeholder de contenido
│   ├── modulo-2.md            # Placeholder
│   ├── modulo-3.md            # Placeholder
│   ├── modulo-4.md            # Git (cierre)
│   └── tareas.md
└── README.md
```

Los placeholders dejan claro qué hay que rellenar, con una breve descripción de qué debería ir.

### 5. Taxonomía de categorías

Crear `planes/categorias.md` con la taxonomía. Decisión de diseño: **multi-eje**, no jerárquica. Un curso se clasifica en 3 ejes independientes:

| Eje          | Valores                                                                                                            |
|--------------|--------------------------------------------------------------------------------------------------------------------|
| `track`      | `desarrollo-web`, `apis-comunicacion`, `devops-infra`, `ia-automatizacion`, `datos`                                |
| `level`      | `fundamentos`, `aplicado`, `maestria`                                                                              |
| `format`     | `bootcamp`, `taller`, `crash-course`, `tutorial`                                                                   |
| `stack`      | `frontend`, `backend`, `fullstack`, `devops`, `mobile`, `data`, `ia`, `email` (multi-valor)                       |
| `audience`   | `desarrolladores`, `no-tecnicos`, `principiantes`, `intermedios`, `avanzados` (multi-valor)                       |

Justificación: `mailjet` y `desarrollo web` son tan distintos que una jerarquía única los obliga a uno a ser hijo del otro, o crea ramas con un solo curso. Multi-eje permite que crezca la biblioteca sin reestructurar.

### 6. Mapeo de cursos actuales

Crear `planes/cursos-actuales.md` con la tabla de cursos del vault `Temas/` mapeados a la taxonomía:

| Curso            | track              | level       | format      | stack                       | audience                |
|------------------|--------------------|-------------|-------------|-----------------------------|-------------------------|
| Desarrollo web   | `desarrollo-web`   | `fundamentos` | `bootcamp`    | `frontend,backend,fullstack` | `desarrolladores,principiantes` |
| Mailjet          | `apis-comunicacion`| `aplicado`    | `taller`      | `email`                       | `no-tecnicos`            |

## Archivos afectados

- `planes/AGENTS.md` → `/AGENTS.md` (mover)
- `planes/dev/README.md` (expandir con skills)
- `planes/contenido/README.md` (expandir con estructura)
- `planes/categorias.md` (crear)
- `planes/cursos-actuales.md` (crear)
- `planes/contenido/ejemplos/desarrollo-web/curso.md` (crear)
- `planes/contenido/ejemplos/desarrollo-web/sesion-1/sesion.md` (crear)
- `planes/contenido/ejemplos/desarrollo-web/sesion-1/modulo-0.md` (crear)
- `planes/contenido/ejemplos/desarrollo-web/sesion-1/modulo-1.md` (crear, placeholder)
- `planes/contenido/ejemplos/desarrollo-web/sesion-1/modulo-2.md` (crear, placeholder)
- `planes/contenido/ejemplos/desarrollo-web/sesion-1/modulo-3.md` (crear, placeholder)
- `planes/contenido/ejemplos/desarrollo-web/sesion-1/modulo-4.md` (crear, placeholder)
- `planes/contenido/ejemplos/desarrollo-web/sesion-1/tareas.md` (crear, placeholder)
- `planes/contenido/ejemplos/desarrollo-web/README.md` (crear)
- `planes/dev/001-estructura-inicial-biblioteca/README.md` (crear — este archivo)

## Pasos

1. Crear este plan.
2. Mover `planes/AGENTS.md` → `/AGENTS.md`.
3. Expandir `planes/dev/README.md` con skills.
4. Expandir `planes/contenido/README.md` con estructura canónica.
5. Crear `planes/categorias.md` con la taxonomía.
6. Crear `planes/cursos-actuales.md` con el mapeo.
7. Crear el curso ejemplo `desarrollo-web` con sus 8 archivos.
8. Verificar con `find planes -type f | sort` y `git status --short`.

## Criterios de aceptación

- [ ] `/AGENTS.md` existe y es idéntico al antiguo `planes/AGENTS.md`.
- [ ] `planes/AGENTS.md` ya no existe.
- [ ] `planes/dev/README.md` tiene sección "Skills del agente" con stack, sistema visual, workflow, pitfalls.
- [ ] `planes/contenido/README.md` tiene sección "Estructura de un curso" con árbol de carpetas y schemas de frontmatter.
- [ ] `planes/categorias.md` define los 5 ejes de clasificación.
- [ ] `planes/cursos-actuales.md` mapea los 2 cursos existentes a la taxonomía.
- [ ] `planes/contenido/ejemplos/desarrollo-web/` tiene los 8 archivos y demuestra la estructura completa.
- [ ] Los placeholders del curso ejemplo dejan claro qué hay que rellenar.
- [ ] `git status` muestra los archivos nuevos sin conflictos con lo ya trackeado.
- [ ] No se commiteó nada.

## Riesgos

- **El curso ejemplo es opinión, no verdad.** El usuario debería validar que el formato propuesto le sirve antes de que un agente de contenido lo use para crear cursos reales. Marcar como **propuesta pendiente de validación**.
- **La taxonomía puede no aguantar 20 cursos.** Es propuesta inicial basada en 2 cursos existentes. Si la biblioteca crece y aparecen categorías no anticipadas, se revisa.
- **El frontmatter schema es opinionado.** Astro Content Collections lo va a usar para validación. Cambiar el schema después implica migración de cursos existentes. Vale la pena definirlo bien la primera vez, pero aceptamos que pueda evolucionar.
- **El ejemplo no incluye el módulo de "Examen"** que el usuario mencionó en el brief original. La estructura actual lo cubre con `type: examen` en `tareas.md`, pero el rendering del examen (preguntas, corrección, scoring) no está diseñado todavía. Es deuda técnica documentada.

## Notas

- Mailjet NO tiene `Temas/mailjet/Sesión 1/Modulo 0.md` — no requiere setup. Eso confirma que el Módulo 0 es opcional y debe depender del curso, no ser obligatorio.
- Mailjet tampoco tiene `Tareas/` — es contenido de capacitación sin entregables. Confirma que `tareas.md` también es opcional.
- La estructura tiene que ser flexible: no todos los cursos tienen M0 ni tareas.

## Resultado real

Ejecutado en commit `ba87331` y anteriores (`68c57ed`, `fd42c24`, `e6857f6`, `65387d8`).

| Criterio | Estado | Evidencia |
|---|---|---|
| `/AGENTS.md` existe y es el antiguo `planes/AGENTS.md` | ✅ | `git log --follow AGENTS.md` |
| `planes/AGENTS.md` ya no existe | ✅ | `find planes -name AGENTS.md` |
| `planes/dev/README.md` con sección "Skills del agente" | ✅ | Stack Astro 6, sistema visual, workflow de planes documentados |
| `planes/contenido/README.md` con estructura canónica | ✅ | Árbol de carpetas + 4 schemas de frontmatter (curso, sesión, módulo, tarea) |
| `planes/categorias.md` con 5 ejes | ✅ | track, level, format, stack, audience |
| `planes/cursos-actuales.md` con mapeo | ✅ | 2 cursos mapeados |
| `planes/contenido/ejemplos/desarrollo-web/` con 8 archivos | ✅ | Blueprint + placeholders |

**Pendientes que se arrastraron al plan 002:**
- `src/content.config.ts` con Zod schema de la collection `cursos`.
- Catálogo público (`/cursos/`, `/cursos/<slug>/`, `/cursos/<slug>/<sesion>/`, `/cursos/<slug>/<sesion>/<modulo>/`).
- Root `README.md` específico del proyecto (reemplazaba el boilerplate de Astro).

**Lecciones aprendidas (para la skill del dev agent):**
- **Planes retrospectivos**: este plan nació DESPUÉS de ejecutar la mayor parte del trabajo. La regla a futuro es: abrir plan antes de tocar código. Ver `planes/dev/README.md` para la convención.
- **Taxonomía multi-eje vs jerárquica**: el usuario validó la multi-eje ("genera las categorías que creas pertinentes"). Documentar en el AGENTS que esta es la decisión de diseño.
- **Schemas opinionados**: el Zod schema de `src/content.config.ts` se debe sincronizar con lo que dice `planes/contenido/README.md`. Si cambias uno, cambia el otro.
