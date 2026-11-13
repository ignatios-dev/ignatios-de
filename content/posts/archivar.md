---
title: "archivar — Mein digitales Leben aufräumen"
date: "2026-11-13"
description: "Ein Desktop-Tool, das Fotos, Videos, Musik und Dokumente sortiert, Dubletten erkennt und GoPro-Material für Kdenlive vorbereitet."
image: "/images/archivar.svg"
---

![archivar](/images/archivar.svg)

Angefangen hat es mit GoPro-Videos: Speicherkarte rein, Dateien irgendwohin kopieren, nie wieder finden. Inzwischen ist daraus **archivar** geworden – ein Werkzeug, das meine Fotos, Videos, Musik und Dokumente auf dem Laptop und auf einer Sicherungsplatte aufräumt.

## Videos

Der ursprüngliche Ablauf: **Importieren → Kategorisieren → für Kdenlive vorbereiten → Materialprojekt.** archivar importiert von Speicherkarte oder Kamera in ein Archiv nach `Jahr/Ereignis`, erkennt Dubletten archivweit und löscht auf der Karte nichts. Auf Wunsch schaut sich Claude vier Standbilder pro Clip an und schlägt Titel, Ort, Kategorien und Qualität vor – rund ein Cent für 24 Videos. Am Ende entsteht pro Ereignis ein **Kdenlive-Projekt** mit allen Clips nach Tagen, Markern und Sternen, bereit zum Schneiden.

## Fotos, Musik, Dokumente

- **Fotos** werden über EXIF (auch HEIC/WebP) einsortiert, Screenshots und Downloads landen getrennt, Tags kommen als XMP für digiKam und als Dolphin-Schlagworte dazu.
- **Musik** wird nach Interpret und Album geordnet, lange Mixe landen als **DJ-Sets** samt Tracklisten, DAW-Projekte und Sample-Packs bleiben als ganze Ordner zusammen. archivar misst zudem die **echte Klangqualität** und entlarvt „aufgeblasene“ 320-kbit-Dateien.
- **Dokumente** werden ohne KI anhand von Dateiname, Ordner und Text kategorisiert – Rechnungen, Verträge, Steuer, Versicherung und so weiter – und sind per Volltext durchsuchbar.

Dazu kommen Import vom Handy über KDE Connect, das Einsortieren alter Platten und eine Sicherung auf externe Laufwerke: Es wird nur kopiert, nie gelöscht.

## Stand

archivar ist in Python geschrieben, läuft unter Linux/KDE und liegt in Version 0.2 (Alpha) vor. Es ist vor allem ein Werkzeug für mich selbst – aber eines, das mir schon jetzt Stunden an Sortierarbeit abgenommen hat.

---

*Übrigens: Für meine Android-App **Poikilia** – ein Ernährungstagebuch, das Vielfalt statt Kalorien zählt – suche ich gerade Beta-Tester. [Hier kannst du mitmachen →](/poikilia/#beta)*
