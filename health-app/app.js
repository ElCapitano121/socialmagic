/* Vitaly — AI Health Companion */

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Phone screen switcher
const screens = document.querySelectorAll('.screen');
const navBtns = document.querySelectorAll('.phone-nav-btn');
let autoRotate;

function showScreen(idx) {
    screens.forEach(s => s.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));
    screens[idx].classList.add('active');
    navBtns[idx].classList.add('active');
}

function startAutoRotate() {
    let idx = 0;
    autoRotate = setInterval(() => {
        idx = (idx + 1) % screens.length;
        showScreen(idx);
    }, 3500);
}

navBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        clearInterval(autoRotate);
        showScreen(i);
        startAutoRotate();
    });
});

startAutoRotate();

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Real Life Mode scenarios
const scenarios = {
    zabka: {
        location: 'Żabka — masz 15 zł i 400 kcal',
        html: `
            <div style="font-size:13px;color:var(--text-2);margin-bottom:12px;">
                Dobra wiadomość — w Żabce da się zjeść porządnie. Oto mój wybór dla Ciebie:
            </div>
            <div class="product-rec good" style="margin-bottom:8px;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.2);border-radius:12px;padding:12px;display:flex;gap:10px;align-items:center;">
                <span style="font-size:20px;">✅</span>
                <div><div style="font-size:13px;font-weight:700;">Skyr 0% — Zott lub Arla</div><div style="font-size:12px;color:var(--text-3);">~130 kcal · 20g białka · ok. 4 zł</div></div>
            </div>
            <div class="product-rec good" style="margin-bottom:8px;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.2);border-radius:12px;padding:12px;display:flex;gap:10px;align-items:center;">
                <span style="font-size:20px;">✅</span>
                <div><div style="font-size:13px;font-weight:700;">Jajka na twardo (2 szt.)</div><div style="font-size:12px;color:var(--text-3);">~140 kcal · 12g białka · ok. 2.50 zł</div></div>
            </div>
            <div class="product-rec good" style="margin-bottom:8px;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.2);border-radius:12px;padding:12px;display:flex;gap:10px;align-items:center;">
                <span style="font-size:20px;">✅</span>
                <div><div style="font-size:13px;font-weight:700;">Banan</div><div style="font-size:12px;color:var(--text-3);">~90 kcal · energia na 2h · ok. 1.50 zł</div></div>
            </div>
            <div style="margin-top:12px;padding:10px;background:rgba(255,255,255,0.04);border-radius:10px;font-size:12px;color:var(--text-3);">
                💡 Łącznie: ~360 kcal · ~32g białka · ok. 8 zł. Świetny wybór!
            </div>`
    },
    kfc: {
        location: 'KFC — co zamówić?',
        html: `
            <div style="font-size:13px;color:var(--text-2);margin-bottom:12px;">
                KFC bez panierowania to całkiem przyzwoita opcja. Oto ranking:
            </div>
            <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.2);border-radius:12px;padding:12px;margin-bottom:8px;">
                <div style="font-size:12px;font-weight:800;color:var(--green-light);">🏆 NAJLEPSZY WYBÓR</div>
                <div style="font-size:13px;font-weight:700;margin:4px 0;">Grillowany McWrap z sałatą</div>
                <div style="font-size:12px;color:var(--text-3);">~380 kcal · 30g białka · zamieniaj frytki na sałatkę</div>
            </div>
            <div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);border-radius:12px;padding:12px;margin-bottom:8px;">
                <div style="font-size:12px;font-weight:700;color:var(--orange);">⚠️ UNIKAj</div>
                <div style="font-size:13px;margin:4px 0;">Duże frytki + Pepsi</div>
                <div style="font-size:12px;color:var(--text-3);">+700 pustych kalorii bez żadnych wartości</div>
            </div>
            <div style="font-size:12px;color:var(--text-3);margin-top:12px;">
                💡 Pij wodę, nie Pepsi. To oszczędza 200 kcal i naprawdę nie czuć różnicy po 10 minutach.
            </div>`
    },
    stacja: {
        location: 'Stacja benzynowa — długa trasa',
        html: `
            <div style="font-size:13px;color:var(--text-2);margin-bottom:12px;">
                Na stacji też da się zjeść sensownie. Szukaj:
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
                <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.15);border-radius:10px;padding:10px;font-size:13px;">
                    ✅ <strong>Orzechy lub migdały</strong> — małe opakowanie, dużo energii, zdrowe tłuszcze
                </div>
                <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.15);border-radius:10px;padding:10px;font-size:13px;">
                    ✅ <strong>Ser Gouda w plastrach</strong> — białko, tłuszcze, zero cukru
                </div>
                <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.15);border-radius:10px;padding:10px;font-size:13px;">
                    ✅ <strong>Woda + kawa czarna</strong> — zamiast energy drinków
                </div>
                <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.15);border-radius:10px;padding:10px;font-size:13px;">
                    ❌ <strong>Hot-dog ze stacji</strong> — przetworzone mięso, dużo soli, brak wartości
                </div>
            </div>`
    },
    impreza: {
        location: 'Po imprezie — regeneracja',
        html: `
            <div style="font-size:13px;color:var(--text-2);margin-bottom:12px;">
                1 gorszy dzień nic nie zmienia. Teraz ważna jest regeneracja — oto plan:
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
                <div style="background:rgba(6,182,212,0.08);border:1px solid rgba(6,182,212,0.2);border-radius:10px;padding:10px;">
                    <div style="font-size:12px;font-weight:700;color:#67E8F9;">1. NAWODNIENIE</div>
                    <div style="font-size:13px;color:var(--text-2);margin-top:4px;">Wypiłeś alkohol → jesteś odwodniony. Woda + elektrolity (np. Orsalit) to priorytet #1.</div>
                </div>
                <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.15);border-radius:10px;padding:10px;">
                    <div style="font-size:12px;font-weight:700;color:var(--green-light);">2. ŚNIADANIE</div>
                    <div style="font-size:13px;color:var(--text-2);margin-top:4px;">Jajecznica + chleb + banan. Węglowodany + białko + potas. Zapomnij o diecie dziś.</div>
                </div>
                <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.15);border-radius:10px;padding:10px;">
                    <div style="font-size:12px;font-weight:700;color:#A78BFA;">3. NIE GŁODUJ</div>
                    <div style="font-size:13px;color:var(--text-2);margin-top:4px;">Głodzenie po imprezie to mit. Jedz normalnie — Twoje ciało potrzebuje odbudowy.</div>
                </div>
            </div>`
    },
    dzieci: {
        location: 'Gotowanie dla całej rodziny',
        html: `
            <div style="font-size:13px;color:var(--text-2);margin-bottom:12px;">
                Coś co zjedza wszyscy — od 2 do 82 lat. Oto pomysł na dziś:
            </div>
            <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.15);border-radius:12px;padding:16px;">
                <div style="font-size:16px;margin-bottom:8px;">🍝</div>
                <div style="font-size:14px;font-weight:700;margin-bottom:6px;">Spaghetti bolognese z warzywami</div>
                <div style="font-size:12px;color:var(--text-3);margin-bottom:8px;">25 min · dla 4 osób · ok. 30 zł</div>
                <div style="font-size:12px;color:var(--text-2);">Dzieci jedzą makaron — tajemnie dorzuć do sosu: marchewkę, cukinia, paprykę (drobno starta). Nie zauważą, a zjedzą warzywa 😄</div>
            </div>
            <div style="margin-top:12px;font-size:12px;color:var(--text-3);">
                💡 Tip: gotuj z dziećmi — to też buduje ich zdrowe nawyki
            </div>`
    },
    stres: {
        location: 'Stresujący dzień — bez siły na gotowanie',
        html: `
            <div style="font-size:13px;color:var(--text-2);margin-bottom:12px;">
                Hej. Rozumiem. Nie musisz gotować. Oto co możesz zrobić za 5 minut:
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
                <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.15);border-radius:10px;padding:12px;">
                    <div style="font-size:13px;font-weight:700;">🥣 Miska skyr + owoce + orzechy</div>
                    <div style="font-size:12px;color:var(--text-3);margin-top:3px;">5 min · pełnowartościowy posiłek · zero gotowania</div>
                </div>
                <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.15);border-radius:10px;padding:12px;">
                    <div style="font-size:13px;font-weight:700;">🥑 Chleb + awokado + jajko sadzone</div>
                    <div style="font-size:12px;color:var(--text-3);margin-top:3px;">7 min · zdrowe tłuszcze + białko</div>
                </div>
                <div style="background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:10px;padding:10px;font-size:13px;color:var(--text-2);">
                    ❤️ <em>Jeden gorszy dzień nic nie zmienia. Jutro nowy start.</em>
                </div>
            </div>`
    }
};

