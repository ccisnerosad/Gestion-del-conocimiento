# Plan: Catálogo público y content config

**Tipo:** feature
**Estado:** listo
**Agente:** Oreo
**Fecha:** 2025-01-01

## Contexto

El scaffold Astro 6.4 ya está en pie (`src/pages/index.astro` con landing, `Layout.astro`, sistema visual en `global.css`, `docker-compose.yml` en :8082), pero faltan tres piezas para que la biblioteca sea funcional:

1. **`src/content.config.ts`** — sin esto, el primer curso que se integre va a fallar al build porque Astro no sabe cómo validar su frontmatter. Es la primera línea de defensa contra errores silenciosos.
2. **Catálogo público navegable** — actualmente solo existe `src/pages/index.astro` con copy estático. Sin rutas dinámicas, los cursos no se pueden listar, ni abrir individualmente, ni navegar sesión a sesión.
3. **Root `README.md`** — sigue siendo el boilerplate de "Astro Starter Kit: Minimal" (43 líneas). Un visitante que llega al repo no entiende qué es el proyecto.

Estos tres ítems estaban listados como pendientes en el plan 001 y la conversación previa.

## Estado actual

Verificado con `git status --short` (working tree limpio post-commit) y `find src -type f`:

```
src/
├── layouts/Layout.astro
├── pages/404.astro
├── pages/500.astro
├── pages/index.astro           (landing estática, 83 líneas, ya usa tokens visuales)
└── styles/global.css           (tokens visuales ya definidos en @theme)
```

- `src/content.config.ts` — **no existe**.
- `src/pages/cursos/` — **no existe**.
- `src/content/cursos/` — **no existe** (se crea con el primer curso integrado).
- `README.md` raíz — boilerplate de Astro (43 líneas).
- Astro 6.4.4 confirmado en `node_modules/astro/package.json`.
- `defineCollection` y `glob` loader disponibles en `astro:content` y `astro/loaders`.

## Propuesta

### 1. `src/content.config.ts` — Schema Zod para `cursos`

Una sola collection `cursos` con glob loader apuntando a `src/content/cursos/*/curso.md`. Esto valida el frontmatter de cada curso al build.

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cursos = defineCollection({
  loader: glob({ pattern: '**/curso.md', base: './src/content/cursos' }),
  schema: z.object({ /* ver schemas en /AGENTS.md */ }),
});

