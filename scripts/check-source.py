"""Validate source fidelity and project-subpath-compatible static assets."""
from pathlib import Path
import csv
import json
import re
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
data = json.loads((SITE / "data.js").read_text().removeprefix("const DATA=").removesuffix(";"))
rows = list(csv.reader((ROOT / "source-documents/Details - 12 Segments-Table 1.csv").open()))
original = {row[0]: row for row in rows if re.fullmatch(r"\d+\.\d+", row[0])}
assert len(original) == len(data["behaviors"]) == 104
assert len({b["id"] for b in data["behaviors"]}) == 104
for behavior in data["behaviors"]:
    row = original[behavior["id"]]
    assert [behavior["name"], behavior["example"], behavior["failure"]] == row[1:4]
    assert behavior["scores"] == list(map(int, row[4:7]))
    assert behavior["total"] == int(row[7]) == sum(behavior["scores"])
master = list(csv.reader((ROOT / "source-documents/Master Sheet-Table 1.csv").open()))[1:]
assert len(master) == len(data["segments"]) == 12
for segment, row in zip(data["segments"], master):
    assert [str(segment["id"]), segment["name"], segment["description"]] == row[:3]

class Assets(HTMLParser):
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        attr = "src" if tag in ("script", "img") else "href" if tag == "link" else None
        if attr and values.get(attr):
            value = values[attr].split("?", 1)[0]
            assert not value.startswith("/"), f"Root-absolute asset breaks project Pages: {value}"
            assert (SITE / value).is_file(), f"Missing local asset: {value}"

Assets().feed((SITE / "index.html").read_text())
for file in SITE.glob("*.js"):
    assert not re.search(r"localStorage|sessionStorage|indexedDB|document\.cookie|sendBeacon", file.read_text()), file.name
assert (SITE / ".nojekyll").is_file()
print("Passed: both CSV sources match all 104 behaviors and 12 segments; assets use relative paths; no storage or tracking APIs.")
