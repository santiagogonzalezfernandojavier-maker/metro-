# Revisión 151 · Conducción despejada

- Nombres grandes y pulsables sobre los seis botones del pupitre, independientes de la resolución 3D.
- Ayuda bajo demanda, tarjeta de próxima estación compacta y avisos críticos temporales.
- Cámara del conductor adelantada dentro del coche y pupitre mejor encuadrado. Se conserva la vista hacia el andén.
- Objetivo de renderizado de conducción de hasta 60 cuadros por segundo, según el equipo. Las poses de pasajeros se actualizan por separado, sin reducir la afluencia.
- Eliminado el recorrido completo del tren y la escritura repetida de paneles en cada cuadro. Portada con cámara estable y renderizado cuando hay cambios.

Verificación: integración de los tres modelos con motor de simulación real, tracción, frenos, cierre de cinco segundos, emergencia sin doble activación, cambio de cámaras, tamaños de pantalla y carga. Pruebas de geometría y DOM; pendiente inspección visual en navegador y medición de FPS en el equipo del usuario.
