"""Rebuild the portable home entry point; companion pages live in site/segments/."""
from pathlib import Path
import base64
import re
r=Path(__file__).resolve().parents[1]
p=r/'site'
h=(p/'index.html').read_text()
h=re.sub(r'<link rel="stylesheet" href="style.css[^\"]*">',lambda _: '<style>'+(p/'style.css').read_text()+'</style>',h)
for f in ['data.js','solutions.js','risk-tags.js','segment-guide.js','concepts.js','visuals.js','applicability.js','app.js']:
 h=h.replace(f'<script src="{f}"></script>','<script>'+(p/f).read_text()+'</script>')
h=h.replace('assets/conversation-fracture.png','data:image/png;base64,'+base64.b64encode((p/'assets/conversation-fracture.png').read_bytes()).decode())
h=h.replace('data-root=""','data-root="../site/"').replace('href="segments/','href="../site/segments/').replace('href="index.html','href="../site/index.html')
(r/'downloads').mkdir(exist_ok=True)
(r/'downloads/VoiceScope.html').write_text(h)
print('Updated portable home entry point. Keep the site/ folder with its 12 companion pages.')
