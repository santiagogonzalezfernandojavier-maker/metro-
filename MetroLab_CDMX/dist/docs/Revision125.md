# Revisión 125 · Actividades de mantenimiento

## Puertas

Las hojas del banco usan las proporciones del modelo MP-82 existente: 0,713 m de ancho y 1,97 m de alto por hoja, con cristal de aproximadamente 0,45 × 0,85 m. Esta es una referencia del modelo del proyecto, no una certificación de medidas del tren real. Se reconstruyen estampado, cristal, junta perimetral, goma central, placa inferior y cara exterior naranja. Los cajones laterales ocultan las hojas al abrir; el ensayo y el arrastre utilizan el mismo recorrido físico. La obstrucción de lona sigue siendo seleccionable.

## Ventilación y tablero

Cada tapa cuenta con cuatro tornillos A–D, distribuidos en sus cuatro esquinas. La ventilación tiene una brida rectangular alrededor de la rejilla circular, evitando fijaciones flotantes fuera de la pieza. Las cuatro fijaciones son independientes y obligatorias para abrir, cerrar y energizar. Manual, acciones y mensajes están adaptados.

La tapa eléctrica incorpora un triángulo amarillo, rayo negro y texto «PELIGRO · ALTA TENSIÓN». La leyenda de alimentación del banco continúa indicando «BANCO DIDÁCTICO · 24 V CC». El interior añade carriles DIN, interruptor QF1, relé K1, fuente PS1, borneras X1, conductor PE, canaletas ranuradas, contactos y cableado guiado. Es una disposición didáctica; no se presenta como un plano del tablero de un modelo real. F1 y H1 siguen vinculados a la misión.

## Rueda y herramientas

El neumático deja de ser un toro simple: tiene banda, hombros, flancos y asiento de talón. La llanta tiene pestañas, disco perforado, ocho alojamientos y aros mecanizados. Se conserva espacio para el eje del banco.

Ocho fijaciones independientes sustituyen las dos anteriores y los cilindros decorativos duplicados. La misión exige retirarlas antes de sacar la rueda; pasan a la bandeja y se vuelven a colocar y asegurar tras introducir el repuesto. Las fijaciones acompañan el giro de la rueda. No se inventa un par de apriete de fabricante.

El destornillador incorpora una punta de cruz acorde con las cabezas de la tapa. Las cabezas de las fijaciones se han reducido de tamaño y disponen de un área de selección invisible más amplia para facilitar el clic.

## Multímetro

Funda moldeada, frente, marco LCD, botones, estrías de agarre, selector, bornes COM/VΩ y etiquetas nítidas. La pantalla 3D pasa de 256 × 128 a 512 × 256 y conserva lecturas reales del ejercicio, incluida la polaridad. El selector gira y permite cambiar V CC/continuidad con un clic. El modo guiado sigue preparando la función requerida al medir. Las puntas y cables de la revisión 123 se conservan y la misión exige recogerlas al final. Las otras actividades no muestran un multímetro innecesario sobre las piezas.

## Verificación y alcance

Pruebas sobre los GLB cargados y los bancos de respaldo: cuatro tornillos y ocho fijaciones con posiciones distintas y selección independiente; bloqueo ante la última fijación pendiente; secuencia completa de las cuatro actividades; selector y LCD; recorrido y alojamiento lateral de puertas; giro de fijaciones con la rueda; geometría finita; menos de 130 mallas por banco. Informe en `documentacion/mantenimiento125.json`.

También pasan las pruebas de eventos de puntero/rayos, interfaz, agarres, herramientas, retirada de puntas, iluminación, cámaras y conducción. El grafo de producción mantiene una sola versión URL por módulo.

Los detalles se integran en ejecución sobre los GLB existentes y en el modelo de respaldo. Esta revisión no reexporta los archivos `.blend`. No se ha verificado la apariencia WebGL ni medido FPS en un navegador real.
