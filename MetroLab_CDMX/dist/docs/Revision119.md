# Revisión 119 — personaje femenino aportado y vestuario

Se revisaron personaje_femenino_v2.glb y Sin_nombre.glb. Ambos comparten topología y texturas, con cambios en posiciones de vértices, especialmente en el cabello, y diferencias en controles auxiliares. Se conservan las dos formas mediante una variante geométrica, además de los vestuarios. No traen clips de animación.

## Integración
- Se utiliza la geometría aportada para las pasajeras adultas de andenes y vagones de ambas líneas. Se conservan las bases específicas de hombres, niños y madre con bebé para mantener coherencia anatómica y los vínculos familiares.
- Escala normalizada a 1.72 m. Conversión del rig ARP de 537 articulaciones/controles a 17 pivotes anatómicos para multitudes, con pesos normalizados.
- Clips de reposo y marcha; adaptación al sistema existente de postura sentada, transición de marcha y sujeción a tubos. Los originales aportados no incluían estos movimientos.
- Variación estable por identidad de chaqueta/camisa, pantalón, calzado y prenda interior. Cuatro patrones: liso, rayas, dos tonos y líneas finas. Se conservan UV, pliegues y detalle de las texturas; las variaciones de ropa no cambian piel, ojos o cabello.
- Texturas embebidas optimizadas; sin descarga de texturas externas. Archivo para la web: aproximadamente 3.6 MB comprimidos, frente a unos 94 MB por original.
- Cabello de mayor detalle a menos de 18 m y detalle reducido a mayor distancia. Geometría y texturas compartidas; esqueletos y materiales de vestuario independientes por persona.
- Dos variantes antiguas retiradas del paquete web; originales antiguos conservados en assets-source. No se eliminaron documentos, fotografías, audio ni modelos de trenes.

Los archivos adjuntos originales no se modificaron. El servidor de código rechazó sus objetos por tamaño, por lo que no se duplican en el repositorio. La conversión es reproducible con preparar_personaje.py RUTA_AL_PRIMER_GLB RUTA_AL_SEGUNDO_GLB (NumPy, SciPy, Pillow). La versión integrada GLB optimizada se conserva en assets-source/personajes119. No se ha reesculpido el rostro ni convertido el estilo aportado a fotorealismo.

## Comprobación
verificar_personajes119.mjs prueba GLB real, escala, pies en marcha/reposo, postura sentada, clones independientes, 80 combinaciones de ropa, cuatro patrones, puntos de agarre, detalle por distancia y selección adecuada de adultos/familias. verificar_pasajeros116.mjs comprueba continuidad de movimiento, pausa e identidad al abordar/reordenar. Vista de geometría por rasterización CPU revisada; no hay verificación visual WebGL ni FPS medidos en este entorno.
