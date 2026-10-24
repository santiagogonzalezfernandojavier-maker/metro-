# Estaciones de Línea 8 · acabados y accesos · revisión 57

Se catalogaron las 94 referencias aportadas para las 19 estaciones. Se pudieron leer completas 93 copias; una foto de Salto del Agua estaba truncada y no se utilizó. Las cuatro vistas restantes de esa estación permitieron identificar el revestimiento metálico. Los originales aportados permanecen como referencias del usuario; las copias optimizadas del proyecto están en `assets-source/referencias/linea8_57`. La lista de uso y exclusiones está en `Referencias_linea8_57.json`.

Los 19 GLB conservan sus vías, bordes amarillos, mapas, cuatro espacios publicitarios y cuatro monitores físicos por estación. Se incorporaron pavimentos pétreos con piezas triangulares, vetas discretas y rugosidad variable; paneles con microrelieve; columnas y colores diferenciados; malla abierta en las fachadas superficiales y señalización suspendida. La paleta se aproxima visualmente a las fotos, que tienen iluminación, exposición y fechas distintas.

| Estación | Elementos de acabado | Acceso representado |
|---|---|---|
| Garibaldi/Lagunilla | Claro, columnas redondas, piedra gris | Escalera ascendente; ubicación provisional en área lateral |
| Bellas Artes | Panel claro, juntas oscuras, columnas redondas | Escalera ascendente |
| San Juan de Letrán | Claro, columnas redondas con franja y collar | Pasillo lateral provisional |
| Salto del Agua | Metal cuadriculado y marcos oscuros | Pasillo lateral provisional |
| Doctores | Paneles/columnas azules, motivo de mosaico | Pasillo lateral provisional |
| Obrera | Ocre, columnas, fragmento de mosaico geométrico | Pasillo lateral provisional |
| Chabacano | Claro, muretes y piso gris | Acceso descendente a pasillo inferior |
| La Viga | Azul/lila y columnas | Escalera ascendente |
| Santa Anita | Piedra con veta vertical, columnas turquesa | Escalera ascendente |
| Coyuya | Diagonales grises, malla y cerchas | Pasillo lateral provisional |
| Iztacalco | Diagonales, malla y cubierta | Escalera ascendente perpendicular aproximada |
| Apatlaco | Estructura abierta con malla | Escalera ascendente perpendicular aproximada |
| Aculco | Diagonales claras y malla | Escalera ascendente perpendicular aproximada |
| Escuadrón 201 | Claro, columnas y motivo de aeronaves | Pasillo lateral provisional |
| Atlalilco | Panel crema y juntas negras | Pasillo lateral provisional |
| Iztapalapa | Panel crema amarillento | Pasillo lateral provisional |
| Cerro de la Estrella | Verde claro y fragmento de mosaico azul/rosa | Pasillo lateral provisional |
| UAM-I | Azul y fragmento de mural figurativo | Pasillo lateral provisional |
| Constitución de 1917 | Diagonales blancas, malla, señalización suspendida | Escalera ascendente perpendicular aproximada |

## Límites de las referencias

Las fotos confirman la presencia de varios accesos y escaleras, pero no sus cotas, orientaciones o posiciones exactas. Una toma sin escaleras no prueba que toda la estación carezca de ellas. Por ello se retiró el mismo par de escaleras genéricas que antes se repetía en las 19 estaciones: 2,014 objetos en total, incluyendo bordes y pasamanos. Se reconstruyeron los tipos observados y se eligieron accesos por pasillo como representación provisional para las vistas que no permiten confirmar una escalera directa. Estos pasillos están modelados con piso, paredes, techo, iluminación y giro interior; no proceden de un levantamiento real.

Garibaldi y Salto del Agua incluyen referencias de áreas centrales y laterales del complejo. Esta revisión conserva las dos vías y los andenes laterales del simulador; no reconstruye todos los andenes centrales, vestíbulos ni conexiones del edificio. Las escaleras nuevas llevan a descansos y espacios superiores/inferiores modelados, sin afirmar que se reproduzca la planta completa.

Se excluyeron una vista de Bellas Artes con acabados distintos, la fotografía atribuida a Iztacalco con correspondencia a Mixcoac/Tláhuac y dos vistas atribuidas a Aculco con otra estructura/señalización. Las anotaciones rojas de las fotografías no se incorporaron. Los murales de Obrera, Cerro de la Estrella y UAM-I son fragmentos fotográficos parcialmente rectificados; Doctores y Escuadrón 201 incorporan interpretaciones limitadas del motivo, no copias completas de las obras.

## Modelos y comprobación

Los archivos se editaron directamente como GLB; no se ejecutó Blender en este entorno. El script `generar_blender_linea8_57.py` permite importar los modelos actualizados y guardar un `.blend` por estación usando Blender local.

Las pruebas usan GLTFLoader real, verifican texturas PBR/UV, retiro completo de piezas antiguas, continuidad de pisos y alturas libres de escaleras/pasillos. También comprueban que los carteles y monitores sigan visibles. Las vistas de control se rasterizan en CPU: sirven para revisar geometría y composición, pero no sustituyen una revisión interactiva del render WebGL/PBR. Línea 1 y todos los trenes permanecen sin cambios geométricos.

El conteo horario y la animación de abordaje existentes se conservan. Esta revisión no agrega recorridos completos de pasajeros desde la calle o desde los vestíbulos.
