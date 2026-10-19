from pathlib import Path
import base64
import re

repo = Path(__file__).resolve().parents[1]
site = repo / "site"
html = (site / "index.html").read_text()
html = re.sub(r'<link rel="stylesheet" href="style.css[^\"]*">', lambda _: "<style>" + (site / "style.css").read_text() + "</style>", html)
for name in ("data.js", "solutions.js", "risk-tags.js", "app.js"):
    html = html.replace(f'<script src="{name}"></script>', "<script>" + (site / name).read_text() + "</script>")
artwork = base64.b64encode((site / "assets/conversation-fracture.png").read_bytes()).decode()
html = html.replace("assets/conversation-fracture.png", "data:image/png;base64," + artwork)
assert '<script src=' not in html
assert not any(key in html for key in ("localStorage", "sessionStorage", "indexedDB", "<textarea", "fonts.googleapis"))
destination = repo / "downloads/VoiceScope.html"
destination.parent.mkdir(exist_ok=True)
destination.write_text(html)
print(f"Updated {destination.name} with embedded artwork and content.")
