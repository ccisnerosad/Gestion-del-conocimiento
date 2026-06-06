---
title: "Módulo 1: Configuración Técnica y Gestión de la Lista"
order: 1
duration: "30 min"
objectives:
  - "Entender qué hacen los protocolos SPF, DKIM y DMARC"
  - "Coordinar la configuración DNS con el equipo de TI"
  - "Evitar que el correo interno se marque como spoofing"
  - "Mantener la lista de empleados limpia para proteger la reputación de envío"
---

Este módulo se centra en garantizar que los correos enviados desde Mailjet lleguen a las bandejas de entrada de los empleados sin ser bloqueados por el departamento de TI.

## Autenticación y coordinación con TI (SPF, DKIM y DMARC)

- **Contenido:** Aprender a configurar los protocolos de seguridad. El protocolo SPF certifica que el email procede de un host autorizado, DKIM funciona como una firma digital encriptada y DMARC dicta qué hacer si la autenticación falla.
- **Aplicación interna:** Esto es fundamental porque los filtros de seguridad corporativos son muy estrictos. Hay que capacitar a la persona para que trabaje junto con el departamento informático en la configuración de estos registros en los DNS de la empresa, para evitar que el correo interno se marque como spoofing (suplantación de identidad).

## Gestión e Higiene de la lista de empleados

- **Contenido:** Cómo subir y organizar la lista de empleados en Mailjet.
- **Mantenimiento:** Aunque no se necesita opt-in doble para empleados, sí es vital enseñar a limpiar la lista periódicamente para eliminar direcciones que den "rebote definitivo" (por ejemplo, empleados que ya no trabajan en la empresa y cuyos correos han sido desactivados). Esto protege la reputación de envío de la empresa.