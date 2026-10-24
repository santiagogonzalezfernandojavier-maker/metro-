# Revisión 110 · Materiales de los modelos

Nuevo tratamiento PBR compartido por trenes, taller, estaciones, pasajeros y bancos que utilizan el refinador de materiales. Se diferencian pintura esmaltada con capa de barniz, acero cepillado, pasamanos pulidos, paneles, asientos moldeados, pisos, caucho, fundición y metales de motores.

Los cristales conservan reflexión y permiten ver mejor el interior. Los materiales sin mapas de detalle reciben microtexturas normales y de rugosidad de 128×128, compartidas entre objetos. Las geometrías que carecían de UV reciben coordenadas locales para esos detalles. Se conservan las texturas existentes, los colores de referencia, las piezas, las puertas, la topología y las animaciones.

Esta revisión mejora el aspecto en el renderizador web: no vuelve a esculpir personajes ni reconstruye geometrías en Blender, y no modifica los archivos GLB originales. No certifica hiperrealismo.

Pruebas sobre las seis plantillas GLB (cabina e intermedio de NM-22, NM-79 y MP-82): mapas y colores originales preservados, materiales válidos, vidrio sin escritura de profundidad, pintura con barniz, acero y caucho diferenciados, refinamiento idempotente y materiales compartidos sin duplicación por pieza. Igual número de mallas y vértices; 18 mapas compartidos de detalle para las seis plantillas. El coste gráfico aún depende del dispositivo. No se realizó inspección visual en navegador ni comparación mediante capturas.
