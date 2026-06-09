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
];

// ── State ──
var STORAGE_KEY = 'vocab_progress';
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

// ── Filtered words ──
function getFilteredWords() {
    if (currentCat === 'all') return WORDS;
    return WORDS.filter(function (w) { return w.cat === currentCat; });
}

function getWordIndex(word) {
    return WORDS.indexOf(word);
}

// ── Pick next word ──
function pickWord() {
    var pool = getFilteredWords();
    // Prefer words not yet mastered (< 3 correct)
    var unmastered = pool.filter(function (w) {
        var idx = getWordIndex(w);
        return !mastered[idx] || mastered[idx] < 3;
    });

    var source = unmastered.length > 0 ? unmastered : pool;
    var word = source[Math.floor(Math.random() * source.length)];

    // Avoid repeating the same word
    if (source.length > 1 && word === currentWord) {
        return pickWord();
    }

    currentWord = word;
    currentDirection = Math.random() < 0.5 ? 'gr2de' : 'de2gr';
    answered = false;
    render();
}

// ── Render ──
function render() {
    var dirEl = document.getElementById('card-direction');
    var wordEl = document.getElementById('card-word');
    var phoneticEl = document.getElementById('card-phonetic');
    var input = document.getElementById('answer-input');
    var feedback = document.getElementById('feedback');
    var nextBtn = document.getElementById('next-btn');
    var checkBtn = document.getElementById('check-btn');

    if (currentDirection === 'gr2de') {
        dirEl.textContent = 'Griechisch → Deutsch';
        wordEl.textContent = currentWord.el;
        phoneticEl.textContent = currentWord.gr;
        input.placeholder = 'Deutsche Übersetzung...';
    } else {
        dirEl.textContent = 'Deutsch → Griechisch';
        wordEl.textContent = currentWord.de;
        phoneticEl.textContent = '';
        input.placeholder = 'Griechisch (Lautschrift okay)...';
    }

    input.value = '';
    input.className = '';
    input.disabled = false;
    feedback.hidden = true;
    feedback.className = 'feedback';
    nextBtn.hidden = true;
    checkBtn.hidden = false;
    input.focus();

    updateProgress();
}

function updateProgress() {
    var pool = getFilteredWords();
    var done = 0;
    pool.forEach(function (w) {
        var idx = getWordIndex(w);
        if (mastered[idx] && mastered[idx] >= 3) done++;
    });

    var pct = pool.length > 0 ? (done / pool.length) * 100 : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent = done + ' / ' + pool.length + ' gelernt';
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

    if (currentDirection === 'gr2de') {
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

    if (correct) {
        input.className = 'correct';
        feedback.className = 'feedback is-correct';
        icon.textContent = '✅';
        text.textContent = 'Richtig!';
        correctEl.textContent = '';
        stats.correct++;
        stats.streak++;

        var idx = getWordIndex(currentWord);
        mastered[idx] = (mastered[idx] || 0) + 1;
    } else {
        input.className = 'wrong';
        feedback.className = 'feedback is-wrong';
        icon.textContent = '❌';
        text.textContent = 'Nicht ganz.';
        correctEl.textContent = 'Richtig: ' + expected;
        stats.wrong++;
        stats.streak = 0;

        // Reset mastery on wrong
        var idx2 = getWordIndex(currentWord);
        if (mastered[idx2]) mastered[idx2] = Math.max(0, mastered[idx2] - 1);
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
