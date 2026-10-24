# Consola de conducción · revisión 63

Los mandos existentes se trasladaron directamente debajo de la vista 3D, en un mismo contenedor. Se mantiene una sola instancia de cada control. La consola añade velocidad, próxima estación, distancia y un botón Pausar/Continuar vinculado al estado real del motor.

Al entrar al modo operador se desplaza la página hasta la consola. La vista adapta su altura al espacio vertical disponible, deja espacio para los mandos y utiliza todo el ancho del panel principal. En pantallas estrechas los controles se organizan en filas. El panel de métricas general se oculta durante conducción y sus datos esenciales aparecen junto a los mandos. La vista automática conserva su distribución anterior.

Verificado: estructura HTML, IDs únicos y pertenencia de vista/mandos al mismo contenedor; entrada y salida de modos para los tres modelos; pausa/continuación desde el nuevo botón y actualización de velocidad. Comprobaciones de tracción y frenado de la revisión 60 aprobadas. Sin comprobación visual interactiva en navegador.
