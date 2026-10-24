# Revisión 120 — recuperación de pasajeros

Se reportó la desaparición de todos los pasajeros después de integrar los modelos nuevos. Las pruebas anteriores cargaban las plantillas manualmente y no verificaban el fallo parcial del cargador de producción ni la compilación real WebGL de los patrones.

- El cargador original dependía de Promise.all: un solo GLB fallido dejaba ready=false y ocultaba toda la multitud. Ahora las plantillas se incorporan individualmente y los modelos disponibles se muestran sin esperar al último archivo.
- Si falla el manifiesto, se usan las rutas conocidas de adultos, adolescentes y madre con bebé. Los errores de una variante no descartan las demás. Se reintentan modelos fallidos y el botón de reintentar modelos también recupera pasajeros.
- Se comprueba la cabecera del contenido. Se admite tanto gzip como GLB ya descomprimido por el transporte, evitando una segunda descompresión.
- Se retiraron los modificadores personalizados de shaders del vestuario. Los colores y patrones usan el soporte de colores por vértice incluido en Three.js, conservando las texturas y la variedad de ropa.
- Las cuatro geometrías de patrones se comparten por plantilla; no se crean copias nuevas por cada pasajero o cuadro.
- El indicador de pasajeros distingue carga pendiente y modelos de respaldo. Las rutas de movimiento, horarios de afluencia y áreas reservadas se mantienen.

verificar_carga_pasajeros120.mjs ejecuta el cargador real, el refinamiento de materiales y el pool, simulando GLB ausente, descarga lenta, manifiesto fallido, respuesta ya descomprimida y recuperación posterior. Se verifican modelos visibles en los escenarios de fallo parcial y los materiales sin shaders personalizados. No se dispone de comprobación visual WebGL: no se presenta como confirmado el origen exacto de la falla en el navegador del usuario.
