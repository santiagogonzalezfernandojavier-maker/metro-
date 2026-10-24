# Referencia técnica de convoy · revisión 64

Se integraron las tres imágenes aportadas el 12 de octubre de 2026 (UTC), conservadas en assets-source/referencias/tecnica64. La referencia general coincide con la página del STC https://www.metro.cdmx.gob.mx/operacion/conformacion-de-un-tren, consultada en esa fecha.

Formación de referencia de nueve carros: M–R–N–N–PR–N–N–R–M. M es motriz con cabina; N, motriz sin cabina; R, remolque; PR, remolque central con equipo de pilotaje automático. Posiciones motrices: 1, 3, 4, 6, 7 y 9. Seis motrices y tres remolques. La ilustración de seis carros es M–R–N–N–PR–M: cuatro motrices y dos remolques; no se activa como composición del simulador.

La caja transporta pasajeros y se apoya en dos bogies. La referencia indica dos motores por bogie motriz, cuatro por carro motriz, sin motores en los remolques. Los equipos de regulación de tracción se ubican bajo la caja entre bogies. Se describen compresor para frenado neumático y cierre de puertas; motogenerador de 750 V a 250 V CA para alumbrado, alimentado desde la motriz N adyacente; baterías de 72 V para mando; captor de pilotaje automático en PR.

Se distingue captación neumática por escobillas desde barra guía a 750 V CD de captación férrea por pantógrafo/catenaria a 750 V CD. El patín de carbón y las ruedas metálicas se incluyen como comparación, sin añadir pantógrafos a los trenes neumáticos de las líneas 1 y 8.

El taller incorpora nueve botones de posición, una ficha por tipo y la selección automática de GLB cabecera/intermedio. El ensamblaje del convoy recibe metadatos de referencia por carro. No se crearon GLB específicos de N, R y PR ni se incorporaron equipos internos no documentados. Los intermedios comparten geometría; el detalle eléctrico y la formación específica del NM-22 quedan pendientes de ficha de fabricante. Los valores auxiliares se presentan como descripción general de la fuente, sin convertirlos en parámetros de un sistema eléctrico calculado.

Verificación: conteos de formaciones, selección real de nueve botones, relación M/cabina y N/R/PR/intermedio, HTML sin IDs duplicados, regresiones de cámara, mantenimiento y modos de conducción. Sin comprobación visual interactiva en navegador.
