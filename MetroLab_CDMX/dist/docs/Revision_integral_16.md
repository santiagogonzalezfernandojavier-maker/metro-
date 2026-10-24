# Revisión integral · versión 16

## Resultado

- Materiales de los 39 andenes y seis GLB de tren ajustados: acero cepillado, esmalte, vidrio, caucho, pavimento y paneles. Menor relieve de normales para superficies finas y rugosidad diferenciada. Los datos binarios de geometría, imágenes y UV se conservaron sin pérdida.
- Los 40 archivos Blender disponibles reciben los mismos ajustes de materiales. Se conservan escenas, cámaras, luces, imágenes empaquetadas y geometría. Se comprobaron los campos SDNA, que todos los cambios corresponden a valores flotantes de materiales y nodos, y la descompresión de cada archivo resultante. No fue posible abrir Blender ni ejecutar nuevos renders nativos en este entorno. No se afirma una reconstrucción geométrica nueva de todas las estaciones.
- El agrupado de trenes conserva sus UV. Los materiales mejorados se aplican también a NM-22 y las texturas de los trenes utilizan filtrado anisotrópico cuando está disponible.
- Usuarios: ojos con esclerótica y pupilas, cejas, boca, acabado de piel y tejido fino en ropa en tiempo real; sombras suaves de contacto, proporciones y familias de la versión anterior. Se reutilizan vectores de cálculo para reducir la creación de objetos durante la animación. Modelos estilizados, no fotogrametría.
- Cámaras: andén a altura de observación sobre la plataforma, vista completa con cubierta alta y ambas vías, seguimiento exterior, y cámara interior dentro del pasillo del vagón con límites para evitar salir de la carrocería. La cámara de andén permanece fija.
- Sonido: botón de activación y volumen. Aviso recreado de cuatro pulsos antes de cerrar, una vez por parada y para trenes cercanos, más marcha y tracción sintéticas según velocidad y distancia. Se silencia al pausar y respeta emergencia y alimentación para el aviso. Los estados visuales diferencian apertura, puertas abiertas, aviso y cierre. El aviso se adapta a la velocidad de simulación.

## Sonido y referencias

El video aportado no pudo recuperarse para extraer una grabación. audio/aviso_cierre_recreado.wav y train-audio.js contienen una recreación, no el audio original verificado del Metro ni una calibración acústica de cada modelo. Se puede sustituir más adelante con una grabación de referencia.

## Comprobaciones

Verificacion_revision_16.json: encuadres de 32 esquinas y cuatro proporciones de pantalla, cámara fija, seguimiento interior en ambos sentidos, aviso una vez por parada, pausa y conservación de UV al agrupar.

Verificacion_GLB_revision_16.json: 46 GLB, cabeceras, longitudes, rangos binarios, límites finitos y materiales dentro de rango. Revision_modelos_16.json: cambios nativos en 40 Blender y revisión de GLB, incluidas copias de edición. Las pruebas de afluencia y acompañamiento infantil siguen pasando.

No se ejecutó una sesión de navegador con WebGL ni un render de Blender en este entorno. Los renders nativos de estaciones y trenes conservados en el paquete corresponden a la revisión anterior. La vista de usuarios se generó desde la geometría actual. Permanecen las aproximaciones de dimensiones, caras ocultas, afluencia y maniobras terminales documentadas anteriormente.
