# Motores de tracción · revisión 90

Se añadieron conjuntos de motor a los seis GLB de NM-22, NM-79 y MP-82. El taller incorpora un grupo propio **Motores de tracción**, selección de piezas, acercamiento y despiece interior. Carcasa, estator, rotor, eje, tapas, rodamientos, bornes, soportes, acoplamiento y reductor tienen geometría separada.

La formación de referencia utiliza cuatro motores por coche motriz (dos por bogie). Los coches R y PR quedan sin motores tanto en el taller como en los trenes detallados y en las instancias del depósito. Los GLB intermedios son plantillas motrices N; el programa elimina los motores al componer un remolque. No se presentan como GLB específicos R/PR.

El ensayo visual permite alimentar, variar el mando relativo y aislar el motor. Rotor, eje y acoplamiento giran; carcasa y estator permanecen fijos. El despiece separa sus componentes sin alterar la geometría original de los coches.

## Cómo usarlo

1. Entra en el taller y selecciona un tren.
2. Selecciona un coche M o N y abre **Motores de tracción**.
3. Usa **Aislar motores y acercar al primero** y el control **Despiece**.
4. Selecciona una pieza para conocer su función.
5. Activa **Alimentar banco**, mueve el mando y prueba **Aislar motor**.

## Alcance y pendientes

La representación es conceptual y compartida entre modelos. No acredita cotas, tipo exacto de motor, devanados, bornes, potencia, RPM, montaje ni relación de transmisión de cada tren. El ensayo no acciona el tren de conducción ni calcula su curva electromecánica. La marcha del simulador conserva su modelo cinemático previo. Los modelos de distancia simplificados no incorporan el detalle interno.

No se atribuyen al NM-22 los motores MP-68/NM-73 descritos en los documentos históricos. La referencia general de formación se contrasta con el STC: https://www.metro.cdmx.gob.mx/operacion/conformacion-de-un-tren (consulta 14/10/2026). La asignación exacta al NM-22 continúa pendiente de ficha técnica.

## Verificación

Lectura de los seis GLB con GLTFLoader; preservación de nodos, materiales y mallas previos; conteos por coche y convoy; colocación de instancias solo en motrices; giro alrededor del eje correcto y aislamiento del ensayo. Pruebas existentes de las cuatro prácticas y navegación conservadas. Inspección estática del ensamblado/despiece realizada con proyección de sus mallas; no se ejecutó una prueba visual WebGL en navegador.

Fuente editable del añadido: `scripts/generar_motores90.py`. El script requiere los GLB anteriores al añadido y rechaza duplicar motores. Los GLB resultantes pueden importarse en Blender; no se generó un archivo `.blend` en esta revisión.
