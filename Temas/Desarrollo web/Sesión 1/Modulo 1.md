# 🕒 Módulo 1: Astro y HTML Básico - _45 mins_

> **Sesión:** [[Sesión 1 Fundamentos, -Hola Mundo- y Vibecoding|Sesión 1]]
> **Anterior:** [[Modulo 0|← Módulo 0: El Taller]] | **Siguiente:** [[Modulo 2|Módulo 2: Tailwind CSS y Vibecoding →]]

---

## 1. Creando el Universo del Proyecto

Asegúrate de estar en una carpeta donde quieras guardar tus proyectos (por ejemplo, una carpeta llamada `desarrollo_web` en tus Documentos). En la terminal, ejecuta este conjuro:

```
npm create astro@latest
```

- _¿Qué es `npm`?_ Significa "Node Package Manager". Es como una tienda de aplicaciones gratuita para programadores. Le estamos diciendo: "Oye npm, descárgame la plantilla más reciente para crear un sitio con Astro".

**El asistente te hará algunas preguntas:**

- **Nombre del proyecto:** Escribe `mi-primer-sitio` (usa guiones, sin espacios).

- **Plantilla (Template):** Elige "Empty" (Vacío) o "Basics" para empezar con un lienzo limpio.

- **Instalar dependencias:** Dile que "Sí". Esto descargará todas las piezas del motor que Astro necesita para funcionar.

- **TypeScript:** Dile que "No" (por ahora, mantengámoslo simple).

Entra a la nueva carpeta generada escribiendo: `cd mi-primer-sitio`. Ahora, vamos a encender el motor de tu página web ejecutando:

```
npm run dev
```

Verás que la terminal te arroja un enlace verde parecido a `http://localhost:4321`. Haz `Ctrl+Clic` o `Cmd+Clic` sobre él.

- _El concepto de Localhost:_ "Localhost" significa "mi propia computadora". El número "4321" es el "puerto" (imagina que tu computadora es un edificio y el 4321 es el número de la puerta donde vive tu página web). ¡Nadie en internet puede ver esto, solo tú!

## 2. Limpieza, Disección y HTML Básico

En la barra lateral izquierda (el Explorador de Archivos de VS Code), busca la carpeta `src`, luego `pages` y abre el archivo `index.astro`. Este es el archivo principal de tu página de inicio.

- Borra todo el contenido de relleno que trae por defecto Astro. No tengas miedo.

- Deja solo la estructura básica de un documento web.

**La Anatomía de un archivo Astro y HTML:**

```html
---
// EL CODE FENCE (La Valla de Código)
// Todo lo que está entre estos tres guiones superiores es la zona "VIP". 
// Aquí vivirá el JavaScript, las variables matemáticas y las conexiones a bases de datos. 
// Es como la cocina del restaurante: el comensal no lo ve, pero aquí se prepara todo.
// Por hoy, dejaremos la cocina vacía.
---

<!DOCTYPE html>
<html lang="es">
  <!-- El HEAD: Aquí van los metadatos. Cosas que le interesan a Google y al navegador, 
       pero que no se ven en la pantalla principal. -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Primer Sitio Web</title>
  </head>

  <!-- El BODY: El cuerpo. Todo lo que pongas aquí adentro es lo que los 
       usuarios verán en la pantalla de su computadora o celular. -->
  <body>
    
    <!-- HEADER: Encabezado de la página, usualmente contiene el logo o la navegación. -->
    <header>
      <h2>Mi Portafolio</h2>
      <!-- NAV: Agrupa enlaces de navegación. -->
      <nav>
        <!-- UL: Lista desordenada (Unordered List). LI: Elementos de la lista (List Item). -->
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre mí</a></li>
        </ul>
      </nav>
    </header>

    <!-- MAIN: Contiene el contenido principal e irrepetible de esta página específica. -->
    <main>
      <!-- SECTION: Agrupa contenido relacionado temáticamente. -->
      <section>
        <!-- H1 es el "Heading 1" (Título principal). Solo debería haber uno por página por SEO. -->
        <h1>Hola Mundo</h1>
        
        <!-- P es "Paragraph" (Párrafo). Usado para bloques de texto normal. -->
        <p>Este es mi primer sitio construyendo con Astro aplicando semántica web.</p>
      </section>

      <!-- Nueva SECTION: Explicando los tipos de etiquetas directamente en la web -->
      <section>
        <h2>Tipos de Etiquetas en HTML</h2>
        
        <!-- DIV para agrupar la explicación de Bloque -->
        <div>
          <h3>1. Etiquetas de Bloque (Block)</h3>
          <p>Son etiquetas "egoístas". Ocupan todo el ancho disponible de la pantalla y siempre 
          empujan el resto del contenido a una nueva línea. Ejemplos: las cajas 
          <code>&lt;div&gt;</code>, los títulos <code>&lt;h1&gt;</code> a 
          <code>&lt;h6&gt;</code>, y los párrafos <code>&lt;p&gt;</code>.</p>
        </div>

        <!-- DIV para agrupar la explicación de Línea -->
        <div>
          <h3>2. Etiquetas en Línea (Inline)</h3>
          <p>Son etiquetas "amigables". Solo ocupan el espacio exacto de su contenido y pueden 
          vivir al lado de otras en el mismo renglón. Ejemplos: para destacar texto como 
          <strong>negritas (&lt;strong&gt;)</strong>, enlaces <code>&lt;a&gt;</code> o un simple 
          contenedor de texto <code>&lt;span&gt;</code>.</p>
        </div>
        
        <!-- DIV para agrupar la explicación Semántica -->
        <div>
          <h3>3. Etiquetas Semánticas</h3>
          <p>Son cajas estructurales que actúan igual que un <code>&lt;div&gt;</code>, pero que 
          tienen un "significado" claro para el navegador y buscadores como Google. Ejemplos: 
          <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code> 
          y <code>&lt;footer&gt;</code>.</p>
        </div>
      </section>

      <!-- Otra SECTION para agrupar un área diferente, por ejemplo, un perfil o tarjeta. -->
      <section>
        <!-- H2: Subtítulo principal de la sección. -->
        <h2>Conoce mi perfil</h2>
        
        <!-- DIV: "Division". Es una caja genérica. No tiene significado semántico, 
             pero es esencial para agrupar elementos y darles diseño con Tailwind más adelante. -->
        <div>
          <!-- IMG: Etiqueta para imágenes. 'src' es el origen y 'alt' es la descripción 
               para accesibilidad. -->
          <img src="foto-perfil.jpg" alt="Foto de perfil de la desarrolladora" />
          
          <!-- H3: Subtítulo de menor jerarquía (adentro de un div o tarjeta). -->
          <h3>Estudiante de Desarrollo Web</h3>
          
          <!-- STRONG: Para texto que tiene gran importancia (se ve en negrita). -->
          <p>Aprendiendo a crear interfaces con <strong>Astro y Tailwind CSS</strong>.</p>
          
          <!-- SPAN: Es un contenedor en línea (inline). Sirve para agarrar una pequeña 
               parte del texto y darle estilo sin romper el párrafo. -->
          <p>Estado actual: <span>Escribiendo mucho código...</span></p>
          
          <!-- BUTTON: Un botón interactivo. -->
          <button>Contactarme</button>
        </div>
      </section>
    </main>

    <!-- FOOTER: Pie de página, ideal para derechos de autor, enlaces legales o redes sociales. -->
    <footer>
      <p>© 2026 Mi Primer Sitio Web</p>
    </footer>

  </body>
</html>
```
