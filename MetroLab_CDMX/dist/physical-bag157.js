import * as T from 'three';
import {GLTFLoader} from './vendor/GLTFLoader.js';
import {repairTools139} from './repair-tools139.js?v=185';
import {instrument142} from './instruments142.js?v=185';
import {refineSurfaceMaterials100} from './visual-quality100.js?v=185';
let bagBytes;
async function nativeBag(){
 bagBytes||=(async()=>{const r=await fetch('./models/revision157/bolsa157.glb.gz?v=157');if(!r.ok)throw Error('Bolsa Blender '+r.status);return new Response(r.body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();})().catch(e=>{bagBytes=null;throw e;});
 const root=(await new GLTFLoader().parseAsync((await bagBytes).slice(0),'')).scene,lid=root.getObjectByName('Solapa157'),mat=root.getObjectByName('Tapete157');
 if(!lid||!mat)throw Error('Bolsa incompleta');
 const lining=new T.MeshStandardMaterial({name:'Lona acolchada interior186',color:'#4c5754',roughness:.94}),thread=new T.MeshStandardMaterial({name:'Costura textil interior186',color:'#b7a883',roughness:.95});
 const base=new T.Mesh(new T.BoxGeometry(.47,.012,.23),lining);base.name='Forro interior acolchado186';base.position.y=-.046;root.add(base);
 const ribs=new T.InstancedMesh(new T.BoxGeometry(.012,.008,.22),lining,7),pose=new T.Matrix4();for(let i=0;i<7;i++){pose.makeTranslation(-.20+i*.066,-.036,0);ribs.setMatrixAt(i,pose);}ribs.name='Refuerzos de lona186';root.add(ribs);
 const seams=new T.InstancedMesh(new T.BoxGeometry(.004,.002,.002),thread,80);for(let i=0;i<80;i++){pose.makeTranslation(-.22+(i%40)*.0113,-.037,i<40?-.105:.105);seams.setMatrixAt(i,pose);}seams.name='Doble costura interior186';root.add(seams);
refineSurfaceMaterials100(root);mat.userData.prepare157=true;root.visible=false;return{root,lid,mat};
}
const ease=t=>{t=T.MathUtils.clamp(t,0,1);return t*t*(3-2*t);};
const names={hand:'Guante de trabajo',screwdriver:'Destornillador',driver:'Destornillador',wrench:'Llave',brush:'Cepillo',meter:'Instrumento de medición',red:'Punta roja',black:'Punta negra'};
// Reuses the active scene/camera/renderer and its frame loop. Never advances a mission.
export class PhysicalBag157{
 constructor(view,{glove,hand,ids,onEquip,notify=()=>{},onClose=()=>{},kind='dmm'}){
  Object.assign(this,{view,glove,hand,ids:ids.filter(id=>id!=='hand'),onEquip,notify,onClose,kind});this.model={root:new T.Group(),lid:new T.Group(),mat:new T.Group()};this.model.root.visible=false;this.phase='closed';this.items=new Map();this.ray=new T.Raycaster();this.pointer=new T.Vector2();this.handlers=[];
  const parent=view.canvas.parentElement||view.canvas,doc=view.dialog?.ownerDocument||globalThis.document;
  if(doc?.createElement){this.hud186=doc.createElement('section');this.hud186.className='bag186-hud';this.hud186.hidden=true;this.hud186.setAttribute('aria-label','Preparar herramientas de la bolsa');this.hud186.innerHTML='<header><b>BOLSA DE HERRAMIENTAS</b><button type="button" data-bag186-close>Volver a caminar · Tab</button></header><p data-bag186-status role="status"></p><nav data-bag186-tools aria-label="Herramientas disponibles"></nav><small>WASD: incorporarte y caminar · Ctrl: agacharte · Esc: cancelar</small>';parent.append(this.hud186);this.hud186.querySelector('[data-bag186-close]').onclick=()=>this.close();for(const id of this.ids){const b=doc.createElement('button');b.type='button';b.dataset.bag186Tool=id;b.textContent=id==='meter'?({anemometer:'Anemómetro',megohm:'Megóhmetro',dmm:'Multímetro'}[kind]||names.meter):(names[id]||id);b.onclick=()=>this.take(id);this.hud186.querySelector('[data-bag186-tools]').append(b);}this.notify=text=>{notify(text);this.render186(text);};}

  for(const type of['pointerdown','pointermove','pointerup','pointercancel','wheel','contextmenu']){const fn=e=>this.event(type,e);parent.addEventListener?.(type,fn,{capture:true});this.handlers.push([parent,type,fn]);}
  this.key=e=>{if(this.phase!=='closed'&&e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();this.close();}};globalThis.document?.addEventListener?.('keydown',this.key,true);
 }
 render186(text){const h=this.hud186;if(!h)return;h.hidden=this.phase==='closed';if(text)h.querySelector('[data-bag186-status]').textContent=text;for(const b of h.querySelectorAll('[data-bag186-tool]')){b.disabled=this.phase!=='searching'||!this.items.has(b.dataset.bag186Tool)||this.items.get(b.dataset.bag186Tool)?.userData.outside188;b.setAttribute('aria-pressed',String(b.dataset.bag186Tool===this.selected));}}
 async load(){
  if(this.ready)return this.ready;
  this.ready=(async()=>{
   const [tools,device,model]=await Promise.all([repairTools139(),instrument142(this.kind),nativeBag()]);
   if(this.disposed)return;this.model.root.removeFromParent();this.model=model;this.view.scene.add(model.root);const fill=new T.PointLight(0xfff5df,.25,1.5,2);fill.position.set(0,.32,.3);model.root.add(fill);
   for(const id of this.ids){
    let o;
    if(id==='meter')o=device;
    else if(['red','black'].includes(id)){o=tools.meter.clone(true);o.traverse(n=>{if(n.isMesh){n.material=n.material.clone();if(/Polimero rojo/.test(n.material.name))n.material.color.set(id==='red'?'#bd3425':'#24282a');}});}
    else o=tools[id==='driver'?'screwdriver':id]?.clone(true);
    if(!o)continue;o.visible=true;o.name=names[id]||id;const b=new T.Box3().setFromObject(o),s=b.getSize(new T.Vector3()),center=b.getCenter(new T.Vector3());
    const item=new T.Group();item.userData.bagTool157=id;const scale=(id==='meter'?.135:.16)/Math.max(s.x,s.y,s.z);o.scale.multiplyScalar(scale);o.position.sub(center.multiplyScalar(scale));item.add(o);this.items.set(id,item);model.root.add(item);
   }
   const values=[...this.items.values()].filter(o=>!o.userData.outside188);values.forEach((o,i)=>{const step=Math.min(.11,.46/values.length);o.position.set((i-(values.length-1)/2)*step,.12,0);o.rotation.set(-.16,0,0);o.userData.home157=o.position.clone();o.userData.rot157=o.rotation.clone();const hit=new T.Mesh(new T.BoxGeometry(.06,.18,.045),new T.MeshBasicMaterial({visible:false}));hit.userData.bagTool157=o.userData.bagTool157;o.add(hit);});
  })();try{await this.ready;}catch(e){this.ready=null;throw e;}
 }
 async park178(point){await this.load();if(this.disposed)return;this.view.bagBrowser157=this;this.anchor178=point.clone();this.parked178=true;this.model.root.position.copy(point);const d=this.view.camera.getWorldDirection(new T.Vector3());this.model.root.rotation.set(0,Math.atan2(-d.x,-d.z),0);this.model.root.scale.setScalar(1.15);this.model.lid.rotation.x=0;this.model.root.visible=true;}
 async open(){
  if(this.anchor178&&Math.hypot(this.view.camera.position.x-this.anchor178.x,this.view.camera.position.z-this.anchor178.z)>1.8){this.notify('Acércate a tu bolsa en el piso para abrirla');return;}
  if(this.phase!=='closed'||this.disposed)return;this.phase='loading';this.view.cameraMove117=null;this.hand?.hide();this.savedPose176={position:this.view.camera.position.clone(),quaternion:this.view.camera.quaternion.clone(),target:this.view.controls?.target.clone(),fov:this.view.camera.fov};this.notify('Abriendo bolsa…');this.oldControls=this.view.controls?.enabled;if(this.view.controls)this.view.controls.enabled=false;this.view.bagBrowser157=this;
  try{await this.load();if(this.phase==='closed'||this.disposed)return;this.positionBag176();this.model.root.visible=true;this.model.lid.rotation.x=0;this.phase='lowering';this.at=performance.now();this.glove?.set('hand',false);this.notify('Abriendo la cremallera…');}
  catch(e){this.close();this.notify('No se pudo abrir la bolsa. Vuelve a intentarlo.');console.error(e);}
 }
 positionBag176(){const c=this.view.camera,p=this.savedPose176.position,d=c.getWorldDirection(new T.Vector3());d.y=0;if(d.lengthSq()<.001)d.set(0,0,-1);d.normalize();const floor=Math.max(.02,p.y-1.62);if(this.anchor178)this.model.root.position.copy(this.anchor178);else{this.model.root.position.copy(p).addScaledVector(d,.62);this.model.root.position.y=floor+.05;}this.model.root.rotation.set(0,Math.atan2(-d.x,-d.z),0);this.model.root.scale.setScalar(1.15);this.bagLook176=this.model.root.position.clone().add(new T.Vector3(0,.12,0));this.crouchPosition176=p.clone();this.crouchPosition176.y=Math.max(floor+.85,p.y-.62);}
 layout(){}
 crouch176(amount){const c=this.view.camera,pose=this.savedPose176;if(!pose)return;c.position.lerpVectors(pose.position,this.crouchPosition176,amount);c.fov=T.MathUtils.lerp(pose.fov,52,amount);c.updateProjectionMatrix();const desired=new T.Matrix4().lookAt(c.position,this.bagLook176,c.up),q=new T.Quaternion().setFromRotationMatrix(desired);c.quaternion.slerpQuaternions(pose.quaternion,q,amount);if(this.view.controls?.target)this.view.controls.target.copy(c.position).add(c.getWorldDirection(new T.Vector3()));c.updateMatrixWorld(true);}

 pick(e){
  const r=this.view.canvas.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.view.camera.updateWorldMatrix(true,true);this.ray.setFromCamera(this.pointer,this.view.camera);
  const targets=this.phase==='preparing'?[this.model.mat]:[...this.items.values()].filter(o=>!o.userData.outside188);
  for(const hit of this.ray.intersectObjects(targets,true)){let o=hit.object;while(o&&!o.userData.bagTool157&&!o.userData.prepare157)o=o.parent;if(o)return{object:o,point:hit.point,id:o.userData.bagTool157,prepare:o.userData.prepare157};}return null;
 }
 event(type,e){
  if(e.target&&e.target!==this.view.canvas)return;
  if(this.phase!=='closed'&&type==='pointerdown'&&e.button===2){this.close();return;}
  if(this.phase==='closed'){if(this.parked178&&this.model.root.visible&&type==='pointerdown'&&e.button===0){this.pick(e);if(this.ray.intersectObject(this.model.root,true).length){e.preventDefault?.();e.stopImmediatePropagation?.();void (this.onRequestOpen178?this.onRequestOpen178():this.open());}}return;}e.preventDefault?.();e.stopImmediatePropagation?.();if(type==='pointercancel'){this.close();return;}if(type==='wheel'||type==='contextmenu')return;
  const hit=this.pick(e);
  if(type==='pointermove'){this.view.canvas.style.cursor=this.glove?.root?.visible?'none':hit?'pointer':'default';if(this.phase==='searching')this.notify(hit?.id?'Tomar · '+(names[hit.id]||hit.id):'Busca una herramienta en los bolsillos');return;}
  if(type==='pointerdown'&&e.button===0){if(this.phase==='searching'&&hit?.id)this.take(hit.id,hit.point);else if(this.phase==='preparing'&&hit?.prepare)this.prepare();}
 }
 take(id,point){if(this.phase!=='searching'||!this.items.has(id))return false;this.selected=id;this.item=this.items.get(id);this.from=this.item.position.clone();this.phase='extracting';this.at=performance.now();this.hand?.engage({target:this.item,point:point||this.item.getWorldPosition(new T.Vector3())});this.notify('Sacando '+(names[id]||id)+'…');return true;}
 prepare(){if(this.phase!=='preparing')return false;this.phase='placing';this.from=this.item.position.clone();this.at=performance.now();this.notify('Preparando herramienta en el tapete…');return true;}
 update(now=performance.now()){
  if(['closed','loading'].includes(this.phase))return;this.layout();const t=(now-this.at)/550;
  if(this.phase==='lowering'){this.crouch176(ease(t));if(t>=1){this.phase='opening';this.at=now;this.notify('Abriendo la bolsa…');}return;}
  if(this.phase==='rising'){this.crouch176(1-ease(t));if(t>=1){const id=this.selected;this.committing=true;try{this.onEquip(id);}finally{this.committing=false;this.close();}this.glove?.set(id==='driver'?'screwdriver':['red','black'].includes(id)?'meter':id,true);this.notify('Preparada · '+(names[id]||id));}return;}
  if(this.phase==='opening'){this.model.lid.rotation.x=-ease(t)*2.1;if(t>=1){this.phase='searching';this.notify('Busca una herramienta y haz clic para tomarla');if(this.pendingTool){const id=this.pendingTool;this.pendingTool=null;this.take(id);}}}
  else if(['extracting','placing'].includes(this.phase)){
   const extracting=this.phase==='extracting',dest=new T.Vector3(0,extracting?.26:-.065,extracting?.18:.25);this.item.position.lerpVectors(this.from,dest,ease(t));this.item.rotation.x=extracting?-.3:-Math.PI/2;this.glove?.set('hand',t>.2);this.hand?.step(now,true);
   if(t>=1){if(extracting){this.phase='rising';this.at=now;this.hand?.hide();this.notify('Equipando '+(names[this.selected]||this.selected)+'…');}else{this.phase='rising';this.at=now;this.hand?.hide();this.notify('Incorporándote con la herramienta preparada…');}}
  }else if(this.phase==='preparing')this.hand?.step(now,true);
 }
 close(){if(this.phase==='closed')return;this.phase='closed';if(this.savedPose176){this.view.camera.fov=this.savedPose176.fov;this.view.camera.updateProjectionMatrix();this.view.camera.position.copy(this.savedPose176.position);this.view.camera.quaternion.copy(this.savedPose176.quaternion);if(this.view.controls?.target&&this.savedPose176.target)this.view.controls.target.copy(this.savedPose176.target);this.view.camera.updateMatrixWorld(true);this.savedPose176=null;}this.pendingTool=null;this.model.root.visible=!!this.parked178;this.model.lid.rotation.x=0;for(const o of this.items.values()){o.position.copy(o.userData.home157);o.rotation.copy(o.userData.rot157);}this.hand?.hide();if(this.view.controls&&this.oldControls!==undefined)this.view.controls.enabled=this.oldControls;this.view.canvas.style.cursor='';this.onClose();this.render186();this.view.canvas.focus?.({preventScroll:true});}
 dispose(){this.close();this.hud186?.remove();this.disposed=true;for(const[p,k,f]of this.handlers)p.removeEventListener?.(k,f,true);globalThis.document?.removeEventListener?.('keydown',this.key,true);this.model.root.removeFromParent();const gs=new Set(),ms=new Set();this.model.root.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)ms.add(o.material);});for(const g of gs)g.dispose();for(const m of ms)m.dispose();}
}
