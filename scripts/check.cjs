const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const site = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname,'../site');
const sources = ['data.js','solutions.js','risk-tags.js','segment-guide.js','concepts.js','visuals.js','applicability.js','app.js'].map(f=>fs.readFileSync(path.join(site,f),'utf8')).join('\n');
function page(id, hash='') {
 const nodes = {};
 const modes=[{dataset:{mode:"bad"},setAttribute(){}},{dataset:{mode:"good"},setAttribute(){}}];
 const risks=[{dataset:{risk:"data"}}];
 const defaults = {'#risk':'0','#riskType':'all','#handling':'all','#sort':'source'};
 const document = {body:{dataset:{segment:String(id),root:id?'../':''}},querySelector(selector){
  if(!id && ['#tagHelp','#cards','#search','#risk','#riskType','#handling','#sort','#reset'].includes(selector))return null;
  return nodes[selector] ||= {value:defaults[selector]||'',innerHTML:'',textContent:'',style:{},querySelectorAll:query=>selector==="#conceptVisual"&&query==="[data-mode]"?modes:selector==="#riskCoverage"&&query==="[data-risk]"?risks:[],addEventListener(){},scrollIntoView(){},showModal(){},close(){},setAttribute(){}};
 }};
 const sandbox=vm.createContext({document,location:{hash,pathname:id?'/repo/segments/test.html':'/repo/index.html',search:'',href:''},history:{replaceState(){}},navigator:{},setTimeout,console,window:{addEventListener(){}}});
 vm.runInContext(sources,sandbox);
 return {nodes,modes,risks,run:script=>vm.runInContext(script,sandbox)};
}
const home=fs.readFileSync(path.join(site,'index.html'),'utf8');
assert.equal((home.match(/class="segment-card"/g)||[]).length,12);assert.equal((home.match(/class="segment-thumbnail"/g)||[]).length,12);
assert(!home.includes('id="questions"'));assert(!home.includes('id="cards"'));assert(!home.includes('id="library"'));
assert.equal(page(0).nodes['#cards'],undefined);
const behaviorIds=new Set();
for(let segment=1;segment<=12;segment++){
 const p=page(segment),rows=p.run('filtered()');
 const slug=p.run('SEGMENT_GUIDE.find(s=>s.id===PAGE_SEGMENT).slug');const pageHtml=fs.readFileSync(path.join(site,'segments',slug+'.html'),'utf8');assert(!pageHtml.includes('<aside>'));assert(pageHtml.includes('workspace-full'));
 assert(p.nodes['#conceptScene'].innerHTML.includes('concept-step'));assert.equal((p.nodes['#conceptScene'].innerHTML.match(/class="concept-step"/g)||[]).length,4);
 assert(p.nodes['#riskCoverage'].innerHTML.includes('not likelihood or incident rates'));
 p.modes[1].onclick();assert(p.nodes['#conceptScene'].innerHTML.includes('concept-flow good'));assert(p.nodes['#conceptScene'].innerHTML.includes('Suggested approach'));
 p.modes[0].onclick();assert(p.nodes['#conceptScene'].innerHTML.includes('concept-flow bad'));
 p.risks[0].onclick();assert.equal(p.nodes['#riskType'].value,'data');assert(p.run("filtered().every(b=>RISK_GUIDE.behaviors[b.id].risks.includes('data'))"));p.run('reset()');
 assert.equal(p.run('CONCEPTS[PAGE_SEGMENT].good.length'),4);
 const art=p.run('CONCEPTS[PAGE_SEGMENT].art');assert(art);assert(fs.existsSync(path.join(site,'assets',art)));assert(p.run("CONCEPTS[PAGE_SEGMENT].artAlt.includes('AI VOICE BOT')"));assert(p.nodes['#conceptVisual'].innerHTML.includes('Open larger image'));
 assert(p.nodes['#segmentApplicability'].innerHTML.includes('When this segment matters'));assert(p.nodes['#segmentApplicability'].innerHTML.includes('May be out of scope when'));assert(rows.length>0);assert(rows.every(b=>b.segment===segment));
 for(const b of rows){behaviorIds.add(b.id);p.run(`detail('${b.id}')`);const html=p.nodes['#modalBody'].innerHTML;assert(html.includes('How to address it'));assert(html.includes('DOES THIS APPLY TO YOUR APPLICATION?'));assert(html.includes('May be out of scope when'));assert(p.run(`Boolean(APPLICABILITY.behaviors['${b.id}'].applies&&APPLICABILITY.behaviors['${b.id}'].notApplicable)`));assert(html.includes('Source risk scores at a glance'));assert.equal((html.match(/class="risk-score-line"/g)||[]).length,3);assert(html.includes('Handle in live call'));assert(html.includes('Handle after call'));assert(!html.includes('undefined'));}
 p.run("document.querySelector('#riskType').value='data';render()");assert(p.run("filtered().every(b=>RISK_GUIDE.behaviors[b.id].risks.includes('data'))"));
 p.run("document.querySelector('#handling').value='after';render()");assert(p.run("filtered().every(b=>b.segment===PAGE_SEGMENT&&RISK_GUIDE.behaviors[b.id].primary==='after')"));
 p.run('reset()');assert.equal(p.run('filtered().length'),rows.length);
 p.run("document.querySelector('#search').value='nonexistent-phrase-xyz';render()");assert.equal(p.run('filtered().length'),0);
}
assert.equal(behaviorIds.size,104);
const deep=page(3,'#behavior=3.1');assert(deep.nodes['#modalBody'].innerHTML.includes('Self-correction'));
const route=page(1);route.run("detail('7.1')");assert(route.run('location.href').includes('../segments/value-capture.html#behavior=7.1'));
console.log('Passed: 12 home segment cards, no home behavior list or questionnaire, 104 details on the right pages, filters, reset, deep links, cross-segment links, interactive failure/fix diagrams, chart filtering, and 104 source-score visuals.');

const scope=page(6);assert(scope.run("APPLICABILITY.behaviors['6.5'].notApplicable.includes('locked-down device')"));assert(scope.run("APPLICABILITY.behaviors['6.9'].notApplicable.includes('outbound transfer legs')"));assert(scope.run("APPLICABILITY.behaviors['6.10'].notApplicable.includes('all call legs')||APPLICABILITY.behaviors['6.10'].notApplicable.includes('All call legs')"));assert(scope.run("APPLICABILITY.behaviors['12.4'].notApplicable.includes('Do not exclude')"));assert(scope.run("APPLICABILITY.behaviors['5.2'].notApplicable.includes('not authorization')"));assert.equal(scope.run('Object.keys(APPLICABILITY.behaviors).length'),104);assert.equal(scope.run('Object.keys(APPLICABILITY.segments).length'),12);console.log('Passed: applicability coverage on 12 segments and 104 behavior details, controlled-device conditions, call-leg exceptions, authorization, and unsolicited-data caveats.');
