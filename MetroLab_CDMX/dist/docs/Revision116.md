# Revisión 116 · Interacción y movimiento

## Mantenimiento

- Las hojas del banco de puertas siguen una sola trayectoria de apertura/cierre. Se eliminó el segundo suavizado que retrasaba la geometría respecto al progreso del ensayo.
- Los giros de tornillos y fijaciones tienen una zona muerta de 14 píxeles alrededor del centro; entrar o salir de ella no añade un giro artificial. El cambio de ángulo respeta la continuidad al cruzar ±180°.
- Mantener pulsado continúa siendo una alternativa al giro manual y a los cuatro clics. La contribución de un fotograma se limita para impedir que una pestaña suspendida complete una fijación al volver. Perder el foco o esconder la pestaña cancela el gesto.
- Cancelar un arrastre devuelve la pieza. Una entrega fuera de destino cancela la selección y devuelve el componente en lugar de dejarlo suspendido. Cambiar de herramienta también termina el gesto anterior.
- Los cambios de texto o de progreso no reconstruyen la posición de todas las piezas. La iluminación de selección se actualiza solo al cambiar el objetivo o el paso. Las escrituras de texto repetidas se evitan.
- Las trayectorias de colocación usan una interpolación de quinto orden con velocidad y aceleración nulas en los extremos; tapas, ruedas, fusibles y conectores se separan ligeramente hacia el frente durante el traslado por clic. El arrastre manual conserva la correspondencia directa con el puntero.
- Se añadieron herramientas ligeras: destornillador con mango acanalado y punta plana, llave con boca abierta biselada, y sonda con cuerpo aislado, guardadedos y punta metálica corta. Son siete mallas y 4.800 vértices en total, agrupadas por material. Se mantiene el guante articulado y su punta de interacción alineada con el puntero.
- La muñeca y las herramientas responden al progreso de la fijación. El ventilador aumenta su velocidad gradualmente durante el ensayo.
- El multímetro eléctrico muestra la lectura de la misión en una pantalla dentro del modelo 3D; comparte el cálculo con la interfaz y solo redibuja cuando cambia el valor o el modo. No introduce valores aleatorios ni nuevas mediciones.
- Se equilibraron luz principal y relleno del banco para dar más volumen a piezas y superficies. Las cargas tardías de una actividad anterior no sustituyen el banco actual.

## Pasajeros

Se mezclan gradualmente las animaciones de caminar y reposo. El tiempo de simulación sigue gobernando las poses y la pausa permanece determinista. La reutilización de modelos reserva primero las identidades que continúan presentes: una persona nueva no toma el modelo de otra que aún está en pantalla. Se sustituyeron búsquedas repetidas sobre todo el grupo por índices por identidad y plantilla.

## Verificación y límites

Pruebas CPU/DOM con los GLB reales y eventos del puntero: cuatro misiones completas; arrastre, cancelación, selección, manos y herramientas; posición intermedia y final de las puertas; zona muerta y cruce angular; límite de avance tras suspensión; lectura y caché del LCD; transición caminar/reposo; conservación de identidad y pausa; agarre exclusivo de adultos; navegación, cámaras y conducción.

Esta revisión mejora interacción, animaciones, herramientas e iluminación. Conserva los GLB originales de trenes, estaciones y personajes; no afirma una reconstrucción en Blender ni hiperrealismo completo. No se realizó inspección visual WebGL en navegador ni medición de FPS en un equipo de usuario. El presupuesto gráfico mantiene el objetivo de hasta 60 Hz en mantenimiento, condicionado por equipo y ajustes.
