Equipamiento de las líneas 1 y 8, revisión 51

Las 39 estaciones tienen cuatro carteles de publicidad en blanco (dos por andén), separados de los mapas de movilidad, y cuatro monitores físicos suspendidos (dos por andén). Cada monitor tiene carcasa, dos soportes y dos caras de lectura; ocho superficies de pantalla no significan ocho aparatos.

Los anuncios se centran en paños libres entre soportes y se separan de escaleras, salidas, mapas y equipos. Los monitores evitan la proyección de los anuncios. La altura del equipo se adapta al techo y su parte inferior queda a más de 2,10 m sobre el piso del andén.

La referencia del usuario guía el encabezado, distribución de próximas llegadas, dirección y franja inferior. La Línea 1 usa rosa y la Línea 8 verde. El distintivo de línea sustituye al pictograma de destino; no se ha inventado uno. Las cotas y la ubicación exacta son aproximadas; la cantidad solicitada es una decisión para el simulador, no una afirmación documentada sobre todas las estaciones reales.

Todos los GLB incluyen carcasas y pantallas con PNG incrustados. En el simulador las texturas se actualizan con una proyección del motor existente: aceleración, frenado, tiempo de parada, separación, dirección y retorno en terminales. Se muestran hasta tres próximas visitas, tiempo restante, EN ANDÉN y reloj de simulación. Ante emergencia o falta de alimentación se avisa SERVICIO DETENIDO. Si no hay una visita en el horizonte de 30 minutos, se muestra SIN TREN PRÓXIMO, sin inventar trenes. Los tiempos son estimaciones de la simulación; no hay conexión con el STC.

Validación: carga de los 39 GLB con GLTFLoader; cuatro anuncios y cuatro aparatos en cada archivo; comprobación de texturas y gálibo; rayos sobre anuncios en cinco ángulos. Predicciones comparadas con el motor y ausencia de mutaciones. Sin prueba interactiva WebGL en este entorno. No se ejecutó Blender aquí: generar_blender_revision51.py importa los GLB actualizados y guarda los .blend al ejecutarlo en Blender.
