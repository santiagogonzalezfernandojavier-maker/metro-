# Selección de tren desde el mapa · revisión 59

Al pulsar un indicador de tren en el mapa de Línea 1 o Línea 8, se selecciona ese convoy, se activa su seguimiento, se cambia la cámara a «Tren» y se desplaza la página hasta la vista 3D. Esto también funciona cuando la cámara anterior era la vista fija del andén. El desplazamiento respeta la preferencia de movimiento reducido del navegador.

La selección desde el desplegable mantiene el comportamiento previo de la cámara fija del andén. Los clics en estaciones continúan seleccionando estaciones. No se modifica el tiempo ni el estado de marcha/pausa de la simulación.

Comprobación de lógica: ocho clics en las coordenadas reales de los indicadores, ambas líneas, ambos sentidos y trenes detenidos/en circulación. Verifica identidad del convoy, estación de referencia, seguimiento, petición de cámara y desplazamiento de la interfaz. Sintaxis JavaScript comprobada. Sin revisión visual interactiva en navegador.
