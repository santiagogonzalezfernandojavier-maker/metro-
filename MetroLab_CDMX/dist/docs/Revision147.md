# Revisión 147 · Vagones, asientos y navegación

Se sustituyeron completamente los dos conjuntos antiguos de carcasas y bastidores de Línea 8 por asientos verdes con carcasa continua, espesor, bordes redondeados, bastidor tubular y fijaciones. Los 26/28 destinos de asiento de pasajeros se conservan y se comprueba que existe una superficie bajo cada uno.

Las seis plantillas NM22, NM79 y MP82 incorporan umbrales de acero ranurado y acabados diferenciados. Sus tres coches de cabina tienen nuevos pupitres; los intermedios no reciben cabina. El velocímetro central muestra la velocidad del motor de simulación convertida a km/h. Las otras dos esferas o pantallas son referencias visuales estáticas. El recorte cercano de la cámara se reduce a 4 cm para mostrar el pupitre.

La interfaz se organiza alrededor de cinco actividades: explorar trenes, conducir, seguir trenes, mantenimiento y subestaciones. Las seis cámaras, PAN, mapa y mandos originales conservan sus callbacks. En conducción, los selectores de línea y convoy permanecen bloqueados para no cambiar sólo el tren visible. El modelo se cambia desde Actividades → Explorar trenes.

## Referencias y alcance

Se revisaron seis imágenes y doce fotogramas de cada uno de los ocho archivos de video. Hay siete videos únicos: 20.26.14 (1)(1) y 20.26.14 (1) son idénticos. La primera captura muestra el defecto anterior, las dos siguientes muestran asientos reales de Línea 8 y las otras tres muestran pupitres modernos.

Los videos 20.26.14 (3) y 20.26.14 muestran consolas clásicas con palancas e instrumentos analógicos, usadas como referencia visual. El video 20.26.14 (4) se identifica explícitamente como NM-16, Línea 1, Juanacatlán. Las fotografías aportadas como Línea 12 se mantienen como comparación moderna; no se atribuyen al NM79 o MP82 ni se añade Línea 12 al servicio.

Los nuevos pupitres son aproximaciones visuales. No se dispone de planos de fabricante verificados ni se certifican dimensiones, cantidad o posición exacta de mandos por modelo. Los originales, inventario SHA-256, seis GLB completos, seis archivos .blend editables y componentes fuente están en assets-source/revision147 del proyecto.

## Verificación y límites

Se importaron y renderizaron las seis plantillas finales en Blender. Las pruebas CPU verifican carga GLB, anclajes físicos de asientos, retirada de conjuntos antiguos, ocho umbrales por coche, cabinas sólo en extremos y aislamiento/actualización del velocímetro. La prueba DOM comprueba cinco actividades, seis cámaras, PAN, mapa, controles de conducción y pausa. Los canales, tiempos, interpolaciones y valores de animación de puertas se compararon con la revisión 146: sin cambios.

También pasan el arranque y la conducción de los tres modelos, la carga de ambas líneas y 308 acciones reales de puntero sobre las diez misiones de mantenimiento. La flota comprimida ocupa 9.28 MB menos que en la revisión anterior.

No hubo prueba visual interactiva en navegador/WebGL en este entorno. Los renders revisan geometría y acabados, pero no son capturas de la interfaz ni garantizan fotorealismo. Esta revisión conserva los modelos anteriores de estaciones, pasajeros, subestaciones y ejercicios; unifica su presentación sin afirmar que se remodelaron.
