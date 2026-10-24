Revisión 29 · Ocultación explícita de puertas

Por solicitud del usuario se sustituye el recorte progresivo de la revisión 28 por ocultación completa. Cualquier apertura mayor que cero oculta el grupo de la hoja, incluidos acero, vidrio y juntas. La hoja permanece oculta durante apertura, estancia abierta y cierre; vuelve a aparecer en su posición original solamente con apertura cero. Las puertas del lado opuesto permanecen cerradas y visibles. Se aplica a NM-22, NM-79 y MP-82, cabinas e intermedios, y al modelo provisional si se utiliza.

No hay desplazamiento lateral visible, materiales clonados ni planos de clipping. La política de visibilidad funciona desde cualquier cámara, incluido el corte interior. El cálculo de vanos utiliza la posición original de cada hoja, por lo que el embarque sigue utilizando los portales reales aunque la hoja esté oculta. La ocultación se implementa en el simulador; los GLB fuente no se modifican.

Verificar_puertas29 reemplaza la prueba de la revisión 28: 192 hojas de seis GLB en ambos sentidos, incluidos apertura inicial muy pequeña y cierre casi completo; verifica visibilidad efectiva de todos los descendientes, retorno cerrado y ausencia de deriva. Verificar_embarque27 comprueba que la ocultación no cambia los portales ni la lógica de pasajeros. No se dispone de QA visual WebGL.
