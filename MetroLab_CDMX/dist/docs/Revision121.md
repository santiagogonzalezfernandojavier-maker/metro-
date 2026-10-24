# Revisión 121 — Afluencia, pasajeros y lluvia

## Uso

En Observar o Conducir, pulsa **Hora y clima** junto al nombre de la estación. Los selectores de hora inicial y fuente conservan sus eventos originales: cambiar la hora reinicia el escenario. El reloj, la espera simulada y el clima permanecen visibles durante el recorrido. La fuente diaria CSV sigue disponible, separada del Excel horario.

## Afluencia y representación

- El Excel aportado es ahora la fuente inicial cuando está disponible. Se conserva el documento original y su extracción, sin inventar datos horarios ausentes.
- Sus cifras son entradas por hora. La espera inicial integra los tres minutos previos; después aumenta con las llegadas y disminuye con los embarques. No equivale al total de entradas de una hora concentradas simultáneamente en el andén.
- Pantitlán: escenario 08:00 = 625 personas inicialmente en espera; 22:00 = 75. Se usan 07:57–08:00 y 21:57–22:00, respectivamente.
- Hay 14 estaciones con fila específica del Excel. Otras estaciones de L1 usan el promedio aportado para intermedias; 11 de L8 conservan el reparto histórico uniforme porque carecen de fila horaria. La fuente se indica por estación. Fecha/tipo de día y unidad del Excel siguen sujetos a la interpretación registrada en demanda_horaria.json.
- Hasta 900 figuras de espera, distribuidas a lo largo de ambos andenes; los niños forman parte del presupuesto, no se suman por encima. Se respeta el área reservada. Por encima de ese límite, se indica la representación agrupada. Los pasajeros dentro del tren siguen representando grupos; el conteo del motor es independiente y conserva los totales.

## Personajes

Se conservan los GLB aportados, piel y texturas, variantes de vestuario y formas. Se añaden movimientos sutiles de cabeza/respiración a la espera. Las rutas de embarque mantienen la identidad y el cruce por puertas reales. En multitudes, hasta 64 pasajeros cercanos usan esqueletos completos, más todos los actores en tránsito de abordaje/descenso. Los distantes usan superficies de los mismos GLB, simplificadas y agrupadas con InstancedMesh, materiales estándar y poses de caminata cacheadas. No hay nuevos shaders personalizados.

## Clima

Lluvia seleccionada por el usuario, no meteorología en vivo. Por defecto afecta toda la línea como ejercicio: máximo 35 km/h, aceleración al 65% y parada al 125% (37,5 s frente a 30 s). El límite se puede ajustar. Son parámetros didácticos, no valores certificados de operación. Puede seleccionarse restricción solo en tramos exteriores. La lluvia visual permanece en el exterior. También se aplica al control manual; no altera la advertencia manual de cierre de cinco segundos ni su cierre posterior de 1,5 s.

## Validación

Pruebas de motor, GLB, geometría y DOM: cambio de hora y conservación, 625/75, familias, área reservada, 900 figuras, rutas y puertas, cambio de clima, límites automáticos y manuales, permanencia, UI de hora/clima. Tramos aislados de prueba: L1 seco 47,3 s / lluvia 85,7 s; L8 seco 40,7 s / lluvia 56,2 s. No son tiempos de servicio publicados.

Multitud de prueba 625: 64 personajes articulados + 561 agrupados; 54 llamadas agrupadas y 3.251.936 triángulos distantes en pausa. Es una comprobación de estructura/CPU, no una medición de FPS. No se ha realizado verificación visual en navegador/WebGL en este entorno.
