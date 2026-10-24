# Revisión 115 · Coherencia de materiales y realismo

Se revisaron los 64 archivos GLB servidos en `models/`: trenes NM-22, NM-79 y MP-82, 39 estaciones, cinco personajes, cuatro bancos de mantenimiento, guante, motores, captador, cerradura, separadores y subestación de referencia. La auditoría registra cada archivo, sus mallas, vértices, huesos, normales y categorías de material en `documentacion/auditoria-realismo115.json`.

## Cambios visibles

- Ropa, pantalones infantiles y mochilas reciben acabado textil; calzado, suelas, cabello y ojos tienen roles independientes. La piel utiliza reflexión dieléctrica moderada, sin transparencia ni barniz. La selección de vestuario conserva la rugosidad de las texturas originales.
- Se conserva el multiplicador de rugosidad de los materiales que ya tienen mapas. Antes el refinador lo sustituía por un valor genérico, que alteraba el acabado de piel y otros materiales texturizados.
- Piedra y concreto se diferencian de los revestimientos lisos. Acero satinado, aislantes, piezas de carbón, pintura, paneles y asientos reciben tratamientos específicos. Los pictogramas, murales y publicidad mantienen su acabado gráfico.
- El vidrio opalino y los difusores son sólidos; no se convierten en ventanas transparentes. La transparencia de las ventanas sigue tratándose por separado.
- El guante definitivo y las herramientas se refinan después de la carga asíncrona. Antes solo se refinaba la mano provisional, que luego se sustituía.
- Paredes, suelo y acero de la sala de mantenimiento, gabinetes de subestaciones, concreto de túneles y elementos metálicos de la vía se incorporan al tratamiento compartido.
- El entorno de reflejos tiene relleno más neutro y paneles suaves cálidos/fríos; reduce la dominante azul sobre metales y superficies claras. No añade luces por fotograma.

## Recursos y alcance

Se conservan geometría, escala, huesos, animaciones, colores y texturas incorporadas. Se usan mapas pequeños compartidos; no hay texturas independientes por pasajero ni incremento de polígonos o mallas. La auditoría de GLB encontró 27 texturas compartidas de detalle. Los 11.070.676 vértices contados corresponden al inventario completo de archivos, no a una escena cargada simultáneamente.

Esta es una mejora del renderizador y de la aplicación de materiales. No reconstruye los modelos en Blender, no modifica los GLB originales y no acredita hiperrealismo ni exactitud de las zonas que carecen de referencias. Los materiales ambiguos conservan el acabado de autor en vez de inferir su composición por el color.

## Validación

- Carga y examen de los 64 GLB: geometría finita, normales presentes, colores y mapas originales conservados, factores de rugosidad originales retenidos cuando hay mapas; número de mallas y vértices sin cambios.
- Refinamiento repetible sin duplicar materiales; texturas compartidas y papeles específicos de guante, vidrio opalino, ropa, piedra y piel.
- Pruebas de las cuatro misiones de mantenimiento con selección por rayos y eventos del puntero; navegación de portada y taller, conducción, cámaras y cortes automáticos, controles de presupuesto gráfico e interiores de Línea 8.

No hubo inspección visual WebGL en navegador ni medición de FPS en un equipo de usuario. Las pruebas CPU y DOM verifican estructura y comportamiento, no sustituyen esa revisión visual.
