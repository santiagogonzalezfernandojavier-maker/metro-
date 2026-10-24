# Revisión 149 · Conducción con manos

La conducción abre ahora un pupitre tridimensional en primera persona, con dos manos enguantadas articuladas. El panel inferior de controles se sustituye por mandos sobre el propio pupitre. Disponible para NM-22, NM-79 y MP-82.

## Uso

- Arrastra la empuñadura hacia arriba: tracción proporcional. Arrástrala hacia abajo: freno proporcional. El centro corresponde a inercia. El mando mantiene su posición al soltarlo.
- La mano izquierda sigue la palanca. La derecha alcanza los pulsadores cuando apuntas y haces clic sobre ellos.
- ABRIR y CERRAR accionan las puertas; AVISO reproduce el mensaje manual; EMERGENCIA aplica el freno y permite rearmarlo al detenerse. AJUSTAR conserva la asistencia de alineación. CAMBIAR CABINA conserva el cambio en terminal.
- La pantalla muestra velocidad, porcentaje de tracción/freno y estado de puertas, incluido el aviso de cinco segundos antes del cierre.
- Las cámaras de Cabina, Andén e Interior siguen en la barra de vistas. El pupitre de manos se muestra en Cabina. La tecla V mantiene la mirada al andén.
- Mandos clásicos permite recuperar el panel anterior. Pausar o salir cancela un gesto pendiente.

## Implementación y alcance

Dos variantes de pupitre modeladas en Blender, en metros, con GLB y materiales embebidos. La mano es el guante articulado existente, con esqueletos independientes de quince articulaciones digitales por mano. Los movimientos se interpolan con el tiempo de cada fotograma. El pupitre se renderiza sobre la escena sin duplicar el anterior. La carga espera los modelos y la preparación de materiales antes de permitir operar.

El pupitre es una adaptación didáctica: no pretende reproducir con exactitud el tablero certificado de cada material rodante. Se controla con ratón; no requiere cámara, seguimiento de manos ni realidad virtual. Conserva la física y los bloqueos del simulador. No altera mantenimiento, trenes ni estaciones.

## Verificación

Pruebas de DOM/CPU con los GLB reales y rayos 3D sobre los mandos: los tres modelos aceleran y frenan mediante arrastre; la emergencia se aplica una sola vez por pulsación y bloquea tracción. Apertura y cierre reales, aviso de cinco segundos, bloqueo con puertas abiertas, liberación de captura del ratón y cancelación al pausar. Encuadre de controles en tres tamaños, restauración de la cabina en vista al andén y restauración del estado del renderizador.

Renders nativos de Blender revisados para el encuadre y el agarre. No se dispuso de revisión visual interactiva en navegador: los renders de esta página no son capturas del simulador. La pantalla dinámica se añade durante la ejecución web y aparece vacía en el render Blender.

Fuentes editables: assets-source/revision149/pupitres149.blend, conduccion149.blend y pupitres149.glb. Generación: scripts/build-cockpit149.py y scripts/render-cockpit149.py. Integración: dist/cockpit149.js y cockpit149.css. Prueba: scripts/verificar_cabina149.mjs.