export const collections = { cursos };
```

**Decisión deliberada: NO crear collection para `sesiones` o `modulos` por ahora.** Razones:
- YAGNI: con 0 cursos integrados, añadir tres collections es complejidad sin valor.
- Sesiones y módulos se cargarán con `import.meta.glob` desde las páginas dinámicas. Funciona, es simple, y se puede refactorizar a collections si crece.
- Si en el futuro necesitamos query global tipo "todos los modulos de nivel fundamentos", refactorizamos.

### 2. Catálogo público

Cuatro rutas nuevas:

| Ruta | Archivo | Función |
|---|---|---|
| `/cursos/` | `src/pages/cursos/index.astro` | Listado de todos los cursos, con filtro visual por `track` y `level`. |
| `/cursos/<slug>/` | `src/pages/cursos/[slug]/index.astro` | Landing del curso: descripción, índice de sesiones, prerrequisitos. |
| `/cursos/<slug>/<sesion>/` | `src/pages/cursos/[slug]/[sesion].astro` | Vista de una sesión: módulos como lista navegable, tareas. |
| `/cursos/<slug>/<sesion>/<modulo>/` | `src/pages/cursos/[slug]/[sesion]/[modulo].astro` | Vista de un módulo: contenido Markdown renderizado. |

`getStaticPaths` se usa en cada página dinámica para generar las rutas. Sesiones y módulos se descubren con `import.meta.glob` desde cada página.

**Estado vacío (sin cursos integrados):** el catálogo debe mostrar un mensaje claro "Aún no hay cursos integrados" en vez de fallar o mostrar una página vacía confusa.

### 3. Root `README.md`

Reemplazar el boilerplate con algo que:
- Identifique el proyecto en 1 línea.
- Diga qué hay en el repo (combinando `Temas/`, `planes/`, `src/`).
- Apunte a `/AGENTS.md` para detalles del agente.
- Tenga los comandos esenciales (dev, build, deploy).
- Tenga un enlace a la URL de producción.

No reinventar — usar la info que ya está consolidada en `AGENTS.md` y `planes/dev/README.md`.

### 4. Cerrar plan 001

Una vez ejecutada toda la propuesta, añadir sección "Resultado real" al plan 001 y marcar como `listo`. No es un cambio funcional, es housekeeping.

## Archivos afectados

- `src/content.config.ts` (crear)
- `src/pages/cursos/index.astro` (crear)
- `src/pages/cursos/[slug]/index.astro` (crear)
- `src/pages/cursos/[slug]/[sesion].astro` (crear)
- `src/pages/cursos/[slug]/[sesion]/[modulo].astro` (crear)
- `README.md` (sobrescribir, era boilerplate)
- `planes/dev/001-estructura-inicial-biblioteca/README.md` (cerrar con "Resultado real")

## Pasos

1. Crear este plan.
2. Crear `src/content.config.ts` con la collection `cursos` y el Zod schema completo.
3. Crear `src/pages/cursos/index.astro` (catálogo vacío con estado explícito).
4. Crear `src/pages/cursos/[slug]/index.astro` (landing por curso).
5. Crear `src/pages/cursos/[slug]/[sesion].astro` (sesión).
6. Crear `src/pages/cursos/[slug]/[sesion]/[modulo].astro` (módulo).
7. Sobrescribir `README.md` raíz.
8. Cerrar plan 001 con sección "Resultado real".
9. Verificar con `pnpm run build` — debe compilar sin errores.

## Criterios de aceptación

- [ ] `src/content.config.ts` existe y declara la collection `cursos` con el schema Zod documentado en `planes/contenido/README.md`.
- [ ] `src/pages/cursos/index.astro` existe y renderiza "no hay cursos" cuando la colección está vacía.
- [ ] `src/pages/cursos/[slug]/index.astro` existe con `getStaticPaths` que falla elegantemente con la colección vacía.
- [ ] Las dos páginas de sesión y módulo existen.
- [ ] `README.md` raíz ya no contiene "Astro Starter Kit: Minimal".
- [ ] `pnpm run build` termina con exit code 0.
- [ ] Plan 001 tiene sección "Resultado real" y estado `listo`.

## Resultado real

(Se rellena al terminar.)

**Ejecutado.** Build verificado: `pnpm run build` exit 0, 4 páginas generadas, 52K dist.

| Criterio | Estado |
|---|---|
| `src/content.config.ts` con collection `cursos` + Zod schema | ✅ |
| `src/pages/cursos/index.astro` con estado vacío explícito | ✅ |
| `src/pages/cursos/[slug]/index.astro` con `getStaticPaths` | ✅ |
| `src/pages/cursos/[slug]/[sesion].astro` con sesiones dinámicas | ✅ |
| `src/pages/cursos/[slug]/[sesion]/[modulo].astro` con modulos dinámicos | ✅ |
| Root `README.md` reemplazado (sin "Astro Starter Kit: Minimal") | ✅ |
| `pnpm run build` exit 0 | ✅ |
| Plan 001 cerrado con "Resultado real" | ✅ |

**Pitfalls encontrados durante la ejecución (para la skill del dev agent):**

1. **`import.meta.glob` con template literal NO funciona en Vite/Astro.** El patrón debe ser un string estático. La primera versión usó `${curso.data.slug}` dentro del template literal y el build falló con `Invalid glob import syntax: Expected glob to be a string, but got dynamic template literal`. **Regla**: el patrón es siempre un literal; el filtrado por slug se hace en código, no en el patrón.

2. **`import.meta.glob` dentro del frontmatter de un .astro se mueve al cuerpo del componente durante la compilación.** Si lo usas dentro de `getStaticPaths`, la variable queda fuera del scope. **Regla**: los globs que necesita `getStaticPaths` deben declararse DENTRO de la función. El compilador los respeta porque analiza estáticamente las llamadas a `import.meta.glob` en todo el módulo.

3. **Colección vacía = warning, no error.** Astro emite un warning (`[glob-loader] The base directory does not exist`) y un mensaje (`The collection "cursos" does not exist or is empty`) pero el build pasa. Es seguro desplegar con la colección vacía mientras se integra el primer curso. **Implicación**: las páginas de `[slug]/...` no se generan (no hay params), lo cual es el comportamiento correcto.

4. **El modulo page incluye `tareas.md` como un caso especial.** El glob `*/*.md` dentro de `sesion-*/` captura `sesion.md` (overview), `modulo-*.md` y `tareas.md`. Hay que excluir `sesion.md` y `curso.md` explícitamente. La URL de tareas es `/cursos/<slug>/<sesion>/tareas/` (sin carpeta extra).

**Decisiones de diseño que se confirman:**
- NO crear collections separadas para sesiones y módulos. Cargar con `import.meta.glob` + filtrar. Es suficiente para la escala actual (0-50 cursos). Si crece, refactor a collections.
- Pasar listas de navegación (sesiones hermanas, módulos hermanos) como **props** desde `getStaticPaths`, no como globs en el componente. Así la página no depende de Vite/glob en runtime.
- Estado vacío del catálogo es texto explícito, no una sección oculta. El usuario debe ver claramente "aún no hay cursos" en vez de una página confusa.

**Trabajo futuro (no en este plan):**
- Render de aplicativos (`aplicativos/<slug>/`).
- Render de exámenes (`examenes/<slug>.md`).
- Filtros interactivos en el catálogo (vanilla JS o framework ligero).
- PDF export vía Kinse API.

## Notas y riesgos

- **Build con colección vacía**: `getStaticPaths` debe manejar el caso de `getCollection('cursos')` devolviendo `[]`. Si no, el build falla. La página index muestra mensaje, las páginas dinámicas no generan rutas (eso es lo correcto).
- **Tokens en class names**: las páginas dinámicas deben usar `var(--color-accent)` o `text-[var(--color-accent)]` (como ya hace `index.astro`). No hardcodear colores.
- **`getStaticPaths` ejecuta en build**, no en runtime — perfecto para nuestro caso (sitio estático).
- **Wikilinks de Obsidian en `Temas/` no se renderizan** — esto solo importa cuando se integre el primer curso. Por ahora los Markdown de cursos no tendrán wikilinks.
