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
