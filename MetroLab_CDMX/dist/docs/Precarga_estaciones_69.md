# Modelos y texturas durante conducción · revisión 69

La carga anterior se iniciaba a menos de 650 m del centro de la estación y la vista de conducción heredaba el corte de paredes/techos usado para vistas generales. Esto podía mostrar estaciones provisionales o sin parte de los acabados durante la aproximación.

Se conserva la estación próxima, la parada objetivo y la siguiente en el sentido de marcha, incluso en intervalos largos; se mantienen visibles los modelos dentro de 900 m. El conjunto de estaciones en memoria se limita a las requeridas por este entorno y recorrido, liberando las demás. Las texturas incrustadas se preparan en el renderizador antes de señalar el modelo como listo. Se reintentan fallos hasta tres intentos, con espera de cinco segundos; Reintentar modelos permite una nueva ronda.

En cámara de conducción se muestran completos techo y paredes del túnel, estación y tren, sin cortes. Las opciones quedan desactivadas y se recuperan sus valores anteriores al seleccionar otra cámara. El estado informa si el siguiente andén está preparado, cargando o en reintento. No se alteran acabados, paletas, geometría GLB ni datos de afluencia.

Verificado: 78 combinaciones de estación/sentido mantienen la precarga, controles de corte se restauran, reintentos no generan cargas duplicadas por fotograma, texturas existentes se preparan una sola vez por modelo. Los 39 GLB de estaciones existen y contienen texturas e imágenes incrustadas. Se cargaron y agruparon los GLB de Balbuena y Doctores, comprobando conservación de texturas. Pasaron regresiones de conducción, cámara y mensaje manual.

La precarga mejora la anticipación, pero una conexión lenta o un fallo de WebGL aún puede impedir que termine antes de llegar. No se realizó verificación visual interactiva en navegador.
