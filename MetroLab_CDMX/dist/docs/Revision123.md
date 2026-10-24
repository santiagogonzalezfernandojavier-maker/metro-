# Revisión 123 · Multímetro e interacción

## Fallo corregido

La comprobación de 24 V terminaba la misión con las dos puntas conectadas; el diálogo de éxito ocupaba la interfaz. Las puntas visibles tampoco formaban parte de los objetos seleccionables. La tecla E ya enviaba las acciones: el problema no era un fallo general del teclado.

La actividad eléctrica tiene ahora siete etapas. Después de comprobar H1, exige recoger ambas puntas. Se pueden retirar haciendo clic en cada punta 3D, con los botones Roja/Negra del panel o con «Retirar ambas puntas». La acción contextual y el enfoque también reconocen estas piezas. El diálogo final espera a que termine el movimiento de recogida.

## Realismo e interacción

- Dos puntas persistentes, con aguja metálica, aislante, guardadedos, empuñadura estriada, alivio del cable y soportes junto al multímetro.
- Los cables siguen la posición real de cada punta. Su geometría se conserva cuando está quieta.
- El guante sigue la punta durante su desplazamiento y evita mostrar otra punta duplicada.
- El panel mantiene las comprobaciones de 0 V, circuito abierto y tensión final, incluso después de desconectar las puntas. La polaridad real de la lectura se conserva; al recoger ambas, se prepara primero la roja para la siguiente medición.
- La resolución adaptativa vuelve a subir gradualmente tras un periodo estable. Antes podía permanecer reducida después de una ralentización temporal. Se mantienen el límite de imágenes y la separación respecto a la física.

Se conservan los materiales, iluminación, modelos GLB y optimizaciones de la revisión 122; esta actualización no reconstruye todos los modelos del simulador.

## Verificación

Pruebas automatizadas satisfactorias:

- Secuencia eléctrica completa, retirada individual y conjunta, registro de mediciones, reinicio y recuperación de resolución.
- Interfaz DOM: botones de retirada visibles, siete etapas, espera de animación antes del éxito y cuatro actividades completas.
- Las cuatro actividades mediante rayos y eventos de puntero sobre los GLB reales del banco. Identidad estable de puntas, cables finitos y geometría reutilizada.
- Guante, herramientas, arrastre, escenas e iluminación, conducción, cámaras/cortes, pasajeros, afluencia horaria, lluvia y presupuesto de renderizado.
- Grafo de importaciones: 86 módulos, sin versiones URL duplicadas.

Las pruebas ejecutan lógica, eventos, geometría y DOM. No se ha verificado visualmente el render WebGL ni medido FPS en un navegador real en esta revisión.
