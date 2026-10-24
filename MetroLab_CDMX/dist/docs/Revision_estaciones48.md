# Revisión 48 · Acabados de las líneas 1 y 8

Se compararon las referencias fotográficas seleccionadas de las veinte estaciones de Línea 1 y los fotogramas de ambas perspectivas de las diecinueve estaciones de Línea 8 con los materiales y geometría de sus GLB. Se prioriza el acabado visible en la referencia de cada estación; las fotos y videos no acreditan por sí solos el estado actual de todo el inmueble.

Cambios realizados:

- Revestimiento pétreo recuperado en Pantitlán, Zaragoza, Gómez Farías, San Lázaro, Merced, Pino Suárez, Balderas, Insurgentes, Juanacatlán y Tacubaya. La revisión anterior había eliminado la textura en varias de ellas y Balderas retenía un material de panel claro.
- Paneles lisos en las estaciones donde las fotografías los muestran, acabado mineral gris claro en Isabel la Católica y concreto claro en el tramo superficial de L8.
- Colores propios de L8 conservados o corregidos: azul en Doctores, ocre en Obrera, crema en Iztapalapa, verde claro en Cerro de la Estrella, columnas lilas en La Viga y UAM-I. Los colores son aproximaciones visuales, sin carta colorimétrica en las referencias.
- Texturas de color, rugosidad y microrelieve embebidas, aplicadas con coordenadas métricas: vetas de pared sin iluminación pintada, pisos de piezas grises en L1 y terrazo en L8. Superficies limpias, sin grietas o suciedad inventadas.
- Pictogramas de L1 centrados sobre la franja de señalización. Marcos y anuncios asentados junto a la pared; mapas L8 con marco, respaldo y anclajes al pretil donde hace falta apoyo. La publicidad permanece en blanco y el mapa general conserva su cartel independiente.
- Pinturas sin metalicidad y luz de relleno neutra más suave en estaciones subterráneas. Filtrado anisotrópico para reducir el parpadeo y la pérdida de definición en vistas oblicuas.
- Recursos GLB sin uso retirados y datos duplicados compactados, manteniendo geometría de vías, andenes, escaleras, techos y accesos.

## Criterio por estación

| Estación | Acabado y criterio |
|---|---|
| 1 · Pantitlán | Piedra clara y piso gris; terminal parcialmente visible. |
| 1 · Zaragoza | Vetas verticales beige visibles entre los marcos rosas. |
| 1 · Gómez Farías | Revestimiento mineral marfil con vetas discretas. |
| 1 · Boulevard Puerto Aéreo | Panel claro liso; no usar el túnel como acabado del andén. |
| 1 · Balbuena | Panel blanco y marcos rosas, con piso pétreo gris. |
| 1 · Moctezuma | Panel blanco renovado; las vistas antiguas se mantienen como contexto. |
| 1 · San Lázaro | Piedra clara en las zonas visibles de L1; correspondencia sin extrapolar. |
| 1 · Candelaria | Panel blanco; pasarela existente conservada. |
| 1 · Merced | Piedra crema entre anuncios de marco rosa. |
| 1 · Pino Suárez | Revestimiento mineral claro en la toma rotulada Pino Suárez. |
| 1 · Isabel la Católica | Revestimiento mineral gris claro, sin dominante amarilla. |
| 1 · Salto del Agua | Paneles blancos y zócalo oscuro en la referencia. |
| 1 · Balderas | Piedra beige visible alrededor del gabinete y anuncio. |
| 1 · Cuauhtémoc | Panel blanco de la imagen rotulada Cuauhtémoc. |
| 1 · Insurgentes | Piedra cálida con vetas, plafón lateral claro. |
| 1 · Sevilla | Panel blanco de la referencia renovada. |
| 1 · Chapultepec | Acabado claro de andén y pasarela; toma distante. |
| 1 · Juanacatlán | Piedra marfil visible detrás de anuncios; cubierta central oscura. |
| 1 · Tacubaya | Piedra cálida bajo la zona de mural; mural no reconstruido sin textura completa. |
| 1 · Observatorio | Panel claro de terminal; cerchas y cubierta alta existentes. |
| 8 · Garibaldi/Lagunilla | Ambas perspectivas: columnas claras con basamento verde, paneles claros, franja oscura y banda verde; plafón modular con luminarias longitudinales. |
| 8 · Bellas Artes | Columnas claras y grandes escaleras diagonales visibles. |
| 8 · San Juan de Letrán | Paneles claros, bandas verdes y luminarias longitudinales; distribución completa no visible. |
| 8 · Salto del Agua | Andén claro y revestimientos observados oblicuamente; pilares y accesos incompletos. |
| 8 · Doctores | Paneles azules con franja horizontal negra y banda verde superior. |
| 8 · Obrera | Nueva perspectiva: paneles amarillo ocre, franja oscura, banda verde y plafón longitudinal; vista parcial del andén. |
| 8 · Chabacano | Extremo de andén claro con circulación lateral; estructura completa no visible. |
| 8 · La Viga | Columnas circulares y paneles lilas; escalera visible entre pilares. |
| 8 · Santa Anita | Paneles beige claros, zócalo oscuro y banda verde longitudinal. |
| 8 · Coyuya | Tramo superficial; núcleo de escaleras y concreto visibles, cubierta parcialmente oculta. |
| 8 · Iztacalco | Tramo superficial; núcleos de concreto y estructura parcialmente visibles. |
| 8 · Apatlaco | Andenes abiertos, pilares claros y diagonales metálicas en el cerramiento. |
| 8 · Aculco | Celosías triangulares, vidrio alto, cubierta metálica y escaleras visibles. |
| 8 · Escuadrón 201 | Paneles claros con franja negra, banda verde y luminarias continuas. |
| 8 · Atlalilco | Paneles crema segmentados, zócalo oscuro y banda verde longitudinal. |
| 8 · Iztapalapa | Nueva perspectiva: paneles crema amarillentos, franja negra, banda verde, equipos rojos y plafón continuo; accesos completos no visibles. |
| 8 · Cerro de la Estrella | Columnas verde claro, paneles y luminarias continuas. |
| 8 · UAM-I | Columnas lilas, paneles claros/azules y gabinetes rojos. |
| 8 · Constitución de 1917 | Soportes diagonales claros, bases verde claro, cubierta y escaleras visibles. |

El registro `Revision_estaciones48.json` incluye trazabilidad y huellas de los GLB.

## Verificación y alcance

Se comprueban las coordenadas UV en unidades métricas, las imágenes embebidas decodificadas, la conservación de la geometría funcional frente a v47, la carga con GLTFLoader y la visibilidad frontal de carteles mediante rayos. Se inspeccionan vistas técnicas CPU del modelo; estas vistas no reproducen el sombreado PBR de Three.js.

No se ejecutó Blender ni se generaron nuevos `.blend`; los archivos GLB actualizados pueden importarse en Blender. No se dispone de planos acotados ni fotografías de todas las caras, ni de fecha confirmada de captura. La distribución, las cotas y las zonas ocultas siguen siendo aproximadas. El mural completo de Tacubaya no se inventó a partir de una vista parcial. No hubo verificación WebGL interactiva; no se certifica una réplica exacta ni fotorealismo completo.
