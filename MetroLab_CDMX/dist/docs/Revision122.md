# Revisión 122 — Acabados e iluminación coordinados

## Cambios visibles

- Tres entornos de reflexión: estación cubierta, taller/inspección y banco de mantenimiento. Paneles de luz de tamaño real dentro del entorno prefiltrado; ningún reflejo requiere renderizar de nuevo toda la escena por fotograma.
- Microrelieve y rugosidad más finos y continuos en metal, pintura, caucho, tela y superficies minerales. Se conservan el color y los mapas originales. Se reconocen los materiales de ojos, córneas y cabello del personaje aportado y los acabados genéricos del banco según sus propiedades PBR.
- Iluminación local de andenes e interiores, con transición gradual entre ambientes. Haz frontal del tren orientado con la cabina real del modelo, también en curvas. La cámara conserva su posición y sus controles.
- Contacto de los zapatos con el suelo mediante dos sombras suaves por pasajero, dibujadas en un solo lote incluso con 900 personas. Las posiciones siguen el trazado curvo. Apoyo visual en las bases de los pilares existentes, sin agregar columnas.
- Piso neutro y sombra de apoyo en la inspección aislada. Acabados diferenciados en el suelo, estructura y paredes de la nave.
- Sombras del banco de mantenimiento: 1024 en Equilibrado y 2048 en Cinematográfico. Se desactivan en Rendimiento y cuando el presupuesto adaptativo reduce la calidad. Las multitudes y el recorrido no usan sombras dinámicas masivas.
- Arandelas/cabezas de fijación, anillos de mecanizado de ruedas y estrías del conector, unidos a las piezas interactivas originales. Los nodos, destinos y misiones conservan su identidad. Cierre de los dedos algo más escalonado y resaltados menos intensos en el banco.
- Gotas de lluvia independientes y recorte aproximado por volúmenes de cubierta. La lluvia queda fuera de la cabina. El concreto del túnel conserva juntas y grano fino; se retiran las líneas procedurales que parecían grietas y se reduce el relieve exagerado.

## Alcance

Es una mejora del render y del detalle en ejecución aplicada al conjunto existente. No sustituye todos los GLB por nuevos modelos fotogramétricos ni certifica dimensiones, materiales medidos o la reconstrucción exacta de partes ocultas. La geometría de los GLB, sus paletas y mapas se mantienen; las pequeñas fijaciones y sombras se añaden durante la ejecución. Los parámetros de luz y los volúmenes de protección de lluvia son aproximaciones visuales.

Los datos horarios, la marcha lenta por lluvia, los anuncios y sonidos aportados, los controles manuales y las vistas de cámara permanecen disponibles.

## Verificación

Auditoría de los 63 GLB servidos: 11.086.967 vértices; sin normales faltantes ni valores geométricos inválidos. Paletas, mapas incrustados y topología original conservados. 32 texturas de microdetalle compartidas, sin copias por pasajero. Se detectaron 423 apoyos existentes para las sombras de contacto de estaciones; los modelos sin apoyo elegible no reciben columnas inventadas.

Pruebas de CPU/geometría y DOM: materiales de los seis vagones, banco GLB y respaldo de las cuatro actividades, selección y arrastre, guante y herramientas, luces en curva, lluvia/volúmenes cubiertos, calidad adaptativa, multitudes, conservación de afluencia, climatología, conducción, puertas, cámaras y recortes.

No se ha realizado render visual de navegador/WebGL ni medición de FPS en este entorno. El aspecto final debe comprobarse en el equipo de uso. La calidad de sombras se adapta para limitar su coste.
