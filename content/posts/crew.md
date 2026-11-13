---
title: "crew — Ein Software-Team aus KI-Agenten"
date: "2026-11-13"
description: "Ein Kommandozeilen-Werkzeug, das Claude-Code-Agents als Product Manager, Engineer und Reviewer zusammenarbeiten lässt – ich bin der Stakeholder."
image: "/images/crew.svg"
---

![crew](/images/crew.svg)

Was passiert, wenn man KI-Agenten nicht einzeln einsetzt, sondern als kleines Team mit klaren Rollen? Das wollte ich mit **crew** herausfinden: einem lokalen Software-Team aus Claude-Code-Agents, bei dem ich nur noch der Stakeholder bin.

## So funktioniert es

Ein einziger Befehl startet ein Projekt:

```bash
crew new worklog --stack go --idea "CLI, das git log über mehrere Repos als Stundenzettel ausgibt"
```

Dann übernimmt das Team:

- Der **Product Manager** macht aus meinen Wünschen Stories mit Akzeptanzkriterien und schreibt mir einen Bericht.
- Der **Engineer** setzt genau eine Story um, mit Tests und Architektur-Doku.
- Ein **Gate** (`make lint test`) muss grün sein.
- Der **Reviewer** prüft jedes Akzeptanzkriterium durch Ausführen und nimmt ab oder weist zurück – nach drei Fehlversuchen ist eine Story blockiert.

Jeder Lauf arbeitet auf einem eigenen Branch. Ich lese den Report, teste und gebe mit `crew approve` frei – oder lehne eine Story mit Feedback ab, das der PM im nächsten Lauf zuerst einplant. Riskante Stories (Geschmacksfragen, unbestätigte Annahmen) plant der PM bewusst einzeln, damit eine Ablehnung nicht mehr kaputt macht als nötig.

Neben der Kommandozeile gibt es ein kleines **Web-Dashboard** mit Backlog, offenen Fragen und einem Freigabe-Tab.

## Praxistest: Wocheneinkauf

Das erste echte Projekt war eine kleine Flutter-App für den **Wocheneinkauf**: Vorrat pflegen, Soll und Ist vergleichen, daraus automatisch eine Einkaufsliste erzeugen. Spannend war, wie gut die Rollenteilung funktioniert: Der Reviewer fand etwa einen Rundungsfehler bei Kommazahlen, den der PM direkt als Folge-Story eingeplant hat – so, wie man es sich in einem menschlichen Team auch wünschen würde.

## Fazit

crew ist ein Werkzeug für mich selbst und ein Experiment darüber, wie Softwareentwicklung mit KI-Agenten aussehen kann. Die wichtigste Erkenntnis bisher: Gute Ergebnisse hängen weniger am Modell als an klaren Rollen, harten Prüfungen und kleinen Schritten.

---

*Übrigens: Für meine Android-App **Poikilia** – ein Ernährungstagebuch, das Vielfalt statt Kalorien zählt – suche ich gerade Beta-Tester. [Hier kannst du mitmachen →](/poikilia/#beta)*
