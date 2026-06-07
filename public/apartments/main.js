var _k = [5,2,9,12,11,1,4,3,6,10,0,7,8];
var _d = ['4','7','9','0','0','4','0','7','6','1','5','1','5'];
var WHATSAPP_NUMBER = '';
for (var i = 0; i < _k.length; i++) { WHATSAPP_NUMBER += _d[_k[i]]; }

(function () {
    // --- WhatsApp Formular ---
    const form = document.getElementById('inquiry-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (form.elements['website'].value) return;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const get = (name) => form.elements[name].value.trim();

        const von = get('von');
        const bis = get('bis');
        const datumszeile = von && bis ? `Datum: ${von} → ${bis}` : von ? `Ab: ${von}` : '';

        const message = [
            'Hallo! Ich interessiere mich für die Oleander Apartments in Vafios.',
            '',
            `Name: ${get('name')}`,
            `Zeitraum: ${get('zeitraum')}`,
            datumszeile,
            `Personen: ${get('personen')}`,
            `Dauer: ${get('dauer')}`,
            '',
            get('nachricht') ? `Nachricht: ${get('nachricht')}` : '',
        ].filter(Boolean).join('\n');

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });

    // --- WhatsApp-Kanal-Link (verschleiert) ---
    var _gk = [1,0,24,28,41,38,7,29,12,34,27,17,22,11,4,13,43,3,36,9,44,32,23,33,8,16,18,37,25,26,6,14,30,10,35,40,31,15,39,19,5,42,2,21,20];
    var _gd = ["h","w","0","n","h","M","X","p","9","l","w","c",".","a","s","i","V","m","b","S","o","1","/","0","a","v","D","o","t","p","0","n","0","2","c","a","e","7","a","Y","j","s","U","n","/"];
    var _gu = '';
    for (var i = 0; i < _gk.length; i++) { _gu += _gd[_gk[i]]; }
    var groupLink = document.getElementById('group-link');
    if (groupLink) { groupLink.href = 'https://' + _gu; }

    // --- Announcement Banner ---
    var ADMIN_PW = 'oleander2026';
    var STORAGE_KEY = 'oleander_periods';

    var HARDCODED_PERIODS = [
        { von: '2026-05-17', bis: '2026-06-14', note: '' }
    ];

    function getPeriods() {
        var local = [];
        try { local = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
        catch (e) { local = []; }
        return HARDCODED_PERIODS.concat(local).sort(function (a, b) { return a.von < b.von ? -1 : 1; });
    }

    function savePeriods(periods) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
    }

    function formatDate(dateStr) {
        var d = new Date(dateStr + 'T00:00:00');
        return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });
    }

    function showBanner() {
        var periods = getPeriods();
        var today = new Date().toISOString().slice(0, 10);
        var active = null;

        for (var i = 0; i < periods.length; i++) {
            if (periods[i].bis >= today) {
                active = periods[i];
                break;
            }
        }

        var banner = document.getElementById('announcement');
        var text = document.getElementById('announcement-text');

        if (active) {
            var msg = '📅 Iggy ist vom ' + formatDate(active.von) + ' bis ' + formatDate(active.bis) + ' vor Ort — komm vorbei und frag direkt an!';
            if (active.note) msg += ' ' + active.note;
            text.textContent = msg;
            banner.hidden = false;
        } else {
            banner.hidden = true;
        }
    }

    showBanner();

    // --- Admin Panel ---
    var adminOverlay = document.getElementById('admin-overlay');
    var adminLogin = document.getElementById('admin-login');
    var adminContent = document.getElementById('admin-content');
    var adminLoggedIn = false;

    document.addEventListener('keydown', function (e) {
        if (e.shiftKey && e.key === 'A') {
            adminOverlay.hidden = false;
            if (adminLoggedIn) renderAdmin();
        }
    });

    document.getElementById('admin-close').addEventListener('click', function () {
        adminOverlay.hidden = true;
    });

    adminOverlay.addEventListener('click', function (e) {
        if (e.target === adminOverlay) adminOverlay.hidden = true;
    });

    document.getElementById('admin-login-btn').addEventListener('click', doLogin);
    document.getElementById('admin-pw').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') doLogin();
    });

    function doLogin() {
        if (document.getElementById('admin-pw').value === ADMIN_PW) {
            adminLoggedIn = true;
            adminLogin.hidden = true;
            adminContent.hidden = false;
            renderAdmin();
        } else {
            document.getElementById('admin-pw').value = '';
            document.getElementById('admin-pw').placeholder = 'Falsches Passwort';
        }
    }

    function renderAdmin() {
        var periods = getPeriods();
        var today = new Date().toISOString().slice(0, 10);
        var list = document.getElementById('admin-list');
        list.innerHTML = '';

        if (periods.length === 0) {
            list.innerHTML = '<p style="opacity:0.5;font-size:0.9rem">Keine Zeiträume eingetragen.</p>';
            return;
        }

        periods.forEach(function (p, idx) {
            var isPast = p.bis < today;
            var div = document.createElement('div');
            div.className = 'admin-entry' + (isPast ? ' admin-entry-past' : '');
            div.innerHTML = '<div><div class="admin-entry-info">' + formatDate(p.von) + ' – ' + formatDate(p.bis) + '</div>' + (p.note ? '<div class="admin-entry-note">' + p.note + '</div>' : '') + '</div><button class="admin-delete" data-idx="' + idx + '">×</button>';
            list.appendChild(div);
        });

        list.querySelectorAll('.admin-delete').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var idx = parseInt(this.getAttribute('data-idx'));
                var periods = getPeriods();
                periods.splice(idx, 1);
                savePeriods(periods);
                renderAdmin();
                showBanner();
            });
        });
    }

    document.getElementById('admin-add-btn').addEventListener('click', function () {
        var von = document.getElementById('admin-von').value;
        var bis = document.getElementById('admin-bis').value;
        var note = document.getElementById('admin-note').value.trim();

        if (!von || !bis || bis < von) return;

        var periods = getPeriods();
        periods.push({ von: von, bis: bis, note: note });
        periods.sort(function (a, b) { return a.von < b.von ? -1 : 1; });
        savePeriods(periods);

        document.getElementById('admin-von').value = '';
        document.getElementById('admin-bis').value = '';
        document.getElementById('admin-note').value = '';

        renderAdmin();
        showBanner();
    });

    // --- Article Modals ---
    document.querySelectorAll('.article-card[data-modal]').forEach(function (card) {
        card.addEventListener('click', function () {
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.hidden = false;
                document.body.style.overflow = 'hidden';
            }
        });
    });

    document.querySelectorAll('.article-modal').forEach(function (modal) {
        modal.querySelector('.article-modal-close').addEventListener('click', function () {
            modal.hidden = true;
            document.body.style.overflow = '';
        });

        modal.querySelector('.article-modal-backdrop').addEventListener('click', function () {
            modal.hidden = true;
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.article-modal:not([hidden])').forEach(function (m) {
                m.hidden = true;
                document.body.style.overflow = '';
            });
        }
    });

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');

    document.querySelectorAll('.impression-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const img = this.querySelector('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.hidden = false;
            document.body.style.overflow = 'hidden';
        });
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.src = '';
        document.body.style.overflow = '';
    }
})();
