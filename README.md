# Enrico Putzi — Teaching-Assistant-Website

## 1. GitHub Pages
Wenn dein GitHub-Benutzername z. B. `en-i-ch` ist, sollte das Repository `en-i-ch.github.io` heissen. Dann ist die Website direkt unter `https://en-i-ch.github.io/` erreichbar.

## 2. Lokal arbeiten (empfohlen)
Am einfachsten ist GitHub Desktop: Diesen Ordner als lokales Repository hinzufügen, einmal veröffentlichen und danach nur noch Änderungen committen und pushen.

## 3. NUS 2 deaktivieren / aktivieren
In `site-config.js`:

```js
showNus2: false
```

`false` = NUS 2 komplett ausblenden.

`true` = NUS 2 auf der Start-/Unterlagenseite anzeigen.

## 4. NUS 1 Material
Die Wochenübersicht prüft automatisch, ob die vorgesehenen PDFs vorhanden sind.

- Slides → `courses/nus1/files/slides/W01.pdf`
- Slides + Notizen → `courses/nus1/files/slides-notes/W01.pdf`
- Übungen → `courses/nus1/files/exercises/W01.pdf`

Für Woche 02 entsprechend `W02.pdf` usw. bis `W13.pdf`.

Zusätzlich:
- Skript → `courses/nus1/files/scripts/Skript.pdf`
- Organisation & Tipps → `courses/nus1/files/tips/Organisation.pdf`

Wenn eine Datei fehlt, zeigt die Website `noch nicht da`. Sobald die Datei vorhanden ist, wird daraus ein klickbarer Link mit `verfügbar`.

## 5. Warum nicht einfach Ordner anzeigen?
GitHub Pages ist eine statische Website und erzeugt für deine Materialordner keine schöne öffentliche Dateiliste. Deshalb gibt es die Wochenübersicht: Du lädst die PDFs hoch und die Website zeigt automatisch an, welche davon vorhanden sind.

## 6. Foto und Kontakte
- Foto: `assets/profile-placeholder.svg` ersetzen bzw. in `about.html` auf deine Bilddatei zeigen.
- E-Mail, LinkedIn und Instagram in `about.html` ersetzen.

## 7. Später ein neues Fach
Für ein neues Fach kann ein neuer Ordner unter `courses/` angelegt werden. Die Start-/Unterlagenseite bekommt dann einfach eine weitere Karte.
