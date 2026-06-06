---
title: "Módulo 0: Setup del entorno"
order: 0
duration: "30 min"
objectives:
  - "Instalar las herramientas necesarias"
  - "Verificar que el entorno funciona con un programa mínimo"
---

# Módulo 0: Setup del entorno

> **Blueprint — contenido pendiente.** Reemplazar con el contenido de `Temas/Desarrollo web/Sesión 1/Modulo 0.md`.

## Qué instalar

- **Node.js** (versión LTS recomendada, ≥ 20).
- **pnpm** (gestor de paquetes; `npm install -g pnpm`).
- **VSCode** (o tu editor preferido).
- **Git** (cliente de línea de comandos).
- Cuenta en **GitHub**.

## Verificación

Comandos para confirmar que todo está instalado:

```bash
node --version    # debe ser ≥ 20
pnpm --version    # debe responder
git --version     # debe responder
code --version    # si instalaste VSCode
```

## Hola Mundo mínimo

Crear una carpeta, abrir terminal dentro, y ejecutar:

```bash
mkdir hola-mundo
cd hola-mundo
pnpm init
```

Luego abrir en el editor y añadir un `index.js` con `console.log("Hola mundo")` y ejecutarlo con `node index.js`.

## Troubleshooting

- **`pnpm: command not found`**: `npm install -g pnpm` y reiniciar la terminal.
- **`node: command not found`**: reinstalar Node y reiniciar la terminal.
- **Permisos en macOS/Linux**: si `pnpm` falla por permisos, usar `corepack enable` antes.
