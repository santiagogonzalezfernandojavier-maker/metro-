# Integración de la rama aportada · revisión 144

Se comparó MetroLab_CDMX_Simulador_v142.zip con la versión actual 143 y el origen común 141. El nombre v142 del ZIP no implica que incluya las correcciones 142 y 143 de este proyecto.

| Área | Decisión y resultado |
| --- | --- |
| Portal y explicación del tren | Integrados en Información, junto a una tercera pestaña que conserva documentos, planos, fuentes y consultas originales. La guía contiene vistas de los modelos actuales, funciones de diez conjuntos y cálculos independientes. |
| Cifras del portal recibido | Sustituidas las comparaciones con unidades mezcladas, porcentajes arbitrarios de cumplimiento y fichas sin respaldo por calculadores con supuestos editables. No se atribuyen estos ejemplos a especificaciones verificadas de una flota. |
| Ajuste de parada | Integrado en ambas líneas con cancelación, restricciones de movimiento, puertas, energía, emergencia, vigilancia y separación. El control de seguridad se ejecuta antes del ajuste. Límite didáctico: 150 m, 2 km/h. |
| Pasajeros | Cinco GLB y ocho identidades del ZIP, con texturas y caminata; carga compartida de modelos, variación de vestuario, estudiantes con mochila y grupos familiares. El acompañante pequeño parte del modelo infantil. Conservadas afluencia, zonas exclusivas y rutas de embarque actuales. |
| Rendimiento de pasajeros | Hasta 24 esqueletos detallados para la multitud cercana, poses instanciadas para el fondo y tres muestras por ciclo de caminata distante. Los actores en tránsito mantienen su prioridad. La cantidad de actores no se reduce para alcanzar ese presupuesto. |
| Mapa L8 y selector | Proporciones de L8 y conversión inversa del clic; nombres y color de línea, sin opciones duplicadas. El suelo de inspección se oculta en el despiece. |
| Subestación | Adaptado el despiece semántico a la geometría Blender actual, sin superponer bobinados o conductos adicionales. Separación gradual, componentes por conjunto y once bisagras originales. Se conservan maqueta, acceso al local, gabinetes y mantenimiento. |
| Mantenimiento del ZIP | No se sustituyen los módulos actuales: la rama recibida elimina el controlador interactivo de las misiones y retrocede las puntas, las herramientas, resguardos y pantallas de carga. Se conservan las correcciones 143. |
| Modelos de tren y Garibaldi | Se conservan los actuales: los recibidos omiten alarmas, luminarias y otros detalles de las revisiones 140–141. |
| Datos y documentos | Se mantienen valores, fuentes y trazabilidad actuales. El ZIP quita metadatos de procedencia y omite numerosos archivos de consulta; esas omisiones no se trasladan al proyecto. |
| Inicio local | Lanzadores Python y Windows integrados; se corrige el bloqueo de documentos que tenía el servidor recibido. |

## Verificación

- Las diez misiones completan 308 acciones de puntero proyectadas sobre la geometría real; sin sustituir el sistema de selección ni avanzar estados por atajos de prueba.
- Las puntas se colocan y retiran en bancos trasladados y rotados; cables y buffers conservados.
- Arranque real de app.js con los tres modelos, conducción, freno, pausa y escalas 1×/2×/5×.
- Ocho identidades cargadas desde los cinco GLB, texturas embebidas, esqueletos independientes y poses de pie, caminar y sentarse.
- Caso de 625 pasajeros: como máximo 24 esqueletos detallados en el escenario probado, 99 llamadas de dibujo instanciadas en reposo y 5,747,726 triángulos de fondo; 295 llamadas con el fondo caminando. Son presupuestos de geometría, no una medición de FPS en un navegador.
- Ajuste de parada en ambos sentidos para las dos líneas: límite de velocidad, marca final y siete condiciones de cancelación.
- Subestación: separación reversible, once bisagras y restauración exacta de su caja envolvente.
- Tres pestañas de Información, navegación por teclado, conservación de nodos y acciones originales, y recuperación si faltan miniaturas.
- Demanda horaria y lluvia: siguen pasando los casos documentados de hora pico, zonas exclusivas, distribución de andenes y ralentización por lluvia.
- Importaciones: cada módulo utiliza una sola versión de URL.

Las verificaciones de interacción son DOM/CPU/GLB. No se realizó una revisión visual WebGL en navegador en esta sesión. La geometría de estaciones, subestaciones y equipos conserva su carácter aproximado y las limitaciones de las fuentes del proyecto.

## Procedencia de los personajes

Los cinco archivos provienen del ZIP aportado. Se preserva la atribución embebida: Joe, de Arjun P Krishna, y Hitman (game-rip), de Veterock, identificados en sus metadatos como CC BY 4.0. Los demás mantienen la procedencia y los metadatos presentes en el paquete; no se inventan autores o licencias. Se modificaron resolución de texturas, precisión de atributos y empaquetado, conservando la topología y los clips. La lista completa y enlaces originales están en [Créditos de personajes](../documentacion/personajes144-creditos.json).
