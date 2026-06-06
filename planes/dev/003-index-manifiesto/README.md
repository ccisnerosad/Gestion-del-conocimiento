# Plan 003: Refactor del index con manifiesto de la plataforma

**Tipo:** mejora-diseño
**Estado:** listo
**Agente:** Oreo
**Fecha:** 2026-06-06

1. **Tres referencias a `Temas/`** en `src/pages/index.astro` y dos más en `src/pages/cursos/index.astro`. La carpeta `Temas/` es el vault personal de Obsidian — nunca debe exponerse al público (regla dura en `/AGENTS.md` y en `planes/dev/README.md`). El catálogo en producción debe hablar de "cursos" o "biblioteca", no de un directorio interno.
2. **El index no tiene un objetivo claro de la plataforma.** El copy actual dice "Plataforma para acceder y gestionar el conocimiento que se comparte" — un placeholder genérico. El dueño describió la plataforma como:
   - Repositorio de procedimientos y herramientas del astillero
   - Recursos para enseñar a gente técnica y no técnica
   - Plataforma libre para compartir estrategias de aprendizaje autodidacta
   - Espacio para temas que "alimentan al alma": música, ciencia, gestión de calidad, temas sociales
   - Su repositorio personal de notas, hecho público

Este plan refactoriza el index para reflejar esa identidad, y de paso limpia las dos referencias a `Temas/` que quedan en el catálogo.

## Estado actual

Verificado con `rg "Temas" src/` y `rg "vault|Integrados|planean" src/`:

- `src/pages/index.astro` — 3 referencias a `Temas/` (línea 16 en header, línea 33 en card de Cursos, línea 84 en roadmap).
- `src/pages/cursos/index.astro` — 2 referencias a `Temas/` (línea 26 en el hero, línea 35 en el empty state).
- `src/styles/global.css` — no tiene los estilos `.prose-biblioteca` que el [modulo].astro declara con `is:global`. Si los quiero usar en el index, tengo dos opciones:
  - (a) Duplicarlos en el index (DRY violation).
  - (b) **(elegida)** Moverlos a `global.css` dentro de `@layer components` y quitarlos de `[modulo].astro`. La regla de "no dupliques tokens/estilos en componentes" gana.
- `Layout.astro` — el nav global con 4 items (Inicio, Cursos, Aplicativos, Exámenes) está OK y se mantiene intacto.
- `src/content.config.ts` — schema Zod de la collection `cursos` validado en build anterior, no se toca.
- El plan 001-contenido (001-desarrollo-web) se ejecuta en paralelo a este y va a poblar `src/content/cursos/` por primera vez. El refactor del index debe quedar preparado para mostrar 1 curso publicado sin tocar el catálogo después.

## Propuesta

### 1. Refactor de `src/pages/index.astro`

Estructura nueva:

1. **Hero** — título "Biblioteca de Conocimiento" + tagline de una línea (sin `Temas/`, sin placeholder genérico).
2. **Sección "Qué es esto"** — manifiesto en prosa con 3-4 párrafos breves. Captura la doble motivación (astillero + aprendizaje) y la amplitud temática (tecnología + alma). Voz en primera persona porque el dueño la usó así al describirla.
3. **Sección "Apartados"** — mismo grid de 4 cards (Cursos activo, Aplicativos/Exámenes/Recursos disabled con badge "Próximamente"). Solo cambia la descripción de la card Cursos para no mencionar `Temas/`.
4. **Sección "Roadmap"** — actualiza los items completados (quitando el `Temas/` del primero) y añade uno nuevo: "Integrar el primer curso (Desarrollo Web, Sesión 1)" que el plan 001-contenido cierra.
5. **Footer** — sin cambios.

### 2. Limpieza de `src/pages/cursos/index.astro`

- Cambiar "Cursos estructurados a partir del vault `Temas/`…" por copy que no mencione el directorio interno.
- En el empty state, cambiar "Cuando un agente de contenido integre el primero" por "Cuando se integre el primer curso" (sin "agente de contenido" — suena a jerga interna).

### 3. Mover `.prose-biblioteca` a `global.css`

- Quitar el bloque `<style is:global>` del final de `src/pages/cursos/[slug]/[sesion]/[modulo].astro`.
- Añadir las mismas reglas en `src/styles/global.css` dentro de `@layer components` con la misma estructura (selectores anidados, mismas variables CSS).
- Verificar que el render del módulo no cambia visualmente.

## Archivos afectados

- `src/pages/index.astro` — refactor completo.
- `src/pages/cursos/index.astro` — patch de 2 strings.
- `src/styles/global.css` — append de bloque `.prose-biblioteca`.
- `src/pages/cursos/[slug]/[sesion]/[modulo].astro` — quitar `<style is:global>` del final.

## Pasos

1. Mover estilos prose-biblioteca a `global.css` y quitarlos de `[modulo].astro`.
2. Reescribir `src/pages/index.astro` con la nueva estructura.
3. Patchear `src/pages/cursos/index.astro`.
4. `pnpm run build` — verificar que pasa.
5. `sg docker -c "docker compose up -d --build"` — redeploy.
6. `curl` a `/` y `/cursos/` — verificar HTTP 200 y ausencia de "Temas/" en el HTML servido.
7. Cerrar este plan con sección "Resultado real".

## Criterios de aceptación

