# Revisión 148 · Mantenimiento con evidencia y detalle de equipos

## Actividades revisadas

| Área | Cambio | Qué se comprueba |
| --- | --- | --- |
| Conexión auxiliar de subestación | Sustituye la simple limpieza/continuidad por caída de tensión bajo la misma carga virtual de 10 A | 120 mV antes, 12 mV después; aislamiento, retirada de puntas y comparación. No evalúa capacidad de batería. |
| Aislamiento | Ensayos de 60 segundos simulados, gráfica, interpretación y descarga | Evolución de resistencia, condiciones de comparación y puntas conectadas hasta completar la descarga. Se muestran 60 s en 6 s de juego; la descarga es ilustrativa y no prescribe tiempos reales. |
| Circuito auxiliar | Añade S1, comprobación de cero y recogida de puntas antes de abrir el portafusible | Diagnóstico de fuente/salida, intervención aislada y comprobación final. Permite mediciones exploratorias sin avanzar la orden. |
| Rueda de banco | Inspección del daño antes de desmontar y fijación en secuencia cruzada | Observación previa, apoyo, ocho fijaciones y ensayo final. No representa levantar a mano una rueda de un tren en servicio. |
| Puertas y ventilación del tren | Conserva acciones directas y añade evidencias funcionales registradas | Guía libre, apertura y confirmación de cierre; conector, giro estable y tapa fijada. |

Se conservan las seis actividades de subestación y las cuatro de trenes. Se revisó su utilidad y se reemplazó el contenido de conexiones; no se afirma que se hayan añadido seis misiones nuevas. Las lecturas son datos de escenario, no mediciones ni criterios de aceptación del STC.

## Geometría e interacción

Se actualizaron en Blender once activos: la subestación, sus seis bancos y los cuatro bancos de trenes. Se añadieron mordazas de diodos, puentes, bridas de bobinados, detalles del mecanismo CD, contactos, tornillería, hilos de conexión, muestra aislante fisurada y S1 en los bancos auxiliares. La fisura desaparece al sustituir la muestra. Los nuevos detalles respetan las piezas móviles y los gabinetes.

Se mantienen los instrumentos especializados: anemómetro, multímetro y megóhmetro. Se corrige la presentación de mV y del estado de descarga; el gráfico se actualiza durante el ensayo. Las puntas siguen sus contactos y los cables se adaptan al desplazamiento. Aproximación y retirada de la mano y traslado de las piezas tienen transiciones más graduales. La inspección libre de componentes y las medidas exploratorias no sustituyen las comprobaciones de la misión.

El menú, las cámaras y la conducción de la revisión 147 se conservan. Esta revisión concentra el cambio de modelos en mantenimiento y subestación; no reconstruye estaciones ni pasajeros ni garantiza fotorealismo de todo el simulador.

## Fuentes y límites de aplicación

Se conserva la documentación aportada y analizada en la revisión 146: el manual administrativo de mantenimiento correctivo del STE y el artículo de divulgación UPM. El manual corresponde a Trolebús y Tren Ligero; no se presenta como procedimiento de intervención del STC.

- [Megger · Insulation testing: a word of caution](https://www.megger.com/en-us/et-online/january-2018-(1)/insulation-testing-a-word-of-caution!) fundamenta la representación de descarga con las puntas conectadas. La animación no reproduce tiempos, capacidades o tensiones de un equipo real.
- [Fluke · Diagnosing voltage drops](https://www.fluke.com/en/learn/blog/automotive/electrical-automotive-troubleshooting) explica la necesidad de circulación de corriente al evaluar caída de tensión. Se adapta ese principio a un banco didáctico; sus valores y recomendaciones automotrices no se trasladan a instalaciones del Metro.

Los modelos son aproximaciones visuales. No se certifican dimensiones, coordinación de protecciones ni cumplimiento integral de una NOM. Las prácticas son sobre bancos simulados, sin maniobras de alta tensión ni conexión a la subestación real.

## Verificación

Pruebas de seis procedimientos, temporización, bloqueo de puntas, unidades, interpretación incorrecta/correcta y reporte. Las diez misiones completan 328 acciones proyectadas de puntero sobre los modelos nativos, con arrastre, giros y cancelación. Se comprueban once bisagras cerradas, once instrumentos orientados hacia el pasillo y más de mil mallas interiores detrás de las puertas, incluso después de agrupar geometría. Pasan también arranque y conducción de los tres modelos, velocidades 1×/2×/5×, seis cámaras y navegación.

Los renders revisan los modelos Blender base. El navegador añade instrumentos, cables, carcasas, manos e iluminación; las imágenes no son capturas de WebGL. No hubo verificación visual interactiva en navegador en este entorno.

Archivos editables, GLB, renders e inventario SHA-256: assets-source/revision148 en el código del proyecto.
