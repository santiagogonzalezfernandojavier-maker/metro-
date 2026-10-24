# Zona exclusiva del andén · revisión 91

Referencia: fotografías 39245.jpg, 39244.jpg y 39243.jpg aportadas por el usuario.

Se modeló una barrera de plástico naranja con borde biselado, dos asas abiertas, pies de apoyo, cartel rosa por ambas caras y panel inferior gris. El cartel recrea la leyenda y los pictogramas observables; los logotipos institucionales y el grabado del fabricante no se reprodujeron. Las dimensiones son aproximadas.

El GLB independiente incluye el cartel como textura embebida. La barrera también se incorporó a los 39 GLB de andenes, con un ejemplar por sentido de circulación. Los GLB editables se actualizan en `assets-source/andenes89`.

La colocación inicial está cerca de la transición entre los tres coches delanteros y la zona mixta, hacia el borde exterior del andén. Se deja libre el corredor interior de circulación. Las fotografías de detalle no identifican la estación, distancias, orientación ni distribución completa: esta colocación no acredita la ubicación real en cada estación. La configuración puede requerir ajustes con referencias locales, especialmente ante cambios de operación.

Los personajes identificados como mujeres o menores pueden usar la zona exclusiva; los hombres adultos esperan y abordan en la zona mixta. Un menor que acompaña a un hombre adulto sigue su misma puerta en la zona mixta. Las mujeres también pueden utilizar la zona mixta. La población inicial del tren conserva sus identidades y se redistribuye entre los coches compatibles. Esto es una representación educativa, no un sistema real de control de acceso.

## Fuentes de contraste

- STC, Recomendaciones para una movilidad segura para mujeres: https://metro.cdmx.gob.mx/recomendaciones-para-una-movilidad-segura-para-mujeres (mujeres y menores de 12 años; acompañantes varones mayores de 12 en zona mixta).
- STC, Intensificación de visualización de espacios exclusivos: https://www.metro.cdmx.gob.mx/comunicacion/nota/stc-intensifica-visualizacion-de-espacios-exclusivos-para-mujeres-con-no-es-no-y-atras-de-la-raya (referencia de aplicación durante todo el servicio).
- STC, Cambios de espacios asignados en L1, 10/08/2017: https://metro.cdmx.gob.mx/comunicacion/nota/stc-informa-de-cambios-en-los-espacios-asignados-para-mujeres-en-l-1 (antecedente histórico; no se presenta como confirmación de disposición actual).

## Verificación y edición

39 GLB leídos con GLTFLoader, dos jerarquías independientes por estación, señalización embebida, separación respecto al corredor interior, asignación de personajes y ambos sentidos. Pruebas de embarque con puertas reales de NM-22, NM-79 y MP-82: identidad y recorrido continuo conservados. No se ejecutó una revisión visual WebGL en navegador ni una validación completa de obstáculos por estación.

Generación: `node scripts/barrera91.mjs` y `python3 scripts/integrar_barrera91.py`, sobre los modelos anteriores a esta revisión. El segundo script rechaza duplicar barreras existentes.


Revisión 97: la barrera naranja es histórica y ya no se despliega. Los separadores actuales están en models/Separador_fijo_Linea1.glb.gz y models/Separador_fijo_Linea8.glb.gz.
