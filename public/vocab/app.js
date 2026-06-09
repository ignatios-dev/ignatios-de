// ── Vocabulary Data ──
var WORDS = [
    // ALLTAG
    { gr: 'Kalimera', el: 'Καλημέρα', de: 'Guten Morgen', cat: 'alltag' },
    { gr: 'Kalispera', el: 'Καλησπέρα', de: 'Guten Abend', cat: 'alltag' },
    { gr: 'Kalinichta', el: 'Καληνύχτα', de: 'Gute Nacht', cat: 'alltag' },
    { gr: 'Jassas', el: 'Γεια σας', de: 'Hallo (formal)', cat: 'alltag' },
    { gr: 'Jassou', el: 'Γεια σου', de: 'Hallo (informal)', cat: 'alltag' },
    { gr: 'Efcharisto', el: 'Ευχαριστώ', de: 'Danke', cat: 'alltag' },
    { gr: 'Parakalo', el: 'Παρακαλώ', de: 'Bitte', cat: 'alltag' },
    { gr: 'Ne', el: 'Ναι', de: 'Ja', cat: 'alltag' },
    { gr: 'Ochi', el: 'Όχι', de: 'Nein', cat: 'alltag' },
    { gr: 'Signomi', el: 'Συγγνώμη', de: 'Entschuldigung', cat: 'alltag' },
    { gr: 'Nero', el: 'Νερό', de: 'Wasser', cat: 'alltag' },
    { gr: 'Spiti', el: 'Σπίτι', de: 'Haus', cat: 'alltag' },
    { gr: 'Dromos', el: 'Δρόμος', de: 'Straße', cat: 'alltag' },
    { gr: 'Ora', el: 'Ώρα', de: 'Stunde / Uhrzeit', cat: 'alltag' },
    { gr: 'Simera', el: 'Σήμερα', de: 'Heute', cat: 'alltag' },
    { gr: 'Avrio', el: 'Αύριο', de: 'Morgen (Tag)', cat: 'alltag' },
    { gr: 'Chthes', el: 'Χθες', de: 'Gestern', cat: 'alltag' },
    { gr: 'Poli', el: 'Πολύ', de: 'Sehr / Viel', cat: 'alltag' },
    { gr: 'Mikro', el: 'Μικρό', de: 'Klein', cat: 'alltag' },
    { gr: 'Megalo', el: 'Μεγάλο', de: 'Groß', cat: 'alltag' },
    { gr: 'Kalo', el: 'Καλό', de: 'Gut', cat: 'alltag' },
    { gr: 'Kako', el: 'Κακό', de: 'Schlecht', cat: 'alltag' },
    { gr: 'Filoi', el: 'Φίλοι', de: 'Freunde', cat: 'alltag' },
    { gr: 'Pedia', el: 'Παιδιά', de: 'Kinder', cat: 'alltag' },
    { gr: 'Lefta', el: 'Λεφτά', de: 'Geld', cat: 'alltag' },

    // ESSEN
    { gr: 'Psomi', el: 'Ψωμί', de: 'Brot', cat: 'essen' },
    { gr: 'Krasi', el: 'Κρασί', de: 'Wein', cat: 'essen' },
    { gr: 'Bira', el: 'Μπίρα', de: 'Bier', cat: 'essen' },
    { gr: 'Elies', el: 'Ελιές', de: 'Oliven', cat: 'essen' },
    { gr: 'Ladi', el: 'Λάδι', de: 'Öl (Olivenöl)', cat: 'essen' },
    { gr: 'Alati', el: 'Αλάτι', de: 'Salz', cat: 'essen' },
    { gr: 'Piperi', el: 'Πιπέρι', de: 'Pfeffer', cat: 'essen' },
    { gr: 'Lemoni', el: 'Λεμόνι', de: 'Zitrone', cat: 'essen' },
    { gr: 'Domates', el: 'Ντομάτες', de: 'Tomaten', cat: 'essen' },
    { gr: 'Kreas', el: 'Κρέας', de: 'Fleisch', cat: 'essen' },
    { gr: 'Psari', el: 'Ψάρι', de: 'Fisch', cat: 'essen' },
    { gr: 'Kotopoulo', el: 'Κοτόπουλο', de: 'Hähnchen', cat: 'essen' },
    { gr: 'Tiri', el: 'Τυρί', de: 'Käse', cat: 'essen' },
    { gr: 'Gala', el: 'Γάλα', de: 'Milch', cat: 'essen' },
    { gr: 'Avgo', el: 'Αυγό', de: 'Ei', cat: 'essen' },
    { gr: 'Kafes', el: 'Καφές', de: 'Kaffee', cat: 'essen' },
    { gr: 'Tsai', el: 'Τσάι', de: 'Tee', cat: 'essen' },
    { gr: 'Pagoto', el: 'Παγωτό', de: 'Eis (Speise)', cat: 'essen' },
    { gr: 'Salata', el: 'Σαλάτα', de: 'Salat', cat: 'essen' },
    { gr: 'Patates', el: 'Πατάτες', de: 'Kartoffeln', cat: 'essen' },
    { gr: 'Skordo', el: 'Σκόρδο', de: 'Knoblauch', cat: 'essen' },
    { gr: 'Kremidi', el: 'Κρεμμύδι', de: 'Zwiebel', cat: 'essen' },
    { gr: 'Horiatiki', el: 'Χωριάτικη', de: 'Bauernsalat', cat: 'essen' },
    { gr: 'Mezedes', el: 'Μεζέδες', de: 'Vorspeisen / Tapas', cat: 'essen' },
    { gr: 'Logariasmo', el: 'Λογαριασμό', de: 'Die Rechnung', cat: 'essen' },
    { gr: 'Stin ijia mas', el: 'Στην υγεία μας', de: 'Prost! (Auf unsere Gesundheit)', cat: 'essen' },

    // REISE
    { gr: 'Paralia', el: 'Παραλία', de: 'Strand', cat: 'reise' },
    { gr: 'Thalassa', el: 'Θάλασσα', de: 'Meer', cat: 'reise' },
    { gr: 'Limani', el: 'Λιμάνι', de: 'Hafen', cat: 'reise' },
    { gr: 'Aerodromio', el: 'Αεροδρόμιο', de: 'Flughafen', cat: 'reise' },
    { gr: 'Farmakio', el: 'Φαρμακείο', de: 'Apotheke', cat: 'reise' },
    { gr: 'Nosokomio', el: 'Νοσοκομείο', de: 'Krankenhaus', cat: 'reise' },
    { gr: 'Souper market', el: 'Σούπερ μάρκετ', de: 'Supermarkt', cat: 'reise' },
    { gr: 'Dexia', el: 'Δεξιά', de: 'Rechts', cat: 'reise' },
    { gr: 'Aristera', el: 'Αριστερά', de: 'Links', cat: 'reise' },
    { gr: 'Efthia', el: 'Ευθεία', de: 'Geradeaus', cat: 'reise' },
    { gr: 'Konda', el: 'Κοντά', de: 'Nah', cat: 'reise' },
    { gr: 'Makria', el: 'Μακριά', de: 'Weit', cat: 'reise' },
    { gr: 'Pou ine...?', el: 'Πού είναι...;', de: 'Wo ist...?', cat: 'reise' },
    { gr: 'Poso kani?', el: 'Πόσο κάνει;', de: 'Wie viel kostet es?', cat: 'reise' },
    { gr: 'Eisitirio', el: 'Εισιτήριο', de: 'Fahrkarte / Ticket', cat: 'reise' },
    { gr: 'Xenodochío', el: 'Ξενοδοχείο', de: 'Hotel', cat: 'reise' },
    { gr: 'Domatio', el: 'Δωμάτιο', de: 'Zimmer', cat: 'reise' },
    { gr: 'Enas', el: 'Ένας', de: 'Eins (m)', cat: 'reise' },
    { gr: 'Dio', el: 'Δύο', de: 'Zwei', cat: 'reise' },
    { gr: 'Tria', el: 'Τρία', de: 'Drei', cat: 'reise' },
    { gr: 'Tessera', el: 'Τέσσερα', de: 'Vier', cat: 'reise' },
    { gr: 'Pende', el: 'Πέντε', de: 'Fünf', cat: 'reise' },
    { gr: 'Deka', el: 'Δέκα', de: 'Zehn', cat: 'reise' },

    // NATUR
    { gr: 'Ilios', el: 'Ήλιος', de: 'Sonne', cat: 'natur' },
    { gr: 'Fengari', el: 'Φεγγάρι', de: 'Mond', cat: 'natur' },
    { gr: 'Asteria', el: 'Αστέρια', de: 'Sterne', cat: 'natur' },
    { gr: 'Vouno', el: 'Βουνό', de: 'Berg', cat: 'natur' },
    { gr: 'Dentro', el: 'Δέντρο', de: 'Baum', cat: 'natur' },
    { gr: 'Louloudi', el: 'Λουλούδι', de: 'Blume', cat: 'natur' },
    { gr: 'Elia', el: 'Ελιά', de: 'Olivenbaum', cat: 'natur' },
    { gr: 'Katsika', el: 'Κατσίκα', de: 'Ziege', cat: 'natur' },
    { gr: 'Gata', el: 'Γάτα', de: 'Katze', cat: 'natur' },
    { gr: 'Skilos', el: 'Σκύλος', de: 'Hund', cat: 'natur' },
    { gr: 'Anemos', el: 'Άνεμος', de: 'Wind', cat: 'natur' },
    { gr: 'Vrochi', el: 'Βροχή', de: 'Regen', cat: 'natur' },
    { gr: 'Zesti', el: 'Ζέστη', de: 'Hitze / Heiß', cat: 'natur' },
    { gr: 'Krio', el: 'Κρύο', de: 'Kalt', cat: 'natur' },
    { gr: 'Nisi', el: 'Νησί', de: 'Insel', cat: 'natur' },
    { gr: 'Chorio', el: 'Χωριό', de: 'Dorf', cat: 'natur' },

    // SMALLTALK
    { gr: 'Pos se lene?', el: 'Πως σε λένε;', de: 'Wie heißt du?', cat: 'smalltalk' },
    { gr: 'Me lene...', el: 'Με λένε...', de: 'Ich heiße...', cat: 'smalltalk' },
    { gr: 'Ti kanis?', el: 'Τι κάνεις;', de: 'Wie geht es dir?', cat: 'smalltalk' },
    { gr: 'Kala ime', el: 'Καλά είμαι', de: 'Mir geht es gut', cat: 'smalltalk' },
    { gr: 'Apo pou ise?', el: 'Από πού είσαι;', de: 'Woher kommst du?', cat: 'smalltalk' },
    { gr: 'Ime apo ti Germania', el: 'Είμαι από τη Γερμανία', de: 'Ich komme aus Deutschland', cat: 'smalltalk' },
    { gr: 'Milate germanika?', el: 'Μιλάτε γερμανικά;', de: 'Sprechen Sie Deutsch?', cat: 'smalltalk' },
    { gr: 'Den katalaveno', el: 'Δεν καταλαβαίνω', de: 'Ich verstehe nicht', cat: 'smalltalk' },
    { gr: 'Oraia', el: 'Ωραία', de: 'Schön / Super', cat: 'smalltalk' },
    { gr: 'Endaxi', el: 'Εντάξει', de: 'Okay / In Ordnung', cat: 'smalltalk' },
    { gr: 'Agapi', el: 'Αγάπη', de: 'Liebe', cat: 'smalltalk' },
    { gr: 'Jamas!', el: 'Γεια μας!', de: 'Prost! (informal)', cat: 'smalltalk' },
    { gr: 'Ela!', el: 'Έλα!', de: 'Komm! / Hey!', cat: 'smalltalk' },
    { gr: 'Siga siga', el: 'Σιγά σιγά', de: 'Langsam langsam', cat: 'smalltalk' },
    { gr: 'Opa!', el: 'Ωπα!', de: 'Opa! (Ausruf der Freude)', cat: 'smalltalk' },

    // VERBEN
    { gr: 'Ime', el: 'Είμαι', de: 'sein', cat: 'alltag', verb: true, conj: {
        present: ['είμαι','είσαι','είναι','είμαστε','είστε','είναι'],
        past: ['ήμουν','ήσουν','ήταν','ήμασταν','ήσασταν','ήταν'],
        future: ['θα είμαι','θα είσαι','θα είναι','θα είμαστε','θα είστε','θα είναι']
    }},
    { gr: 'Echo', el: 'Έχω', de: 'haben', cat: 'alltag', verb: true, conj: {
        present: ['έχω','έχεις','έχει','έχουμε','έχετε','έχουν'],
        past: ['είχα','είχες','είχε','είχαμε','είχατε','είχαν'],
        future: ['θα έχω','θα έχεις','θα έχει','θα έχουμε','θα έχετε','θα έχουν']
    }},
    { gr: 'Thelo', el: 'Θέλω', de: 'wollen', cat: 'alltag', verb: true, conj: {
        present: ['θέλω','θέλεις','θέλει','θέλουμε','θέλετε','θέλουν'],
        past: ['ήθελα','ήθελες','ήθελε','θέλαμε','θέλατε','ήθελαν'],
        future: ['θα θέλω','θα θέλεις','θα θέλει','θα θέλουμε','θα θέλετε','θα θέλουν']
    }},
    { gr: 'Boro', el: 'Μπορώ', de: 'können', cat: 'alltag', verb: true, conj: {
        present: ['μπορώ','μπορείς','μπορεί','μπορούμε','μπορείτε','μπορούν'],
        past: ['μπορούσα','μπορούσες','μπορούσε','μπορούσαμε','μπορούσατε','μπορούσαν'],
        future: ['θα μπορώ','θα μπορείς','θα μπορεί','θα μπορούμε','θα μπορείτε','θα μπορούν']
    }},
    { gr: 'Pao', el: 'Πάω', de: 'gehen', cat: 'reise', verb: true, conj: {
        present: ['πάω','πας','πάει','πάμε','πάτε','πάνε'],
        past: ['πήγα','πήγες','πήγε','πήγαμε','πήγατε','πήγαν'],
        future: ['θα πάω','θα πας','θα πάει','θα πάμε','θα πάτε','θα πάνε']
    }},
    { gr: 'Erchomai', el: 'Έρχομαι', de: 'kommen', cat: 'reise', verb: true, conj: {
        present: ['έρχομαι','έρχεσαι','έρχεται','ερχόμαστε','έρχεστε','έρχονται'],
        past: ['ήρθα','ήρθες','ήρθε','ήρθαμε','ήρθατε','ήρθαν'],
        future: ['θα έρθω','θα έρθεις','θα έρθει','θα έρθουμε','θα έρθετε','θα έρθουν']
    }},
    { gr: 'Troo', el: 'Τρώω', de: 'essen', cat: 'essen', verb: true, conj: {
        present: ['τρώω','τρως','τρώει','τρώμε','τρώτε','τρώνε'],
        past: ['έφαγα','έφαγες','έφαγε','φάγαμε','φάγατε','έφαγαν'],
        future: ['θα φάω','θα φας','θα φάει','θα φάμε','θα φάτε','θα φάνε']
    }},
    { gr: 'Pino', el: 'Πίνω', de: 'trinken', cat: 'essen', verb: true, conj: {
        present: ['πίνω','πίνεις','πίνει','πίνουμε','πίνετε','πίνουν'],
        past: ['ήπια','ήπιες','ήπιε','ήπιαμε','ήπιατε','ήπιαν'],
        future: ['θα πιω','θα πιεις','θα πιει','θα πιούμε','θα πιείτε','θα πιουν']
    }},
    { gr: 'Milao', el: 'Μιλάω', de: 'sprechen', cat: 'smalltalk', verb: true, conj: {
        present: ['μιλάω','μιλάς','μιλάει','μιλάμε','μιλάτε','μιλάνε'],
        past: ['μίλησα','μίλησες','μίλησε','μιλήσαμε','μιλήσατε','μίλησαν'],
        future: ['θα μιλήσω','θα μιλήσεις','θα μιλήσει','θα μιλήσουμε','θα μιλήσετε','θα μιλήσουν']
    }},
    { gr: 'Katalaveno', el: 'Καταλαβαίνω', de: 'verstehen', cat: 'smalltalk', verb: true, conj: {
        present: ['καταλαβαίνω','καταλαβαίνεις','καταλαβαίνει','καταλαβαίνουμε','καταλαβαίνετε','καταλαβαίνουν'],
        past: ['κατάλαβα','κατάλαβες','κατάλαβε','καταλάβαμε','καταλάβατε','κατάλαβαν'],
        future: ['θα καταλάβω','θα καταλάβεις','θα καταλάβει','θα καταλάβουμε','θα καταλάβετε','θα καταλάβουν']
    }},
    { gr: 'Agapo', el: 'Αγαπώ', de: 'lieben', cat: 'smalltalk', verb: true, conj: {
        present: ['αγαπώ','αγαπάς','αγαπάει','αγαπάμε','αγαπάτε','αγαπάνε'],
        past: ['αγάπησα','αγάπησες','αγάπησε','αγαπήσαμε','αγαπήσατε','αγάπησαν'],
        future: ['θα αγαπήσω','θα αγαπήσεις','θα αγαπήσει','θα αγαπήσουμε','θα αγαπήσετε','θα αγαπήσουν']
    }},
    { gr: 'Doulévo', el: 'Δουλεύω', de: 'arbeiten', cat: 'alltag', verb: true, conj: {
        present: ['δουλεύω','δουλεύεις','δουλεύει','δουλεύουμε','δουλεύετε','δουλεύουν'],
        past: ['δούλεψα','δούλεψες','δούλεψε','δουλέψαμε','δουλέψατε','δούλεψαν'],
        future: ['θα δουλέψω','θα δουλέψεις','θα δουλέψει','θα δουλέψουμε','θα δουλέψετε','θα δουλέψουν']
    }},
    { gr: 'Kano', el: 'Κάνω', de: 'machen / tun', cat: 'alltag', verb: true, conj: {
        present: ['κάνω','κάνεις','κάνει','κάνουμε','κάνετε','κάνουν'],
        past: ['έκανα','έκανες','έκανε','κάναμε','κάνατε','έκαναν'],
        future: ['θα κάνω','θα κάνεις','θα κάνει','θα κάνουμε','θα κάνετε','θα κάνουν']
    }},
    { gr: 'Vlepo', el: 'Βλέπω', de: 'sehen', cat: 'alltag', verb: true, conj: {
        present: ['βλέπω','βλέπεις','βλέπει','βλέπουμε','βλέπετε','βλέπουν'],
        past: ['είδα','είδες','είδε','είδαμε','είδατε','είδαν'],
        future: ['θα δω','θα δεις','θα δει','θα δούμε','θα δείτε','θα δουν']
    }},
    { gr: 'Akouo', el: 'Ακούω', de: 'hören', cat: 'alltag', verb: true, conj: {
        present: ['ακούω','ακούς','ακούει','ακούμε','ακούτε','ακούνε'],
        past: ['άκουσα','άκουσες','άκουσε','ακούσαμε','ακούσατε','άκουσαν'],
        future: ['θα ακούσω','θα ακούσεις','θα ακούσει','θα ακούσουμε','θα ακούσετε','θα ακούσουν']
    }},
    { gr: 'Xero', el: 'Ξέρω', de: 'wissen', cat: 'alltag', verb: true, conj: {
        present: ['ξέρω','ξέρεις','ξέρει','ξέρουμε','ξέρετε','ξέρουν'],
        past: ['ήξερα','ήξερες','ήξερε','ξέραμε','ξέρατε','ήξεραν'],
        future: ['θα ξέρω','θα ξέρεις','θα ξέρει','θα ξέρουμε','θα ξέρετε','θα ξέρουν']
    }},
    { gr: 'Magirevo', el: 'Μαγειρεύω', de: 'kochen', cat: 'essen', verb: true, conj: {
        present: ['μαγειρεύω','μαγειρεύεις','μαγειρεύει','μαγειρεύουμε','μαγειρεύετε','μαγειρεύουν'],
        past: ['μαγείρεψα','μαγείρεψες','μαγείρεψε','μαγειρέψαμε','μαγειρέψατε','μαγείρεψαν'],
        future: ['θα μαγειρέψω','θα μαγειρέψεις','θα μαγειρέψει','θα μαγειρέψουμε','θα μαγειρέψετε','θα μαγειρέψουν']
    }},
];

