# Revisión 97 — señalización, túneles y curvas

## Pantallas y separadores

La captura mostraba el monitor de llegadas sobre el letrero superior de VIAJA SEGURA. En las 39 estaciones, los cuatro monitores se trasladan de aproximadamente ±25 m a ±42 m a lo largo del andén, junto con sus suspensiones. Se comprueban las cajas geométricas de los monitores frente a separadores y columnas.

Línea 1 sustituye las barreras naranjas por separadores fijos blancos con acentos rosas y cartel integrado; Línea 8 conserva el diseño fijo con acentos verdes. Se retiran las barreras anteriores de la escena y su descarga antigua se sustituye por los modelos actuales. El archivo histórico se conserva en el código fuente. No se añaden separadores duplicados.

## Trazado 3D

Las dos líneas dejan de renderizarse sobre un eje completamente recto. Se toman las direcciones de los ejes vectoriales de Linea1_AutoCAD-Layout1.pdf y Linea8_AutoCAD-Layout1.pdf aportados. Los cambios de dirección se enlazan suavemente entre estaciones; se mantienen 94 m de tangente a cada lado del centro del andén y se integra la longitud del motor para conservar sus distancias de recorrido.

Las vías, túneles, durmientes y locales SAF se transforman al mismo trazado. Los andenes se colocan en su posición y tangente. Los nueve coches se ensamblan y renderizan por separado para que cada uno gire de manera rígida, con las puertas unidas a su coche. Las cámaras y pasajeros se trasladan al mismo recorrido. Después de renderizar se restablecen las coordenadas longitudinales del motor para conservar la lógica de embarque y conducción.

**Alcance:** los CAD recibidos ofrecen ejes entre estaciones, sin una alineación georreferenciada completa con todas sus clotoides, radios, peraltes y rasantes. Los radios de enlace del simulador son aproximados. Se revisó visualmente el plano histórico de curvas 69/70 de Juanacatlán–Tacubaya, pero sus cadenamientos/peraltes no se aplican automáticamente a las distancias convencionales del motor. No se afirma reproducir todas las curvas reales con precisión topográfica.

## Túneles

Inventario de las 37 interestaciones y referencias seleccionadas de las 39 estaciones: 31 tramos cubiertos de referencia tipo cajón, 3 abiertos entre Coyuya–Iztacalco–Apatlaco–Aculco y 3 transiciones en Línea 8 (Santa Anita–Coyuya, Aculco–Escuadrón 201 y UAM-I–Constitución de 1917). La longitud y sección exactas de cada transición no están levantadas: se mantienen como aproximaciones identificadas.

No se introducen túneles circulares ni doble tubo sin evidencia suficiente. Para Observatorio se deja de abrir automáticamente el acceso por una ficha histórica superficial; las fotos aportadas muestran la terminal cubierta. Esto es una decisión visual del escenario, no certificación del método constructivo actual del tramo completo.

Se añaden juntas y grano fino de concreto, canalización adicional, bordes de servicio y señal de contraste, con acabado moderado. Los locales SAF conservan sus aberturas y su colocación central en la interestación. Se corrige un bucle de incremento decimal de durmientes que podía superar la cantidad de matrices reservadas; ahora el número y las matrices se generan con el mismo índice entero.

## Verificación

- 39 GLB: 78 separadores actuales y 156 monitores; sin intersección de cajas geométricas entre monitores, columnas y separadores; sin barreras naranjas activas.
- Trazados de ambas líneas con cambios de dirección, longitud longitudinal conservada, separación de vías de 3,6 m y estaciones en tangente.
- Geometría estática curvada sin deformar primitivas compartidas; instancias con matrices finitas.
- Renderizado de prueba con cámaras, pasajeros y coches rígidos; restauración del estado también si falla el renderizador.
- Seis GLB de tren ensamblados, 144 hojas de puerta y 36 portales por convoy; embarque y conducción mantienen sus pruebas.
- El lector técnico sigue ofreciendo las 168 páginas del PDF, con texto indexado comprimido para descargarlo de forma más eficiente.

La comprobación usa GLTFLoader, geometría Three.js y eventos/DOM simulados. No se ha realizado revisión visual WebGL en navegador en esta revisión. Los radios, secciones, pendientes y ubicaciones no documentados se mantienen expresamente aproximados.

La trazabilidad por estación y tramo está en documentacion/auditoria97.json. Las referencias fotográficas, planos y originales permanecen en el proyecto. No se declara una revisión íntegra de todas las páginas de los planos.
