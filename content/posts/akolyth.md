---
title: "Akolyth — Ein KI-Assistent mit eigenem Gedächtnis"
date: "2026-11-13"
description: "Ein Terminal-Assistent, der sein Wissen in einer lokalen SQLite-Datenbank speichert statt im Kontextfenster des Sprachmodells."
image: "/images/akolyth.svg"
---

![Akolyth](/images/akolyth.svg)

Sprachmodelle vergessen alles, sobald das Gespräch vorbei ist – oder sie schleppen einen immer längeren Verlauf mit sich herum, der teuer und unübersichtlich wird. **Akolyth** ist mein Versuch, das anders zu lösen.

## Die Idee

Akolyth ist ein persönlicher Assistent fürs Terminal, der die KI **nicht** als Speicher benutzt. Stattdessen landet Wissen in einer lokalen SQLite-Datenbank. Bei jeder Anfrage bekommt das Modell ein **frisches Kontextfenster**, in das nur die gerade relevanten Fakten eingefügt werden. Das spart Tokens und hält die Antworten fokussiert.

## Die Bausteine

- **Context Aggregator** – durchsucht die lokale Datenbank per Volltextsuche (FTS5) nach passendem Wissen
- **Memory Engine** – die SQLite-Datenbank im Home-Verzeichnis
- **Prompt Builder** – baut daraus einen passenden System-Prompt
- **Response Evaluator** – lässt ein kleines, günstiges Modell die Antwortqualität bewerten
- **Self-Reflection Loop** – ist die Antwort nicht gut genug, wird es noch einmal versucht

## Stand

Akolyth ist ein Experiment in Python und war für mich vor allem ein Lernprojekt: Wie viel Kontext braucht ein Modell wirklich, und wie gut lässt sich Qualität automatisch messen?

---

*Übrigens: Für meine Android-App **Poikilia** – ein Ernährungstagebuch, das Vielfalt statt Kalorien zählt – suche ich gerade Beta-Tester. [Hier kannst du mitmachen →](/poikilia/#beta)*