// ── Sentences ──
var SENTENCES = [
    // ALLTAG
    { de: 'Guten Morgen, wie geht es dir?', el: 'Καλημέρα, τι κάνεις;', gr: 'Kalimera, ti kanis?', hint: 'Καλημέρα + Τι κάνεις', cat: 'alltag' },
    { de: 'Danke, mir geht es gut.', el: 'Ευχαριστώ, καλά είμαι.', gr: 'Efcharisto, kala ime.', hint: 'Ευχαριστώ + Καλά', cat: 'alltag' },
    { de: 'Ja, das Haus ist sehr groß.', el: 'Ναι, το σπίτι είναι πολύ μεγάλο.', gr: 'Ne, to spiti ine poli megalo.', hint: 'Ναι + Σπίτι + Πολύ + Μεγάλο', cat: 'alltag' },
    { de: 'Entschuldigung, wo ist die Straße?', el: 'Συγγνώμη, πού είναι ο δρόμος;', gr: 'Signomi, pou ine o dromos?', hint: 'Συγγνώμη + Δρόμος', cat: 'alltag' },
    { de: 'Heute ist es sehr heiß.', el: 'Σήμερα είναι πολύ ζέστη.', gr: 'Simera ine poli zesti.', hint: 'Σήμερα + Πολύ + Ζέστη', cat: 'alltag' },
    { de: 'Morgen will ich arbeiten.', el: 'Αύριο θέλω να δουλέψω.', gr: 'Avrio thelo na doulepso.', hint: 'Αύριο + Θέλω + Δουλεύω', cat: 'alltag' },
    { de: 'Die Kinder sind meine Freunde.', el: 'Τα παιδιά είναι φίλοι μου.', gr: 'Ta pedia ine filoi mou.', hint: 'Παιδιά + Φίλοι', cat: 'alltag' },
    { de: 'Ich habe kein Geld.', el: 'Δεν έχω λεφτά.', gr: 'Den echo lefta.', hint: 'Έχω + Λεφτά', cat: 'alltag' },
    { de: 'Ich kann das nicht machen.', el: 'Δεν μπορώ να το κάνω.', gr: 'Den boro na to kano.', hint: 'Μπορώ + Κάνω', cat: 'alltag' },
    { de: 'Ich weiß es nicht.', el: 'Δεν ξέρω.', gr: 'Den xero.', hint: 'Ξέρω', cat: 'alltag' },
    { de: 'Gestern war es kalt.', el: 'Χθες ήταν κρύο.', gr: 'Chthes itan krio.', hint: 'Χθες + Κρύο', cat: 'alltag' },

    // ESSEN
    { de: 'Ich möchte Brot und Käse, bitte.', el: 'Θέλω ψωμί και τυρί, παρακαλώ.', gr: 'Thelo psomi ke tiri, parakalo.', hint: 'Θέλω + Ψωμί + Τυρί + Παρακαλώ', cat: 'essen' },
    { de: 'Der Kaffee ist sehr gut.', el: 'Ο καφές είναι πολύ καλός.', gr: 'O kafes ine poli kalos.', hint: 'Καφές + Πολύ + Καλό', cat: 'essen' },
    { de: 'Kann ich Wasser trinken?', el: 'Μπορώ να πιω νερό;', gr: 'Boro na pio nero?', hint: 'Μπορώ + Πίνω + Νερό', cat: 'essen' },
    { de: 'Die Tomaten und die Oliven sind frisch.', el: 'Οι ντομάτες και οι ελιές είναι φρέσκες.', gr: 'I domates ke i elies ine freskes.', hint: 'Ντομάτες + Ελιές', cat: 'essen' },
    { de: 'Wir essen Fisch mit Salat.', el: 'Τρώμε ψάρι με σαλάτα.', gr: 'Trome psari me salata.', hint: 'Τρώω + Ψάρι + Σαλάτα', cat: 'essen' },
    { de: 'Auf unsere Gesundheit!', el: 'Στην υγεία μας!', gr: 'Stin ijia mas!', hint: 'Στην υγεία μας', cat: 'essen' },
    { de: 'Ich koche mit Olivenöl und Knoblauch.', el: 'Μαγειρεύω με λάδι και σκόρδο.', gr: 'Magirevo me ladi ke skordo.', hint: 'Μαγειρεύω + Λάδι + Σκόρδο', cat: 'essen' },
    { de: 'Die Rechnung, bitte.', el: 'Τον λογαριασμό, παρακαλώ.', gr: 'Ton logariasmo, parakalo.', hint: 'Λογαριασμό + Παρακαλώ', cat: 'essen' },
    { de: 'Das Hähnchen mit Kartoffeln ist gut.', el: 'Το κοτόπουλο με πατάτες είναι καλό.', gr: 'To kotopoulo me patates ine kalo.', hint: 'Κοτόπουλο + Πατάτες + Καλό', cat: 'essen' },
    { de: 'Ich trinke Wein und esse Bauernsalat.', el: 'Πίνω κρασί και τρώω χωριάτικη.', gr: 'Pino krasi ke troo horiatiki.', hint: 'Πίνω + Κρασί + Τρώω + Χωριάτικη', cat: 'essen' },

    // REISE
    { de: 'Wo ist der Strand?', el: 'Πού είναι η παραλία;', gr: 'Pou ine i paralia?', hint: 'Πού είναι + Παραλία', cat: 'reise' },
    { de: 'Der Hafen ist links.', el: 'Το λιμάνι είναι αριστερά.', gr: 'To limani ine aristera.', hint: 'Λιμάνι + Αριστερά', cat: 'reise' },
    { de: 'Wie viel kostet das Ticket?', el: 'Πόσο κάνει το εισιτήριο;', gr: 'Poso kani to eisitirio?', hint: 'Πόσο κάνει + Εισιτήριο', cat: 'reise' },
    { de: 'Die Apotheke ist nah, geradeaus.', el: 'Το φαρμακείο είναι κοντά, ευθεία.', gr: 'To farmakio ine konda, efthia.', hint: 'Φαρμακείο + Κοντά + Ευθεία', cat: 'reise' },
    { de: 'Ich gehe zum Meer.', el: 'Πάω στη θάλασσα.', gr: 'Pao sti thalassa.', hint: 'Πάω + Θάλασσα', cat: 'reise' },
    { de: 'Das Hotel ist weit.', el: 'Το ξενοδοχείο είναι μακριά.', gr: 'To xenodochio ine makria.', hint: 'Ξενοδοχείο + Μακριά', cat: 'reise' },
    { de: 'Zwei Zimmer, bitte.', el: 'Δύο δωμάτια, παρακαλώ.', gr: 'Dio domatia, parakalo.', hint: 'Δύο + Δωμάτιο + Παρακαλώ', cat: 'reise' },
    { de: 'Wir kommen morgen zum Flughafen.', el: 'Ερχόμαστε αύριο στο αεροδρόμιο.', gr: 'Erchomaste avrio sto aerodromio.', hint: 'Έρχομαι + Αύριο + Αεροδρόμιο', cat: 'reise' },

    // NATUR
    { de: 'Die Sonne und das Meer sind schön.', el: 'Ο ήλιος και η θάλασσα είναι ωραία.', gr: 'O ilios ke i thalassa ine oraia.', hint: 'Ήλιος + Θάλασσα + Ωραία', cat: 'natur' },
    { de: 'Die Ziege ist unter dem Olivenbaum.', el: 'Η κατσίκα είναι κάτω από την ελιά.', gr: 'I katsika ine kato apo tin elia.', hint: 'Κατσίκα + Ελιά', cat: 'natur' },
    { de: 'Ich sehe die Sterne und den Mond.', el: 'Βλέπω τα αστέρια και το φεγγάρι.', gr: 'Vlepo ta asteria ke to fengari.', hint: 'Βλέπω + Αστέρια + Φεγγάρι', cat: 'natur' },
    { de: 'Der Wind ist heute stark.', el: 'Ο άνεμος είναι σήμερα δυνατός.', gr: 'O anemos ine simera dinatos.', hint: 'Άνεμος + Σήμερα', cat: 'natur' },
    { de: 'Das Dorf ist auf dem Berg.', el: 'Το χωριό είναι στο βουνό.', gr: 'To chorio ine sto vouno.', hint: 'Χωριό + Βουνό', cat: 'natur' },
    { de: 'Die Insel hat viele Blumen und Bäume.', el: 'Το νησί έχει πολλά λουλούδια και δέντρα.', gr: 'To nisi echi polla louloudia ke dentra.', hint: 'Νησί + Έχω + Λουλούδι + Δέντρο', cat: 'natur' },
    { de: 'Die Katze und der Hund schlafen.', el: 'Η γάτα και ο σκύλος κοιμούνται.', gr: 'I gata ke o skilos kimounte.', hint: 'Γάτα + Σκύλος', cat: 'natur' },

    // SMALLTALK
    { de: 'Wie heißt du? Ich heiße Ignatios.', el: 'Πως σε λένε; Με λένε Ιγνάτιος.', gr: 'Pos se lene? Me lene Ignatios.', hint: 'Πως σε λένε + Με λένε', cat: 'smalltalk' },
    { de: 'Ich komme aus Deutschland.', el: 'Είμαι από τη Γερμανία.', gr: 'Ime apo ti Germania.', hint: 'Είμαι + Γερμανία', cat: 'smalltalk' },
    { de: 'Ich verstehe nicht, sprechen Sie Deutsch?', el: 'Δεν καταλαβαίνω, μιλάτε γερμανικά;', gr: 'Den katalaveno, milate germanika?', hint: 'Καταλαβαίνω + Μιλάω', cat: 'smalltalk' },
    { de: 'Alles okay, langsam langsam.', el: 'Εντάξει, σιγά σιγά.', gr: 'Endaxi, siga siga.', hint: 'Εντάξει + Σιγά σιγά', cat: 'smalltalk' },
    { de: 'Komm, es ist schön hier!', el: 'Έλα, είναι ωραία εδώ!', gr: 'Ela, ine oraia edo!', hint: 'Έλα + Ωραία', cat: 'smalltalk' },
    { de: 'Prost! Ich liebe Griechenland.', el: 'Γεια μας! Αγαπώ την Ελλάδα.', gr: 'Jamas! Agapo tin Ellada.', hint: 'Γεια μας + Αγαπώ', cat: 'smalltalk' },
    { de: 'Guten Abend, wie geht es Ihnen?', el: 'Καλησπέρα, τι κάνετε;', gr: 'Kalispera, ti kanete?', hint: 'Καλησπέρα + Κάνω', cat: 'smalltalk' },
    { de: 'Gute Nacht, bis morgen.', el: 'Καληνύχτα, τα λέμε αύριο.', gr: 'Kalinichta, ta leme avrio.', hint: 'Καληνύχτα + Αύριο', cat: 'smalltalk' },
];

