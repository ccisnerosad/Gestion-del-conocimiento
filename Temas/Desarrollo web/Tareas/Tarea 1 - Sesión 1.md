# 📚 TAREA AUTODIDACTA - Sesión 1 (Para antes de la Sesión 2)

> **Sesión:** [[Sesión 1 Fundamentos, -Hola Mundo- y Vibecoding|Sesión 1]]

---

La sesión fue guiada; ahora toca ensuciarse las manos a solas. El objetivo de esta tarea es que "rompas" el código de forma segura y aprendas a encontrar soluciones en la documentación oficial, que será tu Biblia de aquí en adelante.

## Tarea 1: Reflexión y Disección (30 mins)

Abre tu archivo `index.astro` y mira detalladamente la ensalada de clases de Tailwind que la IA generó en las etiquetas `<div class="...">`, `<h1 class="...">`, etc.

Ve a tu archivo `README.md` y crea una nueva sección llamada `### Diccionario de Tailwind (Mi propia investigación)`. Elige 5 clases de Tailwind de tu código que te parezcan interesantes o extrañas y explica con tus propias palabras (y deducción visual) qué crees que hacen.

- _Ejemplo:_ "`text-white`: Deduzco que esta clase colorea el texto del elemento en color blanco puro."

## Tarea 2: Experimentación y Búsqueda Activa (1 hora)

Saber programar no es saberse todo de memoria, es saber buscar en Google y en la documentación. Entra a [tailwindcss.com/docs](https://tailwindcss.com/docs) y ubica la barra de búsqueda (o presiona `Ctrl+K`).

1. **Modificando la paleta de colores:** Busca la palabra **"Colors"** en la documentación. Verás la increíble paleta por defecto de Tailwind. Cambia tu color de fondo principal (ej. cambia `bg-slate-900` a algo como `bg-emerald-800` o `bg-indigo-950`). Cambia también el color del texto y del botón para que hagan buen contraste.

2. **Jugando con bordes:** Busca **"Border Radius"**. Agrégale bordes más redondeados a tu botón, o intenta ponerle un borde ligero a todo el texto principal. (Busca la clase `rounded-full` vs `rounded-md`).

3. **Controlando el espacio vacío (El Modelo de Caja):** Busca **"Padding"**. El padding es el relleno interior, el espacio entre el borde de un elemento y el texto que tiene adentro. Intenta cambiar el `p-` o `px-` y `py-` de tu botón para hacerlo más gordo o más flaco.

4. **Reto Vibecoding Independiente:** Abre ChatGPT/Claude/Gemini. Pídele lo siguiente: _"Dame el código HTML para una 'Tarjeta' (Card) muy sencilla usando clases de Tailwind. La tarjeta debe tener fondo blanco, una sombra suave, esquinas redondeadas, y contener un subtítulo y un pequeño texto dentro"_. Toma ese código y pégalo _debajo_ de tu botón en tu `index.astro`. Asegúrate de que quede dentro del contenedor principal (`<div>` oscuro).

## Tarea 3: La Mentalidad "Rompe y Arregla" (Troubleshooting) (30 mins)

A los principiantes les da pánico ver errores rojos en la pantalla. Hoy vamos a perderle el miedo a eso obligando a Astro a fallar para que aprendas a leer lo que te dice.

1. Abre tu terminal de VS Code y levanta tu servidor nuevamente (`npm run dev`). Abre la página en Chrome.

2. **Destruye el HTML:** Ve a `index.astro` y borra intencionalmente la última etiqueta `</div>` que cierra tu contenedor principal. Guarda el archivo (`Ctrl+S`).

3. **Lee el desastre:** Mira la pantalla de tu navegador. Estará roja u oscura con letras gigantes de error. **No te asustes. Lee el error.** Verás que Astro es muy amable; te dirá algo como _"Expected to close tag \<div\> but found EOF"_ (Esperaba cerrar la etiqueta div, pero el archivo terminó). Te dirá exactamente en qué línea falló.

4. **Destruye el CSS:** Vuelve a poner el `</div>` para arreglar la página. Ahora, busca tu color de fondo (ej. `bg-emerald-800`) y escríbelo mal intencionalmente, como `background-emerald-800` o `bg-emerald-noveno`. Guarda el archivo.

5. **Observa la diferencia:** Revisa el navegador. ¿Salió la pantalla roja de error de Astro? No. La página cargó, pero el fondo simplemente desapareció (ahora es blanco/transparente).
    - _💡 La Gran Lección de Hoy:_ Entender esta diferencia te salvará la vida. Los errores de estructura (HTML mal cerrado, comillas faltantes) "rompen" la compilación de la página y dan pantalla de error fatal. Los errores de diseño (clases de Tailwind mal escritas) simplemente son ignorados por el navegador; la página funciona, pero se ve fea.

6. Arregla los colores mal escritos para que tu página vuelva a verse hermosa.

7. **El último paso del día:** Haz tu punto de guardado de todo el trabajo de tu tarea. En la terminal presiona `Ctrl+C` para detener el servidor local y ejecuta:
   ```
   git status
   git add .
   git commit -m "tarea: experimentacion de paleta de colores, padding y debug intencional"
   ```

¡Descansa! Hoy sentaste las bases reales de cómo se desarrolla software de manera profesional.
