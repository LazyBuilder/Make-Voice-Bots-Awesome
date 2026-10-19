process.chdir(require('path').resolve(__dirname,'..'));
const fs=require('fs'),vm=require('vm'),assert=require('assert');const nodes={};function node(s){return nodes[s]??=( {value:({'#context':'all','#riskType':'all','#handling':'all','#risk':'0','#status':'all','#sort':'source'})[s]||'',innerHTML:'',textContent:'',style:{},querySelectorAll:()=>[],addEventListener(){},scrollIntoView(){},showModal(){},classList:{toggle(){}}})};const c=vm.createContext({document:{querySelector:node},localStorage:{getItem:()=>null},location:{hash:'',pathname:'/',search:''},history:{replaceState(){}},window:{addEventListener(){}},setTimeout,console});vm.runInContext(fs.readFileSync('site/data.js','utf8')+fs.readFileSync('site/solutions.js','utf8')+fs.readFileSync('site/risk-tags.js','utf8')+fs.readFileSync('site/app.js','utf8'),c);assert.equal(vm.runInContext('filtered().length',c),104);vm.runInContext("symptoms.add('0-0');recommend()",c);assert.deepEqual(Array.from(vm.runInContext('focusSegments',c)).sort((a,b)=>a-b),[1,11]);assert.equal(vm.runInContext('filtered().length',c),19);vm.runInContext("symptoms.add('4-1');recommend()",c);assert.deepEqual(Array.from(vm.runInContext('focusSegments',c)).sort((a,b)=>a-b),[1,8,11]);vm.runInContext('symptoms.clear();recommend()',c);assert.equal(vm.runInContext('filtered().length',c),104);assert.equal(vm.runInContext('new Set(questions.flatMap(q=>q.options.flatMap(o=>o[1]))).size',c),12);console.log('Passed: full library, symptom filtering, combined answers, reset, and coverage of all 12 segments.');

assert.equal(vm.runInContext('DATA.behaviors.every(b=>SOLUTIONS.actions[b.id]&&SOLUTIONS.segments[b.segment])',c),true); vm.runInContext("detail('1.1')",c); assert(nodes['#modalBody'].innerHTML.includes('How to address it')); assert(!nodes['#modalBody'].innerHTML.includes('textarea')); console.log('Passed: all 104 handling guides, problem detail, no note fields.');

assert(vm.runInContext('DATA.behaviors.every(b=>RISK_GUIDE.behaviors[b.id].risks.length>0&&RISK_GUIDE.behaviors[b.id].risks.every(k=>RISK_GUIDE.types[k])&&RISK_GUIDE.behaviors[b.id].live&&RISK_GUIDE.behaviors[b.id].after)',c));
vm.runInContext("reset();document.querySelector('#riskType').value='consent'",c);
assert(vm.runInContext("filtered().some(b=>b.id==='8.5')&&!filtered().some(b=>b.id==='4.1')",c));
vm.runInContext("document.querySelector('#riskType').value='all';document.querySelector('#handling').value='after'",c);
assert.equal(vm.runInContext('filtered().length',c),16);
vm.runInContext("document.querySelector('#riskType').value='data'",c);
assert(vm.runInContext('filtered().every(b=>RISK_GUIDE.behaviors[b.id].primary==="after"&&RISK_GUIDE.behaviors[b.id].risks.includes("data"))',c));
for(const id of vm.runInContext('DATA.behaviors.map(b=>b.id)',c)){vm.runInContext(`detail('${id}')`,c);assert(nodes['#modalBody'].innerHTML.includes('Handle in live call'));assert(nodes['#modalBody'].innerHTML.includes('Handle after call'));assert(!nodes['#modalBody'].innerHTML.includes('undefined'));}
vm.runInContext('reset()',c);assert.equal(vm.runInContext('filtered().length',c),104);
console.log('Passed: risk and handling coverage on all 104 details, consent exclusion, primary-stage filter, combined filters, reset.');

// Several selections in one question must not outweigh an independent question.
vm.runInContext("symptoms.clear();symptoms.add('0-0');symptoms.add('0-1');symptoms.add('0-2');symptoms.add('3-1');recommend()",c);
assert(vm.runInContext('focusSegments.includes(6)',c));
assert.equal(vm.runInContext('focusSegments.length',c),3);
assert(nodes['#recommendations'].innerHTML.includes('2 other segments also match'));
assert.equal(vm.runInContext('rankFocusSegments().applicable',c),2);
assert.equal(vm.runInContext('rankFocusSegments().notApplicable',c),3);
// All five question groups affect the same result and only three are displayed.
vm.runInContext("symptoms.clear();['0-0','1-1','2-0','3-1','4-1'].forEach(k=>symptoms.add(k));recommend()",c);
assert.equal(vm.runInContext('rankFocusSegments().applicable',c),5);
assert.equal(vm.runInContext('rankFocusSegments().notApplicable',c),0);
assert.equal((nodes['#recommendations'].innerHTML.match(/class="recommenditem"/g)||[]).length,3);
assert(vm.runInContext('filtered().every(b=>focusSegments.includes(b.segment))',c));
const first=Array.from(vm.runInContext('focusSegments',c));
vm.runInContext("symptoms.clear();['4-1','3-1','2-0','1-1','0-0'].forEach(k=>symptoms.add(k));recommend()",c);
assert.deepEqual(Array.from(vm.runInContext('focusSegments',c)),first);
vm.runInContext('symptoms.clear();recommend()',c);
assert.equal(vm.runInContext('rankFocusSegments().notApplicable',c),5);
assert.equal(vm.runInContext('focusSegments',c),null);
assert.equal(vm.runInContext('filtered().length',c),104);
console.log('Passed: equal weighting across questions, skipped questions excluded, top-three cap, additional-match notice, order independence, focused library, no-answer state.');
