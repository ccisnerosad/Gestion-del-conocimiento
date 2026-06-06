# Taxonomía de la biblioteca

Esquema **multi-eje** (no jerárquico) para clasificar cursos. Un curso pertenece a un valor de cada eje, y puede tener varios valores en los ejes multi-valor (`stack`, `audience`).

## Por qué multi-eje

Los dos cursos existentes (`mailjet` y `desarrollo web`) son radicalmente distintos: el primero es capacitación interna para gente de comunicación, el segundo es un bootcamp técnico. Una jerarquía única (ej. "Desarrollo > Web > Frontend") obligaría a uno de ellos a ser hijo del otro, o crearía ramas con un solo curso. Multi-eje deja crecer la biblioteca sin reestructurar.

## Ejes

### 1. `track` — Dominio temático (un solo valor)

Agrupa cursos por área de conocimiento.

| Valor | Descripción | Cursos ejemplo (planificados o existentes) |
|---|---|---|
| `desarrollo-web` | Frontend, backend, fullstack, frameworks, testing. | `desarrollo-web` |
| `apis-comunicacion` | Email, SMS, push, webhooks, integraciones con servicios externos. | `mailjet` |
| `devops-infra` | Docker, CI/CD, nginx, observabilidad, cloud. | (futuro) |
| `ia-automatizacion` | LLMs, agentes, prompt engineering, RAG, vibecoding. | (futuro) |
| `datos` | Bases de datos, SQL, analytics, ETL. | (futuro) |

**Regla de extensión**: añadir un track solo si hay ≥ 2 cursos planificados en él. Si es un solo curso suelto, reusar un track existente o crear uno nuevo pero documentar la razón.

### 2. `level` — Profundidad (un solo valor)

| Valor | Descripción | Indicador de duración |
|---|---|---|
| `fundamentos` | Introductorio, asume poco o nada. | < 8 horas |
| `aplicado` | Intermedio, asume conocimiento básico. | 4-16 horas |
| `maestria` | Avanzado, asume experiencia. | > 16 horas o multi-semana |

### 3. `format` — Tipo de curso (un solo valor)

| Valor | Descripción | Estructura típica |
|---|---|---|
| `bootcamp` | Intensivo multi-sesión. | ≥ 4 sesiones × 2-3 horas |
| `taller` | Sesión extendida con práctica. | 1-2 sesiones × 2-4 horas |
| `crash-course` | Intro rápido. | 1 sesión × 1-2 horas |
| `tutorial` | Autoestudio, sin horario fijo. | Módulos independientes |

### 4. `stack` — Foco técnico (multi-valor)

Etiquetas que indican el área técnica que cubre el curso.

| Valor | Significado |
|---|---|
| `frontend` | HTML, CSS, JS/TS, frameworks UI. |
| `backend` | APIs, servidores, bases de datos, autenticación. |
| `fullstack` | Combinación de frontend + backend. |
| `devops` | Contenedores, CI/CD, infra como código. |
| `mobile` | iOS, Android, React Native, Flutter. |
| `data` | SQL, NoSQL, pipelines, analytics. |
| `ia` | LLMs, ML, agentes, RAG. |
| `email` | Transactional email, marketing email, deliverability. |

### 5. `audience` — Audiencia (multi-valor, descripción)

Descripción libre. Valores sugeridos (no exhaustivos):

- `desarrolladores` — audiencia técnica primaria.
- `no-tecnicos` — gente de marketing, RRHH, comunicación, ops.
- `principiantes` — sin experiencia previa en el dominio.
- `intermedios` — experiencia básica, buscan profundizar.
- `avanzados` — experiencia sólida, buscan mastery.

## Aplicación al frontmatter

Estos ejes se traducen directamente al frontmatter de `src/content/cursos/<slug>/curso.md`:

```yaml
track: apis-comunicacion         # un solo valor
level: aplicado                  # un solo valor
format: taller                   # un solo valor
stack: [email]                   # array
audience: "Equipo de comunicación interna"  # string libre
```

## Validación con Zod

El schema en `src/content.config.ts` enumerará los valores permitidos de `track`, `level`, `format` y `stack`. Valores nuevos requieren actualizar el schema. **No** añadir valores al frontmatter sin actualizar el schema — el build fallará.

## Evolución

Esta taxonomía es **propuesta inicial** basada en 2 cursos. Cuando la biblioteca crezca:

- Si un curso no encaja en ningún track, **no** forzar — abrir un plan en `planes/dev/` proponiendo un nuevo track.
- Si los niveles (`fundamentos`/`aplicado`/`maestria`) no capturan la realidad (ej. aparece algo como "certificación" o "bootcamp-empresarial"), revisar antes de añadir.
- Los valores de `stack` deberían ser ortogonales y raros de solapar. Si dos cursos comparten 4 de 5 valores de stack, probablemente son la misma audiencia y debería unirse.

## Pendiente

- **Falta definir el comportamiento del catálogo** cuando un usuario filtra por track vs. por stack. ¿Catálogo principal = `track`, secundario = `stack`? Decisión de UX pendiente.
- **No hay categorías de idioma** — si entran cursos en otros idiomas, hay que añadir un eje `lang` o `i18n`.
