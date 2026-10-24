# Revisión 107 · Puesto de conducción

Consola independiente debajo de la vista 3D: tracción y frenado a la izquierda, instrumentos al centro y puertas, voz y emergencia a la derecha. Los mandos no se superponen al escenario. Los mensajes reales del operador vuelven a estar visibles, incluyendo bloqueo de tracción, puertas y emergencia.

Botones directos Vista frontal y Asomarse al andén. V alterna ambas cámaras y el botón activo queda resaltado. En seguimiento, Cortar andén regresa a la vista principal con el mismo control que utiliza el renderizador.

Se conservaron los manejadores originales de marcha, frenado, aviso de cierre de cinco segundos, cambio de cabina y emergencia. No se modificaron modelos ni parámetros del motor en esta revisión.

Pruebas: ejecución del motor y controles reales con los tres modelos, aceleración, frenado, pausa y ritmos 1×/2×/5×; bloqueo de tracción con puertas abiertas, secuencia de aviso/cierre, emergencia y rearme, botones de cámaras y nodos sin IDs duplicados. Verificación DOM y motor; sin inspección visual en navegador ni prueba WebGL.
