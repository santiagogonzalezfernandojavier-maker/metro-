import {Arm177,WRIST195} from './arm177.js?v=195';
import * as THREE from'three';
const ease=t=>{t=THREE.MathUtils.clamp(t,0,1);return t*t*t*(10+t*(-15+6*t));};
export function shoulder196(camera,side=1){camera.updateMatrixWorld(true);const forward=camera.getWorldDirection(new THREE.Vector3());forward.y=0;if(forward.lengthSq()<.0001)forward.set(0,0,-1);forward.normalize();const right=forward.clone().cross(new THREE.Vector3(0,1,0)),world=camera.getWorldPosition(new THREE.Vector3()).addScaledVector(right,side*.28).add(new THREE.Vector3(0,-.32,0)).addScaledVector(forward,-.08);return camera.worldToLocal(world);}
// A spatial hand belongs to a contact on the bench, never to the screen cursor.
export class InteractionHand117{
 constructor(view){this.view=view;this.contact=null;this.started=0;this.until=0;this.pointerInside=false;this.reticle=null;this.arm177=new Arm177(view.camera,view.handSide196||1);const doc=globalThis.document;
  if(doc?.createElement&&view.canvas.parentElement){const r=doc.createElement('span');r.className='m117-reticle';r.setAttribute('aria-hidden','true');r.hidden=true;view.canvas.parentElement.append(r);this.reticle=r;}
  view.glove.root.scale.setScalar(.85);view.glove.root.rotation.y=Math.PI;view.glove.root.visible=false;
 }
 aim(e){this.pointerInside=true;const r=this.view.canvas.getBoundingClientRect();if(this.reticle){this.reticle.style.left=(e.clientX-r.left)+'px';this.reticle.style.top=(e.clientY-r.top)+'px';this.reticle.hidden=this.view.glove.root.visible;}if(this.view.canvas.style)this.view.canvas.style.cursor='none';}
 hover(valid){if(this.reticle)this.reticle.dataset.valid=String(valid);}
 engage(hit,now=performance.now()){
  if(!hit?.target||!hit.point)return;if(hit.target.userData.bagTool157){this.grasp196(hit.target,new THREE.Vector3(0,.035,0),'stock');return;}hit.target.updateWorldMatrix(true,false);this.view.glove.fit139?.(hit.target);const local=hit.target.userData.grip118?new THREE.Vector3(...hit.target.userData.grip118):hit.target.worldToLocal(hit.point.clone()),key=hit.target.userData.handTarget||hit.target.userData.srTarget128||'';if(/screw|bolt|terminal[LR]/i.test(key)){local.x=0;local.y=0;}const normal=new THREE.Vector3(0,0,1).transformDirection(hit.target.matrixWorld),toward=this.view.camera.getWorldPosition(new THREE.Vector3()).sub(hit.target.getWorldPosition(new THREE.Vector3()));if(normal.dot(toward)<0)normal.negate();this.contact={object:hit.target,local,normal};if(this.lastObject!==hit.target||now>this.until+240)this.started=now;this.lastObject=hit.target;this.until=now+440;
  this.view.glove.root.visible=true;if(this.view.canvas.style)this.view.canvas.style.cursor='none';if(this.reticle)this.reticle.hidden=true;
 }
 grasp196(target,local,kind='instrument'){target.updateWorldMatrix(true,false);this.contact={object:target,local:local.clone(),grasp196:kind};this.lastObject=target;this.until=performance.now()+440;this.pointerInside=true;}
 equipped196(){const v=this.view,tool=v.glove.activeTool;if(!['screwdriver','wrench','brush','meter'].includes(tool))return false;return typeof v.equipped196==='function'?v.equipped196(tool):v.state?.tool===tool&&!v.state?.complete&&(!v.bagBrowser157||v.bagBrowser157.phase==='closed');}
 idle196(){const v=this.view,root=v.glove.root;root.rotation.set(-.16,Math.PI,-.20);root.position.set(.20,-.25,-.39);root.visible=true;root.updateWorldMatrix(true,true);const wrist=v.camera.worldToLocal(root.localToWorld(new THREE.Vector3(0,WRIST195,0)));this.arm177.pose(wrist,shoulder196(v.camera,v.handSide196||1));root.position.add(this.arm177.wrist.clone().sub(wrist));root.updateWorldMatrix(true,true);if(this.reticle)this.reticle.hidden=true;}
 step(now,held=false){
  const v=this.view,root=v.glove.root;this.arm177.hide();if(!this.contact){if(this.equipped196())this.idle196();else{root.visible=false;if(this.reticle)this.reticle.hidden=!this.pointerInside;}return;}
  if(held)this.until=now+120;
  if(now>this.until+240){this.contact=null;if(this.equipped196())this.idle196();else{root.visible=false;if(this.reticle)this.reticle.hidden=!this.pointerInside;}return;}
  const c=this.contact;c.object.updateWorldMatrix(true,false);v.camera.updateMatrixWorld(true);
  const world=c.object.localToWorld(c.local.clone()),target=v.camera.worldToLocal(world);if(target.z>=-.1){this.hide();return;}
  if(c.grasp196){root.quaternion.copy(v.camera.getWorldQuaternion(new THREE.Quaternion()).invert()).multiply(c.object.getWorldQuaternion(new THREE.Quaternion())).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(c.grasp196==='filter'?-Math.PI/2:-.08,c.grasp196==='instrument'?Math.PI*.65:Math.PI,-.16)));}else if(v.glove.activeTool&&v.glove.activeTool!=='hand'){const localNormal=c.normal.clone().transformDirection(v.camera.matrixWorldInverse).negate();root.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),localNormal).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),(v.glove.roll139||0)+(v.rollOffset145||0)));}const tip=(c.grasp196?new THREE.Vector3(.008,.028,.022):v.glove.tip()).multiply(root.scale).applyQuaternion(root.quaternion);
  const approach=1-ease((now-this.started)/230),withdraw=ease((now-this.until)/240),offset=c.grasp196?(c.release196?ease((now-c.release196)/240):0):Math.max(approach,withdraw);
  root.position.copy(target).sub(tip);root.position.x+=offset*.24;root.position.y-=offset*.26;root.position.z+=offset*.18;root.visible=true;root.updateWorldMatrix(true,true);const wrist=v.camera.worldToLocal(root.localToWorld(new THREE.Vector3(0,WRIST195,0))),shoulder=shoulder196(v.camera,v.handSide196||1);if(wrist.distanceTo(shoulder)>.66){root.visible=false;if(v.canvas.style)v.canvas.style.cursor='';if(v.onReach179)v.onReach179();return;}this.arm177.pose(wrist,shoulder);root.position.add(this.arm177.wrist.clone().sub(wrist));root.updateWorldMatrix(true,true);
  if(this.reticle)this.reticle.hidden=true;
 }
 leave(){if(this.contact)this.until=Math.min(this.until,performance.now());this.pointerInside=false;if(this.reticle)this.reticle.hidden=true;}
 hide(){this.arm177.hide();this.lastObject=null;this.contact=null;this.pointerInside=false;this.view.glove.root.visible=false;if(this.reticle)this.reticle.hidden=true;if(this.view.canvas.style)this.view.canvas.style.cursor='';}
}
export function gripAngles117(tool,finger,j,grasp){
 if(!grasp)return finger===4?.02:finger===0?.025:[.13,.22,.12][j];
 if(tool==='carryInstrument')return finger===4?[.62,.46,.25][j]:[.80,1,.65][j]*[.92,1,1.04,.91][finger];
 if(tool==='carryFilter')return finger===4?[.46,.35,.20][j]:[.58,.83,.60][j]*[.92,1,1.03,.94][finger];
 if(tool==='meter')return finger===4?[.55,.42,.20][j]:finger<2?[.45,.64,.38][j]:[.20,.35,.20][j];
 if(tool==='screwdriver')return finger===4?[.45,.35,.18][j]:[.56,.72,.42][j];
 if(tool==='wrench')return finger===4?[.48,.32,.20][j]:[.70,.88,.52][j];
 return finger===4?[.38,.28,.16][j]:[.60,.82,.55][j]*[.96,1,1.02,.91][finger];
}
