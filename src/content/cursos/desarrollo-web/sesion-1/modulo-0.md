---
title: "Módulo 0: El Taller (VS Code y Terminal)"
order: 0
duration: "45 min"
objectives:
  - "Instalar Node.js (versión LTS) y Visual Studio Code"
  - "Configurar VS Code con las extensiones de Astro, Tailwind CSS IntelliSense y Prettier"
  - "Aprender los comandos básicos de la terminal: cd, ls / dir"
---

Antes de construir una casa, necesitamos preparar nuestras herramientas. En el desarrollo web, nuestro taller principal es el editor de código. Usaremos **Visual Studio Code (VS Code)**, que es el estándar de la industria.

## 1. Instalaciones Base y Motores Ocultos

1. **Descargar e instalar Node.js (versión LTS):**
   - _¿Qué es esto?_ Los navegadores web (Chrome, Safari) saben leer páginas web. Pero para _construir_ y _probar_ páginas web en tu computadora antes de subirlas a internet, necesitas un servidor local. Node.js es el "motor invisible" que nos permite ejecutar herramientas modernas como Astro directamente en tu máquina. Instálalo y dale a "Siguiente" a todo.

2. **Descargar e instalar Visual Studio Code:**
   - A diferencia de Word o el Bloc de Notas, VS Code está diseñado específicamente para entender lenguajes de programación. Te colorea el texto para que sea fácil de leer, te avisa de errores ortográficos en el código y te permite organizar miles de archivos fácilmente.

## 2. Configurando el Taller (Extensiones y Magia)

VS Code viene "pelado" por defecto. Las extensiones son como "superpoderes" que le instalamos para que nos ayude más. Ve a la barra lateral izquierda, al ícono que parecen cuatro cuadrados (Extensiones) o usa el atajo `Ctrl+Shift+X` (Win) / `Cmd+Shift+X` (Mac) e instala estas tres:

- **Astro:** Para que VS Code entienda y pinte de colores bonitos nuestros archivos `.astro`. Sin esto, el código se verá blanco y aburrido.
- **Tailwind CSS IntelliSense:** Esta extensión es vital. Tailwind tiene miles de clases de diseño. Esta extensión te "autocompleta" las palabras conforme escribes, ahorrándote tener que memorizarlas.
- **Prettier - Code Formatter:** El código desordenado es difícil de leer. Prettier es un robot que, cada vez que guardas, ordena las sangrías, los espacios y las comillas de tu código para que luzca perfecto y profesional.

**Configuración Obligatoria de Vida o Muerte:** Abre la configuración general (`Ctrl+,` o `Cmd+,`), busca la palabra "Format On Save" y marca la casilla. Esto hará que Prettier se active automáticamente cada vez que presiones Guardar (`Ctrl+S` / `Cmd+S`). Es un cambio pequeño que te ahorrará horas de frustración visual.

## 3. La Terminal (Hablando con la Máquina)

Los programadores usan pantallas negras con letras blancas no para verse como hackers en las películas, sino porque es la forma más rápida de darle órdenes directas a la computadora.

Abre la terminal integrada en VS Code: `` Ctrl+` `` (Win) o `` Cmd+` `` (Mac). Aparecerá un panel abajo. El texto que ves ahí (ej. `C:\Usuarios\TuNombre\Documentos`) se llama **"Prompt"** e indica exactamente en qué carpeta de tu computadora estás parada en este momento.

- **El comando de navegación `cd` (Change Directory):** Para entrar a una carpeta, escribes `cd nombre_de_la_carpeta`. Para salir de ella y dar un paso atrás, escribes `cd ..` (con los dos puntos).
- **El radar `ls` o `dir`:** Si alguna vez te pierdes y no sabes qué hay en la carpeta donde estás, escribe `ls` (en Mac) o `dir` (en Windows) y la terminal te listará todos los archivos.
