# Mailjet — Guía interna

## Módulo 1: Configuración Técnica y Gestión de la Base de Datos Interna

Este módulo se centra en garantizar que los correos enviados desde Mailjet lleguen a las bandejas de entrada de los empleados sin ser bloqueados por el departamento de TI.

### Autenticación y coordinación con TI (SPF, DKIM y DMARC)

- **Contenido:** Aprender a configurar los protocolos de seguridad. El protocolo SPF certifica que el email procede de un host autorizado, DKIM funciona como una firma digital encriptada y DMARC dicta qué hacer si la autenticación falla.
- **Aplicación interna:** Esto es fundamental porque los filtros de seguridad corporativos son muy estrictos. Hay que capacitar a la persona para que trabaje junto con el departamento informático en la configuración de estos registros en los DNS de la empresa, para evitar que el correo interno se marque como spoofing (suplantación de identidad).

### Gestión e Higiene de la lista de empleados

- **Contenido:** Cómo subir y organizar la lista de empleados en Mailjet.
- **Mantenimiento:** Aunque no se necesita opt-in doble para empleados, sí es vital enseñar a limpiar la lista periódicamente para eliminar direcciones que den "rebote definitivo" (por ejemplo, empleados que ya no trabajan en la empresa y cuyos correos han sido desactivados). Esto protege la reputación de envío de la empresa.

---

## Módulo 2: Diseño del Newsletter y Uso de Plantillas

Los empleados reciben decenas de correos al día; por lo tanto, el newsletter interno debe ser visualmente atractivo, accesible y fácil de leer en cualquier dispositivo.

### Dominio del Editor Visual (Drag & Drop) y MJML

- **Contenido:** Aprender a usar el editor de arrastrar y soltar de Mailjet para crear boletines estructurados sin tocar código. Si la persona tiene perfil técnico, se le puede enseñar MJML, un lenguaje de marcado que crea correos HTML adaptativos para distintos clientes de correo (como Outlook, que suele dar problemas de visualización).

### Diseño Responsive (Optimización para móviles)

- **Contenido:** Capacitación para diseñar pensando en los móviles, ya que el 71,5 % de las personas revisa su correo en su teléfono.
- **Reglas de diseño:** Usar una sola columna, fuentes de al menos 16 píxeles, párrafos cortos y mucho espacio en blanco para facilitar la lectura.

### Accesibilidad y Modo Oscuro

- **Contenido:** Asegurar que todos los empleados puedan leer el correo. Enseñar a usar texto alternativo (alt-text) en todas las imágenes por si el cliente de correo interno (como Outlook) las bloquea por defecto.
- **Modo oscuro:** Usar archivos PNG transparentes y contrastes altos para que el logo de la empresa y el texto no desaparezcan si el empleado tiene el modo oscuro activado en su dispositivo.

---

## Módulo 3: Estrategia de Contenido Interno y Maximización de Lectura

Este módulo enseña a evitar que los empleados ignoren el boletín, mejorando la presentación de la información y enviando solo lo que es relevante para cada equipo.

### Estructura y Psicología Visual

- **Contenido:** Colocar la información más crítica de la empresa (anuncios importantes, cambios de políticas) por encima de la línea de flotación (*Above the fold*), es decir, en los primeros 300-500 píxeles, para que se vea inmediatamente al abrir el correo sin necesidad de desplazarse.

### Llamadas a la Acción (CTAs) para herramientas internas

- **Contenido:** Cómo diseñar botones para que los empleados realicen acciones obligatorias (ej. "Completar encuesta de RRHH" o "Descargar reporte").
- **Mejores prácticas:** Un botón que destaque visualmente con el color corporativo, con texto breve y un tamaño mínimo de 44×44 píxeles para que sea fácil de pulsar en pantallas táctiles.

### Segmentación por Departamentos o Sedes

- **Contenido:** Enseñar a usar la herramienta de segmentación de Mailjet para no saturar a toda la empresa con correos que no les corresponden.
- **Aplicación interna:** Crear segmentos usando propiedades del contacto, como el cargo, el departamento o la ubicación geográfica (ej. "Empleados en España" o "Equipo de Marketing"). Enviar información relevante a segmentos específicos reduce la fatiga por exceso de correos y evita que los empleados ignoren las comunicaciones futuras.

### Tests A/B para optimización interna

- **Contenido:** Enseñar a probar variables para ver qué funciona mejor con la plantilla de la empresa.
- **Aplicación interna:** Probar la hora y día de envío (ej. ¿Los empleados leen más el newsletter el lunes a primera hora o el viernes por la tarde?) y probar las líneas de asunto (ej. usar asuntos directos vs. informales o con emojis) para maximizar la tasa de apertura interna.

