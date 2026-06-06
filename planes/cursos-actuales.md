# Cursos actuales

Mapeo de los cursos del vault `Temas/` a la taxonomía definida en `planes/categorias.md`.

## Tabla de cursos

| Curso            | Fuente                                     | track                | level         | format       | stack                          | audience                                            |
|------------------|--------------------------------------------|----------------------|---------------|--------------|--------------------------------|-----------------------------------------------------|
| Desarrollo Web   | `Temas/Desarrollo web/`                    | `desarrollo-web`     | `fundamentos` | `bootcamp`   | `frontend`, `backend`, `fullstack` | `desarrolladores`, `principiantes`               |
| Mailjet          | `Temas/mailjet/`                           | `apis-comunicacion`  | `aplicado`    | `taller`     | `email`                        | `no-tecnicos` (equipo de comunicación interna)      |

## Justificación por curso

### Desarrollo Web

- **Track `desarrollo-web`**: la materia es desarrollo web en general (HTML, CSS, JS, Git). Aunque tiene contenido de backend en la sesión final, el track correcto es `desarrollo-web` (no `devops-infra` por el módulo de Git, ni `data` por cualquier mención).
- **Level `fundamentos`**: el plan dice "principiantes" explícitamente. Asume solo HTML/CSS básico.
- **Format `bootcamp`**: "4 Sesiones intensivas de 3 horas" — encaja con la definición de `bootcamp` (≥ 4 sesiones × 2-3 horas).
- **Stack `[frontend, backend, fullstack]`**: el bootcamp cubre los tres (M1-M2 frontend, M3 backend ligero, M4 Git + integración).
- **Audience**: público técnico principiante.

### Mailjet

- **Track `apis-comunicacion`**: Mailjet es una API de email. Encaja en `apis-comunicacion`, no en `desarrollo-web` aunque la integración sea "web".
- **Level `aplicado`**: el contenido asume que la persona trabaja en una empresa con departamento de TI, no enseña a programar desde cero. Audiencia que ya opera en un contexto profesional.
- **Format `taller`**: 3 módulos temáticos con aplicación práctica. Estructura "1-2 sesiones × 2-4 horas" parece encajar (a confirmar al integrar). No es bootcamp (no hay sesiones múltiples con M0 de setup).
- **Stack `[email]`**: el foco es 100% email transaccional / newsletter interno. Sin frontend, backend genérico, ni devops (aunque tangencialmente toca SPF/DKIM que es DNS).
- **Audience `no-tecnicos`**: la capacitación es para gente de comunicación interna o RRHH, no para developers. El plan dice explícitamente "Si la persona tiene perfil técnico, se le puede enseñar MJML" — es la excepción, no la regla.

## Cursos planificados (no en `Temas/` aún)

Estos tracks están definidos en `planes/categorias.md` pero no tienen material fuente todavía:

| track                | Notas                                                              |
|----------------------|--------------------------------------------------------------------|
| `devops-infra`       | Pendiente. Probable curso: Docker Compose, CI/CD, nginx.            |
| `ia-automatizacion`  | Pendiente. Probable curso: Vibecoding, agentes, RAG.                |
| `datos`              | Pendiente. Probable curso: SQL aplicado, o Turso/libSQL.            |

## Cómo añadir un nuevo curso

1. Crear la carpeta `Temas/<slug-tema>/` con al menos un `Plan de estudio - <nombre>.md`.
2. Crear un plan en `planes/contenido/NNN-slug-tema/` (ver template en `planes/contenido/README.md`).
3. En el plan, completar la sección **Clasificación (taxonomía)** usando los valores de `planes/categorias.md`.
4. Si el curso requiere un track o nivel nuevo, abrir primero un plan en `planes/dev/` proponiendo la extensión de la taxonomía. No añadir valores sin consenso.
5. Ejecutar la integración siguiendo el plan, no el `Temas/` directamente.

## Pendiente

- **Confirmar formato de Mailjet** — el plan en `Temas/mailjet/` no especifica número de sesiones ni duración. La clasificación como `taller` es razonable pero debería confirmarse al integrar.
- **El frontmatter de los cursos aún no se ha generado** — esto es un mapeo de categorización, no de contenido. La primera integración creará el `curso.md` real.
