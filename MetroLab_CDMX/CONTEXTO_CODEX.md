# Relevo técnico · revisión 181

## Objetivo
Simulador Metro CDMX L1/L8, trenes NM-22/NM-79/MP-82, taller/inspección, conducción, seguimiento, mantenimiento de trenes y subestación. El usuario busca experiencia de videojuego, modelos/materiales realistas y controles fluidos sin carteles que tapen la vista.

## Último cambio completado
WASD caminar; arrastre con botón derecho orientar; Shift paso rápido; Ctrl agacharse mientras se mantiene; C alternativo; E interactuar; F enfocar; Tab bolsa física; Q guardar herramienta; números seleccionar herramientas preparadas; H ayuda; Esc cancelar. Cruceta oculta en escritorio, recuperable desde ayuda. No reconstruir esto desde cero.

## Módulos clave
- game-keys181.js/css: bindings compartidos y ayuda contextual.
- walk176.js: locomoción de mantenimiento y colisiones de mallas.
- platform-person178.js + person-navigation180.js: observador a altura humana y colisión con pasajeros.
- tool-bag156.js: preparación física, bolsa de suelo y selección de herramientas.
- instrument-placement180.js: colocación manual de instrumento sobre superficie y toma/colocación de puntas; cancelación restaura transformaciones.
- substation-play136.js, substation-maintenance128.js: misiones de subestación.
- maintenance-checklist179.js: checklist basado en estado real, sin botones de completar ficticios.
- station-scene.js: estaciones/pasajeros/cámaras.
- passenger-realism180.js: adultos femeninos Kamala y refinamiento de geometría infantil existente, conserva rig/animaciones.
- cockpit149.js, cab-finish180.js: cabina, brazos y etiquetas.
- home180.js + experience180.css: portada actual de cinco modos. home114.js es histórico y no es la portada montada.

## Comportamientos que preservar
Mantenimiento sobre piezas montadas en tren/tablero. Guantes puestos, no inventario como herramienta. Bolsa ya instalada en suelo; instrumentos no precolocados sobre tablero. Personas no atraviesan modelos. Andén fijo sin cortes; seguir tren activa cortes. Cámara Persona en andén se mantiene en estación. Cierre de puertas con advertencia de 5 segundos. Anuncio de próxima estación una vez durante aproximación.

## Verificaciones de la base
Requieren Node.js moderno (se usa loader propio, sin instalación de paquetes):

```sh
node scripts/verificar_imports122.mjs
node --experimental-loader ./scripts/test-loader.mjs scripts/verificar_controles181.mjs
node --experimental-loader ./scripts/test-loader.mjs scripts/verificar_anden181.mjs
node --experimental-loader ./scripts/test-loader.mjs scripts/verificar_tren_montado156.mjs
node --experimental-loader ./scripts/test-loader.mjs scripts/verificar_conduccion177.mjs
```
La base pasó estos checks: 165 módulos, 6 misiones de subestación/155 acciones proyectadas, 4 misiones de tren/175 acciones y 3 modelos de conducción. Son pruebas CPU/DOM/geometría; falta validar visualmente escenas 3D con GPU en la máquina de destino. No ejecutar todas las pruebas históricas indiscriminadamente: varias corresponden a revisiones anteriores.

## Limitaciones conocidas
No se garantiza fotorrealismo. El entorno anterior no tenía WebGL para QA visual; hay que revisar en navegador local con GPU. Los scripts Blender y fuentes son históricos: inspeccionar rutas y versiones antes de exportar. No todos los adjuntos originales están disponibles; usar solo inventario y referencias reales. No se ha auditado aquí cada plano/afluencia contra una fuente externa actual. El proyecto contiene muchas revisiones heredadas; optimizar con medición y sin borrar recursos por intuición.

Web publicada de referencia: https://metro-cdmx-simulador.santiagogonzal331575.chatgpt.site/

## Actualización 197
Selector L1/L8 previo a conducción/observación (teclas 1/8), misiones independientes con recolocación de bolsa, respuestas y bolsa por números. Garibaldi ya trae .gz: normalizar antes de añadir la extensión. Cabina restaura el frente tras cada pase con caché de superficies. Véase docs/revision197.md y scripts/verificar_misiones197.cjs.

## Actualización 198
MP82_cabina.glb.gz tenía ausente el cierre exterior de la cabina (+X). Se añade el frente al GLB conservando todos los datos previos. No invertir la carrocería: el otro extremo es el testero. Script reproducible reparar_frente198.py; prueba verificar_frente198.mjs; carga/cache 198. Véase docs/revision198.md.
