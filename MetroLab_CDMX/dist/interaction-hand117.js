import {Arm177} from './arm177.js?v=192';
import * as THREE from'three';
const ease=t=>{t=THREE.MathUtils.clamp(t,0,1);return t*t*t*(10+t*(-15+6*t));};
// A spatial hand belongs to a contact on the bench, never to the screen cursor.
export class InteractionHand117{
 constructor(view){this.view=view;this.contact=null;this.started=0;this.until=0;this.pointerInside=false;this.reticle=null;this.arm177=new Arm177(view.camera,1);const doc=globalThis.document;
  if(doc?.createElement&&view.canvas.parentElement){const r=doc.createElement('span');r.className='m117-reticle';r.setAttribute('aria-hidden','true');r.hidden=true;view.canvas.parentElement.append(r);this.reticle=r;}
  view.glove.root.scale.setScalar(.85);view.glove.root.rotation.y=Math.PI;view.glove.root.visible=false;
 }
 aim(e){this.pointerInside=true;const r=this.view.canvas.getBoundingClientRect();if(this.reticle){this.reticle.style.left=(e.clientX-r.left)+'px';this.reticle.style.top=(e.clientY-r.top)+'px';this.reticle.hidden=this.view.glove.root.visible;}if(this.view.canvas.style)this.view.canvas.style.cursor='none';}
 hover(valid){if(this.reticle)this.reticle.dataset.valid=String(valid);}
 engage(hit,now=performance.now()){
  if(!hit?.target||!hit.point)return;hit.target.updateWorldMatrix(true,false);this.view.glove.fit139?.(hit.target);const local=hit.target.userData.grip118?new THREE.Vector3(...hit.target.userData.grip118):hit.target.worldToLocal(hit.point.clone()),key=hit.target.userData.handTarget||hit.target.userData.srTarget128||'';if(/screw|bolt|terminal[LR]/i.test(key)){local.x=0;local.y=0;}const normal=new THREE.Vector3(0,0,1).transformDirection(hit.target.matrixWorld),toward=this.view.camera.getWorldPosition(new THREE.Vector3()).sub(hit.target.getWorldPosition(new THREE.Vector3()));if(normal.dot(toward)<0)normal.negate();this.contact={object:hit.target,local,normal};if(this.lastObject!==hit.target||now>this.until+240)this.started=now;this.lastObject=hit.target;this.until=now+440;
  this.view.glove.root.visible=true;if(this.view.canvas.style)this.view.canvas.style.cursor='none';if(this.reticle)this.reticle.hidden=true;
 }
 step(now,held=false){
  const v=this.view,root=v.glove.root;this.arm177.hide();if(!this.contact){if((v.canvas.ownerDocument||globalThis.document)?.pointerLockElement===v.canvas){root.position.set(.25+Math.sin(now*.0018)*.002,-.35+Math.sin(now*.002)*.002,-.39);root.rotation.set(-.25,Math.PI-.35,-.38);root.visible=true;root.updateWorldMatrix(true,true);const wrist=v.camera.worldToLocal(root.localToWorld(new THREE.Vector3(0,-.1,0)));this.arm177.pose(wrist,new THREE.Vector3(.28,-.32,.08));if(this.reticle)this.reticle.hidden=true;return;}root.visible=false;if(this.reticle)this.reticle.hidden=!this.pointerInside;return;}
  if(held)this.until=now+120;
  if(now>this.until+240){this.contact=null;root.visible=false;if(this.reticle)this.reticle.hidden=!this.pointerInside;return;}
  const c=this.contact;c.object.updateWorldMatrix(true,false);v.camera.updateMatrixWorld(true);
  const world=c.object.localToWorld(c.local.clone()),target=v.camera.worldToLocal(world);if(target.z>=-.1){this.hide();return;}
  if(v.glove.activeTool&&v.glove.activeTool!=='hand'){const localNormal=c.normal.clone().transformDirection(v.camera.matrixWorldInverse).negate();root.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),localNormal).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),(v.glove.roll139||0)+(v.rollOffset145||0)));}const tip=v.glove.tip().applyQuaternion(root.quaternion).multiply(root.scale);
  const approach=1-ease((now-this.started)/230),withdraw=ease((now-this.until)/240),offset=Math.max(approach,withdraw);
  root.position.copy(target).sub(tip);root.position.x+=offset*.24;root.position.y-=offset*.26;root.position.z+=offset*.18;root.visible=true;root.updateWorldMatrix(true,true);const wrist=v.camera.worldToLocal(root.localToWorld(new THREE.Vector3(0,-.10,0))),shoulder=new THREE.Vector3(.28,-.32,.08);if(wrist.distanceTo(shoulder)>.66){root.visible=false;if(v.canvas.style)v.canvas.style.cursor='';if(v.onReach179)v.onReach179();return;}this.arm177.pose(wrist,shoulder);root.position.add(this.arm177.wrist.clone().sub(wrist));root.updateWorldMatrix(true,true);
  if(this.reticle)this.reticle.hidden=true;
 }
 leave(){if(this.contact)this.until=Math.min(this.until,performance.now());this.pointerInside=false;if(this.reticle)this.reticle.hidden=true;}
 hide(){this.arm177.hide();this.lastObject=null;this.contact=null;this.pointerInside=false;this.view.glove.root.visible=false;if(this.reticle)this.reticle.hidden=true;if(this.view.canvas.style)this.view.canvas.style.cursor='';}
}
export function gripAngles117(tool,finger,j,grasp){
 if(!grasp)return finger===4?.02:finger===0?.025:[.13,.22,.12][j];
 if(tool==='meter')return finger===4?[.55,.42,.20][j]:finger<2?[.45,.64,.38][j]:[.20,.35,.20][j];
 if(tool==='screwdriver')return finger===4?[.45,.35,.18][j]:[.56,.72,.42][j];
 if(tool==='wrench')return finger===4?[.48,.32,.20][j]:[.70,.88,.52][j];
 return finger===4?[.38,.28,.16][j]:[.60,.82,.55][j]*[.96,1,1.02,.91][finger];
}
