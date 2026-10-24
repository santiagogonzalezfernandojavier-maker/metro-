# Revisión 117 · Taller como experiencia de juego

## Mano y controles

Se sustituyó la mano usada como cursor a distancia fija de la cámara. Ahora el puntero de exploración es una retícula pequeña; la mano aparece durante una intervención, se acerca al punto de contacto del componente, sigue la pieza mientras se arrastra y se retira después. El punto de contacto se guarda en coordenadas locales del objeto y se transforma a la escena: conserva la relación con una pieza que se desplaza. La escala corresponde al modelo dentro del banco.

El contacto de la mano libre se calcula desde los huesos de los dedos del guante, con una transición gradual al agarre. El destornillador y la sonda se orientan hacia el equipo. La llave conserva su plano de trabajo. Cada herramienta utiliza una postura de dedos diferente; el giro del destornillador se produce alrededor de su eje. La mano mantiene el agarre al arrastrar una puerta o girar una rueda.

La mano y la retícula se alternan. Las cargas pendientes del banco se aplican después de terminar la intervención para no sustituir el componente que está en la mano. Se conserva la cancelación al perder foco, las zonas de giro estable, los límites de avance tras suspensión y el arrastre sobre el plano de la pieza.

- Mouse: seleccionar y arrastrar como antes.
- E: ejecutar una acción del objetivo actual, con la misma lógica que los botones originales.
- F: acercar explícitamente la cámara a la pieza del objetivo. No se hace este movimiento automáticamente al cambiar de paso.
- 1–4: herramientas.
- Esc: cancelar una pieza tomada, cerrar un panel o abrir la pausa según el contexto existente.

## Presentación de misión

El banco ocupa la pantalla con un HUD superpuesto. El objetivo actual y su progreso utilizan los mismos nodos y datos de la misión; las herramientas se presentan en una barra inferior y las acciones alternativas permanecen disponibles en un panel desplegable. El manual sigue accesible.

Al entrar se muestra una orden de trabajo con el síntoma y los controles. Los pasos comprobados tienen una respuesta visual breve; al completar el ensayo se muestra el resultado con el tiempo real transcurrido y opciones para repetir, continuar a la siguiente actividad o volver al menú. No se inventan puntuaciones ni resultados eléctricos.

La sala incorpora gabinetes, cajones, ruedas de carros, canalizaciones y límites pintados de la zona de trabajo para añadir escala y profundidad. Estos elementos se agrupan en cuatro mallas y no interfieren con la selección del ejercicio. Se añadieron transiciones breves al entrar a otras vistas y respuestas de enfoque/hover; se respeta la preferencia de movimiento reducido en estas transiciones de interfaz.

## Validación y alcance

Pruebas CPU y DOM sobre los archivos reales: cuatro actividades completas, orden de trabajo, selección de herramientas, panel de acciones, manual, atajos, pantalla de resultado, repetición y regreso al menú. Se verificaron la profundidad real del punto de contacto, el seguimiento de piezas móviles, la orientación del eje de herramientas, la retirada de la mano, la conservación del gesto de arrastre, los IDs únicos y las rutas de navegación.

Los movimientos y agarres son una representación interactiva aproximada; no se incorpora un cuerpo humano completo ni validación ergonómica. Se mantiene el modelo GLB del guante y el resto de los modelos existentes. No se realizó inspección visual WebGL en navegador ni se midieron FPS en el equipo del usuario.
