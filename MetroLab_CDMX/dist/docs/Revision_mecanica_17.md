# Revisión 17 — detalles mecánicos desde fotografías

Se actualizan seis GLB: cabina e intermedio de NM79, MP82 y NM22. Cada uno incorpora 366 componentes adicionales: rejillas con ranuras geométricas, tapas y tornillos de llantas, aros, amortiguadores, anillos de suspensión, soportes, abrazaderas, mangueras, cableado y depósitos. Las piezas se agrupan en Mecanica_detallada_referencia_fotografica y cada objeto conserva un nombre editable.

## Precisión de las referencias
Las 17 fotografías muestran equipos reales, pero no acreditan que su diseño o posición sea idéntico en los tres modelos. La distribución añadida es una aproximación visual compatible con el espacio disponible, basada en componentes comunes. No es un plano de fabricación ni una identificación técnica de cada caja. No se han copiado el frente ni la cabina de una familia a otra. Los rectángulos amarillos son placas de precaución sin texto técnico inventado.

## Uso en Blender
Importa modelos_glb/*.glb mediante Archivo > Importar > glTF 2.0. Puedes editar las piezas y guardar un .blend. Para crear los seis .blend automáticamente, abre generar_blender.py en Scripting y ejecútalo; se guardan en Blender_generados. Blender no está instalado en el entorno de esta entrega: ese script se comprobó por sintaxis, pero no se ejecutó. No se incluyen nuevos .blend ya generados.

## Uso en el simulador
El ZIP Simulador_Metro_Revision_17_HTML contiene el simulador local con estas seis variantes sustituidas en sus rutas originales. Extrae el ZIP y ejecuta python iniciar.py en Metro_CDMX. Los modelos de estaciones y usuarios se conservan. La revisión también se integra en la versión web publicada.

Para actualizar una copia anterior, sustituye los seis archivos de simulador/models por los de modelos_glb. Las puertas conservan sus nodos originales para mantener su movimiento. El motor agrupa los detalles por material durante el render; las vistas lejanas simplificadas pueden omitirlos.

## Reproducibilidad y comprobaciones
originales_glb guarda las seis bases de la revisión 16. Ejecuta python mejorar_mecanica.py (requiere numpy) para reproducir la revisión 17. El script conserva todos los nodos y el bloque binario original, añade geometrías con UV y valida que las piezas queden bajo el piso y dentro del ancho del vagón. Verificacion_mecanica.json documenta límites y huellas SHA-256.

Los PNG son proyecciones de los GLB reales mediante Python/matplotlib, con iluminación básica. No son renders realizados en Blender ni una prueba del render WebGL. Esta entrega verifica estructura GLB, espacios ocupados por piezas nuevas y conservación de puertas; no verifica colisiones de todas las superficies ni cotas reales.
