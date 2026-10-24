# Navegación del taller 3D · revisión 61

- Mantener el botón central y arrastrar desplaza la cámara y su punto de interés juntos, en el plano de la pantalla. El botón derecho también desplaza.
- «Pan · Desplazar» permite el mismo movimiento con el botón izquierdo o con un dedo. «Girar» recupera la órbita.
- La rueda acerca y aleja hacia el cursor; dos dedos permiten acercar y desplazar.
- «Encuadrar tren» recupera la vista general. En modo Girar, un clic sin arrastrar selecciona la pieza.
- El desplazamiento evita seleccionar piezas al soltar y evita el desplazamiento automático del navegador con el botón central.
- Se permite una distancia mínima de 20 cm para inspeccionar detalles. No hay colisión de cámara con la geometría.

Verificación: scripts/verificar_navegacion61.mjs utiliza la implementación real de OrbitControls y Three para comprobar traslación sin giro, modo Pan izquierdo, órbita, zoom y selección. Pasaron también las comprobaciones de mantenimiento y conducción de la revisión 60. No se realizó una comprobación visual interactiva en navegador.
