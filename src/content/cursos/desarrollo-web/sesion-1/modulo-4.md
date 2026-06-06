---
title: "Módulo 4: Git (El Sistema de Puntos de Guardado)"
order: 4
duration: "30 min"
objectives:
  - "Entender Git como un sistema de control de versiones (máquina del tiempo para tu código)"
  - "Ejecutar los comandos básicos: git init, git status, git add, git commit"
---

Imagina que estás escribiendo un libro larguísimo. Si te equivocas en el capítulo 10 y lo guardas, perdiste tu versión anterior para siempre. **Git** es como una máquina del tiempo para tu código. Te permite hacer "puntos de guardado" infinitos (llamados Commits). Si tu computadora explota o borras algo vital mañana, podrás recuperar todo tal cual estaba hoy.

En la terminal de VS Code, primero debemos "apagar" nuestro servidor local (el que muestra la web) porque vamos a hacer tareas administrativas. Haz clic en la terminal y presiona `Ctrl+C`. El servidor se detendrá.

Luego, ejecuta estos cuatro comandos sagrados en orden:

1. **`git init` (Crear el universo Git):** Le dice a la computadora "A partir de hoy, empieza a vigilar esta carpeta y recuerda todos los cambios que ocurran aquí".

2. **`git status` (El Radar):** Escribe esto y presiona Enter. Verás archivos en rojo. Git te está diciendo: "Veo que creaste `index.astro` y `README.md`, pero aún no los tengo protegidos ni guardados en mi historial".

3. **`git add .` (Preparar la caja):** El punto `.` significa "todo". Aquí le decimos a Git "Agarra TODOS los archivos que cambiaron y mételos en la caja de envío, listos para ser guardados". Si vuelves a escribir `git status`, verás que los archivos ahora están en verde.

4. **`git commit -m "feat: mi primera página web con tailwind"` (Sellar la caja):** El "Commit" es el acto final de guardar. La bandera `-m` significa mensaje. Siempre, siempre debes dejar un mensaje descriptivo de lo que hiciste. `"feat"` significa _feature_ (característica).

¡Listo! Tu progreso está guardado localmente de forma profesional en el historial de Git.
