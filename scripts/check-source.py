"""Check CSV fidelity and every local website asset and navigation link."""
from pathlib import Path
import json,csv,re
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
r=Path(__file__).resolve().parents[1];site=r/'site'
data=json.loads((site/'data.js').read_text().removeprefix('const DATA=').removesuffix(';'))
rows=list(csv.reader((r/'source-documents/Details - 12 Segments-Table 1.csv').open()))
original={row[0]:row for row in rows if re.fullmatch(r'\d+\.\d+',row[0])}
assert len(original)==len(data['behaviors'])==104
for b in data['behaviors']:
 row=original[b['id']];assert [b['name'],b['example'],b['failure']]==row[1:4]
 assert b['scores']==list(map(int,row[4:7]));assert b['total']==int(row[7])==sum(b['scores'])
master=list(csv.reader((r/'source-documents/Master Sheet-Table 1.csv').open()))[1:]
assert len(master)==len(data['segments'])==12
for s,row in zip(data['segments'],master):assert [str(s['id']),s['name'],s['description']]==row[:3]
class Check(HTMLParser):
 def __init__(self,page):super().__init__();self.page=page
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  value=a.get('src') if tag in ('script','img') else a.get('href') if tag in ('a','link') else None
  if not value:return
  u=urlsplit(value)
  if u.scheme or u.netloc or not u.path:return
  assert not u.path.startswith('/'),f'Project-absolute path: {value}'
  target=(self.page.parent/unquote(u.path)).resolve()
  assert target.is_relative_to(site.resolve()),f'Link escapes site: {value}'
  assert target.is_file(),f'Missing link from {self.page}: {value}'
for page in site.rglob('*.html'):Check(page).feed(page.read_text())
assert len(list((site/'segments').glob('*.html')))==12
for f in site.glob('*.js'):assert not re.search(r'localStorage|sessionStorage|indexedDB|document\.cookie|sendBeacon',f.read_text())
print('Passed: source fidelity, 12 segment pages, all relative assets and links, no storage APIs.')
