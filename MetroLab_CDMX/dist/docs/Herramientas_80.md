# Corrección de interacción de herramientas 80

En el banco, el SVG no se reconstruye durante pointerdown: se conserva el objetivo hasta terminar el gesto. La captura permanece en el contenedor estable para clic, arrastre y tacto. El registro y el modelo se actualizan al terminar la acción. La activación de teclado/lector de pantalla se acepta y el clic posterior a pointerup no duplica acciones. La cancelación de un gesto limpia la selección provisional.

En 3D, Usar herramientas activa selección de piezas y suspende la navegación de cámara. Girar y Pan vuelven a habilitarla. La selección de herramientas activa automáticamente el modo de intervención. La mano también permite arrastrar tapa, fusible y repuesto entre sus destinos en el tablero 3D. Los clics ya no dependen de consumeSelection del modo Pan. Se actualizan matrices antes del raycast y se prioriza el destino de colocación de una pieza tomada, para que el fusible no intercepte el marco al recolocar la tapa.

Piezas al alcance ofrece botones nativos para los mismos elementos del banco; no omite las herramientas ni los interbloqueos. El indicador Herramienta activa muestra qué se está usando. Los bornes y tornillos del tablero 3D tienen objetivos más amplios.

Pruebas: interacción por clic/arrastre, estabilidad del SVG durante el gesto, botones de piezas y activación accesible; secuencia eléctrica completa mediante rayos y manejadores del visor con Pan como estado previo; regresión de circuito, herramientas y conducción. La comprobación visual en navegador sigue pendiente.
