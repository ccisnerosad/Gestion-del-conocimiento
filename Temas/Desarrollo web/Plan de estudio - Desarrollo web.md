**Formato:** 4 Sesiones intensivas de 3 horas. **Metodología:** Aprendizaje en espiral y _Vibecoding_. En cada sesión usaremos IA para generar la base estructural y nos enfocaremos en entender, conectar y modificar el código. **Trabajo Autodidacta:** Intensivo. La sesión es para construir e integrar; la tarea es para desarmar, analizar y reflexionar.

## Sesión 1 Fundamentos, -Hola Mundo- y Vibecoding
[[Sesión 1 Fundamentos, -Hola Mundo- y Vibecoding|Detalles]]

**Objetivo de la sesión:** Tener un componente visual renderizado en el navegador y el entorno configurado.

- **Módulo 0 (Entorno):** Setup rápido. Instalar VS Code, Node.js y extensiones. Levantar el proyecto con `npm create astro@latest`. Explicar qué es la terminal integrada.
    
- **Módulo 1 (Astro + HTML):** ¿Qué es un archivo `.astro`? Borrar el código boilerplate y crear un `<div>` y un `<h1>` básicos.
    
- **Módulo 2 (Tailwind CSS):** Concepto de "clases utilitarias". Usar vibecoding (pedir a la IA: _"Dame un div centrado con fondo oscuro y texto blanco usando Tailwind"_). Pegar el código y analizar qué hace `bg-slate-900`, `text-white`, `flex`, `justify-center`.
    
- **Módulo 3 (Markdown):** Crear un archivo `README.md` en el proyecto. Escribir en él qué hicimos hoy usando `#`, `-`, y negritas.
    
- **Módulo 4 (Git):** El concepto de "guardar partida". Ejecutar `git init`, `git add .` y `git commit -m "commit inicial"`.
    

**[ Tarea 1 ] - Análisis y Destrucción:**

1. **Reflexión:** Lee el código generado en clase. Escribe en tu `README.md` con tus propias palabras qué hace cada clase de Tailwind que usamos.
    
2. **Experimentación:** Cambia los colores (busca en la doc de Tailwind la paleta de colores), altera los tamaños de texto (`text-xl` a `text-4xl`).
    
3. **Rompe y Arregla:** Borra etiquetas de cierre (`</div>`) a propósito. Mira el error en la consola. Acostúmbrate a leer la pantalla de error de Astro.
    

## Sesión 2: Componentización y Multiplicación (3 Horas)

**Objetivo de la sesión:** Entender el "superpoder" de los frameworks: no repetir código. Construir un grid de tarjetas.

- **Módulo 0 (Entorno):** Atajos de teclado en VS Code (duplicar líneas, selección múltiple). Cómo escribir mejores _prompts_ de vibecoding centrados en componentes.
    
- **Módulo 1 (Astro + HTML):** Crear nuestro primer componente separado `Card.astro`. Importarlo en `index.astro`. Introducción a las **Props** (pasar título y descripción dinámicamente).
    
- **Módulo 2 (Tailwind CSS):** El modelo de caja real: Padding (`p-4`), Margin (`m-2`), y Bordes (`rounded-xl`). Creación de un Grid básico (`grid grid-cols-2`).
    
- **Módulo 3 (Markdown):** Introducción al **Frontmatter**. Crear un archivo `.md` ficticio para un proyecto y definir `title` y `date` en la parte superior.
    
- **Módulo 4 (Git):** Revisar `git status` y ver los archivos nuevos. Hacer un `git commit -m "feat: crear componente card"`.
    

**[ Tarea 2 ] - Expansión y Lógica:**

1. **Reflexión:** Dibuja en papel cómo fluyen los datos (Props) desde `index.astro` hacia `Card.astro`.
    
2. **Experimentación:** Usa vibecoding para pedir un "Componente de Botón con Tailwind". Ingrésalo a tu proyecto y haz que acepte una Prop para cambiar su color (ej: primario vs secundario).
    
3. **Investigación:** Lee la documentación de Tailwind sobre el diseño responsivo (prefijos `md:`, `lg:`). Intenta que tu grid de tarjetas sea de 1 columna en celular y 3 en PC.
    

## Sesión 3: Layouts y Rutas (3 Horas)

**Objetivo de la sesión:** Pasar de una página suelta a un sitio web real con navegación y múltiples vistas.

- **Módulo 0 (Entorno):** Navegación rápida entre archivos en VS Code (`Ctrl+P` / `Cmd+P`). Uso de la consola del navegador (F12) para inspeccionar elementos.
    
- **Módulo 1 (Astro + HTML):** Crear un `Layout.astro` con un `<slot />`. Entender el enrutamiento de Astro: crear `about.astro` y ver cómo automáticamente se convierte en `/about`.
    
- **Módulo 2 (Tailwind CSS):** Estados interactivos: `hover:`, `focus:`, `transition-all`. Hacer que la navegación y los botones reaccionen al pasar el ratón.
    
- **Módulo 3 (Markdown):** Colecciones de contenido (Layouts aplicados a Markdown). Renderizar el archivo Markdown de la sesión anterior inyectándolo dentro de un Layout de Astro.
    
- **Módulo 4 (Git):** Concepto de Ramas (Branches). Ejecutar `git checkout -b feature-layout`. Trabajar ahí y luego hacer commit.
    

**[ Tarea 3 ] - Arquitectura de la Información:**

1. **Reflexión:** En tu `README.md`, explica por qué usamos un Layout en lugar de copiar y pegar el menú superior en cada archivo.
    
2. **Experimentación:** Crea una tercera página llamada `/contacto`. Usa vibecoding para pedir un "Formulario de contacto estático en Tailwind" y aplícale tu `Layout.astro`.
    
3. **Investigación:** Revisa qué pasa cuando haces `git switch main` y `git switch feature-layout`. Observa cómo VS Code cambia los archivos mágicamente.
    

## Sesión 4: Interactividad y Refinamiento (3 Horas)

**Objetivo de la sesión:** Pulir los detalles visuales, agregar interactividad ligera y dejar el portafolio listo de forma local.

- **Módulo 0 (Entorno):** Refactorización asistida por IA. Pedirle a la IA: _"Mejora la accesibilidad y semántica de este código"_.
    
- **Módulo 1 (Astro + HTML):** Etiquetas `<script>` en Astro. Agregar un JavaScript súper básico (ej. un botón que alterne un menú móvil o cambie el tema a oscuro).
    
- **Módulo 2 (Tailwind CSS):** Animaciones simples (`animate-pulse`, `animate-bounce`) y configuración avanzada (`tailwind.config.mjs` para agregar colores propios de marca).
    
- **Módulo 3 (Markdown):** MDX (Markdown + Componentes). Cómo insertar el componente `Card.astro` o `Boton.astro` _dentro_ de un archivo de texto Markdown.
    
- **Módulo 4 (Git):** Fusionar la rama. `git checkout main` y `git merge feature-layout`. Explicar qué hacer si hay un conflicto ligero.
    

**[ Tarea 4 ] - Auditoría Final:**

1. **Reflexión:** Realiza una auditoría visual de tu sitio. ¿Están alineados los elementos? ¿Hay consistencia en los espacios? Anota tus hallazgos.
    
2. **Experimentación:** Aplica el "Dark Mode" usando la clase `dark:` de Tailwind, apoyándote con IA para la lógica de alternancia.
    
3. **Consolidación:** Escribe un último post en Markdown detallando tu experiencia aprendiendo estas herramientas, las dificultades que encontraste al usar IA para programar, y cómo las resolviste.