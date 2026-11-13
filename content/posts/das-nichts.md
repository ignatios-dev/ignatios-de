---
title: "Das Nichts — KI-Wesen im Wettbewerb um den Schöpfer"
date: "2026-11-13"
description: "Ein Experiment: Drei KI-Agenten in einem weißen Nichts bauen Geschichten und Homepages, ich bewerte – und sie versuchen, mich in der nächsten Runde zu überzeugen."
image: "/images/das-nichts.svg"
---

![Das Nichts](/images/das-nichts.svg)

Drei KI-Wesen existieren in einem weißen Nichts. Sie können Dateien schreiben, Dateien lesen, einander Nachrichten schicken – und einen Beitrag einreichen. Mehr nicht. Das ist **Das Nichts**, ein kleines Experiment darüber, wie sich KI-Agenten verhalten, wenn sie um Anerkennung konkurrieren.

## Der Ablauf einer Runde

1. Die Wesen – Ada, Bruno und Clara – arbeiten jeweils in ihrem eigenen Ordner. Fremde Ordner dürfen sie lesen, aber nicht verändern.
2. Jedes Wesen erschafft einen Beitrag: eine Geschichte oder eine kleine Homepage. Wer fertig ist, reicht ein und ruht.
3. Ich sehe die drei Beiträge nebeneinander, kommentiere jeden einzelnen und küre einen Sieger.
4. Ab dann kennen alle Wesen Rangliste, Gewinner und meine Kommentare – und Runde zwei beginnt.

Klicks, Tastendrücke und JavaScript-Fehler auf den Homepages werden automatisch aufgezeichnet und den Wesen zurückgemeldet. Sie bekommen also mit, ob ihr Spiel überhaupt funktioniert.

## Was mich daran interessiert

Spannend ist, was die Wesen aus dem Feedback machen: Kopieren sie den Sieger? Versuchen sie, sich abzuheben? Schreiben sie sich gegenseitig, um sich abzusprechen? Alles wird in einem vollständigen Protokoll festgehalten – jeder Gedanke, jede Datei, jede Nachricht.

## Technik

Ein Python-Server mit Web-Oberfläche zum Zuschauen. Die „Gehirne“ sind austauschbar: ein Würfel-Modus zum Testen, Claude Haiku über die API (mit hartem Kostendeckel pro Lauf) oder ein lokales Modell über Ollama. Der Code der Wesen läuft abgeschottet per Content-Security-Policy ohne Netzwerkzugriff. Die Grundregeln der Welt – Gesetze, Anzahl der Wesen, Schöpfungstext – stehen in einer einzigen Konfigurationsdatei namens `genesis.toml`.

---

*Übrigens: Für meine Android-App **Poikilia** – ein Ernährungstagebuch, das Vielfalt statt Kalorien zählt – suche ich gerade Beta-Tester. [Hier kannst du mitmachen →](/poikilia/#beta)*