// ── State ──
var STORAGE_KEY = 'vocab_progress';
var currentMode = 'words'; // 'words' or 'sentences'
var currentCat = 'all';
var currentWord = null;
var currentDirection = null; // 'gr2de' or 'de2gr'
var answered = false;
var stats = { correct: 0, wrong: 0, streak: 0 };
var mastered = {}; // { wordIndex: correctCount }

function loadProgress() {
    try {
        var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (saved) {
            stats = saved.stats || stats;
            mastered = saved.mastered || {};
        }
    } catch (e) {}
    updateStats();
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ stats: stats, mastered: mastered }));
}

// ── Filtered items ──
function getFilteredWords() {
    var source = currentMode === 'sentences' ? SENTENCES : WORDS;
    if (currentCat === 'all') return source;
    return source.filter(function (w) { return w.cat === currentCat; });
}

function getWordIndex(word) {
    var source = currentMode === 'sentences' ? SENTENCES : WORDS;
    return source.indexOf(word);
}

function getMasteryKey(word) {
    var prefix = currentMode === 'sentences' ? 's_' : 'w_';
    var source = currentMode === 'sentences' ? SENTENCES : WORDS;
    return prefix + source.indexOf(word);
}

// ── Pick next word ──
function pickWord() {
    var pool = getFilteredWords();
    // Prefer items not yet mastered (< 3 correct)
    var unmastered = pool.filter(function (w) {
        var key = getMasteryKey(w);
        return !mastered[key] || mastered[key] < 3;
    });

    var source = unmastered.length > 0 ? unmastered : pool;
    var word = source[Math.floor(Math.random() * source.length)];

    // Avoid repeating the same item
    if (source.length > 1 && word === currentWord) {
        return pickWord();
    }

    currentWord = word;
    // Sentences always show de→gr direction
    if (currentMode === 'sentences') {
        currentDirection = Math.random() < 0.5 ? 'gr2de' : 'de2gr';
    } else {
        currentDirection = Math.random() < 0.5 ? 'gr2de' : 'de2gr';
    }
    answered = false;
    render();
}

