# Revisión 93 — interacción con clic y separadores de Línea 8

## Cómo intervenir

- Clic en S1 o «Preparar equipo» para aislar el banco virtual.
- Clic en una pieza para tomarla; después clic en su destino. Los destinos se marcan en verde. También admite arrastre.
- Clic en un tornillo o fijación: ¼ de vuelta por clic, con porcentaje visible. Cuatro clics completan una vuelta. Se conserva el giro al soltar. También se puede girar dibujando un círculo o usar los botones de giro.
- Las herramientas se seleccionan al actuar sobre su pieza, salvo el modo Inspeccionar, que muestra información.
- Puertas: tras retirar el objeto y reactivar S1, clic en la hoja o en «Abrir puerta» para ejecutar un ensayo animado. Después vuelve a hacer clic para cerrarla.
- Rueda: tras sustituirla y fijarla con ambas fijaciones, cada clic sobre el eje suma 90° al ensayo. También acepta el gesto circular y el mando.
- Circuito eléctrico: elegir V CC o continuidad y hacer clic en los dos bornes, con conexión alternada de punta roja y negra. La lectura confirma el paso. Retirar las puntas antes de cerrar.
- Botón derecho: desplazar la cámara. Rueda del ratón: acercar. F: encuadrar. Esc: soltar.

Los botones por nombre quedan al lado del banco, siempre visibles; no requieren abrir una sección desplegable. La mano queda desplazada del punto del cursor para no tapar la pieza.

## Cambios técnicos

Los gestos primarios se procesan en la fase de captura antes de OrbitControls. La cámara utiliza el botón derecho y la rueda, sin capturar los gestos de intervención. Un clic en una fijación ahora avanza su estado, en lugar de limitarse a preparar la herramienta. Se mantienen el arrastre y su cancelación. El esquema alternativo conserva la selección entre dos clics.

## Separador fijo

Los 19 GLB de Línea 8 incluyen dos conjuntos, uno por andén, sustituyendo en la escena visible la barrera naranja. Paneles blancos, partes superiores transparentes, postes y anclajes metálicos, rótulo VIAJA SEGURA, señal superior y marca de piso, con detalles verdes de Línea 8. Paso central nominal de 1,50 m. Materiales y cartel integrados en el GLB independiente y en los andenes.

Es una adaptación solicitada de las fotografías de Línea 1, no una comprobación de que cada estación de Línea 8 tenga este mismo separador ni de su emplazamiento exacto. Se conserva la lógica existente de mujeres y menores de 12 años para los tres coches designados de referencia. Los GLB editables están en assets-source/andenes89/L8.

Reproducción: node scripts/separador93.mjs; python scripts/integrar_separador93.py, sobre los andenes de la revisión 92. El integrador detecta una integración repetida.

## Comprobaciones

- Cuatro misiones completas mediante los eventos de ratón registrados, con OrbitControls real y raycasting Three.js; otras cuatro mediante los callbacks de los botones visibles.
- Clic, giro parcial, arrastre, cancelación, paneo y mensajes de prerrequisitos.
- Estructura DOM: acciones por nombre contiguas al banco, navegación, herramientas, enfoque y Escape.
- Carga GLTFLoader de los 19 andenes de Línea 8: 38 conjuntos fijos, vidrio transparente, textura integrada, paso libre y ausencia de barreras naranjas activas duplicadas.
- Regresión de pasajeros y cerraduras de la revisión 92.

Las pruebas de entrada y DOM usan un entorno simulado. No se ha comprobado WebGL ni la detección de clics bajo CSS en un navegador en esta revisión. Las actividades son ejercicios didácticos simulados, no procedimientos de fabricante.
