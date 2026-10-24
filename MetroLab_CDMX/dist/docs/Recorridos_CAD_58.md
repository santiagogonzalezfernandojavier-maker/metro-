# Recorridos de los planos CAD · revisión 58

La vista «Recorrido de la línea seleccionada» usa únicamente el trazado de los PDF `Linea1_AutoCAD-Layout1.pdf` y `Linea8_AutoCAD-Layout1.pdf`. Se retiró el fondo con la lámina completa de Línea 8. No se muestran tablas, cotas, leyendas, marco, norte ni cajetín de los documentos.

Los PDF contienen geometría vectorial. Se identificaron los dos bordes continuos del eje de cada línea y se promediaron sus vértices para obtener 20 centros de estación en Línea 1 y 19 en Línea 8. Se aplicó una transformación uniforme de escala y posición: se conserva la forma y la proporción del trazado CAD, sin copiar píxeles ni digitalizar puntos manualmente. Los originales se conservan en `assets-source/recorridos58` y el extractor reproducible en `scripts/recorridos58.py`.

`recorrido_L1.json` y `recorrido_L8.json` contienen los centros originales en unidades de página PDF y las coordenadas de la interfaz. Las estaciones se numeran desde Pantitlán hacia Observatorio y desde Garibaldi/Lagunilla hacia Constitución de 1917, respectivamente. Los trenes se interpolan entre esas estaciones con las distancias actuales del motor. Las estaciones y trenes siguen siendo seleccionables.

No se modificaron distancias de operación, reglas de circulación, archivos de estación o modelos de tren. Los planos no se interpretan como levantamiento geográfico o como nuevas dimensiones de los andenes.

Verificación: cadenas de 19 y 18 segmentos por borde, pares de bordes separados menos de 1.5 unidades PDF, 222 posiciones de tren (inicio/mitad/final, ambos sentidos), sintaxis JS y revisión de diagramas estáticos de las coordenadas extraídas. No hubo comprobación interactiva en navegador disponible.
