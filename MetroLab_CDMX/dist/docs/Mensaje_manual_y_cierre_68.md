# Cierre y mensaje manual desde la nueva referencia

Se integra el video WhatsApp Video 2026-10-11 at 22.45.07.mp4 proporcionado por el usuario, conservado en assets-source/audio/aviso_cierre_y_mensaje68.mp4. El video presenta bloques rotulados de cierre de puertas, vendedores, petición de libre cierre y anuncios de estación.

El aviso automático se extrae de 0 a 5 segundos, dentro del primer bloque «Cierre de puertas», que termina aproximadamente a los 6.933 segundos. Reemplaza las referencias anteriores en los tres modelos del simulador, a petición del usuario. Se usa como referencia común aportada; el video no certifica el modelo de tren. No se repite, sintetiza ni cambia de velocidad. Se mantiene la advertencia manual durante cinco segundos antes de 1.5 segundos de movimiento de cierre.

El mensaje manual se extrae del bloque «Permite el libre cierre de puertas», entre 11.366667 y 14.766667 segundos. El botón «Permita el cierre de puertas · voz» lo reproduce sólo por pulsación del operador; no manda cerrar puertas, no modifica tracción y no mueve el tren. Se deshabilita mientras reproduce, estando la operación pausada y durante advertencia/cierre, para evitar solapamientos. La advertencia de cierre detiene un mensaje que estuviera reproduciéndose. Los anuncios de aproximación esperan mientras se carga o reproduce el mensaje manual.

Se respetan volumen y silenciamiento elegidos por el usuario. El botón solicita activar audio si hace falta. Los anuncios de próxima estación previamente integrados se conservan.

Verificación: dos fragmentos con audio y duración esperada, ejecución del mensaje una sola vez, parada y liberación del botón, manejador real sin cambios de tren/puertas, secuencia de cinco segundos e interbloqueos, regresión de anuncios de llegada en ambas líneas y distintos factores de tiempo. HTML y código correctos. No se realizó escucha comparativa humana ni comprobación interactiva en navegador.
