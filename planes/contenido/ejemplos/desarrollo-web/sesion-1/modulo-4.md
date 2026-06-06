---
title: "Módulo 4: Git y versionado"
order: 4
duration: "20 min"
objectives:
  - "Inicializar un repositorio Git"
  - "Hacer commits con mensaje claro"
  - "Publicar en GitHub"
---

# Módulo 4: Git y versionado

> **Blueprint — contenido pendiente.** Reemplazar con el contenido de `Temas/Desarrollo web/Sesión 1/Modulo 4.md`.

> **Convención:** el último módulo de cada sesión suele ser workflow técnico (Git, despliegue, observabilidad). Trátalo como módulo, no como tarea.

## Por qué Git

Razón breve: historial, colaboración, portafolio.

## Comandos esenciales

```bash
git init                      # inicializar repo
git add .                     # stagear cambios
git commit -m "mensaje"       # commitear
git branch -M main            # renombrar rama principal
git remote add origin <url>   # conectar a GitHub
git push -u origin main       # primer push
```

## Mensajes de commit

Convención: imperativo presente, ≤ 50 chars, descripción opcional en línea siguiente.

```
Add: módulo 0 con setup de entorno
Fix: typo en README
Refactor: separar lógica de presentación
```

## Publicar en GitHub

1. Crear repo vacío en github.com (sin README ni licencia, los añadimos nosotros).
2. Conectar con `git remote add origin <url>`.
3. Push con `git push -u origin main`.
4. Verificar que el repo aparece en tu perfil.
