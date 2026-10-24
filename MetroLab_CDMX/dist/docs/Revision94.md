# Revisión 94 — subestaciones y motores

Se mantiene en pausa el trabajo de mantenimiento de la revisión 93. Esta revisión añade infraestructura y mejora el despiece de tracción.

## Qué aparece durante el recorrido

Línea 1 tiene 40 locales SAF ilustrativos, distribuidos como dos por estación. Desde los túneles se ven fachada, puertas cerradas con ventilación, ventana de inspección, unidad compacta de media tensión, transformador tipo pedestal y tablero de baja tensión. El túnel tiene aberturas en esos puntos: paredes, nervaduras y canalizaciones no atraviesan la fachada. El mando «Ver locales SAF · L1» permite ocultarlos. Se descargan de la vista los locales lejanos para reducir el coste gráfico.

Fuente: STC/FIMETRO, Cuarto Informe Trimestral 2024, folio impreso 99 (página 100 del PDF): https://metro.cdmx.gob.mx/storage/app/media/FIMETRO/INFORME-TRIMESTRAL-FIMETRO/2025/Cuarto%20Informe%20Trimestral%202024.pdf

El informe documenta 40 SAF en las 20 estaciones y equipos RM6, transformadores de 750 kVA y tableros. El reparto uniforme de dos y sus posiciones (reubicadas en revisión 96 hacia el centro de las interestaciones) son una escenografía aproximada, no coordenadas levantadas. No se afirma que ambas fachadas reales sean visibles desde la vía. Las SAF alimentan servicios de estación y no deben confundirse con subestaciones rectificadoras de tracción. Línea 8 no recibe un inventario inventado: su cantidad y ubicación quedan pendientes.

## Motores

Los seis GLB de los trenes incorporan nuevos conjuntos, conservando la caja, interiores, puertas y cerraduras anteriores. Los motores siguen presentes solo en carros motrices; la formación de referencia conserva 24, pero el PDF permite soluciones monomotor o bimotor y no certifica este número para el NM-22 construido.

- Familia visual NM-79/MP-82: carcasa nervada, estator, rotor con devanados representativos, colector segmentado, escobillas estacionarias, portaescobillas, eje, tapas, rodamientos, ventilador, bornes, soportes y acoplamiento/reductor. Referencia de taller aportada; sin placa ni identificación suficiente para certificar la asignación a cada modelo.
- Referencia NM-22: rotor de jaula con barras y anillos, sin colector ni escobillas. Basada en el requisito del proyecto Línea 1 2020, no en un plano as-built del NM-22.
- El despiece separa las piezas; el ensayo hace girar los componentes del rotor manteniendo estáticos estator y escobillas. Velocidad relativa ilustrativa, sin potencia, RPM, relación de reducción ni esquema de conexiones inventados.

En el taller: seleccionar tren → Motores de tracción → Despiece. La ficha distingue la evidencia aplicable y enlaza al PDF. Los GLB independientes se descargan comprimidos .glb.gz; descomprimir para obtener .glb. Los editables están en assets-source/motores94.

## Información incorporada

El PDF original de 168 páginas está en el lector técnico, con búsqueda y acceso por página. Sus secciones 5.1.11–12 (p. 57), 5.12 (p. 108) y 5.12.14 (pp. 114–115) fundamentan montaje, acoplamiento y motor asíncrono alimentado por VVVF. Son especificaciones de proyecto de 2020, no instrucciones verificadas de operación/mantenimiento actual para NM-79 o MP-82.

Se inspeccionaron los fotogramas de las tres grabaciones y la fotografía de bogie aportada. El video de asentamiento muestra el colector y la intervención sobre sus delgas; el reportaje de taller muestra el banco de motores y menciona 24 impulsores. Los videos y la fotografía no identifican la placa de cada motor. Las huellas de los adjuntos y la procedencia se registran en documentacion/referencias94.json. Los videos completos se conservan en los adjuntos del usuario; no se duplican en el paquete web.

## Comprobaciones

40 locales generados; dos registros por estación de Línea 1; aberturas verificadas mediante raycasting contra las paredes reales del túnel. Línea 8 sin conteos atribuidos. Seis GLB cargados mediante GLTFLoader, con cuatro conjuntos por plantilla motriz y eliminación de motores en remolques. Se comprueba colector/escobillas en las familias antiguas y anillos de cortocircuito en la referencia asíncrona. Las 168 páginas están indexadas. Pruebas de regresión de embarque, puertas y navegación.

No se ha realizado verificación visual WebGL en navegador en esta revisión. Las geometrías y emplazamientos son aproximaciones didácticas.
