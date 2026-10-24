"""Ejecutar desde Blender: blender --background --python generar_blender_revision18.py -- /ruta/simulador
Importa los 20 GLB actualizados y guarda un .blend por estación. No requiere paquetes externos.
"""
import bpy,sys
from pathlib import Path
args=sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else []
base=Path(args[0]) if args else Path(__file__).resolve().parents[1]
out=base/'Blender_estaciones_revision18';out.mkdir(exist_ok=True)
for p in sorted((base/'models/andenes/L1').glob('*.glb')):
 bpy.ops.wm.read_factory_settings(use_empty=True)
 bpy.ops.import_scene.gltf(filepath=str(p))
 bpy.context.scene.unit_settings.system='METRIC'
 bpy.context.scene['referencia']='Fotografías del usuario; dimensiones aproximadas'
 bpy.ops.wm.save_as_mainfile(filepath=str(out/(p.stem+'.blend')))
print('Guardados en',out)
