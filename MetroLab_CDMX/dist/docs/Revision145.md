# Revisión 145 · carga compatible y mantenimiento de subestación

## Acceso a conducción y seguimiento

Se reprodujo el bloqueo con una copia del catálogo anterior: sus cuatro nombres apuntaban a modelos retirados, por lo que el cargador terminaba sin ningún personaje y bloqueaba la preparación de la línea.

El catálogo utiliza ahora una URL nueva y validación de caché. Los cuatro nombres anteriores se traducen a los GLB vigentes. Si falla el catálogo, se usa una lista integrada de modelos actuales. Un personaje opcional pendiente mantiene el aviso y el reintento, sin bloquear todos los modos mientras existan personajes preparados. El fallo total conserva la pantalla de recuperación y su mensaje.

## Subestación y seis bancos Blender

Se reconstruyeron los siete GLB servidos y se guardaron sus modelos editables en assets-source/revision145:

- 770 piezas de la subestación con radios de fabricación y normales de chapa; soldadura de vértices coincidentes antes del bisel para conservar superficies continuas.
- Materiales diferenciados de metales, porcelana y polímeros.
- Once álabes de ventilación con curvatura y espesor entre subestación y banco.
- Cápsula torneada del diodo, cuatro aisladores con faldones y bobinado continuo del relé.
- Tarjeta de control con condensadores y resistencias; bordes refinados de los bancos de control, ventilación y batería.

Se conservan las once puertas de gabinete, los resguardos, los anclajes interactivos y el despiece. Las dimensiones y la disposición siguen siendo aproximaciones didácticas; no se presentan como equipos levantados de una subestación concreta.

## Interacción y presentación

- El guante y las herramientas nativas se preparan antes de empezar la misión.
- El destornillador gira con un pequeño movimiento de muñeca y mantiene su punta sobre la fijación.
- El cepillo realiza pasadas sobre la superficie.
- El anemómetro real del banco se acerca al ventilador y regresa a su soporte; la mano sigue al dispositivo.
- El portafusible abre con movimiento gradual.
- En los tres bancos técnicos se ve retirar el componente anterior e introducir el repuesto.
- Se conserva un solo indicador del puntero durante el trabajo.
- Orden de trabajo, progreso, estado de herramienta y cinturón de herramientas con iconos y atajos; controles fuera de la imagen del banco.

Las animaciones visuales responden a acciones válidas de la máquina de estados; no avanzan una misión por sí solas.

## Verificación

- Catálogo antiguo: cuatro personajes recuperados sin solicitar archivos retirados.
- Catálogo no disponible: seis identidades de respaldo cargadas.
- Fallo de un modelo opcional y recuperación por reintento.
- Preparación real de las flotas nativas de ambas líneas, con compilación y render simulados en CPU.
- Arranque y conducción de los tres trenes, aceleración, frenado, pausa y escalas 1×/2×/5×.
- Diez misiones completadas con 308 acciones de puntero proyectadas sobre la geometría; sin sustituir el sistema de selección.
- Contacto de puntas, cables y retirada conservados en bancos trasladados y rotados.
- Herramientas nativas: giro, contacto de punta, cepillado, anemómetro, portafusible y reemplazo de componentes.
- Renderizados de inspección realizados con Blender para la subestación y los seis bancos.

Las pruebas de interacción y carga son DOM/CPU/GLB. Los renderizados Blender sirven para inspeccionar los modelos; no sustituyen una revisión visual WebGL en navegador, que no se realizó en esta sesión.
