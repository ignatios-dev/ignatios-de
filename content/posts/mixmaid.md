---
title: "MixMaid — Ordnung in der Musiksammlung"
date: "2026-11-13"
description: "Ein Terminal-Tool in Rust, das Musiksammlungen scannt, Fake-FLACs entlarvt, Duplikate findet und saubere Tags von MusicBrainz holt."
image: "/images/mixmaid.svg"
---

![MixMaid](/images/mixmaid.svg)

Wer über Jahre Musik sammelt – gekauft, gerippt, irgendwo heruntergeladen, auf drei Festplatten verteilt – kennt das Chaos: doppelte Alben, kaputte Tags und Dateien, die sich „FLAC“ nennen, aber wie ein 128-kbit-MP3 klingen. Dafür habe ich **MixMaid** gebaut.

## Was MixMaid macht

MixMaid scannt lokale und externe Laufwerke und baut daraus einen Index. Dabei:

- **bewertet es die Qualität** jeder Datei – inklusive **Fake-FLAC-Erkennung per Spektralanalyse**: Wenn das Frequenzspektrum bei 16 kHz abbricht, war die Quelle kein verlustfreies Original
- **erkennt es die Herkunft** (gekauft, gerippt, Stream-Rip) – per Ordnerregeln, Bandcamp-Tags oder Handarbeit
- **findet es Duplikate** über akustische Fingerabdrücke, nicht nur über Dateinamen
- **holt es saubere Tags** von MusicBrainz
- erstellt eine **Neu-kaufen-Liste** für Alben, die nur in schlechter Qualität vorliegen

Bedient wird das Ganze über eine **animierte TUI** im Terminal oder klassisch per Befehl (`mixmaid scan`, `mixmaid doctor`, …).

## Sicherheit zuerst

Bisher verändert MixMaid keine einzige Musikdatei – es liest nur und merkt sich alles im Index. Das war mir wichtig: Bei einer über Jahre gewachsenen Sammlung darf ein Aufräum-Tool nichts kaputt machen.

## Technik und Stand

Geschrieben in **Rust**, mit ffmpeg/ffprobe für die Analyse und optional `fpcalc` für Fingerabdrücke. Die Oberfläche ist auf Englisch, Deutsch ist umschaltbar. Scan, Qualitätsbewertung, Herkunft, Genres und Duplikate sind fertig, das Tagging funktioniert per CLI. Als Nächstes kommen der Tagging-Reiter in der TUI, der Import in einen Master-Ordner, Sync auf Backup-Ziele und ein Undo.

---

*Übrigens: Für meine Android-App **Poikilia** – ein Ernährungstagebuch, das Vielfalt statt Kalorien zählt – suche ich gerade Beta-Tester. [Hier kannst du mitmachen →](/poikilia/#beta)*
