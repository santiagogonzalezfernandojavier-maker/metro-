# Revisión 106 · Conducción y seguimiento

La escena 3D ocupa la pantalla. El trayecto se muestra arriba y los mandos de conducción quedan abajo, junto al velocímetro. Cámaras (C) y mapa (M) se abren únicamente cuando se necesitan; Escape cierra primero estos paneles.

Seguimiento conserva la selección de línea y convoy y el mapa interactivo para cambiar de tren. La conducción conserva aceleración, frenado, puertas, aviso, emergencia y cambio de cabina en terminal. Se reutilizan los controles y callbacks originales.

Las estadísticas, tablas, documentación, alimentación eléctrica y configuración de demanda dejan de ocupar estas dos vistas. Recorrido, clima, sonido y vistas técnicas quedan en Opciones. La documentación sigue accesible desde el menú principal.

Verificación: pruebas de DOM sobre controles, cámaras, mapa, pausa, opciones y cambio de modo; prueba integrada del motor real después de mover los controles con los tres modelos de tren, aceleración, frenado y velocidades 1×/2×/5×. No se realizó inspección visual en navegador ni validación WebGL en esta revisión.
