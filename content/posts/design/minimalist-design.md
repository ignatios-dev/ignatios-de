---
title: "Minimalistisches Blog-Design"
date: "2026-02-17"
---

# Ein minimalistisches Blog-Design

Das neue Design deines Blogs wurde inspiriert von modernen, fokussierten Blogging-Plattformen.

## ✨ Highlights

### Kategorie-Navigation
- Alle Kategorien sind auf der Startseite als ansprechende Stapel sichtbar
- Jeder Stapel zeigt wichtige Metadaten:
  - **Anzahl Beiträge**: Wie viele Artikel in dieser Kategorie sind
  - **Letztes Update**: Wann der neueste Beitrag veröffentlicht wurde

### Responsives Design
Das Layout passt sich automatisch an verschiedene Bildschirmgrößen an:
- **Desktop**: 3 Spalten
- **Tablet**: 2 Spalten  
- **Mobile**: 1 Spalte

### Clean Typography
- Große, lesbare Überschriften
- Gute Zeilenabstände
- Perfekt für das Lesen auf allen Geräten

## 🎯 Navigation

```
/ (Startseite)
├── /blog/category/tech (Tech-Kategorieseite)
│   ├── /blog/tech/hello-world (Einzelner Beitrag)
│   └── /blog/tech/github-actions-test
└── /blog/category/design (Design-Kategorieseite)
    └── /blog/design/second-post
```

## 💾 Datenstruktur

Die Beiträge sind in einer einfachen Ordnerstruktur organisiert:

```
content/posts/
├── tech/          # Kategorie = Ordnername
│   └── *.md       # Beiträge = Markdown-Dateien
└── design/
    └── *.md
```

Keine Datenbank nötig - alles ist statisch und kann ohne Node.js bereitgestellt werden!

Viel Spaß mit deinem neuen Blog! 📝✨

