# Planos técnicos de vías de la Línea 1

La revisión 66 incorpora un visor de documentación accesible desde el taller, desde la vista de estación y desde los mandos de conducción de Línea 1. Permite buscar por código o texto, filtrar por estación y categoría, consultar vistas previas y abrir copias PDF para ampliación. El acceso desde conducción muestra documentos relacionados con las dos estaciones del tramo, sin afirmar que cada documento cubre exclusivamente ese tramo.

## Inventario y trazabilidad

Se leyó la tabla completa del documento PLANOS L1 (1).docx: 93 entradas. El ZIP contiene 146 PDF, con un total de 147 páginas, además de dos copias del índice. Todos los PDF inspeccionados carecen de texto seleccionable. Se catalogó la totalidad de archivos, con número de páginas y SHA-256 del original. No se encontraron duplicados byte a byte. El catálogo incluye 92 coincidencias directas con códigos del índice. La entrada 4 usa 71-VI-18-III-40 SE mientras el archivo se denomina 71-VI-18-III-40S.pdf: se conserva como correspondencia pendiente en vez de corregirla silenciosamente.

Los escaneos originales permanecen en el paquete aportado por el usuario. Las copias de consulta del sitio se regeneran en escala de grises, con lado máximo de 4000 píxeles y JPEG de calidad 65; se conserva el número y tamaño físico de páginas. No sirven para sustituir el original al transcribir cotas pequeñas. Las vistas previas se orientan horizontalmente cuando la lámina es muy alargada y no contienen parámetros del simulador.

## Contenido aplicable

El índice comprende implantación de vías, perfiles, curvas y peraltes, barras de guiado, comunicaciones y desvíos, terminales de Zaragoza y Observatorio, conexión con Línea 2 en Pino Suárez y talleres de Zaragoza. Se conservan designaciones históricas como Aeropuerto, que se asocian a Boulevard Puerto Aéreo para búsqueda. Las asociaciones por estación provienen del índice y nombres de archivo, no de una georreferenciación completa.

Se revisaron visualmente las láminas generales TV 375, SMV 452, TV 419, TV 403, TV 630, TV 747 y TV 748, y el dibujo TV 420 de curvas 1 y 2. La revisión detallada y transcripción de todas las cotas de las 147 páginas no está completada. El catálogo distingue las láminas revisadas prioritariamente de las pendientes de transcripción.

## Lecturas verificadas del TV 420

| Parámetro | Lectura | Alcance |
| --- | --- | --- |
| Tramo | Gómez Farías–Aeropuerto | Designación histórica |
| Curvas | 1 y 2 | Vías 1 y 2 |
| Radio indicado | 400 m | Dibujo histórico |
| Peralte indicado | 120 mm | Diagramas de peralte |
| Transición por extremo | 30 m | Entrada y salida señaladas |
| Plena curva en vía 2 | 18.064 m | Cota explícita del dibujo |
| Fecha | 16 de julio de 1968 | Inscripción del plano |

Estas lecturas se muestran en las fichas correspondientes del visor; no se convierten automáticamente en parámetros actuales del motor o del modelo 3D.

## Coherencia y límites de aplicación

La TV 375 representa la Línea 1 entre Chapultepec y Zaragoza, mientras otras láminas representan ampliaciones posteriores. Las terminales y peines históricos no equivalen a la configuración posterior a la modernización de Línea 1. El índice contiene distintos orígenes de kilometraje: por ejemplo, TV 410 vuelve a valores alrededor de PK 4+715 en Pino Suárez, mientras las interestaciones orientales emplean otro encadenamiento. También hay diferencias numéricas y de escritura entre descripciones. No se calculó una distancia actual de estación restando esos valores sin resolver su sistema de referencia.

Los planos de vías no acreditan los interiores del NM-22 ni la arquitectura, accesos o acabados completos de las estaciones. La actualización incorpora documentación técnica consultable y asociaciones al recorrido. No transforma todavía el itinerario 3D longitudinal en una reconstrucción de todas las curvas y pendientes; tampoco modifica la entreví­a de los GLB existentes a partir de un valor local de un aparato de vía.

El tablero, los avisos manuales de cinco segundos y anuncios previos a llegada de la revisión 65 permanecen activos. La Línea 8 no recibe datos de la Línea 1.

## Verificación

Se comprobaron las 146 copias PDF y vistas previas, 147 páginas y huellas de originales, filtros de búsqueda/estación/categoría/tramo, integridad HTML y correspondencia de controles. Pasaron regresiones del tablero, cierre, anuncios manuales, operación, selección de modelos, cámaras y mantenimiento. Se revisó visualmente una copia de consulta del TV 747. No se dispone de verificación visual interactiva en navegador.
