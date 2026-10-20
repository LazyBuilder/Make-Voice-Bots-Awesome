/* All scenes are illustrative. Charts use source scores or editorial tag counts. */
function mountConceptVisuals(){
 const concept=CONCEPTS[PAGE_SEGMENT];
 const target=document.querySelector('#conceptVisual');
 target.innerHTML=`<div class="section-index">SEE THE FAILURE. SEE THE FIX.</div><h2>${esc(concept.title)}</h2><p class="visual-caption">${esc(concept.caption)}</p>${concept.art?`<figure class="teaching-art"><a class="illustration-open" href="../assets/${concept.art}" target="_blank" rel="noopener" aria-label="Open a larger illustration: ${esc(concept.title)}"><img src="../assets/${concept.art}" alt="${esc(concept.artAlt)}" loading="lazy"></a><figcaption><span><b>PROBLEM</b>${esc(concept.artLeft||'What goes wrong')}</span><span><b>BETTER</b>${esc(concept.artRight||'A safer approach')}</span><p class="art-takeaway">${esc(concept.takeaway)}</p><p class="art-role-key"><b>USER</b> = the caller with the phone. <b>AI VOICE BOT</b> = the labeled audio box.</p><a class="art-zoom" href="../assets/${concept.art}" target="_blank" rel="noopener">Open larger image ↗</a></figcaption></figure>`:''}<div class="concept-controls" role="group" aria-label="Compare the failure with suggested handling"><button type="button" data-mode="bad" aria-pressed="true">Where it breaks</button><button type="button" data-mode="good" aria-pressed="false">Better handling</button></div><div id="conceptScene" aria-live="polite"></div><p class="schematic-note">Illustrative scenario based on this segment. Steps are schematic; this is not a recording or measured performance.</p>`;
 function draw(mode){
  const steps=concept[mode];
  document.querySelector('#conceptScene').innerHTML=`<div class="concept-flow ${mode}">${steps.map((step,i)=>`<div class="concept-step"><div class="step-line"><span class="step-number">0${i+1}</span><span class="step-role">${esc(step[0])}</span></div><strong>${esc(step[1])}</strong>${i<steps.length-1?'<span class="step-arrow" aria-hidden="true">→</span>':''}</div>`).join('')}</div><div class="concept-outcome ${mode}"><span aria-hidden="true">${mode==='bad'?'!':'✓'}</span><p><b>${mode==='bad'?'Failure to watch for':'Suggested approach'}</b><br>${esc(mode==='bad'?steps[steps.length-1][1]+'.':concept.takeaway)}</p></div>`;
  target.querySelectorAll('[data-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mode===mode)));
 }
 target.querySelectorAll('[data-mode]').forEach(button=>button.onclick=()=>draw(button.dataset.mode));
 draw('bad');
 const rows=DATA.behaviors.filter(b=>b.segment===PAGE_SEGMENT),total=rows.length;
 const counts=Object.entries(RISK_GUIDE.types).map(([key,type])=>({key,label:type.label,count:rows.filter(b=>RISK_GUIDE.behaviors[b.id].risks.includes(key)).length})).filter(row=>row.count>0).sort((a,b)=>b.count-a.count);
 document.querySelector('#riskCoverage').innerHTML=`<div><div class="section-index">RISK COVERAGE IN THIS SEGMENT</div><h2>Where the impact shows up</h2><p class="visual-caption">How many of this segment’s ${total} documented behaviors carry each risk tag. Select a bar to explore those behaviors.</p><p class="schematic-note">Editorial classification counts, not likelihood or incident rates. A behavior can have several tags, so counts overlap.</p></div><div class="risk-count-chart" role="group" aria-label="Behavior counts by risk type">${counts.map(row=>`<button class="risk-count-row" data-risk="${row.key}" aria-label="Filter to ${esc(row.label)}: ${row.count} of ${total} behaviors"><span class="risk-count-label">${esc(row.label)}</span><span class="count-track" aria-hidden="true"><span class="count-fill ${row.key}" style="width:${100*row.count/total}%"></span></span><strong>${row.count} / ${total}</strong></button>`).join('')}</div>`;
 document.querySelector('#riskCoverage').querySelectorAll('[data-risk]').forEach(button=>button.onclick=()=>{
  document.querySelector('#riskType').value=button.dataset.risk;
  document.querySelector('#handling').value='all';document.querySelector('#risk').value='0';document.querySelector('#search').value='';
  render();document.querySelector('#library').scrollIntoView({behavior:'smooth'});
 });
}
function behaviorRiskVisual(behavior){
 const labels=['Understanding & data','Downstream impact','Recovery difficulty'];
 return `<figure class="behavior-risk-visual"><figcaption>Source risk scores at a glance <small>1 = low · 5 = severe / hard to recover</small></figcaption>${behavior.scores.map((score,index)=>`<div class="risk-score-line"><span>${labels[index]}</span><div class="score-blocks" role="img" aria-label="${labels[index]}: ${score} out of 5">${[1,2,3,4,5].map(value=>`<i class="${value<=score?'filled':''}" aria-hidden="true"></i>`).join('')}</div><b>${score} / 5</b></div>`).join('')}<p>These are the original impact scores, not probabilities.</p></figure>`;
}