// ── Render ──
function render() {
    var dirEl = document.getElementById('card-direction');
    var wordEl = document.getElementById('card-word');
    var phoneticEl = document.getElementById('card-phonetic');
    var hintEl = document.getElementById('card-hint');
    var cardEl = document.getElementById('card');
    var input = document.getElementById('answer-input');
    var feedback = document.getElementById('feedback');
    var nextBtn = document.getElementById('next-btn');
    var checkBtn = document.getElementById('check-btn');

    // Sentence mode styling
    if (currentMode === 'sentences') {
        cardEl.classList.add('sentence-mode');
    } else {
        cardEl.classList.remove('sentence-mode');
    }

    if (currentDirection === 'gr2de') {
        dirEl.textContent = currentMode === 'sentences' ? 'Übersetze ins Deutsche' : 'Griechisch → Deutsch';
        wordEl.textContent = currentWord.el;
        phoneticEl.textContent = currentWord.gr;
        input.placeholder = 'Deutsche Übersetzung...';
    } else {
        dirEl.textContent = currentMode === 'sentences' ? 'Übersetze ins Griechische' : 'Deutsch → Griechisch';
        wordEl.textContent = currentWord.de;
        phoneticEl.textContent = '';
        input.placeholder = currentMode === 'sentences' ? 'Griechische Übersetzung...' : 'Griechisch (Lautschrift okay)...';
    }

    // Show hint for sentences
    if (currentMode === 'sentences' && currentWord.hint) {
        hintEl.textContent = 'Vokabeln: ' + currentWord.hint;
        hintEl.hidden = false;
    } else {
        hintEl.hidden = true;
    }

    input.value = '';
    input.className = '';
    input.disabled = false;
    feedback.hidden = true;
    feedback.className = 'feedback';
    nextBtn.hidden = true;
    nextBtn.innerHTML = currentMode === 'sentences' ? 'Nächster Satz &rarr;' : 'Nächstes Wort &rarr;';
    checkBtn.hidden = false;
    input.focus();

    // Conjugation section (only in word mode)
    renderConjugation();

    updateProgress();
}

