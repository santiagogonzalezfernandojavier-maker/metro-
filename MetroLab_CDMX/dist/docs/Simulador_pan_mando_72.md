# Simulador directo y conducción simplificada · revisión 72

Se añade el tercer acceso «03 · Simulador» al menú, antes del apartado separado de conducción. Abre la operación automática y la vista completa, con selección de líneas 1 y 8, mapas, estaciones y pasajeros. Entrar a conducción conserva el tamaño de la flota automática anterior y volver al simulador lo recupera.

Las vistas externas del simulador utilizan el mismo movimiento del taller: botón central/derecho para Pan, «Pan · Desplazar» para arrastre izquierdo o un dedo, «Girar» para órbita y «Encuadrar» para recuperar el encuadre. Las cámaras de cabina y de interior conservan su anclaje y los botones Pan/Girar generales quedan desactivados en ellas. Los cortes de arquitectura siguen desactivados en las vistas de cabina.

Los rótulos de dirección, estado de puertas y ayuda salen del área de imagen, sin duplicar IDs ni afectar la señalización física de estaciones. La información de dirección y puertas queda en una barra encima de la vista 3D.

La conducción utiliza una sola palanca de −100 a +100: negativo aplica freno, cero permite marcha por inercia y positivo aplica tracción. Los ajustes por botón son de diez puntos porcentuales; cambiar de frenado a aceleración libera el freno antes de dar tracción, y cambiar a frenado retira tracción. La palanca admite ajustes de cinco puntos. Se mantienen puertas, mensaje de voz, pausa, cámaras y emergencia. La tracción se bloquea mientras las puertas están abiertas o cerrándose.

Atajos fuera de campos y diálogos: ↑/W acelera, ↓/S frena, Espacio aplica freno de servicio total. Los atajos no sustituyen teclas nativas de botones, campos de texto ni la palanca. Se muestra una guía de frenado simplificada, basada en velocidad y desaceleración del escenario, como ayuda de conducción aproximada, no como cálculo de protección ferroviaria real.

Verificación: entrada/salida de ambos modos y restauración de flota; palanca, botones, teclado, interbloqueo de tracción, HTML válido sin IDs duplicados y rótulos fuera del viewport. Pasaron las comprobaciones de Pan con OrbitControls real, vistas de cabina en los tres modelos/dos sentidos, precarga y regresión del motor automático. Sin verificación visual interactiva en navegador.
