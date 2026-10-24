Televisores interiores de Línea 1 — revisión 52

Se conservan los tres monitores existentes por coche NM22 en sus posiciones originales: 27 aparatos por convoy de nueve coches. Sus seis caras por coche reciben texturas incrustadas y el formato rosa de los monitores de estaciones. El monitor instrumental de la cabina de conducción permanece separado.

El simulador genera una textura independiente por tren y la comparte entre sus pantallas. Muestra estación actual o próxima parada, hasta tres paradas del recorrido con tiempo estimado, dirección y reloj de simulación. Usa la proyección del motor de la revisión 51. No usa información del servicio real. Emergencia o ausencia de alimentación producen aviso de servicio detenido; el retorno en terminal actualiza la dirección. Las pantallas de pasajeros permanecen visibles con el corte del techo para inspeccionar el interior.

Se actualizan NM22_cabina.glb y NM22_intermedio.glb tanto en modelos de ejecución como en assets-source/trenes. La Línea 8 y las estaciones no cambian. Se conservan posición, ancho y alto; la profundidad de la carcasa y las caras se ajusta para salir del soporte original que las ocultaba; no se presentan como cotas verificadas del fabricante.

Comprobaciones: carga GLTFLoader, textura incrustada, seis caras visibles por coche mediante rayos, independencia de texturas entre trenes, estados del motor y preservación de la geometría ajena a los monitores. No se realizó prueba interactiva WebGL ni se ejecutó Blender en este entorno. Los GLB pueden importarse directamente en Blender.