var PERSONS = ['εγώ', 'εσύ', 'αυτός/ή/ό', 'εμείς', 'εσείς', 'αυτοί/ές/ά'];
var TENSE_LABELS = { present: 'Ενεστώτας (Präsens)', past: 'Αόριστος (Vergangenheit)', future: 'Μέλλοντας (Zukunft)' };

function renderConjugation() {
    var section = document.getElementById('conj-section');
    var tables = document.getElementById('conj-tables');

    if (!currentWord || !currentWord.verb || !currentWord.conj) {
        section.hidden = true;
        section.removeAttribute('open');
        return;
    }

    section.hidden = false;
    section.removeAttribute('open');

    var html = '';
    var tenses = ['present', 'past', 'future'];
    for (var t = 0; t < tenses.length; t++) {
        var tense = tenses[t];
        var forms = currentWord.conj[tense];
        if (!forms) continue;

        html += '<div class="conj-tense">';
        html += '<div class="conj-tense-label">' + TENSE_LABELS[tense] + '</div>';
        html += '<div class="conj-grid">';
        for (var p = 0; p < PERSONS.length; p++) {
            html += '<span class="conj-person">' + PERSONS[p] + '</span>';
            html += '<span class="conj-form">' + forms[p] + '</span>';
        }
        html += '</div></div>';
    }

    tables.innerHTML = html;
}

