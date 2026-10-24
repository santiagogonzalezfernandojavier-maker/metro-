# Revisión 102 · Banco de mantenimiento reconstruido

Se sustituye la presentación y la interacción anterior del mantenimiento. La captura image(20261015-075347).png se conserva en assets-source/referencias102 del proyecto fuente.

## Experiencia activa
- Nuevo banco 3D de trabajo para las cuatro prácticas: obstrucción de puertas, ventilación, sustitución de rueda y circuito eléctrico de alumbrado.
- Nuevas piezas, bastidores, guías, herrajes, rejilla desmontable, rotor, conector, rueda con llanta, fijaciones, portafusible y bornes. Los mecanismos son representaciones didácticas aproximadas; no reproducciones certificadas de equipos de un fabricante.
- Mano 3D con guante textil gris, refuerzo de agarre oscuro, puño y manga. Cinco dedos con tres articulaciones. No utiliza la imagen de una mano desnuda. La herramienta cambia con el modo y el guante se cierra al agarrar.
- Guante y rayos de selección calculados desde el rectángulo real del canvas. La punta coincide con el puntero; puertas y piezas utilizan planos de arrastre del espacio 3D.
- Clic en pieza y destino o arrastre con captura de puntero. Destinos con ayuda de proximidad para los huecos de montaje. Escape devuelve la pieza. Tornillos: cuatro clics o giro de herramienta; el avance se muestra en porcentaje.
- Piezas retiradas visibles en la bandeja. Tapas y repuestos cambian de lugar al actuar. Los ensayos de puerta tienen movimiento; la rueda admite arrastre circular y cuartos de giro; el ventilador gira tras el ensayo. El multímetro muestra la lectura y cables visibles en los puntos elegidos.
- Manual paso a paso y completo, síntoma, estado de alimentación, pieza en mano, siguiente acción y registro. Herramienta automática activada inicialmente y opción de selección manual. Los botones por nombre realizan las mismas acciones que el banco 3D y sirven de alternativa cuando WebGL no está disponible.
- El mantenimiento nuevo utiliza su propia sesión; las conexiones con las misiones y reorganizaciones de interfaz anteriores se omiten en esta vista. El banco vuelve a encuadrarse al entrar después de estar oculto.

## Condiciones conservadas
Se reutilizan las condiciones de preparación y comprobación del núcleo de las prácticas: no intervenir con alimentación, verificar ausencia de tensión en el circuito didáctico de 24 V CC, diagnosticar F1 con continuidad, retirar puntas y cerrar antes del ensayo. No se asignan pares de apriete reales ni se autoriza una intervención en un tren real.

## Pruebas
Las cuatro misiones se completan desde sus acciones públicas y desde los botones realmente generados por la interfaz. Se verifican herramientas, fijaciones, reinicio, cancelación y manual. Pruebas de selección real por rayos y eventos de puntero capturado con canvas desplazado: objeto de puerta, arrastre, montaje de rueda, coincidencia puntero/punta del guante, materiales de resaltado independientes y conservación de piezas retiradas. La nueva interfaz se monta junto al menú existente. Pruebas de regresión: arranque automático, conducción, frenado y tasas 1×, 2× y 5×.
Se conserva el presupuesto gráfico de hasta 30 Hz y resolución adaptable. No se añaden imágenes de gran tamaño. No se ha realizado inspección visual WebGL en navegador en este entorno; no se certifica fotorealismo ni FPS en el equipo del usuario.
