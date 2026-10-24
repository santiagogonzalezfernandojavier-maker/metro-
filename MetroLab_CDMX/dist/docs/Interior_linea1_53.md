Interior de Línea 1 — revisión 53

Referencia: cinco fotografías entregadas por el usuario (01 paneles, 02 pasillo, 03 ventilación, 04 puertas, 05 bancas), conservadas en assets-source/referencias/interior_l153.

Cambios en NM22_cabina.glb y NM22_intermedio.glb:

- Sustitución de los antiguos asientos verdes por seis bancas longitudinales continuas de acabado marfil/gris claro, con perfil curvo, base naranja y franjas divisorias naranjas. Se mantienen los treinta destinos de asiento por coche y su altura de apoyo.
- Sustitución de pasamanos originales de pasajeros por tubos de acero con soportes curvos junto a las bancas, barandales divisores, barras superiores y manijas junto a las puertas. Se conservan los postes de la revisión 46 utilizados por la animación de agarre.
- Difusores circulares con cavidad oscura, anillos concéntricos y radios, en lugar de las rejillas rectangulares añadidas anteriormente; iluminación lateral continua y paneles marfil de brillo moderado.
- Piso gris oscuro de rugosidad moderada, basado en las referencias más oscuras; no se copia el brillo exagerado que aparece en otra fotografía.
- Mapas de movilidad en paneles laterales, leyenda de asientos preferentes, recorrido de la Línea 1, franjas negras/amarillas junto a las jambas, equipos rojos de emergencia y avisos de salida. El mapa usa el recurso de movilidad entregado anteriormente; no es una reconstrucción de texto ilegible de estas fotografías. Los avisos de asientos preferentes recrean cuatro pictogramas en blanco sobre azul: silla de ruedas, adulto mayor, embarazo y adulto con bebé.
- Paso abierto entre coches, con laterales, dintel, fuelle y placa de piso articulado; se conserva el frente de la cabina de conducción. Las maniobras entre coches no están implementadas para pasajeros.
- Se conservan las tres pantallas por vagón de la revisión 52, con información de parada y tiempo simulado, y el mecanismo de ocultación de puertas solicitado anteriormente.

Las fotografías muestran diferencias de acabado y una vista con paneles abiertos. La versión final utiliza paneles cerrados, geometría coherente y la paleta común. Las medidas, equipos ocultos, microdetalles y fecha/modelo exactos de las fotografías no están verificados; esta es una interpretación visual detallada, no una réplica de fabricación certificada ni fotogrametría.

Se editaron los GLB directamente. Blender no está disponible en este entorno; generar_blender_linea1_53.py permite generar los .blend al importar los dos GLB en Blender. Texturas incrustadas. No hay prueba interactiva WebGL: se usó carga GLTFLoader, rayos, comparación geométrica y una vista técnica CPU que no reproduce PBR ni transparencia del navegador.
