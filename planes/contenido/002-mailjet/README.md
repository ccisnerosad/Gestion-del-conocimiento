# 002 Integración: Mailjet — Newsletter interno

**Estado:** listo
**Agente:** Oreo
**Fecha:** 2026-06-06
**Fuente:** `Temas/mailjet/`
**Destino:** `src/content/cursos/mailjet/`
**Clasificación:** ver `planes/categorias.md` → `track: apis-comunicacion`, `level: fundamentos`, `format: taller` (un solo bloque, 3 módulos), `stack: [mailjet, mjml, email-marketing]`, `audience: equipos de comunicación interna y RRHH que gestionan newsletters para empleados`

## Resumen

Segundo curso real de la biblioteca. A diferencia del curso de Desarrollo Web, la fuente de mailjet es **un solo documento** (`Plan de estudio - mailjet.md`) con 3 módulos inline, sin sesiones separadas, sin tareas escritas. La estructura pública será 1 sesión con 3 módulos, sin `tareas.md` (no se fabrica material).

El curso enseña a equipos internos (comunicación, RRHH, marketing) a configurar y gestionar newsletters enviados desde Mailjet a empleados de la empresa. Cubre:

1. **Configuración técnica** — autenticación (SPF, DKIM, DMARC), gestión de la lista de empleados, coordinación con TI.
2. **Diseño del newsletter** — editor visual y MJML, responsive, accesibilidad y modo oscuro.
3. **Estrategia de contenido** — estructura "above the fold", CTAs, segmentación por departamento/sede, tests A/B.

Tono: profesional y práctico. Menos coloquial que el curso de Desarrollo Web porque el dominio (comunicación interna corporativa) lo requiere.

## Decisiones de adaptación

- **Sesión única (no 3 sesiones).** La fuente trata los 3 módulos como un solo cuerpo. Forzar 3 sesiones separadas sería fragmentar material cohesivo. Se presenta como una sesión de 2-3 horas.
- **Sin `tareas.md`.** La fuente no incluye tareas. No se inventa material.
- **`format: taller`** en vez de `bootcamp`. Un solo bloque de 2-3 horas encaja con la definición de taller (≥ 1 sesión de 2-3 h, contenido enfocado).
- **`track: apis-comunicacion`** según la taxonomía validada en `planes/categorias.md`.
- **`audience`** reescrito del "guía interna" original a un público concreto: equipos de comunicación interna y RRHH con nociones básicas de email marketing.
- **`stack: [mailjet, mjml, email-marketing]`** — refleja las herramientas mencionadas en la fuente. MJML queda como opcional (solo para perfiles técnicos).

## Criterios de aceptación

- [ ] `src/content/cursos/mailjet/` contiene 5 archivos: `curso.md`, `sesion-1/sesion.md`, `modulo-1.md`, `modulo-2.md`, `modulo-3.md`.
- [ ] El frontmatter de `curso.md` cumple el schema Zod.
- [ ] Los 3 módulos tienen frontmatter válido (title, order, duration, objectives).
- [ ] Wikilinks (si los hay) convertidos a links Markdown estándar.
- [ ] `pnpm run build` pasa sin warnings.
- [ ] El sitio responde HTTP 200 en: `/cursos/mailjet/`, `/cursos/mailjet/sesion-1/`, los 3 módulos.
- [ ] La card del curso aparece en `/cursos/` con badges correctos.
- [ ] El roadmap del index marca mailjet como "hecho".

## Resultado real

**Ejecutado y verificado en el contenedor `biblioteca-conocimiento` (rebuilt) en :8082.**

