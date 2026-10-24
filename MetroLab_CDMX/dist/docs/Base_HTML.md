# Base HTML del simulador Metro CDMX

El punto de entrada es `index.html`, escrito en HTML5. La presentación está en `styles.css`. La simulación y la interacción 3D están en módulos JavaScript locales: `app.js`, `engine.js`, `station-scene.js`, `station-assets.js` y `metro-render.js`.

Three.js y los cargadores GLB están incluidos en `vendor/`. No se requiere React, un proceso de compilación ni dependencias de un CDN. Los archivos GLB, los datos JSON y los módulos se sirven junto con el HTML mediante HTTP.

## Vista de la Línea 8

El NM-79 seleccionado conserva los GLB de cabina e intermedio, nueve vagones y sus puertas animadas. El acabado de pintura, vidrio y acero se ajusta al cargar el modelo. El entorno de reflejos se genera una vez. Todos los NM-79 visibles usan los GLB detallados. Los convoyes del mismo modelo comparten una plantilla de geometría, con puertas y controles de corte independientes.

La carrocería completa es la presentación inicial. El control de interior permite activar el corte. «Inspeccionar vagón» acerca la cámara al coche de cabecera y puede acompañarlo durante el recorrido. «Ambas vías» sigue encuadrando los dos andenes y las dos vías.

El MP-82 seleccionado utiliza sus propios GLB de cabina e intermedio basados en siete fotografías. Conserva puertas independientes, interior y frente inclinado; sus cotas son aproximadas. Todos los MP-82 visibles usan estos GLB, aunque no estén seleccionados. Los ajustes de render no acreditan nuevas medidas ni una reproducción exacta del material rodante real.

## Comprobación

Se verificó la carga de ambos GLB NM-79, la conservación de su geometría y de las 16 hojas de puerta por coche, los parámetros de materiales, la cámara cercana y el encuadre de estación en cinco tamaños de pantalla. El informe está en `Verificacion_render_L8.json`. No se midió rendimiento en una GPU de navegador ni se realizó una comparación visual del render en esta revisión.

## Túneles y pasajeros

Los túneles se muestran cerrados por defecto. «Ver corte del túnel» permite abrir la vista de inspección; «Andenes en corte» funciona de forma independiente.

Las trayectorias de embarque y descenso se alinean con los 36 portales de puerta del convoy seleccionado. Los pasajeros esperan detrás del borde, algunos caminan sobre el andén y los ocupantes viajan con el tren. Se separan el descenso y el embarque, y el cruce se limita al intervalo de puertas abiertas y tren detenido. Los brazos y piernas acompañan la marcha.

Al interrumpir energía o activar emergencia durante una parada, el intercambio se congela con el tiempo restante de esa parada; no se fuerzan las puertas a cerrarse sobre una trayectoria. La representación sigue siendo por grupos: no sustituye los contadores del motor ni simula rutas individuales reales.

Se comprobaron 18 combinaciones de modelo, sentido y duración de parada, incluyendo 402 muestras de cruce en puertas. No se midió rendimiento ni se realizó prueba visual de navegador en esta revisión.

## Cámara de andén y animación

«Andén · cámara fija» ancla la cámara a la estación seleccionada, desactiva el seguimiento automático y conserva el encuadre al salir el tren o llegar a otra estación. Se puede elegir otra estación de forma explícita. «Seguir tren» y «Inspeccionar vagón» conservan sus controles de seguimiento.

La animación se dibuja en cada cuadro disponible del navegador, sin el límite anterior de 25 Hz. Brazos y piernas utilizan un reloj de tiempo real que se congela al pausar; los desplazamientos del recorrido continúan respetando el tiempo de simulación y las puertas. Los portales se calculan una vez por parada, y las superficies estáticas del convoy se agrupan conservando las hojas móviles. La agrupación reduce los meshes del MP-82 de 654 a 488, del NM-79 de 722 a 507 y del NM-22 de 773 a 515. Las geometrías temporales se liberan al cambiar de modelo.

Se verificaron el anclaje tras una llegada, la selección explícita de estación, las puertas y recorridos, y la independencia del reloj de movimiento de las extremidades. No se midieron FPS en un navegador; la fluidez final depende del dispositivo.

## Convoyes que llegan al andén

La selección del tren solo determina los datos y las cámaras de seguimiento; no determina el nivel de detalle. Los NM-22, NM-79 y MP-82 visibles utilizan los GLB durante la aproximación, la parada y la salida. Se preparan dentro de 650 m del encuadre, antes del límite de visibilidad de 430 m, y se conservan hasta 900 m para evitar reconstrucciones al borde de la vista. Durante la carga inicial se espera al GLB en lugar de mostrar un convoy de bloques.

Una plantilla por modelo comparte geometrías y materiales entre convoyes. Las transformaciones de las hojas de puerta y la visibilidad de techo y laterales son independientes. Las plantillas se liberan al cambiar de línea. Esta revisión no cambia los modelos de las estaciones.
