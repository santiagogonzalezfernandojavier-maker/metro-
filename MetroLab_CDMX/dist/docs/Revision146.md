# Revisión 146 · Referencias y subestaciones

## Referencias

Se revisaron dos PDF escaneados (8 + 5 páginas) mediante OCR y lectura visual de láminas, y fotogramas distribuidos de los tres videos, con acercamientos del tablero y los equipos. El análisis completo y tres fotogramas están en `Referencias146.html`. No se transcribió el audio ni se dedujeron valores de ensayo a partir de él.

El manual administrativo es del STE para Trolebús y Tren Ligero. Su organización de avisos, atención, registro, pruebas y cierre inspira la trazabilidad del ejercicio, sin convertirla en una orden de maniobras del STC. La referencia UPM aporta explicación de rectificación y equipos, pero sus ejemplos de 3 kV no sustituyen los datos históricos de Metro ya documentados. El transformador seco del modelo se conserva; no se le agregan indicadores de líquido tomados de un equipo distinto.

Los cinco originales, sus huellas SHA-256 y el OCR se conservan en `assets-source/revision146`.

## Modelos Blender

Siete GLB actualizados en sus rutas existentes: subestación y seis bancos de práctica. Los `.blend`, GLB sin comprimir, texturas y renders de inspección están en `assets-source/revision146`.

- Once carátulas de instrumentos de aguja, con escala embebida, bisel, fijaciones y agujas. Se ubican en siete puertas y siguen la hoja al abrirla.
- Botoneras con placa de función, piloto y selector físico; siete contactos auxiliares de puerta.
- Carcasas y acabados marfil/satinados con rugosidad fina embebida. Sustitución de los displays de fachada anteriores, sin superponerlos.
- Electrodos de diodos, conexiones de control y punteras dentro del gabinete.
- Un único conjunto de doce aletas finas en el módulo de diodo, conexiones y fijaciones; portafusible con ferrules, bornes y tornillería, contactos y guarda de ventilador. El circuito auxiliar muestra un recorrido continuo fuente–fusible–salida–lámpara–COM, retirando los dos cables anteriores que terminaban sin conexión.
- Se mantienen once bisagras y todos los anclajes de interacción. Las nuevas piezas siguen a su conjunto durante sustitución o movimiento.
- La geometría reflejada conserva la orientación de sus caras al agruparse para dibujado. Los vértices se redondean a 0.01 mm en la copia web, sin pretensión de tolerancia de fabricación.

Las escalas y posiciones de las agujas son didácticas. No representan mediciones en vivo ni especificaciones nominales verificadas de una unidad real.

## Actividades

Se conservan las seis prácticas. Ventilación, circuito auxiliar y conexiones añaden una pregunta de interpretación basada en la evidencia disponible; las tres prácticas técnicas mantienen su diagnóstico comparativo.

Cada misión incorpora un expediente desplegable con alarma, equipo, criterio de comprobación y bitácora de acciones efectivamente completadas. La interpretación se revela después de responder la pregunta. El informe JSON incluye pasos, lecturas, mediciones y resultado; permite guardarse desde la práctica y se reinicia al iniciar otra misión.

El LCD del multímetro, megóhmetro y anemómetro separa valor, unidad y estado, sin truncar la lectura principal. Se conservan las animaciones de herramientas, contacto de puntas, arrastre del filtro y sustitución de componentes.

## Comprobaciones

- Diez misiones completas: 308 acciones proyectadas de puntero sobre geometría real, más selecciones de diagnóstico.
- Seis expedientes: 98 pasos registrados, rechazo de respuestas incorrectas, conservación de lecturas e informe serializable.
- Once bisagras; once carátulas fuera de las hojas; siete contactos auxiliares; 1,134 mallas interiores comprobadas detrás de las puertas.
- Las once carátulas conservan su textura y resultan visibles desde un rayo frontal después del agrupado.
- Giros de destornillador con contacto, pasadas de cepillo, traslado/retorno del anemómetro, movimiento del portafusible y repuestos.
- Conexión/retiro de ambas puntas, cables y bancos transformados; gestos de mantener, cuatro clics, arrastrar, cancelar y teclado.
- Grafo de módulos sin versiones de URL contradictorias.
- Renders de Blender inspeccionados. Los renders de bancos muestran el activo base; los instrumentos detallados y guantes se ensamblan en ejecución y se verifican mediante pruebas de geometría.

No se realizó una revisión visual en navegador con WebGL ni una medición de FPS. Los modelos son aproximaciones didácticas; estas comprobaciones no certifican una instalación, un procedimiento ni capacitación para equipos reales.
