#!/usr/bin/env python3
"""Check public routes, homepage anchors, and local HTML asset references."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent
ROUTES = (
    "index.html",
    "lost.html",
    "en/lost.html",
    "privacy.html",
    "terms.html",
    "app-ads.txt",
    "robots.txt",
    "sitemap.xml",
)
ANCHORS = ("home", "apps", "about", "contact")
HTML_FILES = tuple(ROOT.glob("*.html")) + tuple(ROOT.glob("en/*.html"))


class References(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.refs = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if value := attrs.get("id"):
            self.ids.add(value)
        for name in ("href", "src"):
            if value := attrs.get(name):
                self.refs.append(value)


def local_target(page, ref):
    parsed = urlsplit(ref)
    if parsed.scheme or parsed.netloc or ref.startswith(("//", "mailto:", "tel:")):
        return None
    path = unquote(parsed.path)
    return (page.parent / path).resolve() if path else page.resolve()


def main():
    errors = []
    for route in ROUTES:
        if not (ROOT / route).is_file():
            errors.append(f"missing route: /{route}")

    for page in HTML_FILES:
        parser = References()
        parser.feed(page.read_text(encoding="utf-8"))
        if page.name == "index.html" and page.parent == ROOT:
            for anchor in ANCHORS:
                if anchor not in parser.ids:
                    errors.append(f"missing homepage anchor: #{anchor}")
        for ref in parser.refs:
            target = local_target(page, ref)
            if target is not None and not target.exists():
                errors.append(f"broken local reference: {page.relative_to(ROOT)} -> {ref}")

    print(f"Checked {len(ROUTES)} routes and {len(HTML_FILES)} HTML files.")
    if errors:
        print("\n".join(f"ERROR: {error}" for error in sorted(set(errors))))
        return 1
    print("OK: required routes, anchors, and local references exist.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
