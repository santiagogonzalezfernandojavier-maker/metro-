# Revisión 103 · interacción, GLB de Blender y lluvia

- Se oculta el cursor nativo mientras el guante está dentro del banco. Al salir vuelve el cursor normal. Se retiró la cruz central para conservar un único indicador.
- El clic prioriza los destinos válidos del paso actual. Las piezas se pueden tomar y colocar con dos clics o arrastrar. Las fijaciones requieren cuatro clics o giro con el mouse.
- Cuatro bancos importados, refinados y exportados con Blender 4.3.2. GLB con texturas de rugosidad incorporadas, bordes biselados y partes identificadas para la interacción. Escala métrica. Son equipos didácticos aproximados, no réplicas certificadas de mecanismos reales.
- Los bancos GLB se cargan realmente en las misiones. Hay una geometría provisional durante la carga o como respaldo si el archivo falla.
- Clima seleccionable seco/lluvia, límite de 25, 35 o 40 km/h y alcance exterior o toda la línea como escenario. Frenado progresivo tanto automático como manual. El predictor de llegadas utiliza el mismo motor y restricciones. La aceleración temporal sigue siendo 1×, 2× o 5×.
- La exposición al exterior utiliza la misma clasificación aproximada que los túneles: estaciones superficiales L8 y el 35% exterior de cada transición. No se afirma que esos puntos sean mediciones topográficas. Los tramos cubiertos de L1 no reciben una restricción automática de lluvia; se puede elegir el escenario de toda la línea.
- Lluvia visual de bajo coste en vistas exteriores, sin partículas dentro del tren. Es un escenario de simulación, sin meteorología en vivo ni una reproducción calibrada del patinaje real.

## Archivos GLB

[Puertas](../models/mantenimiento103/doors.glb.gz) · [Ventilación](../models/mantenimiento103/ventilation.glb.gz) · [Rodadura](../models/mantenimiento103/running.glb.gz) · [Circuito eléctrico](../models/mantenimiento103/electrical.glb.gz)

Los GLB se distribuyen comprimidos en `.gz`; el simulador los descomprime automáticamente. Para abrirlos directamente en Blender, descomprime el archivo primero.

Los archivos editables `.blend` y el script están en `assets-source/mantenimiento103` del código fuente.

## Referencia climática

[Cuestionario ALAMYS de 2019](https://www.alamys.org/wp-content/uploads/2021/04/Metrorrey-2019.pdf), introducción sobre CDMX: marcha lluvia de 35 km/h en tramos superficiales. Las respuestas posteriores corresponden a Metrorrey y no se aplicaron como límites CDMX. Referencia histórica, no reglamento vigente ni instrucción de conducción real.

## Verificación

Secuencias de las cuatro misiones completadas por clics reales de raycasting sobre los GLB exportados, con el lienzo desplazado de la esquina de pantalla. Comprobación de texturas incorporadas, guante único, restauración del cursor, arrastre y cancelación; pruebas de interfaz y arranque. Límites y frenado progresivo en seco/lluvia para modo automático y manual. Verificación de CPU y estructuras 3D; no se realizó una sesión visual interactiva en navegador.
