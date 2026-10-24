import * as THREE from 'three';
const cache=new Map(),hard=new Set(['paint','panel','floor','mineral','brushed','polished','steel','copper','cast','rubber','seat','ceramic']);
// Millimetre/centimetre relief uses its own coordinates; authored decals keep UV0.
export const finishProfiles124={
 ceramic:{rough:.3,strength:.008,tile:.09},paint:{rough:.42,strength:.085,tile:.18},panel:{rough:.54,strength:.075,tile:.18},seat:{rough:.56,strength:.045,tile:.08},
 brushed:{rough:.36,strength:.07,tile:.16},polished:{rough:.24,strength:.02,tile:.045},steel:{rough:.38,strength:.045,tile:.09},copper:{rough:.34,strength:.04,tile:.065},
 rubber:{rough:.88,strength:.10,tile:.07},cast:{rough:.68,strength:.20,tile:.18},floor:{rough:.78,strength:.20,tile:.75},mineral:{rough:.80,strength:.22,tile:1.2},
 cloth:{rough:.90,strength:.06,tile:.12},skin:{rough:.61,strength:.012,tile:.16},leather:{rough:.60,strength:.06,tile:.10},hair:{rough:.62,strength:.02,tile:.1},diffuser:{rough:.67,strength:.02,tile:.1}
};
const fract=n=>n-Math.floor(n),hash=(x,y,seed)=>fract(Math.sin(x*127.1+y*311.7+seed*17.13)*43758.5453123),smooth=t=>t*t*(3-2*t);
function noise(x,y,n,seed){const u=x*n,v=y*n,i=Math.floor(u),j=Math.floor(v),a=smooth(fract(u)),b=smooth(fract(v)),h=(x,y)=>hash((x+n)%n,(y+n)%n,seed);return THREE.MathUtils.lerp(THREE.MathUtils.lerp(h(i,j),h(i+1,j),a),THREE.MathUtils.lerp(h(i,j+1),h(i+1,j+1),a),b)-.5;}
export function surfaceMaps124(kind){if(cache.has(kind))return cache.get(kind);const p=finishProfiles124[kind];if(!p)return null;const size=256,height=new Float32Array(size*size),rough=new Uint8Array(size*size*4),normal=new Uint8Array(size*size*4),colour=new Uint8Array(size*size*4),seed=Object.keys(finishProfiles124).indexOf(kind)+1;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const u=x/size,v=y/size,fine=noise(u,v,64,seed),mid=noise(u,v,20,seed+1),low=noise(u,v,5,seed+2),pore=Math.max(0,noise(u,v,42,seed+3)-.24),grain=hash(x,y,seed),weft=Math.cos(u*Math.PI*64),warp=Math.cos(v*Math.PI*64),brush=noise(0,v,128,seed);
  let h=mid*.18+fine*.2;
  if(kind==='brushed'||kind==='polished')h=brush*.25+fine*.018;
  else if(kind==='cloth')h=(weft*warp*.45+(weft+warp)*.14)+fine*.08;
  else if(kind==='skin')h=mid*.055+fine*.08-pore*.13;
  else if(kind==='floor')h=low*.12+mid*.16+fine*.32-pore*.38;
  else if(kind==='mineral')h=low*.32+mid*.34+fine*.20-pore*.65;
  else if(kind==='rubber'||kind==='leather'||kind==='cast')h=mid*.24+fine*.22-pore*.35;
  else if(kind==='paint')h=mid*.09+fine*.08;
  height[y*size+x]=h;
  const r=THREE.MathUtils.clamp(p.rough+low*.04+h*.12,.08,.98),i=(y*size+x)*4;rough.set([255,Math.round(r*255),255,255],i);
  // Neutral mineral aggregate, no baked lighting, stains or fabricated damage.
  let value=THREE.MathUtils.clamp(.97+mid*.035+fine*.025,.92,1);
  if(kind==='floor')value=THREE.MathUtils.clamp(.91+low*.10+mid*.16+(grain>.91?-.13:grain<.07?.09:0),.68,1);
  else if(kind==='mineral')value=THREE.MathUtils.clamp(.91+low*.18+mid*.12-pore*.26,.72,1);
  else if(kind==='brushed'||kind==='polished')value=THREE.MathUtils.clamp(.96+brush*.07+fine*.015,.90,1);
  else if(kind==='cast'||kind==='rubber')value=THREE.MathUtils.clamp(.94+mid*.08+fine*.07-pore*.15,.82,1);
  else if(kind==='paint'||kind==='panel'||kind==='seat')value=THREE.MathUtils.clamp(.985+low*.014+mid*.018,.96,1);
  colour.set([Math.round(value*255),Math.round(value*255),Math.round(value*255),255],i);
 }
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){const relief=hard.has(kind)?3:1,dx=(height[y*size+(x+1)%size]-height[y*size+(x+size-1)%size])*relief,dy=(height[((y+1)%size)*size+x]-height[((y+size-1)%size)*size+x])*relief,l=Math.hypot(dx,dy,1);normal.set([Math.round(127.5-dx/l*127.5),Math.round(127.5-dy/l*127.5),Math.round(127.5+127.5/l),255],(y*size+x)*4);}
 const make=(data,color=false)=>{const t=new THREE.DataTexture(data,size,size);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.setScalar(hard.has(kind)?1/p.tile:kind==='skin'?6:kind==='cloth'?12:8);t.channel=hard.has(kind)?3:0;t.colorSpace=color?THREE.SRGBColorSpace:THREE.NoColorSpace;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;t.userData={quality100Shared:true,quality110Shared:true,finish124:kind};t.needsUpdate=true;return t;};
 const result={normal:make(normal),rough:make(rough),albedo:hard.has(kind)?make(colour,true):null};cache.set(kind,result);return result;
}
export function finishUV124(mesh,kind){if(!hard.has(kind))return;let g=mesh.geometry;const scale=mesh.getWorldScale(new THREE.Vector3()),scaleKey=[scale.x,scale.y,scale.z].map(n=>n.toPrecision(7)).join(':');if(g.attributes.uv3){if(!g.userData.finishUV124||g.userData.finishUV124===scaleKey)return;g=mesh.geometry=g.clone();g.deleteAttribute('uv3');}const p=g.attributes.position,n=g.attributes.normal;if(!p||!n)return;
 const uv=new Float32Array(p.count*2);for(let i=0;i<p.count;i++){const nx=Math.abs(n.getX(i)/Math.max(.00001,scale.x)),ny=Math.abs(n.getY(i)/Math.max(.00001,scale.y)),nz=Math.abs(n.getZ(i)/Math.max(.00001,scale.z));if(ny>=nx&&ny>=nz){uv[i*2]=p.getX(i)*scale.x;uv[i*2+1]=p.getZ(i)*scale.z;}else if(nx>=nz){uv[i*2]=p.getZ(i)*scale.z;uv[i*2+1]=p.getY(i)*scale.y;}else{uv[i*2]=p.getX(i)*scale.x;uv[i*2+1]=p.getY(i)*scale.y;}}
 g.setAttribute('uv3',new THREE.BufferAttribute(uv,2));g.userData.finishUV124=scaleKey;
}
// Batchers must keep the detail coordinate even when a bucket contains plain meshes.
export function preserveFinishUV124(g){const old=g.attributes.uv3,values=new Float32Array(g.attributes.position.count*2);if(old)for(let i=0;i<old.count;i++){values[i*2]=old.getX(i);values[i*2+1]=old.getY(i);}g.setAttribute('uv3',new THREE.Float32BufferAttribute(values,2));}
export function surfaceBudget124(){return{sets:cache.size,textures:[...cache.values()].reduce((n,s)=>n+2+Boolean(s.albedo),0),bytes:[...cache.values()].reduce((n,s)=>n+(2+Boolean(s.albedo))*256*256*4,0)};}
