# 🕒 Módulo 2: Tailwind CSS y Vibecoding - _45 mins_

> **Sesión:** [[Sesión 1 Fundamentos, -Hola Mundo- y Vibecoding|Sesión 1]]
> **Anterior:** [[Modulo 1|← Módulo 1: Astro y HTML Básico]] | **Siguiente:** [[Modulo 3|Módulo 3: Markdown →]]

---

El HTML crudo es feo. Es solo texto negro sobre fondo blanco. Para darle belleza (colores, sombras, acomodo) usamos CSS. Tradicionalmente, aprender CSS toma meses porque hay que saltar entre varios archivos e inventar nombres para todo.

Nosotros usaremos **Tailwind CSS**. Con Tailwind, aplicamos el diseño escribiendo "clases utilitarias" directamente en nuestras etiquetas HTML. Y para no tener que aprendernos estas clases de memoria desde el día 1, usaremos **Vibecoding**.

- _¿Qué es el Vibecoding?_ Es programar expresando "la vibra" o la intención de lo que quieres a una Inteligencia Artificial, para que ella redacte la sintaxis exacta.

## 1. El Prompt de Vibecoding

Abre tu IA de preferencia (ChatGPT, Claude, Gemini) e ingresa exactamente este prompt (instrucción):

> "Actúa como un desarrollador web front-end experto. Escribe un bloque de código HTML utilizando exclusivamente clases de Tailwind CSS.
> 
> Quiero construir la primera vista de una página (Hero section). Necesito un contenedor `<div>` principal que ocupe el 100% de la pantalla (tanto en alto como en ancho), con un color de fondo oscuro, elegante y moderno (como un gris pizarra o azul noche oscuro).
> 
> Dentro de este contenedor, centrado perfectamente tanto vertical como horizontalmente, debe haber un título `<h1>` que diga 'Hola, soy $$Tu Nombre$$' en color blanco, con una tipografía muy grande y gruesa (bold). Debajo de ese título, pon un párrafo `<p>` que diga 'Aprendiendo arquitectura web con Astro y Tailwind' en color gris claro.
> 
> Finalmente, debajo del párrafo, agrega un botón `<button>` que diga 'Ver mis proyectos'. El botón debe tener fondo de un color vibrante que contraste, bordes redondeados y cambiar ligeramente de color al pasar el ratón por encima (hover).
> 
> Solo dame el código HTML resultante, sin explicaciones extra ni bloques de markdown."

## 2. Integración y Magia Visual

Copia el código que te dio la IA. Vuelve a tu archivo `index.astro` en VS Code, borra el contenido anterior que habíamos escrito a mano en el `<body>`, y pega el nuevo código.

Guarda el archivo (`Ctrl+S` / `Cmd+S`). Ve a tu navegador (que ya debería estar abierto en `localhost:4321`). ¡Pum! Tu sitio pasó de ser texto de los años 90 a una interfaz moderna. Astro recarga la página por ti automáticamente; no necesitas presionar F5.

## 3. Análisis Rápido en Clase (Diseccionando a Tailwind)

No somos de copiar y pegar a ciegas. Vamos a entender las palabras "mágicas" (clases) que la IA colocó en el atributo `class=""` de tus etiquetas:

- **Dimensiones:** `h-screen` (Height Screen) hace que la caja mida el 100% de la altura de la pantalla visible. `w-full` hace que tome todo el ancho.

- **Colores:** `bg-slate-900` pinta el fondo (Background) de color pizarra oscuro. El 900 indica la intensidad (50 es casi blanco, 900 es casi negro). `text-white` hace la fuente blanca.

- **El truco de Flexbox:** Verás clases como `flex`, `flex-col`, `justify-center`, `items-center`. Flexbox es un sistema de diseño para acomodar cajas. Estas clases juntas le dicen a la computadora: _"Convierte este contenedor en flexible, acomoda a sus hijos en una columna vertical y centralos todos perfectamente al medio del espacio"_. Antes de Tailwind, lograr esto requería 10 líneas de código complejo.

- **Tipografía:** `text-5xl` hace la letra gigante (Extra Large x5). `font-bold` la hace negrita.

- **Interacción (El Botón):** Seguramente verás algo como `hover:bg-blue-600` en el botón. Tailwind permite usar prefijos como `hover:` para decir "Aplica este color SOLO cuando el cursor del ratón esté encima del elemento".

