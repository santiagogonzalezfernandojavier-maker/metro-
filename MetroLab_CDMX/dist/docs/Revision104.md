# Revisión 104 · mantenimiento con movimientos continuos

## Interacción

El banco de mantenimiento admite render de hasta 60 Hz, con resolución adaptable. La simulación de trenes conserva su presupuesto gráfico de 30 Hz. Es un objetivo de render, no una medición de FPS garantizada en todos los equipos.

Se conservan los botones y la lista de pasos durante los movimientos continuos, evitando reconstruir esos elementos con cada actualización. Las puertas, ruedas y fijaciones responden durante el arrastre. Las piezas se trasladan con interpolación y una pequeña elevación al depositarlas, en lugar de reaparecer en otro lugar. Los tornillos admiten mantener pulsado, giro del mouse o cuatro clics.

Se mantiene un solo indicador: el guante dentro del banco y el cursor nativo fuera. El resaltado reconoce correctamente los nodos Object3D de los GLB exportados por Blender.

## Modelos y ambiente

Nuevo guante de superficie continua, generado en Blender 4.3.2: palma, unión del pulgar, dedos de distintas longitudes, manga y 15 articulaciones de dedos. Material textil con normal incorporada y recubrimiento de palma; agarre y apertura interpolados. Se carga realmente como GLB en los ejercicios. Sigue siendo un modelo aproximado, no una captura anatómica.

Los bancos incorporan retornos de chapa en la tapa del tablero, carril y contactos del portafusible, palas curvas del ventilador y apoyos de rodadura. Se corrigió la altura de la tapa retirada y el fusible en la bandeja. Suelo, pared de taller, perfiles y sombra de contacto complementan el entorno e iluminación más suave.

Los bancos agrupan superficies por material y pieza conservando sus destinos interactivos. En las pruebas, cada banco usa 21–44 mallas, además del guante y el entorno. Los datos de los GLB se conservan en memoria para no repetir la descarga al cambiar de ejercicio.

## Archivos

[Guante GLB comprimido](../models/mantenimiento104/guante.glb.gz) · [Puertas](../models/mantenimiento103/doors.glb.gz) · [Ventilación](../models/mantenimiento103/ventilation.glb.gz) · [Rodadura](../models/mantenimiento103/running.glb.gz) · [Circuito eléctrico](../models/mantenimiento103/electrical.glb.gz)

El simulador descomprime automáticamente los archivos. Para utilizarlos en Blender, descomprimir primero el `.gz`. Fuentes `.blend` y scripts en `assets-source/mantenimiento104` del proyecto.

## Verificación y alcance

Las cuatro misiones completan sus secuencias con raycasting sobre los GLB. Pruebas del controlador de producción verifican arrastre, desplazamiento visible de puerta antes de soltar el mouse, instalación, cancelación y resaltado. Se comprueban poses intermedias, continuidad de las transiciones, preservación de botones/listas y deformación gradual del nuevo guante. Inspección del guante mediante render de Blender. No se realizó una sesión visual interactiva en navegador ni una medición de FPS en el equipo del usuario.

El texto de consulta de vías se distribuye en JSON comprimido para mantener el paquete dentro del límite. Se verificó que al descomprimir es idéntico al anterior: SHA-256 `294c7aa4bde9e9ef0dc448fe6ea6c63108d72ddee7a3abec901c504ba77c3c62`.

Estos bancos son prácticas virtuales simplificadas y no sustituyen procedimientos de mantenimiento de trenes reales.
