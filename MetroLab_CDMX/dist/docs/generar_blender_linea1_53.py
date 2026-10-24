"""blender --background --python generar_blender_linea1_53.py -- /ruta/dist"""
import bpy,sys
from pathlib import Path
args=sys.argv[sys.argv.index('--')+1:]if'--'in sys.argv else[]
base=Path(args[0])if args else Path(__file__).resolve().parents[1]
out=base/'Blender_linea1_53';out.mkdir(exist_ok=True)
for p in sorted((base/'models').glob('NM22_*.glb')):
 bpy.ops.wm.read_factory_settings(use_empty=True);bpy.ops.import_scene.gltf(filepath=str(p));bpy.context.scene.unit_settings.system='METRIC';bpy.ops.wm.save_as_mainfile(filepath=str(out/(p.stem+'.blend')))
