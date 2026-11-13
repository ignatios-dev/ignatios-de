import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung Poikilia — Ignatios Waffenschmidt",
  description: "Datenschutzerklärung der Android-App Poikilia: keine Datenerhebung, alles bleibt auf dem Gerät.",
  alternates: { canonical: "/poikilia/datenschutz/" },
};

const h2 = "text-[22px] md:text-[26px] font-bold mt-10 mb-3";
const p = "text-[16px] leading-[1.7] text-body-text m-0 mb-3";
const li = "text-[16px] leading-[1.7] text-body-text mb-2";

/*
 * Muss mit dem tatsächlichen Verhalten der App übereinstimmen (Repo giagia: docs/store/datenschutzerklaerung.md,
 * CLAUDE.md). Bei neuen Funktionen (Sync, Konto, Social, Analytics) anpassen.
 */
export default function PoikiliaDatenschutz() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="nb-dots">
        <article className="max-w-[820px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
          <SectionLabel>Poikilia · Android-App</SectionLabel>
          <h1 className="text-[30px] md:text-[46px] font-bold tracking-[-0.02em] mb-2">Datenschutzerklärung</h1>
          <p className="font-mono text-[13px] text-secondary mb-8">Stand: 13.11.2026</p>

          <h2 className={h2}>1. Verantwortlicher</h2>
          <p className={p}>
            Ignatios Waffenschmidt
            <br />
            Friedrichstraße 50
            <br />
            79098 Freiburg im Breisgau
            <br />
            E-Mail: <a href="mailto:ignatios@live.de">ignatios@live.de</a>
          </p>

          <h2 className={h2}>2. Kurz gesagt</h2>
          <p className={p}>
            Poikilia funktioniert ohne Konto, ohne Werbung und ohne Tracking. Alles, was du in der App einträgst –
            Rezepte, Tagebuch, Fotos, Bewertungen, Verträglichkeit, Profil (Ernährungsform, Allergien, Abneigungen),
            Einkaufsliste – wird <strong>nur auf deinem Gerät</strong> gespeichert. Ich als Entwickler erhalte davon
            nichts. Die App hat keinen eigenen Server.
          </p>

          <h2 className={h2}>3. Welche Daten die App verarbeitet</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-left text-[15px] border-collapse">
              <thead>
                <tr className="border-b-2 border-foreground">
                  <th className="py-2 pr-4">Daten</th>
                  <th className="py-2 pr-4">Wo</th>
                  <th className="py-2">Zweck</th>
                </tr>
              </thead>
              <tbody className="text-body-text">
                {[
                  ["Rezepte, Ideen (Links), Einkaufsliste", "nur auf dem Gerät", "Funktion der App"],
                  ["Tagebuch: Mahlzeiten, Bewertungen, Fotos", "nur auf dem Gerät", "Tagebuch, Statistik, Vorschläge"],
                  ["Verträglichkeit, Allergien und Unverträglichkeiten", "nur auf dem Gerät", "Hinweise und Filter – Gesundheitsdaten, siehe Abschnitt 5"],
                  ["Einstellungen (Haushaltsgröße, Profil)", "nur auf dem Gerät", "Funktion der App"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-foreground/20 align-top">
                    {row.map((cell) => (
                      <td key={cell} className="py-2 pr-4">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            Die Verarbeitung auf deinem Gerät dient dazu, die Funktionen der App bereitzustellen (Art. 6 Abs. 1 lit. b
            DSGVO). Gesundheitsangaben trägst du freiwillig ein; Grundlage ist deine ausdrückliche Einwilligung (Art. 9
            Abs. 2 lit. a DSGVO), die du jederzeit widerrufen kannst, indem du die Angaben in der App löschst.
          </p>

          <h2 className={h2}>4. Wann Daten das Gerät verlassen – nur durch dich</h2>
          <ul className="pl-5 mb-3">
            <li className={li}>
              <strong>Link-Import:</strong> Importierst du einen Link zu einer Rezeptseite, ruft die App diese Seite
              direkt ab. Der Betreiber der Seite sieht dabei – wie bei jedem Seitenaufruf – deine IP-Adresse und
              technische Angaben. Daten aus der App werden dabei nicht übertragen. Für die Verarbeitung ist der jeweilige
              Seitenbetreiber verantwortlich.
            </li>
            <li className={li}>
              <strong>Teilen und Export für Claude:</strong> Teilst oder exportierst du deine Bilanz, entscheidest du
              selbst, an welche App (z. B. Claude von Anthropic) der Text geht. Gesundheitsangaben (Verträglichkeit,
              Allergien) sind nur enthalten, wenn du das ausdrücklich ankreuzt. Für die weitere Verarbeitung gilt die
              Datenschutzerklärung des Empfängers.
            </li>
            <li className={li}>
              <strong>Datensicherung:</strong> Eine Sicherungsdatei speicherst du selbst an einem Ort deiner Wahl. Sie
              enthält alle Daten der App einschließlich Gesundheitsangaben und Fotos.
            </li>
            <li className={li}>
              <strong>Android-Sicherung:</strong> Ist auf deinem Gerät die Android-Sicherung (Google) aktiviert, sichert
              Android App-Daten verschlüsselt in deinem Google-Konto. Das ist eine Funktion von Android, die du in den
              Systemeinstellungen steuerst.
            </li>
            <li className={li}>
              <strong>Kamera und Fotos:</strong> Fotos nimmst du mit der Kamera-App deines Geräts auf oder wählst sie
              über die Foto-Auswahl des Systems aus; die App speichert eine verkleinerte Kopie lokal. Die App hat keinen
              eigenen Zugriff auf Kamera oder Galerie.
            </li>
            <li className={li}>
              <strong>Timer im Handy-Wecker:</strong> Auf deinen Wunsch übergibt die App einen Timer (Dauer und
              Rezeptname) an die Uhr-App deines Geräts.
            </li>
            <li className={li}>
              <strong>Feedback:</strong> Tippst du auf „Feedback senden“, öffnet sich deine Mail-App mit einer
              vorbereiteten Nachricht (inklusive App-Version). Gesendet wird nur, was du selbst abschickst.
            </li>
          </ul>

          <h2 className={h2}>5. Gesundheitsdaten</h2>
          <p className={p}>
            Angaben zu Verträglichkeit, Allergien und Unverträglichkeiten sind Gesundheitsdaten. Sie bleiben auf deinem
            Gerät, werden nicht an mich übermittelt und verlassen das Gerät nur durch deine ausdrückliche Handlung
            (Export mit Häkchen, Sicherung, Android-Sicherung). Hinweise der App sind Orientierung, keine medizinische
            Beratung oder Diagnose.
          </p>

          <h2 className={h2}>6. Google Play</h2>
          <p className={p}>
            Die App wird über Google Play verteilt. Beim Herunterladen verarbeitet Google Daten nach seinen eigenen
            Bestimmungen (<a href="https://policies.google.com/privacy">Datenschutzerklärung von Google</a>); darauf
            habe ich keinen Einfluss. Ich erhalte von Google nur zusammengefasste, nicht personenbezogene Statistiken
            (z. B. Anzahl der Installationen, Absturzberichte ohne Inhalte aus der App).
          </p>

          <h2 className={h2}>7. Speicherdauer und Löschung</h2>
          <p className={p}>
            Daten bleiben, bis du sie in der App löschst oder die App deinstallierst. Sicherungsdateien und
            Android-Sicherungen verwaltest du selbst.
          </p>

          <h2 className={h2}>8. Deine Rechte</h2>
          <p className={p}>
            Da ich keine personenbezogenen Daten von dir erhalte, liegen alle Daten bei dir und du kannst sie selbst
            einsehen, ändern und löschen. Wenn du mir schreibst (z. B. per E-Mail), verarbeite ich deine Nachricht nur,
            um zu antworten, und lösche sie, wenn sie erledigt ist. Du hast das Recht auf Auskunft, Berichtigung,
            Löschung und Beschwerde bei einer Datenschutz-Aufsichtsbehörde, etwa dem Landesbeauftragten für den
            Datenschutz und die Informationsfreiheit Baden-Württemberg.
          </p>

          <h2 className={h2}>9. Kinder</h2>
          <p className={p}>Die App richtet sich an Erwachsene.</p>

          <h2 className={h2}>10. Änderungen</h2>
          <p className={p}>
            Ich passe diese Erklärung an, wenn sich die App ändert. Es gilt die jeweils hier veröffentlichte Fassung.
          </p>

          <p className="mt-10">
            <Link href="/poikilia/" className="nb-underline font-mono text-[13px]">← Zurück zu Poikilia</Link>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
