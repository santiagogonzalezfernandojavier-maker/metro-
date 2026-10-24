import * as T from 'three';
// Reusable, metre-scaled terrazzo and raised warning-strip surfaces.
let surfaces;
function texture(paint){const c=document.createElement('canvas');c.width=c.height=512;paint(c.getContext('2d'));const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;t.colorSpace=T.SRGBColorSpace;t.userData.quality100Shared=true;return t;}
function getSurfaces(){if(surfaces)return surfaces;let seed=160;const r=()=>((seed=(1664525*seed+1013904223)>>>0)/4294967296);
 const floor=texture(c=>{c.fillStyle='#92948e';c.fillRect(0,0,512,512);for(let i=0;i<22000;i++){const v=80+Math.floor(r()*90);c.fillStyle=`rgb(${v+7},${v+6},${v})`;c.beginPath();c.ellipse(r()*512,r()*512,.3+r()*1.8,.3+r()*1.2,r()*6.28,0,6.28);c.fill();}c.strokeStyle='#585e58';c.lineWidth=2;c.strokeRect(1,1,510,510);c.strokeStyle='#c8c8bc';c.lineWidth=1;c.strokeRect(3,3,506,506);});
 const warning=texture(c=>{c.fillStyle='#c5a530';c.fillRect(0,0,512,512);for(let y=32;y<512;y+=64)for(let x=32;x<512;x+=64){c.fillStyle='#8c7420';c.beginPath();c.arc(x+3,y+3,15,0,7);c.fill();c.fillStyle='#e2c44f';c.beginPath();c.arc(x,y,13,0,7);c.fill();}c.strokeStyle='#7c6d35';c.lineWidth=3;c.strokeRect(0,0,512,512);});
 surfaces={floor:new T.MeshStandardMaterial({name:'Terrazo de andén160',map:floor,bumpMap:floor,bumpScale:.008,roughness:.72,metalness:.02}),warning:new T.MeshStandardMaterial({name:'Franja podotáctil160',map:warning,bumpMap:warning,bumpScale:.012,roughness:.83})};return surfaces;
}
export function finishPlatforms160(root,anisotropy=4){
 if(typeof document==='undefined')return;
 const shared=getSurfaces(),palette={floor:shared.floor.clone(),warning:shared.warning.clone()};root.updateMatrixWorld(true);
 root.traverse(o=>{if(!o.isMesh)return;const names=[o.name,o.userData.componente,...(Array.isArray(o.material)?o.material:[o.material]).map(m=>m?.name)].join(' ');
 const warning=/podot|tactil|táctil|franja.*(?:amarill|seguridad)|borde.*amarill/i.test(names);
 const floor=/piso.*(?:and[eé]n|gris|pasillo)|and[eé]n.*piso|pavimento|loseta|terrazo/i.test(names);
 if(!floor&&!warning)return;
 const original=Array.isArray(o.material)?null:o.material;if(!original)return;const m=original.clone(),detail=warning?shared.warning:shared.floor;m.bumpMap=detail.map;m.bumpMap.channel=2;m.bumpMap.anisotropy=Math.min(8,anisotropy);m.bumpScale=warning?.006:.003;m.roughness=Math.max(m.roughness,warning?.83:.72);m.metalness=0;if(!m.map)m.map=detail.map;o.material=m;
 const geo=o.geometry.clone(),pos=geo.attributes.position,uv=new Float32Array(pos.count*2),v=new T.Vector3(),scale=warning?.5:.6;
 for(let i=0;i<pos.count;i++){v.fromBufferAttribute(pos,i).applyMatrix4(o.matrixWorld);uv[i*2]=v.x/scale;uv[i*2+1]=v.z/scale;}
 geo.setAttribute('uv2',new T.BufferAttribute(uv,2));o.geometry=geo;o.userData.finish160=true;
 });
}
