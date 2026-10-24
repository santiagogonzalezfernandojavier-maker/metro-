# Integración documental 89

Revisión: 14 de octubre de 2026.

## Alcance

Se incorpora un lector con búsqueda para cinco archivos aportados: 119 y 133 páginas de los manuales de energía, 26 y 85 diapositivas, y un compendio de 38 páginas. Las copias de consulta de los manuales se rasterizaron a 145 dpi. Sus originales se preservan sin pérdida, divididos en partes reconstruibles, en `assets-source/documentos89` junto con las presentaciones y el compendio. El catálogo registra SHA-256 del original, título y número de páginas. OCR separado y sin corregir: no valida cifras ni símbolos.

La parte 1 salta del folio impreso 61 al 79, entre las páginas de archivo 67 y 68. No se considera un manual completo. El anexo de la parte 2 incluye esquemas MP-68/NM-73A: no se usan como cableado real de NM-22/NM-79/MP-82.

Las cuatro prácticas enlazan a documentos pertinentes y distinguen el banco eléctrico didáctico de 24 V de los sistemas reales. El taller también permite consultar la referencia del conjunto seleccionado. No se modificaron los procedimientos de las prácticas ni se asignaron tensiones históricas a los modelos.

El módulo conceptual de energía permite comparar recepción histórica y modernización, interrumpir tracción y observar la independencia de los servicios auxiliares. Es independiente de los mandos de conducción.

La matriz de cobertura diferencia aplicación, consulta y pendientes. No se ha completado la validación de toda la geometría 3D, instalaciones, audio o normativa del historial.

## Fuentes públicas

- CFE, Proyecto Metro-Energía, 17/01/2023: https://app.cfe.mx/Aplicaciones/OTROS/Boletines/boletin?i=3775 (extracto indexado contrastado; 230 kV y 15 kV, L1–L3).
- STC, Conformación de un tren: https://www.metro.cdmx.gob.mx/operacion/conformacion-de-un-tren (referencia general; no ficha individual por modelo).

## Recursos y verificación

Los 39 andenes se almacenan comprimidos sin pérdida; el cargador descomprime antes de interpretar el GLB. Las descargas de andenes y trenes entregan GLB nativo cuando el navegador permite descomprimir. En caso contrario se entrega `.gz`.

Para los scripts antiguos de modelado que esperan GLB en `dist`, ejecutar `python3 scripts/andenes_compresion89.py --restore`. Después de editar, ejecutar el mismo script sin `--restore` antes de publicar. Los GLB originales editables se conservan en `assets-source/andenes89`.

Verificaciones: integridad de los originales, 401 unidades consultables, búsqueda, enlaces de evidencia, estados de energía, igualdad SHA-256 de 39 andenes y lectura con GLTFLoader real. Cuatro prácticas completas verificadas con picking y gestos; enlaces contextuales comprobados. Pruebas de demanda, interbloqueo y navegación existentes conservadas.

Límite de verificación: no se ejecutó navegador ni render WebGL en esta revisión. El test de GLB sustituye la decodificación de imágenes; no certifica el aspecto visual.

## Paquetes de vía

Se extrajo texto u OCR de los 217 PDF distintos, 1503 páginas. El buscador se carga al abrir su apartado en Qué está integrado. Incluye nombre original, ZIP de procedencia y SHA-256. No incluye las láminas completas ni una validación de cada cota. Los ZIP originales permanecen entre los archivos aportados.

Reconstruir los manuales originales: `python3 scripts/reconstruir_originales89.py DIRECTORIO_DESTINO`. El script verifica SHA-256 antes de guardar cada PDF.
