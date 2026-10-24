# Revisión 101 · Rendimiento

## Trabajo eliminado
- Agarre: el CCD actualiza únicamente la cadena necesaria del brazo, con salida temprana al alcanzar un error inferior a 1 mm; conserva el máximo de iteraciones para los casos difíciles. Antes se actualizaba toda la jerarquía hasta 64 veces por postura. Se elimina la segunda actualización de esqueletos que WebGLRenderer ya realiza al dibujar.
- Estaciones e infraestructura estáticas conservan sus matrices: no recalculan sus transformaciones cada fotograma. Las texturas de pantallas y la visibilidad por distancia siguen siendo dinámicas.
- Los recorridos de todos los objetos para aplicar cortes de paredes se ejecutan al cambiar el corte, el lado de cámara o los modelos cargados. Los muros del tren conservan su máscara hasta un cambio equivalente.
- El mapa 2D y los paneles del simulador se actualizan a unos 10 Hz y únicamente cuando se muestra la simulación. Se omite el trabajo detrás de menú y taller.

Los nueve coches del convoy comparten cuatro variantes de geometría estática según cabecera, orientación y tracción. Esto evita preparar nueve copias de geometría por modelo; las puertas siguen siendo objetos independientes y los remolques conservan su ausencia de motores.

## Presupuesto gráfico
Simulador, taller y depósito tienen un máximo de 30 Hz para trabajo gráfico. El motor físico mantiene su reloj y velocidades 1×, 2× y 5×. La resolución inicial pasa de hasta 1,5 a 1 píxel de render por píxel CSS (en pantallas de alta densidad: 56 % menos píxeles que con 1,5). Ante fotogramas persistentemente lentos puede bajar gradualmente hasta 0,7, sin retirar geometría, texturas o pasajeros. No se modifican sus conteos ni datos de afluencia. Las pestañas ocultas omiten trabajo gráfico.

## Evidencia
Prueba aislada de CPU, 120 posturas de un personaje adulto: versión 100, 42,6 ms y 7920 llamadas de actualización completa; versión 101, 9,1 ms y 120 llamadas. Error final mano/tubo: 0,000923 m. Es una medición de esa operación en este entorno, no un benchmark de FPS ni de GPU del usuario. Script: scripts/medir_agarre101.mjs (requiere historial Git para la versión de comparación).
Pruebas: 600 posturas con agarre exclusivo de adultos, niños sin agarre y liberación al caminar; presupuesto de render con entrada de 60 Hz; adaptación de resolución y retorno de segundo plano; máscaras de corte; cámaras; arranque, aceleración, frenado y tasas 1×/2×/5×; navegación de menús.
No hay medición visual de navegador WebGL en este entorno. La mejora de fluidez debe verificarse en el equipo del usuario.
