import {renderTrainInfo136} from './train-info136.js?v=174';
export function mountInfoShell139(host,onGuideReady=()=>{}){
 const legacy=document.createElement('div');legacy.id='info-documents-host144';legacy.append(...host.childNodes);
 host.innerHTML=`<nav class="info-tabs139" role="tablist" aria-label="Información del simulador"><button id="info-tab-portal139" role="tab" aria-selected="true" aria-controls="info-portal139" tabindex="0">Portal técnico</button><button id="info-tab-guide139" role="tab" aria-selected="false" aria-controls="info-guide139" tabindex="-1">Partes, cálculos y prácticas</button><button id="info-tab-documents144" role="tab" aria-selected="false" aria-controls="info-documents144" tabindex="-1">Documentos y fuentes</button></nav><section id="info-portal139" role="tabpanel" aria-labelledby="info-tab-portal139"><iframe class="info-frame139" title="Portal técnico de material rodante, energía y frenado" sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox" referrerpolicy="no-referrer"></iframe></section><section id="info-guide139" role="tabpanel" aria-labelledby="info-tab-guide139" hidden><div id="info-guide-host139"></div></section><section id="info-documents144" role="tabpanel" aria-labelledby="info-tab-documents144" hidden></section>`;
 host.querySelector('#info-documents144').append(legacy);const electricalLink174=document.createElement('a');electricalLink174.href='./electrical174.html';electricalLink174.target='_blank';electricalLink174.rel='noopener';electricalLink174.textContent='Abrir unifilar, cálculos y cédulas eléctricas →';electricalLink174.style.cssText='display:block;padding:16px;color:inherit;border:1px solid #678380;border-radius:8px;margin-bottom:14px';host.querySelector('#info-documents144').prepend(electricalLink174);
 const tabs=[...host.querySelectorAll('[role=tab]')],portal=host.querySelector('#info-portal139'),panel=host.querySelector('#info-guide139'),frame=host.querySelector('iframe');let guide;
 function show(which){
  const showPortal=which==='portal';portal.hidden=!showPortal;panel.hidden=which!=='guide';host.querySelector('#info-documents144').hidden=which!=='documents';
  for(const [i,tab]of tabs.entries()){const active=i===['portal','guide','documents'].indexOf(which);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;}
  if(showPortal){if(!frame.getAttribute('src'))frame.src='./technical-portal/index.html?v=144';}
  else if(which==='guide'&&!guide){guide=renderTrainInfo136(host.querySelector('#info-guide-host139'));onGuideReady();}
 }
 tabs[0].onclick=()=>show('portal');tabs[1].onclick=()=>show('guide');tabs[2].onclick=()=>show('documents');
 for(const tab of tabs)tab.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const index=event.key==='Home'?0:event.key==='End'?2:(tabs.indexOf(tab)+(event.key==='ArrowLeft'?2:1))%3;show(['portal','guide','documents'][index]);tabs[index].focus();});
 return {showPortal(){show('portal');},open(part){show('guide');if(part)requestAnimationFrame(()=>guide.open(part));}};
}
