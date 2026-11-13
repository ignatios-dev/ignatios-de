---
title: "Kneipensimulator — Eine Eckkneipe im Browser"
date: "2026-11-13"
description: "Ein gemütliches Browserspiel: Kneipe einrichten, Schichten planen, Schichtprotokoll lesen und gegen Freunde antreten."
image: "/images/kneipensimulator.svg"
---

![Kneipensimulator](/images/kneipensimulator.svg)

Mein aktuellstes Nebenprojekt ist ein Browserspiel über das schönste Kulturgut Deutschlands: die Eckkneipe. Im **Kneipensimulator** richtest du deine eigene Kneipe ein, planst die Schichten – und schaust dann zu, was passiert, während du nicht da bist.

## Die Idee

Der Kern des Spiels ist die **Planung**. Vor jeder Schicht legst du Preise, Einkauf, Personal, Schichtlänge und Putzplan fest und öffnest dann die Kneipe. Die Schicht läuft in Echtzeit nach deutscher Ortszeit, ganz ohne dich. Danach bekommst du die Abrechnung: Umsatz, welche Gäste da waren, wie zufrieden sie waren – und ein **Schichtprotokoll**, das hoffentlich mindestens so unterhaltsam ist wie ein echter Abend am Tresen.

Das Spiel soll gemütlich sein, aber trotzdem eine Rangliste haben. Darum gibt es geplant eine optionale **Wochenliga**, in der man gegen Freunde antritt, ohne dass ein schlechter Abend den eigenen Fortschritt zerstört.

## Was schon geht

- Einrichten nach festem Grundriss mit Stellplätzen – das Billardzimmer öffnet ab Level 4
- Planung, Live-Ticker während der Schicht und Abschlussbericht nach Feierabend
- Lokalrunden mit Stimmungsschub, Ärger und eigene Events
- Tag und Nacht folgen der Uhrzeit in Berlin
- Erste soziale Funktionen: Freunde als Gast besuchen, einen **Deckel** mit Namen führen und die **Klo-Wand** bekritzeln

## Technik

Unter der Haube ist das ein TypeScript-Monorepo: ein Fastify-Server, ein Client aus React (für die Menüs) und PixiJS (für die Spielwelt) und ein eigenes `sim`-Paket, das die Schicht **deterministisch** berechnet – ohne I/O, ohne Uhr, ohne globalen Zufall. Der Server entscheidet alles, damit Rangliste und Wirtschaft nicht manipulierbar sind. Spielwerte stehen nicht im Code, sondern in Content-Dateien, damit sich das Balancing leicht anpassen lässt.

## Wie es weitergeht

Als Nächstes stehen Accounts und dauerhafter Online-Betrieb auf der Liste, danach die Wochenliga. Zum Start soll alles kostenlos sein – später höchstens Spenden oder rein kosmetische Extras. Sobald eine öffentliche Version läuft, verlinke ich sie hier.

---

*Übrigens: Für meine Android-App **Poikilia** – ein Ernährungstagebuch, das Vielfalt statt Kalorien zählt – suche ich gerade Beta-Tester. [Hier kannst du mitmachen →](/poikilia/#beta)*
