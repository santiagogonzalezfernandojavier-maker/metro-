# Revisión 92 · pasajeros, cerraduras y misiones

## Pasajeros

Se corrigió la asignación de la población interior en la ruta de representación simplificada: ahora utiliza la misma distribución compatible con la zona exclusiva que la ruta detallada. Los grupos de embarque también seleccionan puertas compatibles. Mujeres y menores representados de menos de 12 años pueden usar la zona exclusiva. Los hombres adultos esperan y abordan en zona mixta; un menor que los acompaña sigue su puerta. Las mujeres pueden viajar en zona mixta.

Se conservan la configuración de referencia y las posiciones aproximadas de las barreras de la revisión 91. No se acredita la ubicación exacta de cada separación en todas las estaciones.

## Cerradura de testero de Línea 8

Referencias aportadas: 39261.jpg, 39260.jpg, 39259.jpg y 39258.jpg. Se añadieron placa cromada con bordes suavizados, manija horizontal curvada, pivote, tornillos ranurados, alojamiento e inserto triangular visibles, pestillo y cerradero. Los materiales metálicos usan reflexión del entorno.

Los NM-79 y MP-82 tienen una cerradura en el testero de comunicación de la cabecera y dos en el coche intermedio. Línea 1 no recibió esta cerradura. El apartado **Cerraduras entre coches · L8** permite seleccionar, aislar y acercarse a sus piezas; ofrece referencia fotográfica y GLB independiente.

Las dimensiones se aproximan desde las fotografías. La representación es exterior y no reproduce el mecanismo interno, su funcionamiento de seguridad ni procedimientos de apertura o intervención.

## Mantenimiento

Problemas corregidos:

- El clic en una pieza antes la cancelaba al soltar. Ahora admite clic en pieza y clic en destino, además del arrastre continuo.
- La pérdida de captura del puntero podía dejar una selección pendiente; la cancelación y la salida del modo limpian el estado.
- El giro de rueda solo acumulaba avance en un sentido. Ahora registra la vuelta en ambos sentidos.
- El progreso parcial de una fijación se reiniciaba al volver a tomarla. Ahora se conserva entre gestos.
- El control de zoom modificaba solo el esquema. Ahora modifica la cámara del banco 3D y permite restablecer el encuadre.
- El modo Inspeccionar era reemplazado por la selección automática de herramienta en el banco. Ahora muestra la información de la pieza.
- Se añadieron bastidores, apoyos, cableado didáctico, aro y fijaciones de rueda, y rótulos en los puntos de trabajo.
- Se añadió una tolerancia de 48 píxeles para colocar por arrastre en destinos pequeños y un realce de objetivos y destinos.
- Intentar accionar una puerta bloqueada produce una explicación del requisito pendiente.

Las cuatro actividades siguen siendo bancos educativos con estados y procedimientos simplificados. No son instrucciones de mantenimiento de fabricante.

## Interfaz

Portada con trenes reales del proyecto en el depósito 3D, cámara suave, cuatro accesos, nueva paleta oscura y acentos ámbar. Taller con navegación de componentes, vistas y materiales metálicos. Misiones con banco y manual a la vista, herramientas por teclas 1–5, F para encuadrar y Escape para soltar una interacción antes de volver al menú. Progreso local de las cuatro misiones conservado. Adaptación de tamaño para escritorio y dispositivos pequeños.

## Verificación

- Cuatro actividades completadas por arrastre mediante picking 3D real y por clic en pieza/destino.
- Zoom y encuadre de cámara, cancelación y continuación de giros parciales.
- Nuevo inicio de interfaz comprobado con DOM de pruebas a partir del marcado real de mantenimiento; atajos y acciones accesibles.
- Cerraduras leídas con GLTFLoader, conteos por tipo de carro, materiales y mallas originales preservados.
- Distribución de pasajeros comprobada durante el ciclo de parada, ambos sentidos, dos cargas y ambas rutas de representación.
- Embarque con portales de puertas de los tres modelos: identidades y recorridos continuos conservados.
- Navegación entre portada, depósito, carga, detalle, misiones y simulación.

No se ejecutó navegador ni render WebGL completo. Las pruebas de código y DOM no certifican el resultado visual en todos los dispositivos. Se inspeccionó la geometría de la cerradura mediante proyección de sus mallas.
