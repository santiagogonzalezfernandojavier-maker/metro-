# Revisión 124 · Acabados de todo el simulador

## Aplicación

El sistema compartido de materiales aplica esta actualización a los trenes NM-22, NM-79 y MP-82, las estaciones de ambas líneas, los pasajeros, herramientas, bancos de mantenimiento, taller y superficies de infraestructura que ya tienen un material identificado. Los rótulos y los materiales sin identificación conservan su tratamiento anterior.

- Dieciséis familias de acabado con mapas de relieve y rugosidad de 256 × 256: pintura, panel, asiento, acero cepillado/pulido, acero, cobre, caucho, fundición, piso, mineral, tela, piel, cuero, cabello y difusor.
- Los materiales minerales sin imagen propia reciben un grano neutro muy discreto. No se pintan grietas, manchas, corrosión ni sombras sobre las referencias.
- Pintura y asientos tienen un microrelieve adicional en el barniz. Tela con brillo rasante suave y sin barniz; piel y cuero tienen respuestas separadas.
- Pisos, paredes, paneles y pintura utilizan coordenadas de detalle independientes, ajustadas al tamaño de las piezas. Se conservan las coordenadas de los mapas y carteles originales. Si una geometría se comparte entre piezas con escalas distintas, se separan sus coordenadas de detalle.
- Biseles de 0,8 a 3,5 mm en sólidos rectangulares sencillos sin imágenes propias: carcasas, soportes, marcos y otros componentes identificados. Se excluyen vidrio, carteles, personajes articulados y geometrías ya detalladas. La operación mantiene dimensiones exteriores y objetos seleccionables.
- Los sistemas que agrupan andenes, trenes y convoyes del taller conservan las coordenadas nuevas. También se mantienen al simplificar accesorios de pasajeros lejanos.
- El NM-79 de vista lejana comparte los acabados de pintura, metal y caucho; conserva su geometría de bajo detalle.

## Presupuesto

La auditoría de los 63 GLB detectó 7.661 sólidos apropiados y añadió 511.752 vértices en total antes de agruparlos. Cada recurso limita el aumento al 12 % de sus vértices, con un máximo de 11.520; los recursos muy pequeños disponen de un mínimo de 576. No se agregan mallas por los biseles.

Las 16 familias comparten 36 texturas: 9 MiB de datos base, aproximadamente 12 MiB incluyendo mipmaps. Se generan una vez por familia, nunca por pasajero ni por fotograma. Se mantienen la resolución adaptativa, los límites de personajes detallados y el agrupamiento de geometría. Estos límites no sustituyen una medición real de rendimiento.

## Comprobaciones

Auditoría completa guardada en `documentacion/auditoria-acabados124.json`: geometría finita, límites de detalle, dimensiones, colores base, mapas incorporados y coordenadas originales conservados. Las cuatro actividades se completan mediante eventos de puntero y rayos sobre los GLB con el acabado nuevo. Se comprueban la retirada de puntas y el final de la misión eléctrica, interfaz, herramientas, guante, cámaras, conducción, cortes, afluencia, lluvia y pasajeros cercanos/lejanos.

El grafo de producción contiene 88 módulos con una sola versión URL por módulo. No se ha comprobado visualmente la salida WebGL ni medido FPS en un navegador real. La actualización mejora los acabados en el render; no reconstruye la anatomía ni reexporta todos los archivos Blender originales.