- [ ] `rg "Temas" src/` devuelve 0 ocurrencias (excepto comentarios que documenten la convención).
- [ ] El index tiene una sección "Qué es esto" con el manifiesto de la plataforma.
- [ ] El index no tiene copy placeholder ("Plataforma para acceder y gestionar el conocimiento que se comparte" debe desaparecer).
- [ ] El catálogo en `/cursos/` no menciona `Temas/`.
- [ ] `pnpm run build` pasa sin warnings.
- [ ] El sitio responde HTTP 200 en :8082.
- [ ] El render de los módulos no cambió visualmente (mismo HTML + CSS antes/después).

## Resultado real

**Ejecutado y verificado en el contenedor `biblioteca-conocimiento` (sha256:33b48218) en :8082.**

| Criterio | Estado |
|---|---|
| Cero refs a `Temas/` en `src/` (y en `dist/`) | ✅ |
| `index.astro` reescrito con hero + manifiesto de 3 puntos + audiencia doble + cierre | ✅ |
| `cursos/index.astro` sin mención de `Temas/`, copy limpio | ✅ |
| `.prose-biblioteca` movido de `[modulo].astro` a `global.css` | ✅ |
| Nav con Cursos activo y Aplicativos/Exámenes/Recursos como Próximamente | ✅ |
| Roadmap con 3 primeros items marcados como hechos | ✅ |
| `pnpm run build` exit 0, 12 páginas, 0 warnings | ✅ |
| 10 rutas reales devuelven HTTP 200, `/cursos/inexistente/` devuelve 404 | ✅ |

**Pitfalls encontrados durante la ejecución (nuevos sobre los del plan 002):**

1. **Profundidad del glob en `[sesion].astro` y `[modulo].astro` estaba mal.** Ambos usaban un `../` de más. El path desde `src/pages/cursos/[slug]/` hasta `src/content/cursos/...` requiere **3** niveles, no 4. Y desde `src/pages/cursos/[slug]/[sesion]/` requiere **4**, no 5. Pasó inadvertido en el plan 002 porque no había contenido: el glob devolvía vacío y el getStaticPaths retornaba `[]` sin error. **Regla**: el patrón del glob es relativo al directorio del archivo `.astro`. Contar niveles explícitamente. La página `[slug]/index.astro` (3 niveles correctos) sirvió de referencia.

2. **Funciones `function` top-level no están en scope de `getStaticPaths` en el chunk compilado.** El compilador de Vite/Astro extrae `getStaticPaths` a un chunk independiente (`dist/.prerender/chunks/_*_*.mjs`) y los `function` declarados a nivel top-level del frontmatter **no se incluyen** en ese chunk, aunque sí estén visibles en el cuerpo de la página. Resultado: `ReferenceError: sesionSlugFromKey is not defined` / `cursoSlugFromKey is not defined` en el chunk de prerender. **Regla**: toda la lógica que `getStaticPaths` necesita (globs, helpers, constantes) debe vivir DENTRO de la función. En el cuerpo de la página principal el `function` top-level sí funciona porque la página tiene acceso al módulo completo. Este pitfall es un caso particular del #2 del plan 002: lo que aplica a globs también aplica a funciones.

3. **Regla unificada**: cualquier recurso usado por `getStaticPaths` (globs, helpers, constantes calculadas) debe declararse DENTRO de la función. Lo que vive en el top-level del frontmatter solo es seguro en el cuerpo de la página principal.

**Decisiones de diseño que se confirman:**
- Manifiesto en primera persona ("documento", "comparto", "aprendizaje autodidacta") porque la plataforma tiene un dueño único y la voz es personal, no corporativa.
- Mantener "Biblioteca de Conocimiento" como nombre del proyecto (en el `<title>` y en el hero) porque el usuario ya lo había establecido. La palabra "biblioteca" se complementa con el copy, no se contradice.
- 3 puntos en el manifiesto (procedimientos + estrategias + temas del alma) en vez de un solo bloque de prosa, porque la lista resalta los 3 pilares y se escanea rápido.

**Trabajo futuro (no en este plan):**
- Render de aplicativos (`aplicativos/<slug>/`).
- Render de exámenes (`examenes/<slug>.md`).
- Filtros interactivos en el catálogo.
- PDF export vía Kinse API.
- Refactor del código de páginas dinámicas para usar `getCollection('cursos')` y colecciones separadas (sesiones, modulos) si la escala crece.

## Notas y riesgos (actualizados)

- El manifiesto está en primera persona. Si en el futuro la plataforma pasa a multi-autor, hay que reescribirlo a voz institucional o en segunda persona.
- Los 3 items del roadmap marcados como "hecho" reflejan lo que se cerró en planes 001, 002 y 003. El item de sesiones 2-4 sigue dependiendo de que el usuario escriba el contenido en `Temas/`.

## Notas

- La refactorización del index no toca el `Layout.astro` ni los estilos del nav global — son ortogonales.
- Este plan y el 001-contenido son independientes en código (toca archivos distintos) pero el roadmap del index menciona el resultado del 001. Si el 001 falla, ajustar el roadmap.
- Considerado y descartado: añadir un `<section>` con "Últimos cursos añadidos" en el index. Mejor esperar a tener 2-3 cursos para que la sección tenga sentido. Ahora mismo solo 1 curso y el catálogo ya lo lista.
