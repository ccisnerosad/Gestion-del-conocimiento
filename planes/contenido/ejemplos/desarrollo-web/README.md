# Ejemplo: Desarrollo Web

> **Esto es un blueprint, no un curso real.** Demuestra la estructura canónica definida en `planes/contenido/README.md`. El contenido está como placeholder; un agente de contenido real lo llenará basándose en `Temas/Desarrollo web/`.

**Estado:** blueprint — pendiente de integración real.

## Propósito

Servir de ejemplo a futuros agentes de contenido. La estructura debe ser copiada y rellenada para integrar un curso nuevo.

## Mapeo a la fuente

| Archivo en este ejemplo     | Origen en `Temas/Desarrollo web/`              |
|----------------------------|-----------------------------------------------|
| `curso.md`                 | `Plan de estudio - Desarrollo web.md`         |
| `sesion-1/sesion.md`       | `Sesión 1/Sesión 1 Fundamentos, -Hola Mundo- y Vibecoding.md` |
| `sesion-1/modulo-0.md`     | `Sesión 1/Modulo 0.md`                        |
| `sesion-1/modulo-1.md`     | `Sesión 1/Modulo 1.md`                        |
| `sesion-1/modulo-2.md`     | `Sesión 1/Modulo 2.md`                        |
| `sesion-1/modulo-3.md`     | `Sesión 1/Modulo 3.md`                        |
| `sesion-1/modulo-4.md`     | `Sesión 1/Modulo 4.md`                        |
| `sesion-1/tareas.md`       | `Tareas/Tarea 1 - Sesión 1.md`                |

## Lo que falta intencionalmente

- **Sesiones 2, 3 y 4** — el `Temas/` solo tiene la Sesión 1 detallada. Las demás están planificadas pero no escritas todavía. Cuando se integren, se añadirán `sesion-2/`, `sesion-3/`, `sesion-4/` siguiendo el mismo patrón.
- **Examen** — no definido todavía. Cuando se cree, vivirá en `examenes/desarrollo-web.md` (carpeta hermana).
- **Aplicativos** — no definidos. Cuando se propongan, vivirán en `aplicativos/<slug>/index.astro`.

## Clasificación (taxonomía)

Aplicar la taxonomía de `planes/categorias.md`:

- **track**: `desarrollo-web`
- **level**: `fundamentos`
- **format**: `bootcamp`
- **stack**: `[frontend, backend, fullstack]`
- **audience**: `desarrolladores principiantes con nociones de HTML/CSS`

## Notas

- La estructura `sesion-1/modulo-Y.md` con `Y=0..4` refleja lo observado en `Temas/`. **Módulo 0 es setup, módulos 1-3 son contenido, módulo 4 es Git/workflow técnico.** Esta convención debe respetarse.
- El `README.md` de la carpeta de curso (este archivo) es **opcional** en el destino final. En la versión pública, el índice puede generarse automáticamente a partir del frontmatter de `curso.md`.
