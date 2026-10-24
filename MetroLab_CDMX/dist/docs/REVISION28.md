Revisión 28 · Puertas retráctiles

Se corrige la animación de todas las instancias NM-22, NM-79 y MP-82, con los seis GLB de cabina e intermedio. Antes, una traslación fija de 0,63 m mantenía toda la hoja expuesta sobre la pared/ventana. Ahora el desplazamiento se calcula desde la separación real de cada pareja de hojas y cubre la apertura completa. El render limita la parte visible de las hojas al vano fijo: al desplazarse hacia la pared, se ocultan progresivamente, simulando el alojamiento lateral.

train-doors.js prepara materiales independientes y planos de recorte por hoja. Los planos siguen la matriz de la pared del vagón y funcionan al invertir el sentido del tren. Se activa localClippingEnabled; no se recortan paredes, cristales del vagón ni materiales compartidos de otro tren. Los materiales de puerta se liberan al retirar el tren. Los planos siguen activos en la vista de corte para que las hojas guardadas no reaparezcan flotando sobre los paneles.

Esta corrección está integrada en el render del simulador. No modifica la geometría ni añade animaciones portátiles a los GLB originales; su ocultación lateral depende del módulo del simulador.

Verificar_puertas28 usa jerarquías, transformaciones y límites de geometría de los seis GLB: 192 hojas en ambos sentidos, apertura por etapas, cierre completo, ocultación completa al abrir, material aislado, vano fijo y retorno sin deriva. Verificar_embarque27 confirma las 36 puertas por tren y mantiene el cruce de pasajeros con puertas abiertas. No hay comprobación visual WebGL disponible. Las dos capturas adjuntas no estaban accesibles en las rutas locales proporcionadas.
