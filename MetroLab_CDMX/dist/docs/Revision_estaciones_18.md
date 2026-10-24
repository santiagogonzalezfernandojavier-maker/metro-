# Revisión 18 · Estaciones Línea 1

20 GLB actualizados sobre la revisión 17, conservando sus vías y plataformas.
- Pictogramas aportados para cada estación; 8 paneles por GLB.
- Cuatro carteles del mapa de movilidad aportado y dos diagramas L1 por estación.
- Revestimientos claros o beige, rugosidad del piso, techo de vías oscuro y canalizaciones.
- Pasarelas aproximadas en Candelaria y Chapultepec; cubierta elevada y cerchas en Observatorio; separadores al fondo de algunos andenes; gabinete en Balderas.
- Fotografías de referencia visibles en la ficha de cada estación.
- Mapa interactivo con las 20 estaciones ordenadas y forma tomada del esquema del usuario. Los trenes usan desplazamiento perpendicular al trazado para distinguir sentidos.
- Cartel de movilidad también visible en las estaciones L8 mediante la escena del simulador.

## Límites
Las fotos no permiten determinar una planta exacta ni medidas. Se conservan dos andenes laterales aproximados; no se certifica la distribución completa de terminales. Las pasarelas y accesos tienen ubicación provisional. El esquema no es georreferenciado: la vista 3D mantiene tramos rectificados. La señalización ilustrada no se declara normativa ni vigente. Se conserva el mapa PDF aportado como referencia, no se actualizó su contenido.

GLB modificados directamente. Blender no está disponible y no se han generado nuevos archivos .blend. El script generar_blender_revision18.py permite importarlos y guardarlos desde Blender.

## Validación
Carga de los 20 GLB con Three.js GLTFLoader, conservación de 199 elementos de vía por modelo, imágenes JPEG decodificables, límites de buffers y coordenadas finitas. Entre 41 y 44 grupos de dibujo por estación tras el agrupado. Revisión visual del diagrama. Sin prueba de navegador WebGL ni ejecución de Blender en este entorno.