function updateProgress() {
    var pool = getFilteredWords();
    var done = 0;
    pool.forEach(function (w) {
        var key = getMasteryKey(w);
        if (mastered[key] && mastered[key] >= 3) done++;
    });

    var pct = pool.length > 0 ? (done / pool.length) * 100 : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    var label = currentMode === 'sentences' ? ' Sätze gelernt' : ' gelernt';
    document.getElementById('progress-text').textContent = done + ' / ' + pool.length + label;
}

function updateStats() {
    document.getElementById('stat-correct').textContent = stats.correct;
    document.getElementById('stat-wrong').textContent = stats.wrong;
    document.getElementById('stat-streak').textContent = stats.streak;
}

// ── Check answer ──
function normalize(str) {
    return str.toLowerCase().trim()
        .replace(/[·\-,;:!?.()\/]/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
        .trim();
}

function checkAnswer() {
    if (answered || !currentWord) return;

    var input = document.getElementById('answer-input');
    var guess = input.value.trim();
    if (!guess) return;

    answered = true;
    var correct;
    var expected;

    if (currentMode === 'sentences') {
        if (currentDirection === 'gr2de') {
            expected = currentWord.de;
            correct = isSentenceMatch(guess, expected);
        } else {
            expected = currentWord.el;
            correct = isSentenceMatch(guess, currentWord.el) || isSentenceMatch(guess, currentWord.gr);
            if (!correct) expected = currentWord.el + '\n(' + currentWord.gr + ')';
        }
    } else if (currentDirection === 'gr2de') {
        expected = currentWord.de;
        correct = isMatch(guess, expected);
    } else {
        // Accept Greek script, transliteration, or phonetic
        expected = currentWord.el + ' / ' + currentWord.gr;
        correct = isMatch(guess, currentWord.el) || isMatch(guess, currentWord.gr);
    }

    var feedback = document.getElementById('feedback');
    var icon = document.getElementById('feedback-icon');
    var text = document.getElementById('feedback-text');
    var correctEl = document.getElementById('feedback-correct');
    var checkBtn = document.getElementById('check-btn');
    var nextBtn = document.getElementById('next-btn');

    var key = getMasteryKey(currentWord);

    if (correct) {
        input.className = 'correct';
        feedback.className = 'feedback is-correct';
        icon.textContent = '✅';
        text.textContent = 'Richtig!';
        correctEl.textContent = '';
        stats.correct++;
        stats.streak++;

        mastered[key] = (mastered[key] || 0) + 1;
    } else {
        input.className = 'wrong';
        feedback.className = 'feedback is-wrong';
        icon.textContent = '❌';
        text.textContent = 'Nicht ganz.';
        correctEl.textContent = 'Richtig: ' + expected;
        stats.wrong++;
        stats.streak = 0;

        // Reset mastery on wrong
        if (mastered[key]) mastered[key] = Math.max(0, mastered[key] - 1);
    }

    feedback.hidden = false;
    input.disabled = true;
    checkBtn.hidden = true;
    nextBtn.hidden = false;
    nextBtn.focus();

    updateStats();
    saveProgress();
}

function isMatch(guess, answer) {
    var g = normalize(guess);
    var a = normalize(answer);

    if (g === a) return true;

    // Split original answer (before normalize) by / and () to get parts
    var rawParts = answer.split(/[\/]/);
    for (var i = 0; i < rawParts.length; i++) {
        // Also strip parenthetical suffixes like "(m)" or "(Speise)"
        var clean = rawParts[i].replace(/\(.*?\)/g, '').trim();
        if (normalize(clean) === g) return true;
        // Also try the full part with parens normalized
        if (normalize(rawParts[i]) === g) return true;
    }

    // Check if guess matches the core word (everything before first parenthesis)
    var core = answer.replace(/\(.*?\)/g, '').replace(/\/.*/g, '').trim();
    if (normalize(core) === g) return true;

    // Levenshtein for close matches (allow 1 char off for words > 4 chars)
    if (g.length > 4 && levenshtein(g, a) <= 1) return true;
    if (g.length > 4 && levenshtein(g, normalize(core)) <= 1) return true;

    return false;
}

function isSentenceMatch(guess, answer) {
    var g = normalize(guess);
    var a = normalize(answer);

    if (g === a) return true;

    // Allow proportional typo tolerance: 1 error per 10 chars, minimum 2
    var maxDist = Math.max(2, Math.floor(a.length / 10));
    if (levenshtein(g, a) <= maxDist) return true;

    return false;
}

function levenshtein(a, b) {
    var m = a.length, n = b.length;
    var dp = [];
    for (var i = 0; i <= m; i++) {
        dp[i] = [i];
        for (var j = 1; j <= n; j++) {
            dp[i][j] = i === 0 ? j : 0;
        }
    }
    for (var i2 = 1; i2 <= m; i2++) {
        for (var j2 = 1; j2 <= n; j2++) {
            if (a[i2 - 1] === b[j2 - 1]) {
                dp[i2][j2] = dp[i2 - 1][j2 - 1];
            } else {
                dp[i2][j2] = 1 + Math.min(dp[i2 - 1][j2], dp[i2][j2 - 1], dp[i2 - 1][j2 - 1]);
            }
        }
    }
    return dp[m][n];
}

// ── Speech Synthesis (TTS) ──
function speakGreek(text) {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    var utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'el-GR';
    utter.rate = 0.85;

    var voices = window.speechSynthesis.getVoices();
    var greekVoice = voices.find(function (v) { return v.lang.startsWith('el'); });
    if (greekVoice) utter.voice = greekVoice;

    var btn = document.getElementById('speak-btn');
    btn.classList.add('speaking');
    utter.onend = function () { btn.classList.remove('speaking'); };
    utter.onerror = function () { btn.classList.remove('speaking'); };

    window.speechSynthesis.speak(utter);
}

// ── Speech Recognition (STT) ──
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = null;

function initSpeechRecognition() {
    var micBtn = document.getElementById('mic-btn');

    if (!SpeechRecognition) {
        micBtn.classList.add('unavailable');
        micBtn.title = 'Spracheingabe nicht verfügbar';
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function (e) {
        var transcript = e.results[0][0].transcript;
        document.getElementById('answer-input').value = transcript;
        micBtn.classList.remove('listening');
    };

    recognition.onerror = function () {
        micBtn.classList.remove('listening');
    };

    recognition.onend = function () {
        micBtn.classList.remove('listening');
    };
}

function startListening() {
    if (!recognition) return;

    var micBtn = document.getElementById('mic-btn');
    var input = document.getElementById('answer-input');

    if (micBtn.classList.contains('listening')) {
        recognition.stop();
        return;
    }

    // Set language based on expected answer
    if (currentDirection === 'gr2de') {
        recognition.lang = 'de-DE';
    } else {
        recognition.lang = 'el-GR';
    }

    micBtn.classList.add('listening');
    input.placeholder = 'Höre zu...';
    recognition.start();
}

// ── Event Listeners ──
(function () {
    loadProgress();
    initSpeechRecognition();

    // Ensure voices are loaded
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = function () {
            window.speechSynthesis.getVoices();
        };
    }

    // Mode toggle
    document.getElementById('mode-toggle').addEventListener('click', function (e) {
        var btn = e.target.closest('.mode-btn');
        if (!btn) return;

        document.querySelectorAll('.mode-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentMode = btn.getAttribute('data-mode');
        pickWord();
    });

    // Categories
    document.getElementById('categories').addEventListener('click', function (e) {
        var btn = e.target.closest('.cat-btn');
        if (!btn) return;

        document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentCat = btn.getAttribute('data-cat');
        pickWord();
    });

    // Speak button
    document.getElementById('speak-btn').addEventListener('click', function () {
        if (!currentWord) return;
        if (currentDirection === 'gr2de') {
            speakGreek(currentWord.el);
        } else if (answered) {
            speakGreek(currentWord.el);
        }
    });

    // Check
    document.getElementById('check-btn').addEventListener('click', checkAnswer);

    // Enter key
    document.getElementById('answer-input').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            if (!answered) {
                checkAnswer();
            } else {
                pickWord();
            }
        }
    });

    // Next
    document.getElementById('next-btn').addEventListener('click', pickWord);

    // Mic
    document.getElementById('mic-btn').addEventListener('click', startListening);

    // Reset
    document.getElementById('reset-btn').addEventListener('click', function () {
        if (confirm('Fortschritt wirklich zurücksetzen?')) {
            stats = { correct: 0, wrong: 0, streak: 0 };
            mastered = {};
            saveProgress();
            updateStats();
            pickWord();
        }
    });

    // Auto-speak Greek words
    pickWord();

    // Auto-speak on new Greek word
    var origPick = pickWord;
    // Slight delay to speak after render
    setTimeout(function () {
        if (currentDirection === 'gr2de' && currentWord) {
            speakGreek(currentWord.el);
        }
    }, 400);
})();
