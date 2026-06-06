---
title: "Tarea 1: Hola mundo personalizado"
order: 5
type: "tarea"
deadline: "fin de sesión"
deliverable: "Repositorio en GitHub con un proyecto que imprima un saludo personalizado al ejecutarse."
rubric:
  - criterio: "El proyecto corre sin errores con `node index.js`"
    peso: 1
  - criterio: "El saludo incluye al menos un dato del usuario (nombre, color favorito, etc.)"
    peso: 1
  - criterio: "El código tiene al menos una decisión de diseño explicada con un comentario"
    peso: 1
  - criterio: "El repo está en GitHub con un README mínimo"
    peso: 1
  - criterio: "Hay al menos 3 commits con mensajes claros"
    peso: 1
---

# Tarea 1: Hola mundo personalizado

> **Blueprint — contenido pendiente.** Reemplazar con el contenido de `Temas/Desarrollo web/Tareas/Tarea 1 - Sesión 1.md`.

## Consigna

Construye un programa en Node.js que al ejecutarse imprima un saludo personalizado. El saludo debe incluir al menos un dato que pidas al usuario al inicio.

## Requisitos

1. Pedir al menos un dato al usuario por terminal (`readline` o `process.argv`).
2. Imprimir un saludo que use ese dato.
3. Manejar el caso de dato vacío (input por defecto).
4. Tener un `README.md` con instrucciones de uso.

## Bonus

- Aceptar argumentos de línea de comandos además de input interactivo.
- Permitir configurar el saludo vía variable de entorno.
- Publicar el paquete en npm (avanzado).

## Criterios de aceptación

- [ ] El proyecto corre sin errores.
- [ ] El saludo es personalizado.
- [ ] El código está comentado.
- [ ] El repo está en GitHub.
- [ ] Hay al menos 3 commits con mensajes claros.
- [ ] El README explica cómo correr el proyecto.

## Hints

Si te atascas, prueba este prompt con la IA:

> "Estoy aprendiendo JavaScript. Necesito un programa que me pida mi nombre y me salude. Explícame cada parte del código que generes, línea por línea, como si tuviera 12 años."

Luego lee el código, identifica las partes que no entiendes, y vuelve a preguntarle a la IA sobre esas partes específicas.
