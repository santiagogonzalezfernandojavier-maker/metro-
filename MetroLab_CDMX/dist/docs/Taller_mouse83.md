# Taller con mouse e interfaz simplificada · revisión 83

La navegación principal concentra las cuatro experiencias; se retiraron las tarjetas de entrada duplicadas. En mantenimiento se prioriza un único banco con cuatro actividades y guía contextual. El visor del tren se abre mediante Enfocar en 3D. Información del componente y del convoy permanece plegada en exploración.

Manos ilustradas y herramientas acompañan el cursor en el banco y en la vista 3D. Las piezas retiradas se representan con pequeñas figuras que siguen el arrastre. Son ilustraciones interactivas, no un rig de manos humanas 3D ni seguimiento de manos reales.

Gestos del banco: arrastrar piezas a su destino; girar alrededor de tornillos y fijaciones con destornillador o llave; arrastrar la hoja de puerta para ensayar apertura/cierre; arrastrar las puntas roja y negra del multímetro a bornes; girar la rueda con Mano tras sustituirla y fijarla. Botones, teclado y acciones por nombre siguen disponibles como alternativas.

Correcciones: la actualización de la vista 3D no puede bloquear la selección del ejercicio; errores de callback permiten seguir usando el banco. El zoom mantiene el dibujo completo en una superficie desplazable en vez de recortar objetivos. Elegir actividad devuelve el zoom a 100 % y reinicia las puertas. Una tolerancia numérica evita que una vuelta completa se quede visualmente en 100 % sin confirmar la fijación. Los mensajes de acción aparecen inmediatamente encima del banco.

Pruebas: las cuatro reparaciones completas; manejadores reales de pointerdown/move/up para giros, arrastre de piezas, puntas y puertas; visibilidad de manos; recuperación de zoom; selección de actividades con callbacks 3D fallidos; navegación; regresión de demanda y conducción. DOM simulado y pruebas del motor: sin comprobación visual en navegador disponible.