| Criterio | Estado |
|---|---|
| 5 archivos creados en `src/content/cursos/mailjet/` (curso + sesion-1/ con sesion, modulo-1, modulo-2, modulo-3) | ✅ |
| Frontmatter de `curso.md` cumple el schema Zod (track: apis-comunicacion, level: fundamentos, format: taller, stack: [email]) | ✅ |
| 3 módulos transcritos literalmente del `Plan de estudio - mailjet.md` (sin fabricar contenido) | ✅ |
| Sin `tareas.md` (la fuente no incluye tareas) | ✅ |
| Sesión única con 3 módulos, no 3 sesiones (decisión: la fuente trata los 3 módulos como un solo cuerpo) | ✅ |
| Wikilinks: la fuente no tenía ninguno (transcripción directa) | ✅ |
| `pnpm run build` exit 0, 17 páginas, 0 warnings | ✅ |
| 5 rutas nuevas devuelven HTTP 200 (`/cursos/mailjet/`, `/sesion-1/`, los 3 módulos) | ✅ |
| Card del curso aparece en `/cursos/` con badges correctos | ✅ |
| Roadmap del index marca mailjet como "hecho" (corregido "email transaccional" → "newsletter interno" para alinearse con el contenido real) | ✅ |

**Decisiones de adaptación (que el dueño puede revisar antes del commit):**
- `track: apis-comunicacion` — el enum validado del schema. Coincide con la taxonomía de `planes/categorias.md`.
- `format: taller` — un solo bloque de 2-3 horas con 3 módulos. No encaja con `bootcamp` (≥ 4 sesiones) ni con `crash-course` (≤ 1 h).
- `stack: [email]` — el enum del schema solo tiene `email` como categoría de alto nivel para esta materia. Las herramientas específicas (Mailjet, MJML) se documentan en el cuerpo del curso. **Lección: el schema `stack` es demasiado agregado para email; si se quieren filtrar por herramienta (Mailjet vs SendGrid vs Postmark), hay que extender el schema. Lo dejo como observación para un futuro plan.**
- `audience` reescrito del "guía interna" original a un público concreto: equipos de comunicación interna y RRHH.
- `instructor: "Carlos Cisneros"` — mismo patrón que el curso de desarrollo-web. El dueño puede renombrarlo.
- `created: 2025-01-01`, `updated: 2026-06-06`, `status: "published"`, `order: 2`.

**Pitfall encontrado y resuelto (durante el cierre):**
- El schema `stack` de Zod (`src/content.config.ts`) tiene un enum restringido a `frontend|backend|fullstack|devops|mobile|data|ia|email`. Usé `mailjet`, `mjml`, `email-marketing` inicialmente — Zod los rechazó en el build. Solución: usar `email` (la categoría de alto nivel). Documentado arriba.

**Lo que NO se hizo y por qué:**
- **Tareas y examen del curso.** La fuente no incluye ninguno. No se fabricó material.
- **Aplicativos interactivos.** No definidos. No se crearon.
- **Sesiones adicionales.** La fuente tiene 1 sesión con 3 módulos; no se inventaron sesiones extra.
- **Extender el schema `stack` con herramientas específicas** (mailjet, mjml, sendgrid, postmark). Útil para filtros futuros, pero fuera del alcance de este plan. Documentado en "Lección" arriba.

**Lecciones para futuros planes de contenido:**
- **Verificar el schema Zod antes de inventar valores.** El error de build fue claro y rápido de arreglar, pero se pudo evitar leyendo `src/content.config.ts` antes de diseñar el frontmatter. Regla: cuando se planifique un curso, abrir el schema de `src/content.config.ts` y confirmar que los valores de `track`, `level`, `format`, `stack` son válidos.
- **El `stack` es categórico, no específico.** Para una materia como email, donde el usuario podría querer filtrar por herramienta (Mailjet vs SendGrid), el schema actual no lo permite. Si se generaliza, considerar extender el enum o cambiar a un array libre (`stack: z.array(z.string())`).
- **La taxonomía es de alto nivel.** Lo importante en el frontmatter es la categoría (email), no la herramienta concreta (mailjet). El nombre de la herramienta vive en el título del curso y en el cuerpo, no en el campo `stack`.