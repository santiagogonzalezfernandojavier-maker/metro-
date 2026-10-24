# Revisión 150 · Mantenimiento sobre el equipo instalado

Las seis prácticas de subestación conservan ahora la instalación alrededor del equipo. Se retiraron las mesas, patas y paneles de banco de sus activos Blender. Los componentes se montan dentro de la envolvente correspondiente, en una posición fija. El acceso abre las hojas del conjunto intervenido; los gabinetes vecinos y canalizaciones permanecen visibles. Al volver a Explorar se recuperan la cámara y el estado previo de las hojas.

| Práctica | Ubicación de la intervención |
|---|---|
| Ventilación | Filtro de la envolvente del transformador |
| Aislamiento | Ramales y aislador accesible del transformador |
| Diodos | Módulos del rectificador, aislados del puente en el escenario |
| Circuito auxiliar | Protección y bornes del tablero de control |
| Relé | Zócalo y carril del tablero de control |
| Conexión auxiliar | Puente de conexiones del banco auxiliar |

La práctica de aislamiento limpia el aislador accesible en su ubicación; no extrae una muestra para llevarla a un banco. Se conservan las lecturas temporizadas, la descarga antes de retirar puntas, el bloqueo de intervenciones y el registro de resultados. Los datos siguen siendo valores del escenario virtual, no criterios de aceptación del STC.

## Tableros

Se sustituyeron las fachadas uniformes anteriores. El modelo diferencia tres celdas MT, el rectificador, dos alimentadores CD y el control auxiliar. La media tensión ya no lleva un indicador de CD. El rectificador incorpora los dos instrumentos y las dos filas de mandos de la referencia visual; los alimentadores conservan funciones de apertura, cierre y disparo. El control presenta sus estados y selector local, sin copiarle el frontal completo del rectificador. Los rótulos y herrajes pertenecen a la hoja y la acompañan al abrirse.

Referencias revisadas: los dos PDF y los tres videos conservados en `assets-source/revision146/referencias`, y la documentación Metro ya integrada. El video de tablero marfil permite observar instrumentos y filas de pilotos. El material del STE corresponde a Trolebús y Tren Ligero, mientras que la referencia UPM ilustra configuraciones ferroviarias generales: no se trasladan sus ejemplos de 3 kV como datos de L1/L8. La distribución aquí es una interpretación didáctica por función, no un levantamiento certificado de una subestación concreta.

## Carga

La portada aparece sin una pantalla de carga global. La flota de fondo se prepara sin bloquear el menú. Al elegir un apartado, la cobertura aparece solo si la preparación supera 180 ms y sigue esperando modelos, materiales y primer cuadro. Abrir subestaciones ya no superpone dos coberturas de carga. Activar audio no abre otra cobertura de pantalla completa. Se mantienen los errores recuperables y Reintentar.

## Verificación

155 acciones de puntero proyectadas sobre geometría real completaron las seis prácticas con la subestación cargada: herramientas, fijaciones, filtro, puntas, mediciones temporizadas, descarga, diagnósticos y cierre. Se comprobó que el entorno siga visible, no se cree otro taller y el conjunto permanezca fijo. Pruebas de carga: apertura sin cobertura inicial, recursos ya preparados sin destello, tareas largas, tareas simultáneas y recuperación de errores.

Renders nativos de Blender revisados para instrumentación y montaje dentro del gabinete. Los instrumentos portátiles y las manos se ensamblan en ejecución web. Pendiente revisión visual interactiva en navegador y medición de FPS.

Fuentes editables y exportaciones: `assets-source/revision150`; generación reproducible: `scripts/build-mounted150.py`. Integración: `installed-service150.js`, las dos rutas de activos de prácticas y `substation-maintenance128.js`.
