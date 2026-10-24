import{cabPose118}from'./cab-camera118.js?v=151';
import * as THREE from 'three';
const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
export function createAlignment97(line,source){
 const distances=line.distances,points=line.stations.map(s=>source?.stations?.[s.id]);
 if(points.some(p=>!p)||points.length<2)return null;
 const bearings=points.slice(0,-1).map((p,i)=>Math.atan2(points[i+1][1]-p[1],points[i+1][0]-p[0])),origin=bearings[0];
 const headings=points.map((_,i)=>i===0?bearings[0]:i===points.length-1?bearings.at(-1):bearings[i-1]+wrap(bearings[i]-bearings[i-1])/2).map(a=>wrap(a-origin));
 function heading(s){let i=0;while(i<distances.length-2&&s>distances[i+1])i++;if(s<0)return headings[0];if(s>distances.at(-1))return headings.at(-1);const margin=Math.min(94,(distances[i+1]-distances[i])*.2),t=THREE.MathUtils.clamp((s-distances[i]-margin)/(distances[i+1]-distances[i]-2*margin),0,1),u=t*t*(3-2*t);return headings[i]+wrap(headings[i+1]-headings[i])*u;}
 const step=3,total=distances.at(-1),samples=[{s:0,x:0,z:0,a:heading(0)}];let x=0,z=0;
 for(let s=0;s<total;){const next=Math.min(total,s+step),a=heading((s+next)/2);x+=(next-s)*Math.cos(a);z+=(next-s)*Math.sin(a);samples.push({s:next,x,z,a:heading(next)});s=next;}
 function pose(s,lateral=0){let p,a;if(s<0){a=headings[0];p={x:s*Math.cos(a),z:s*Math.sin(a)};}else if(s>=total){a=headings.at(-1);const last=samples.at(-1);p={x:last.x+(s-total)*Math.cos(a),z:last.z+(s-total)*Math.sin(a)};}else{const i=Math.min(samples.length-2,Math.floor(s/step)),u=(s-samples[i].s)/(samples[i+1].s-samples[i].s);p={x:THREE.MathUtils.lerp(samples[i].x,samples[i+1].x,u),z:THREE.MathUtils.lerp(samples[i].z,samples[i+1].z,u)};a=heading(s);}return{x:p.x-Math.sin(a)*lateral,z:p.z+Math.cos(a)*lateral,yaw:-a};}
 return {source:source.source,scope:'Direcciones del eje CAD aportado; curvas de enlace suavizadas, sin georreferenciación ni radios certificados.',samples,headings,pose,map(v){const p=pose(v.x,v.z);return new THREE.Vector3(p.x,v.y,p.z);}};
}
export function bakeInfrastructure97(root,route){if(!route)return;root.updateMatrixWorld(true);const vector=new THREE.Vector3(),normal=new THREE.Vector3(),instance=new THREE.Matrix4(),world=new THREE.Matrix4();
 root.traverse(o=>{
  if(!o.isMesh)return;
  if(o.isInstancedMesh){for(let i=0;i<o.count;i++){o.getMatrixAt(i,instance);world.multiplyMatrices(o.matrixWorld,instance);const pos=new THREE.Vector3(),q=new THREE.Quaternion(),scale=new THREE.Vector3();world.decompose(pos,q,scale);const p=route.pose(pos.x,pos.z);pos.set(p.x,pos.y,p.z);q.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),p.yaw));instance.compose(pos,q,scale).premultiply(o.matrixWorld.clone().invert());o.setMatrixAt(i,instance);}o.instanceMatrix.needsUpdate=true;o.computeBoundingSphere();return;}
  const g=o.geometry.clone(),positions=g.attributes.position,normals=g.attributes.normal,inverse=o.matrixWorld.clone().invert(),normalMatrix=new THREE.Matrix3().getNormalMatrix(o.matrixWorld),inverseNormal=new THREE.Matrix3().getNormalMatrix(inverse);
  for(let i=0;i<positions.count;i++){vector.fromBufferAttribute(positions,i).applyMatrix4(o.matrixWorld);const s=vector.x,p=route.pose(s,vector.z);vector.set(p.x,vector.y,p.z).applyMatrix4(inverse);positions.setXYZ(i,vector.x,vector.y,vector.z);if(normals){normal.fromBufferAttribute(normals,i).applyMatrix3(normalMatrix).applyAxisAngle(new THREE.Vector3(0,1,0),p.yaw).applyMatrix3(inverseNormal).normalize();normals.setXYZ(i,normal.x,normal.y,normal.z);}}
  g.computeBoundingBox();g.computeBoundingSphere();o.geometry=g;o.userData.routeGeometry97=true;
 });
}
// Keep the engine, camera controls and pedestrian routes in longitudinal coordinates.
// Only the render pose changes; every object is restored before the next update.
export function renderCurved97(view){const route=view.alignment97;if(!route){view.renderer.render(view.scene,view.camera);return;}
 const saved=[],save=o=>{saved.push([o,o.position.clone(),o.quaternion.clone()]);};
 const state=view.getState();for(const[id,model]of view.trainMeshes){if(!model.group.visible)continue;const t=state.engine.trains.find(t=>t.id===id);if(!t)continue;save(model.group);model.group.position.set(0,0,0);model.group.quaternion.identity();for(const car of model.group.children.filter(c=>c.userData.carIndex!==undefined)){save(car);const p=route.pose(t.position+t.direction*(car.userData.carIndex-4)*16.7,-t.direction*1.8);car.position.set(p.x,0,p.z);car.quaternion.setFromAxisAngle(new THREE.Vector3(0,1,0),p.yaw+(t.direction<0?Math.PI:0));}}
 for(const actor of view.cabinCharacters?.group.children||[]){if(!actor.visible)continue;save(actor);const p=route.pose(actor.position.x,actor.position.z);actor.position.set(p.x,actor.position.y,p.z);actor.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),p.yaw));}
 for(const o of [view.sun,view.sun.target]){save(o);o.position.copy(route.map(o.position));}
 view.renderCamera97??=view.camera.clone();const camera=view.renderCamera97;camera.copy(view.camera);camera.position.copy(route.map(view.camera.position));const train118=state.engine.trains.find(t=>t.id===state.selectedTrain);if(train118&&['driver','cab-platform'].includes(view.cameraMode)){const mount=cabPose118(route,train118,view.cameraMode);camera.position.copy(mount.eye);camera.lookAt(mount.target);}else camera.lookAt(route.map(view.controls.target));camera.updateMatrixWorld(true);
 try{view.renderer.render(view.scene,camera);}finally{for(const[o,p,q]of saved){o.position.copy(p);o.quaternion.copy(q);o.updateMatrix();}}
}