document.querySelectorAll('.rl-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.scenario;
        document.querySelectorAll('.rl-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const data = scenarios[id];
        document.getElementById('rl-location').textContent = data.location;
        document.getElementById('rl-content').innerHTML = data.html;
    });
});

// AI Coach Chat
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

function addMsg(text, type) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${type}`;
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTyping() {
    const typing = document.createElement('div');
    typing.className = 'chat-msg ai';
    typing.id = 'typing';
    typing.innerHTML = '<span style="opacity:0.6">Vitaly pisze</span> <span style="animation:pulse 1s infinite">...</span>';
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTyping() {
    const t = document.getElementById('typing');
    if (t) t.remove();
}

const genericReplies = [
    "Świetne pytanie! Opowiedz mi więcej o swoich celach — chcesz schudnąć, nabrać energii, a może po prostu jeść zdrowiej? 😊",
    "Rozumiem! To zależy od kilku rzeczy. Ile masz czasu na gotowanie w ciągu tygodnia?",
    "Dobra, możemy to ogarnąć razem. Najpierw powiedzmi — czy masz jakieś alergie lub produkty których nie lubisz?",
    "Hej, pamiętaj że nie musisz być idealny! Małe zmiany robią dużą różnicę. Co chciałbyś zmienić najpierw?",
    "Ciekawe! Każdy organizm jest inny. Jak się czujesz po typowym posiłku — masz energię czy jesteś śpiący? 🤔"
];
let replyIdx = 0;

function sendMessage(text, replyText) {
    if (!text.trim()) return;
    addMsg(text, 'user');
    chatInput.value = '';
    addTyping();
    setTimeout(() => {
        removeTyping();
        addMsg(replyText || genericReplies[replyIdx % genericReplies.length], 'ai');
        if (!replyText) replyIdx++;
    }, 1200 + Math.random() * 600);
}

document.querySelectorAll('.suggestion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        sendMessage(btn.dataset.msg, btn.dataset.reply);
    });
});

chatSend.addEventListener('click', () => sendMessage(chatInput.value));
chatInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage(chatInput.value);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
