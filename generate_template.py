import json, random, string

def uid():
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=7))

# ═══════════════════════════════════════════════════════
# SEKCJA 1 – HERO (H1 SEO lokalne + schema LocalBusiness)
# ═══════════════════════════════════════════════════════
hero = """
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"LocalBusiness",
  "name":"SocialMagic",
  "description":"Agencja marketingu internetowego w Warszawie. SEO, social media, Google Ads, strony WWW.",
  "url":"https://socialmagic.pl",
  "telephone":"+48516076249",
  "email":"biuro@socialmagic.pl",
  "address":{"@type":"PostalAddress","addressLocality":"Warszawa","addressCountry":"PL"},
  "areaServed":["Warszawa","Mazowsze","Polska"],
  "priceRange":"$$",
  "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"147"}
}
</script>

<style>
*{box-sizing:border-box;margin:0;padding:0}
.smh{position:relative;min-height:92vh;display:flex;align-items:center;background:linear-gradient(135deg,#000 0%,#0a0a0a 100%);overflow:hidden;padding:80px 20px;font-family:'Inter',sans-serif}
.smh-bg{position:absolute;inset:0;z-index:0;overflow:hidden}
.smh-orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:.25;animation:smhfloat 22s infinite ease-in-out}
.smh-orb1{width:600px;height:600px;background:radial-gradient(circle,rgba(191,255,0,.5) 0%,transparent 70%);top:-200px;left:-200px}
.smh-orb2{width:450px;height:450px;background:radial-gradient(circle,rgba(0,255,135,.4) 0%,transparent 70%);top:50%;right:-150px;animation-delay:8s}
.smh-orb3{width:500px;height:500px;background:radial-gradient(circle,rgba(191,255,0,.2) 0%,transparent 70%);bottom:-200px;left:35%;animation-delay:15s}
@keyframes smhfloat{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(80px,-80px) scale(1.1)}66%{transform:translate(-40px,80px) scale(.9)}}
.smh-wrap{max-width:1280px;margin:0 auto;width:100%;position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.smh-badge{display:inline-block;padding:8px 20px;background:rgba(191,255,0,.1);border:1px solid rgba(191,255,0,.4);border-radius:50px;color:#BFFF00;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:24px}
.smh-h1{font-size:62px;font-weight:900;line-height:1.1;letter-spacing:-2px;color:#fff;margin-bottom:20px}
.smh-hl{background:linear-gradient(135deg,#BFFF00 0%,#00FF87 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.smh-desc{font-size:18px;line-height:1.8;color:#ccc;margin-bottom:12px}
.smh-desc strong{color:#fff}
.smh-sub{font-size:15px;color:#888;line-height:1.7;margin-bottom:36px}
.smh-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:48px}
.smh-btn1{display:inline-flex;align-items:center;gap:10px;padding:18px 36px;background:#BFFF00;color:#000;border-radius:50px;font-size:15px;font-weight:800;text-decoration:none;transition:all .3s;box-shadow:0 10px 40px rgba(191,255,0,.3)}
.smh-btn1:hover{transform:translateY(-3px);box-shadow:0 20px 60px rgba(191,255,0,.5);color:#000;text-decoration:none}
.smh-btn2{display:inline-flex;align-items:center;gap:10px;padding:18px 36px;background:transparent;color:#BFFF00;border:2px solid rgba(191,255,0,.4);border-radius:50px;font-size:15px;font-weight:700;text-decoration:none;transition:all .3s}
.smh-btn2:hover{border-color:#BFFF00;background:rgba(191,255,0,.08);color:#BFFF00;text-decoration:none}
.smh-stats{display:flex;gap:40px}
.smh-stat{text-align:left}
.smh-stat-n{font-size:36px;font-weight:900;color:#BFFF00;line-height:1}
.smh-stat-l{font-size:13px;color:#888;margin-top:4px}
.smh-visual{position:relative;height:580px}
.smh-img{width:100%;height:100%;border-radius:24px;background:linear-gradient(135deg,#0f0f0f,#1a1a1a);border:1px solid rgba(191,255,0,.15);display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}
.smh-img::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(191,255,0,.12) 0%,transparent 65%);animation:smhpulse 4s ease-in-out infinite}
@keyframes smhpulse{0%,100%{opacity:.6}50%{opacity:1}}
.smh-img-ph{color:rgba(191,255,0,.3);font-size:14px;font-weight:600;letter-spacing:2px;z-index:1;position:relative}
.smh-chip{position:absolute;padding:16px 20px;background:rgba(10,10,10,.92);backdrop-filter:blur(20px);border:1px solid rgba(191,255,0,.3);border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.6);animation:smhfloatcard 3.5s ease-in-out infinite}
@keyframes smhfloatcard{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
.smh-chip1{top:60px;left:-50px;display:flex;align-items:center;gap:14px;animation-delay:0s}
.smh-chip2{bottom:120px;right:-50px;display:flex;align-items:center;gap:14px;animation-delay:1.5s}
.smh-chip-icon{width:44px;height:44px;border-radius:12px;background:rgba(191,255,0,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.smh-chip-icon svg{width:22px;height:22px;stroke:#BFFF00;fill:none;stroke-width:2.5}
.smh-chip-n{font-size:22px;font-weight:900;color:#BFFF00;line-height:1}
.smh-chip-l{font-size:12px;color:#888;margin-top:2px}
@media(max-width:1024px){.smh-wrap{grid-template-columns:1fr;gap:50px}.smh-h1{font-size:46px}.smh-visual{height:420px}}
@media(max-width:768px){.smh{padding:60px 20px;min-height:auto}.smh-h1{font-size:34px}.smh-stats{gap:24px}.smh-stat-n{font-size:28px}.smh-chip{position:static;margin:10px 0}}
</style>

<section class="smh" id="home" itemscope itemtype="https://schema.org/WebPage">
  <div class="smh-bg">
    <div class="smh-orb smh-orb1"></div>
    <div class="smh-orb smh-orb2"></div>
    <div class="smh-orb smh-orb3"></div>
  </div>
  <div class="smh-wrap">
    <div class="smh-text">
      <span class="smh-badge">&#128205; Marketing internetowy &bull; Warszawa i okolice</span>
      <h1 class="smh-h1" itemprop="headline">
        Skuteczny <span class="smh-hl">Marketing Internetowy</span><br>dla Firm w Warszawie
      </h1>
      <p class="smh-desc">Pomagamy lokalnym firmom w <strong>Warszawie</strong> i na <strong>Mazowszu</strong> zdobywać więcej klientów dzięki SEO, social media, reklamom Google i profesjonalnym stronom WWW.</p>
      <p class="smh-sub">Pracujemy z małymi i średnimi przedsiębiorstwami. Nasze kampanie generują realne wyniki&nbsp;– większy ruch, lepsze pozycje i więcej konwersji.</p>
      <div class="smh-cta">
        <a href="#kontakt" class="smh-btn1">&#128640;&nbsp;Bezpłatna konsultacja</a>
        <a href="#uslugi" class="smh-btn2">Nasze usługi &#8594;</a>
      </div>
      <div class="smh-stats">
        <div class="smh-stat"><div class="smh-stat-n">147+</div><div class="smh-stat-l">Zadowolonych klientów</div></div>
        <div class="smh-stat"><div class="smh-stat-n">10k+</div><div class="smh-stat-l">Fraz w TOP&nbsp;10</div></div>
        <div class="smh-stat"><div class="smh-stat-n">4.9&#9733;</div><div class="smh-stat-l">Ocena Google</div></div>
      </div>
    </div>
    <div class="smh-visual">
      <div class="smh-img"><span class="smh-img-ph">TWOJE ZDJĘCIE / GRAFIKA</span></div>
      <div class="smh-chip smh-chip1">
        <div class="smh-chip-icon"><svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/><path d="M9 9l3-3 3 3M12 6v12"/></svg></div>
        <div><div class="smh-chip-n">+320%</div><div class="smh-chip-l">Wzrost ruchu<br>organicznego</div></div>
      </div>
      <div class="smh-chip smh-chip2">
        <div class="smh-chip-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
        <div><div class="smh-chip-n">24&nbsp;godz.</div><div class="smh-chip-l">Czas odpowiedzi<br>na pytania</div></div>
      </div>
    </div>
  </div>
</section>
"""

# ═══════════════════════════════════════════════════════
# SEKCJA 2 – BELKA ZAUFANIA (Trust Bar)
# ═══════════════════════════════════════════════════════
trust_bar = """
<style>
.smtb{background:#0a0a0a;border-top:1px solid rgba(191,255,0,.12);border-bottom:1px solid rgba(191,255,0,.12);padding:28px 20px;font-family:'Inter',sans-serif}
.smtb-wrap{max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap}
.smtb-item{display:flex;align-items:center;gap:12px;flex:1;min-width:160px}
.smtb-icon{width:40px;height:40px;border-radius:10px;background:rgba(191,255,0,.12);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.smtb-icon svg{width:20px;height:20px;stroke:#BFFF00;fill:none;stroke-width:2.5}
.smtb-text-main{font-size:14px;font-weight:700;color:#fff}
.smtb-text-sub{font-size:12px;color:#888}
.smtb-sep{width:1px;height:40px;background:rgba(255,255,255,.08);flex-shrink:0}
@media(max-width:768px){.smtb-sep{display:none}.smtb-item{min-width:calc(50% - 24px)}}
</style>

<div class="smtb">
  <div class="smtb-wrap">
    <div class="smtb-item">
      <div class="smtb-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
      <div><div class="smtb-text-main">4.9 / 5 w Google</div><div class="smtb-text-sub">Ocena 147 recenzji</div></div>
    </div>
    <div class="smtb-sep"></div>
    <div class="smtb-item">
      <div class="smtb-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/></svg></div>
      <div><div class="smtb-text-main">147+ klientów</div><div class="smtb-text-sub">Zadowolonych z wyników</div></div>
    </div>
    <div class="smtb-sep"></div>
    <div class="smtb-item">
      <div class="smtb-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12l2 2 4-4"/></svg></div>
      <div><div class="smtb-text-main">Google Partner</div><div class="smtb-text-sub">Certyfikowana agencja</div></div>
    </div>
    <div class="smtb-sep"></div>
    <div class="smtb-item">
      <div class="smtb-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <div><div class="smtb-text-main">Gwarancja efektów</div><div class="smtb-text-sub">Raportowanie miesięczne</div></div>
    </div>
    <div class="smtb-sep"></div>
    <div class="smtb-item">
      <div class="smtb-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
      <div><div class="smtb-text-main">Warszawa i Mazowsze</div><div class="smtb-text-sub">Obsługa lokalna i zdalna</div></div>
    </div>
  </div>
</div>
"""

# ═══════════════════════════════════════════════════════
# SEKCJA 3 – USŁUGI (Services Grid – 6 kart z cenami)
# ═══════════════════════════════════════════════════════
services = """
<style>
.smsv{padding:120px 20px;background:#000;font-family:'Inter',sans-serif;position:relative;overflow:hidden}
.smsv::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:800px;background:radial-gradient(circle,rgba(191,255,0,.04) 0%,transparent 70%);pointer-events:none}
.smsv-wrap{max-width:1280px;margin:0 auto}
.smsv-hdr{text-align:center;margin-bottom:72px}
.smsv-label{display:inline-block;padding:8px 20px;background:rgba(191,255,0,.1);border:1px solid rgba(191,255,0,.3);border-radius:50px;color:#BFFF00;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px}
.smsv-h2{font-size:52px;font-weight:900;line-height:1.15;color:#fff;letter-spacing:-1.5px}
.smsv-hl{background:linear-gradient(135deg,#BFFF00,#00FF87);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.smsv-sub{font-size:16px;color:#888;line-height:1.7;margin-top:16px;max-width:600px;margin-left:auto;margin-right:auto}
.smsv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.smsv-card{padding:44px 36px;background:rgba(10,10,10,.7);backdrop-filter:blur(20px);border:1px solid rgba(191,255,0,.12);border-radius:24px;transition:all .5s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden;cursor:pointer}
.smsv-card::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#BFFF00,#00FF87);transform:scaleX(0);transform-origin:left;transition:transform .5s}
.smsv-card:hover{transform:translateY(-12px);border-color:rgba(191,255,0,.5);box-shadow:0 30px 80px rgba(191,255,0,.15)}
.smsv-card:hover::after{transform:scaleX(1)}
.smsv-icon{width:60px;height:60px;border-radius:16px;background:rgba(191,255,0,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;transition:all .4s}
.smsv-card:hover .smsv-icon{background:rgba(191,255,0,.25);transform:scale(1.1) rotate(5deg)}
.smsv-icon svg{width:28px;height:28px;stroke:#BFFF00;fill:none;stroke-width:2.5}
.smsv-card h3{font-size:20px;font-weight:800;color:#fff;margin-bottom:12px;line-height:1.3}
.smsv-card p{font-size:14px;color:#888;line-height:1.8;margin-bottom:20px}
.smsv-price{font-size:13px;color:rgba(191,255,0,.8);font-weight:700;border-top:1px solid rgba(255,255,255,.06);padding-top:16px;margin-top:auto}
.smsv-card-link{display:inline-flex;align-items:center;gap:8px;color:#BFFF00;font-size:13px;font-weight:700;text-decoration:none;margin-top:16px;opacity:0;transition:opacity .3s}
.smsv-card:hover .smsv-card-link{opacity:1}
.smsv-cta-wrap{text-align:center;margin-top:56px}
.smsv-cta-btn{display:inline-flex;align-items:center;gap:12px;padding:18px 40px;background:#BFFF00;color:#000;border-radius:50px;font-size:15px;font-weight:800;text-decoration:none;transition:all .3s;box-shadow:0 10px 40px rgba(191,255,0,.3)}
.smsv-cta-btn:hover{transform:translateY(-3px);box-shadow:0 20px 60px rgba(191,255,0,.5);color:#000;text-decoration:none}
@media(max-width:1024px){.smsv-grid{grid-template-columns:repeat(2,1fr)}.smsv-h2{font-size:40px}}
@media(max-width:640px){.smsv-grid{grid-template-columns:1fr}.smsv-h2{font-size:30px}}
</style>

<section class="smsv" id="uslugi">
  <div class="smsv-wrap">
    <div class="smsv-hdr">
      <span class="smsv-label">Nasze Usługi</span>
      <h2 class="smsv-h2">Kompleksowy <span class="smsv-hl">marketing online</span><br>dla lokalnych firm</h2>
      <p class="smsv-sub">Dobieramy usługi indywidualnie do każdej firmy. Każda kampania jest mierzona, optymalizowana i raportowana co miesiąc.</p>
    </div>
    <div class="smsv-grid">

      <div class="smsv-card">
        <div class="smsv-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" stroke-linecap="round"/></svg></div>
        <h3>Pozycjonowanie SEO Lokalne</h3>
        <p>Wprowadzamy Twoją firmę na szczyt wyników Google dla fraz lokalnych. Audyt techniczny, treści, linki i optymalizacja Google Business Profile.</p>
        <div class="smsv-price">od 890 zł / msc &bull; Umowa na 3 miesiące</div>
        <a href="#kontakt" class="smsv-card-link">Zapytaj o ofertę &#8594;</a>
      </div>

      <div class="smsv-card">
        <div class="smsv-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
        <h3>Social Media Marketing</h3>
        <p>Prowadzimy profile na Instagramie, Facebooku i TikToku. Tworzymy reelsy, posty, grafiki i angażujemy Twoją społeczność każdego dnia.</p>
        <div class="smsv-price">od 650 zł / msc &bull; Pakiety miesięczne</div>
        <a href="#kontakt" class="smsv-card-link">Zapytaj o ofertę &#8594;</a>
      </div>

      <div class="smsv-card">
        <div class="smsv-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
        <h3>Reklamy Google Ads</h3>
        <p>Kampanie w wyszukiwarce Google, reklamy displayowe i remarketing. Docieramy do osób, które szukają Twoich usług właśnie teraz.</p>
        <div class="smsv-price">od 500 zł / msc + budżet reklamowy</div>
        <a href="#kontakt" class="smsv-card-link">Zapytaj o ofertę &#8594;</a>
      </div>

      <div class="smsv-card">
        <div class="smsv-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
        <h3>Tworzenie Stron WWW</h3>
        <p>Projektujemy szybkie, responsywne strony WordPress i landing page zoptymalizowane pod SEO i konwersje. Gotowe w 14 dni roboczych.</p>
        <div class="smsv-price">od 2 500 zł jednorazowo</div>
        <a href="#kontakt" class="smsv-card-link">Zapytaj o ofertę &#8594;</a>
      </div>

      <div class="smsv-card">
        <div class="smsv-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <h3>Optymalizacja Wizytówki Google</h3>
        <p>Wypozycjonujemy Twoją firmę w Mapach Google. Zarządzamy recenzjami, zdjęciami, wpisami i Q&amp;A. Dominacja w lokalnych wynikach.</p>
        <div class="smsv-price">od 350 zł / msc &bull; Start w 48 godzin</div>
        <a href="#kontakt" class="smsv-card-link">Zapytaj o ofertę &#8594;</a>
      </div>

      <div class="smsv-card">
        <div class="smsv-icon"><svg viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
        <h3>Audyt SEO i Raportowanie</h3>
        <p>Kompleksowy audyt techniczny i treściowy strony. Identyfikujemy błędy, braki i możliwości wzrostu. Raport + plan działania w PDF.</p>
        <div class="smsv-price">od 800 zł jednorazowo &bull; Wynik w 5 dni</div>
        <a href="#kontakt" class="smsv-card-link">Zapytaj o ofertę &#8594;</a>
      </div>

    </div>
    <div class="smsv-cta-wrap">
      <a href="#kontakt" class="smsv-cta-btn">&#128222;&nbsp;Dobierz pakiet dla swojej firmy</a>
    </div>
  </div>
</section>
"""

# ═══════════════════════════════════════════════════════
# SEKCJA 4 – ZASIĘG LOKALNY (Local Coverage)
# ═══════════════════════════════════════════════════════
local_coverage = """
<style>
.smlc{padding:100px 20px;background:linear-gradient(180deg,#000 0%,#070707 100%);font-family:'Inter',sans-serif}
.smlc-wrap{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.smlc-label{display:inline-block;padding:8px 20px;background:rgba(191,255,0,.1);border:1px solid rgba(191,255,0,.3);border-radius:50px;color:#BFFF00;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px}
.smlc-h2{font-size:44px;font-weight:900;line-height:1.2;color:#fff;letter-spacing:-1px;margin-bottom:20px}
.smlc-hl{background:linear-gradient(135deg,#BFFF00,#00FF87);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.smlc-desc{font-size:16px;color:#888;line-height:1.8;margin-bottom:36px}
.smlc-cities{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:36px}
.smlc-city{padding:8px 18px;background:rgba(191,255,0,.08);border:1px solid rgba(191,255,0,.2);border-radius:50px;color:#ccc;font-size:13px;font-weight:600;transition:all .3s;cursor:default}
.smlc-city:hover{background:rgba(191,255,0,.15);color:#BFFF00;border-color:rgba(191,255,0,.5)}
.smlc-note{font-size:14px;color:#666;line-height:1.7}
.smlc-note strong{color:#BFFF00}
.smlc-map{border-radius:24px;overflow:hidden;background:rgba(10,10,10,.8);border:1px solid rgba(191,255,0,.15);height:480px;display:flex;align-items:center;justify-content:center;position:relative}
.smlc-map::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(191,255,0,.08) 0%,transparent 70%)}
.smlc-map-ph{text-align:center;z-index:1;position:relative}
.smlc-map-ph svg{width:64px;height:64px;stroke:#BFFF00;fill:none;stroke-width:1.5;margin-bottom:16px}
.smlc-map-ph p{color:#666;font-size:14px;line-height:1.6}
.smlc-map-ph strong{color:#BFFF00}
@media(max-width:1024px){.smlc-wrap{grid-template-columns:1fr}.smlc-h2{font-size:34px}.smlc-map{height:300px}}
</style>

<section class="smlc" id="zasieg">
  <div class="smlc-wrap">
    <div class="smlc-text">
      <span class="smlc-label">&#128205; Zasięg Działania</span>
      <h2 class="smlc-h2">Obsługujemy firmy w <span class="smlc-hl">Warszawie</span> i całym Mazowszu</h2>
      <p class="smlc-desc">Działamy lokalnie, ale nasze działania mają globalny zasięg. Obsługujemy firmy stacjonarnie w Warszawie i zdalnie na terenie całej Polski. Znamy specyfikę rynku lokalnego i wiemy, jak dotrzeć do klientów w konkretnych dzielnicach i miastach.</p>
      <div class="smlc-cities">
        <span class="smlc-city">Warszawa&nbsp;&#8250;</span>
        <span class="smlc-city">Praga&nbsp;Płd.</span>
        <span class="smlc-city">Mokotów</span>
        <span class="smlc-city">Wola</span>
        <span class="smlc-city">Ursynów</span>
        <span class="smlc-city">Piaseczno</span>
        <span class="smlc-city">Grodzisk Maz.</span>
        <span class="smlc-city">Pruszków</span>
        <span class="smlc-city">Legionowo</span>
        <span class="smlc-city">Wołomin</span>
        <span class="smlc-city">Otwock</span>
        <span class="smlc-city">+ całe Mazowsze</span>
      </div>
      <p class="smlc-note">Nie ma Cię na tej liście? <strong>Zadzwoń&nbsp;&ndash;&nbsp;obsługujemy całą Polskę zdalnie.</strong> Spotkania online lub w Twoim biurze&nbsp;&ndash;&nbsp;wybierz, co wygodniejsze.</p>
    </div>
    <div class="smlc-map">
      <div class="smlc-map-ph">
        <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <p>Tu wstaw mapę Google Maps<br><strong>lub zdjęcie biura / zespołu</strong></p>
      </div>
    </div>
  </div>
</section>
"""

# ═══════════════════════════════════════════════════════
# SEKCJA 5 – JAK PRACUJEMY (Process / 4 kroki)
# ═══════════════════════════════════════════════════════
process = """
<style>
.smpr{padding:100px 20px;background:#000;font-family:'Inter',sans-serif;position:relative}
.smpr-wrap{max-width:1280px;margin:0 auto}
.smpr-hdr{text-align:center;margin-bottom:72px}
.smpr-label{display:inline-block;padding:8px 20px;background:rgba(191,255,0,.1);border:1px solid rgba(191,255,0,.3);border-radius:50px;color:#BFFF00;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px}
.smpr-h2{font-size:48px;font-weight:900;line-height:1.2;color:#fff;letter-spacing:-1.5px}
.smpr-hl{background:linear-gradient(135deg,#BFFF00,#00FF87);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.smpr-sub{font-size:16px;color:#888;margin-top:14px;line-height:1.7}
.smpr-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;margin-top:20px}
.smpr-steps::before{content:'';position:absolute;top:40px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,transparent,rgba(191,255,0,.3),rgba(191,255,0,.3),transparent);pointer-events:none}
.smpr-step{text-align:center;padding:40px 28px;position:relative}
.smpr-num{width:80px;height:80px;border-radius:50%;background:rgba(191,255,0,.1);border:2px solid rgba(191,255,0,.3);display:flex;align-items:center;justify-content:center;margin:0 auto 28px;font-size:28px;font-weight:900;color:#BFFF00;transition:all .4s;position:relative;z-index:1}
.smpr-step:hover .smpr-num{background:rgba(191,255,0,.2);border-color:#BFFF00;transform:scale(1.1);box-shadow:0 0 40px rgba(191,255,0,.3)}
.smpr-step h3{font-size:18px;font-weight:800;color:#fff;margin-bottom:12px;line-height:1.4}
.smpr-step p{font-size:14px;color:#888;line-height:1.8}
@media(max-width:1024px){.smpr-steps{grid-template-columns:repeat(2,1fr)}.smpr-steps::before{display:none}.smpr-h2{font-size:36px}}
@media(max-width:640px){.smpr-steps{grid-template-columns:1fr}.smpr-h2{font-size:28px}}
</style>

<section class="smpr" id="jak-pracujemy">
  <div class="smpr-wrap">
    <div class="smpr-hdr">
      <span class="smpr-label">Proces Współpracy</span>
      <h2 class="smpr-h2">Jak wygląda <span class="smpr-hl">praca z nami?</span></h2>
      <p class="smpr-sub">4 proste kroki od pierwszego kontaktu do realnych wyników dla Twojej firmy</p>
    </div>
    <div class="smpr-steps">
      <div class="smpr-step">
        <div class="smpr-num">01</div>
        <h3>Bezpłatna konsultacja</h3>
        <p>Omawiamy Twoje cele, branżę i konkurencję. Określamy, co blokuje wzrost i jakie działania przyniosą najszybszy efekt.</p>
      </div>
      <div class="smpr-step">
        <div class="smpr-num">02</div>
        <h3>Audyt i strategia</h3>
        <p>Analizujemy Twoją stronę, widoczność w Google i social media. Przygotowujemy spersonalizowany plan działania z harmonogramem.</p>
      </div>
      <div class="smpr-step">
        <div class="smpr-num">03</div>
        <h3>Wdrożenie i optymalizacja</h3>
        <p>Ruszamy z kampaniami, treściami i technicznym SEO. Monitorujemy wyniki w czasie rzeczywistym i optymalizujemy co tydzień.</p>
      </div>
      <div class="smpr-step">
        <div class="smpr-num">04</div>
        <h3>Raport i skalowanie</h3>
        <p>Co miesiąc dostajesz szczegółowy raport wyników. Razem decydujemy o dalszym skalowaniu działań i zwiększeniu budżetu.</p>
      </div>
    </div>
  </div>
</section>
"""

# ═══════════════════════════════════════════════════════
# SEKCJA 6 – DLACZEGO MY (Why Us – 6 kart)
# ═══════════════════════════════════════════════════════
why_us = """
<style>
.smwu{padding:120px 20px;background:linear-gradient(180deg,#000 0%,#0a0a0a 100%);font-family:'Inter',sans-serif;position:relative;overflow:hidden}
.smwu::after{content:'';position:absolute;top:0;right:0;width:600px;height:600px;background:radial-gradient(circle,rgba(191,255,0,.05) 0%,transparent 70%);pointer-events:none}
.smwu-wrap{max-width:1280px;margin:0 auto}
.smwu-hdr{text-align:center;margin-bottom:72px}
.smwu-label{display:inline-block;padding:8px 20px;background:rgba(191,255,0,.1);border:1px solid rgba(191,255,0,.3);border-radius:50px;color:#BFFF00;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px}
.smwu-h2{font-size:48px;font-weight:900;line-height:1.15;color:#fff;letter-spacing:-1.5px}
.smwu-hl{background:linear-gradient(135deg,#BFFF00,#00FF87);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.smwu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.smwu-card{padding:40px 32px;background:rgba(8,8,8,.7);backdrop-filter:blur(20px);border:1px solid rgba(191,255,0,.1);border-radius:24px;transition:all .5s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
.smwu-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(191,255,0,.06) 0%,transparent 60%);opacity:0;transition:opacity .5s}
.smwu-card:hover{transform:translateY(-12px);border-color:rgba(191,255,0,.4);box-shadow:0 30px 80px rgba(191,255,0,.12)}
.smwu-card:hover::before{opacity:1}
.smwu-icon{width:56px;height:56px;border-radius:14px;background:rgba(191,255,0,.12);display:flex;align-items:center;justify-content:center;margin-bottom:22px;transition:all .4s;flex-shrink:0}
.smwu-card:hover .smwu-icon{background:rgba(191,255,0,.22);transform:scale(1.1)}
.smwu-icon svg{width:26px;height:26px;stroke:#BFFF00;fill:none;stroke-width:2.5}
.smwu-card h3{font-size:19px;font-weight:800;color:#fff;margin-bottom:12px;line-height:1.4;position:relative;z-index:1}
.smwu-card p{font-size:14px;color:#888;line-height:1.8;position:relative;z-index:1}
@media(max-width:1024px){.smwu-grid{grid-template-columns:repeat(2,1fr)}.smwu-h2{font-size:36px}}
@media(max-width:640px){.smwu-grid{grid-template-columns:1fr}.smwu-h2{font-size:28px}}
</style>

<section class="smwu" id="dlaczego-my">
  <div class="smwu-wrap">
    <div class="smwu-hdr">
      <span class="smwu-label">Dlaczego My?</span>
      <h2 class="smwu-h2">6 powodów, dla których <span class="smwu-hl">warto&nbsp;z&nbsp;nami</span> pracować</h2>
    </div>
    <div class="smwu-grid">
      <div class="smwu-card">
        <div class="smwu-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
        <h3>Wyniki, nie obietnice</h3>
        <p>Pracujemy na konkrety: pozycje w Google, wzrost ruchu, leady. Każde działanie mierzymy i raportujemy. Żadnego "zobaczymy".</p>
      </div>
      <div class="smwu-card">
        <div class="smwu-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
        <h3>Indywidualne podejście</h3>
        <p>Nie ma dwóch takich samych firm. Każdą strategię budujemy od zera, dopasowaną do Twojej branży, lokalizacji i celów.</p>
      </div>
      <div class="smwu-card">
        <div class="smwu-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
        <h3>Szybka komunikacja</h3>
        <p>Odpowiadamy w ciągu 24 godzin. Masz opiekuna projektu, do którego piszesz bezpośrednio. Koniec z mailami do nikąd.</p>
      </div>
      <div class="smwu-card">
        <div class="smwu-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M7 10l3 3 7-7"/></svg></div>
        <h3>Przejrzyste rozliczenia</h3>
        <p>Stała miesięczna stawka, bez ukrytych kosztów. Faktura VAT, umowa i szczegółowy zakres usług na piśmie przed startem.</p>
      </div>
      <div class="smwu-card">
        <div class="smwu-icon"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
        <h3>Szybkie efekty lokalne</h3>
        <p>Optymalizacja wizytówki Google i SEO lokalne przynosi efekty już w pierwszym miesiącu. Zaczynamy od działań z najwyższym ROI.</p>
      </div>
      <div class="smwu-card">
        <div class="smwu-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h3>Pełna kontrola danych</h3>
        <p>Google Analytics, Search Console, Meta Business — wszystkie konta są Twoje. Żadnego "zamknięcia" danych po rozwiązaniu umowy.</p>
      </div>
    </div>
  </div>
</section>
"""

# ═══════════════════════════════════════════════════════
# SEKCJA 7 – OPINIE KLIENTÓW (Testimonials z gwiazdkami)
# ═══════════════════════════════════════════════════════
testimonials = """
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"SocialMagic",
  "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","bestRating":"5","reviewCount":"147"},
  "review":[
    {"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5"},"author":{"@type":"Person","name":"Anna K."},"reviewBody":"Mega fajna współpraca! Dzięki nim moja firma w końcu jest widoczna w Google w Warszawie."},
    {"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5"},"author":{"@type":"Person","name":"Tomasz N."},"reviewBody":"Kontakt szybki, wyniki realne. Polecam każdej lokalnej firmie."},
    {"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5"},"author":{"@type":"Person","name":"Magdalena W."},"reviewBody":"Nasza marka w końcu ożyła. Social media działają, klienci przychodzą!"}
  ]
}
</script>

<style>
.smop{padding:120px 20px;background:#000;font-family:'Inter',sans-serif;position:relative}
.smop-wrap{max-width:1280px;margin:0 auto}
.smop-hdr{text-align:center;margin-bottom:72px}
.smop-label{display:inline-block;padding:8px 20px;background:rgba(191,255,0,.1);border:1px solid rgba(191,255,0,.3);border-radius:50px;color:#BFFF00;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px}
.smop-h2{font-size:48px;font-weight:900;line-height:1.15;color:#fff;letter-spacing:-1.5px}
.smop-hl{background:linear-gradient(135deg,#BFFF00,#00FF87);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.smop-rating-bar{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:20px;margin-bottom:16px}
.smop-stars{color:#BFFF00;font-size:24px;letter-spacing:2px}
.smop-rating-num{font-size:36px;font-weight:900;color:#BFFF00}
.smop-rating-txt{font-size:14px;color:#888;line-height:1.5;text-align:left}
.smop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.smop-card{padding:36px 30px;background:rgba(10,10,10,.8);backdrop-filter:blur(20px);border:1px solid rgba(191,255,0,.1);border-radius:24px;display:flex;flex-direction:column;gap:20px;transition:all .5s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
.smop-card::before{content:'"';position:absolute;top:16px;right:24px;font-size:100px;font-weight:900;color:rgba(191,255,0,.04);line-height:1;pointer-events:none}
.smop-card:hover{transform:translateY(-10px);border-color:rgba(191,255,0,.4);box-shadow:0 30px 80px rgba(191,255,0,.12)}
.smop-card-stars{color:#BFFF00;font-size:18px;letter-spacing:2px}
.smop-card-text{font-size:15px;line-height:1.8;color:#ccc;font-style:italic;position:relative;z-index:1}
.smop-author{display:flex;align-items:center;gap:14px}
.smop-avatar{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#111,#1f1f1f);border:2px solid rgba(191,255,0,.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#BFFF00;font-size:18px;font-weight:800}
.smop-author-name{font-size:15px;font-weight:700;color:#fff;margin-bottom:3px}
.smop-author-role{font-size:12px;color:#888}
.smop-stat-row{padding-top:16px;border-top:1px solid rgba(255,255,255,.07);display:flex;align-items:baseline;gap:8px}
.smop-stat-v{font-size:26px;font-weight:900;color:#BFFF00}
.smop-stat-l{font-size:13px;color:#888;line-height:1.4}
.smop-google-badge{display:flex;align-items:center;gap:8px;margin-top:16px;font-size:13px;color:#888}
.smop-google-badge svg{width:18px;height:18px}
.smop-cta-wrap{text-align:center;margin-top:56px}
.smop-cta-link{display:inline-flex;align-items:center;gap:10px;color:#BFFF00;font-size:15px;font-weight:700;text-decoration:none;border:2px solid rgba(191,255,0,.3);border-radius:50px;padding:14px 32px;transition:all .3s}
.smop-cta-link:hover{background:rgba(191,255,0,.08);border-color:#BFFF00;text-decoration:none;color:#BFFF00}
@media(max-width:1024px){.smop-grid{grid-template-columns:repeat(2,1fr)}.smop-h2{font-size:36px}}
@media(max-width:640px){.smop-grid{grid-template-columns:1fr}.smop-h2{font-size:28px}}
</style>

<section class="smop" id="opinie">
  <div class="smop-wrap">
    <div class="smop-hdr">
      <span class="smop-label">Opinie Klientów</span>
      <h2 class="smop-h2">Co mówią firmy,<br>które <span class="smop-hl">nam&nbsp;zaufały?</span></h2>
      <div class="smop-rating-bar">
        <div class="smop-rating-num">4.9</div>
        <div>
          <div class="smop-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div class="smop-rating-txt">Ocena w Google Business<br>Na podstawie 147 recenzji</div>
        </div>
      </div>
    </div>
    <div class="smop-grid">

      <div class="smop-card">
        <div class="smop-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="smop-card-text">Mega fajna współpraca! Wszystko jasno, konkretnie, bez zbędnego gadania. Dzięki nim w końcu jesteśmy widoczni w Google na frazy lokalne w Warszawie. Wyniki ponad oczekiwania!</p>
        <div class="smop-author">
          <div class="smop-avatar">A</div>
          <div><div class="smop-author-name">Anna K.</div><div class="smop-author-role">Branża beauty &bull; Warszawa</div></div>
        </div>
        <div class="smop-stat-row"><span class="smop-stat-v">+320%</span><span class="smop-stat-l">więcej wizyt z Google<br>w ciągu 3 miesięcy</span></div>
      </div>

      <div class="smop-card">
        <div class="smop-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="smop-card-text">Kontakt szybki, wszystko ogarnięte. Czuć, że im zależy na wynikach, nie na opłatach. Social media ruszyły i klienci sami piszą z pytaniami. Polecam każdemu!</p>
        <div class="smop-author">
          <div class="smop-avatar">T</div>
          <div><div class="smop-author-name">Tomasz N.</div><div class="smop-author-role">Sprzedaż B2B &bull; Piaseczno</div></div>
        </div>
        <div class="smop-stat-row"><span class="smop-stat-v">76k+</span><span class="smop-stat-l">Obserwujących<br>na Instagramie</span></div>
      </div>

      <div class="smop-card">
        <div class="smop-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="smop-card-text">Fajni ludzie. Serio. Od początku miałam wrażenie, że im zależy. Nasza marka w końcu ożyła, mamy klientów z Google i Instagram. Warta każdej złotówki inwestycji.</p>
        <div class="smop-author">
          <div class="smop-avatar">M</div>
          <div><div class="smop-author-name">Magdalena W.</div><div class="smop-author-role">Marka odzieżowa &bull; Pruszków</div></div>
        </div>
        <div class="smop-stat-row"><span class="smop-stat-v">45k+</span><span class="smop-stat-l">Polubień<br>na Facebooku</span></div>
      </div>

    </div>
    <div class="smop-cta-wrap">
      <a href="https://g.page/r/" class="smop-cta-link" target="_blank" rel="noopener">&#9733;&nbsp;Przeczytaj wszystkie recenzje w Google</a>
    </div>
  </div>
</section>
"""

# ═══════════════════════════════════════════════════════
# SEKCJA 8 – FAQ SEO (Accordion + FAQPage Schema)
# ═══════════════════════════════════════════════════════
faq = """
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"Ile kosztuje pozycjonowanie lokalne SEO w Warszawie?","acceptedAnswer":{"@type":"Answer","text":"Pozycjonowanie lokalne w Warszawie zaczyna się od 890 zł miesięcznie. Cena zależy od konkurencyjności branży, liczby fraz kluczowych i zakresu działań. Oferujemy bezpłatną wycenę po audycie."}},
    {"@type":"Question","name":"Jak szybko zobaczę efekty SEO?","acceptedAnswer":{"@type":"Answer","text":"Pierwsze efekty SEO widoczne są po 1–3 miesiącach. Pełne rezultaty, w tym wzrost ruchu organicznego, pojawiają się po 4–6 miesiącach. Wizytówka Google może dać wyniki już w pierwszym tygodniu."}},
    {"@type":"Question","name":"Czy obsługujecie firmy spoza Warszawy?","acceptedAnswer":{"@type":"Answer","text":"Tak, obsługujemy firmy z całej Polski zdalnie. Specjalizujemy się w Warszawie i Mazowszu, ale obsługujemy klientów z Krakowa, Wrocławia, Gdańska i innych miast."}},
    {"@type":"Question","name":"Co zawiera pakiet Social Media?","acceptedAnswer":{"@type":"Answer","text":"Pakiet Social Media obejmuje: 5 postów miesięcznie (grafika + tekst), 4 relacje, optymalizację profilu, odpowiadanie na komentarze i wiadomości oraz miesięczny raport wyników."}},
    {"@type":"Question","name":"Czy mogę zrezygnować z usług w każdym momencie?","acceptedAnswer":{"@type":"Answer","text":"Nasze umowy zawierane są na 3 miesiące z możliwością przedłużenia. Po zakończeniu umowy wszystkie dane, hasła i konta pozostają Twoje. Nie stosujemy blokady danych."}}
  ]
}
</script>

<style>
.smfq{padding:110px 20px;background:linear-gradient(180deg,#070707 0%,#000 100%);font-family:'Inter',sans-serif}
.smfq-wrap{max-width:860px;margin:0 auto}
.smfq-hdr{text-align:center;margin-bottom:64px}
.smfq-label{display:inline-block;padding:8px 20px;background:rgba(191,255,0,.1);border:1px solid rgba(191,255,0,.3);border-radius:50px;color:#BFFF00;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px}
.smfq-h2{font-size:44px;font-weight:900;line-height:1.2;color:#fff;letter-spacing:-1.5px}
.smfq-hl{background:linear-gradient(135deg,#BFFF00,#00FF87);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.smfq-sub{font-size:15px;color:#888;margin-top:14px;line-height:1.7}
.smfq-item{border:1px solid rgba(191,255,0,.12);border-radius:16px;margin-bottom:12px;overflow:hidden;transition:border-color .3s}
.smfq-item.open{border-color:rgba(191,255,0,.35)}
.smfq-q{padding:24px 28px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;transition:background .3s}
.smfq-q:hover{background:rgba(191,255,0,.04)}
.smfq-item.open .smfq-q{background:rgba(191,255,0,.06)}
.smfq-q-text{font-size:16px;font-weight:700;color:#fff;line-height:1.4}
.smfq-icon{width:28px;height:28px;border-radius:50%;border:1.5px solid rgba(191,255,0,.35);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .3s}
.smfq-item.open .smfq-icon{background:#BFFF00;border-color:#BFFF00;transform:rotate(45deg)}
.smfq-icon svg{width:12px;height:12px;stroke:#BFFF00;fill:none;stroke-width:3;stroke-linecap:round;transition:stroke .3s}
.smfq-item.open .smfq-icon svg{stroke:#000}
.smfq-a{max-height:0;overflow:hidden;transition:max-height .4s ease,padding .3s}
.smfq-item.open .smfq-a{max-height:300px;padding-bottom:24px}
.smfq-a-inner{padding:0 28px;font-size:15px;color:#888;line-height:1.8}
@media(max-width:768px){.smfq-h2{font-size:32px}.smfq-q-text{font-size:15px}.smfq-q{padding:20px 20px}.smfq-a-inner{padding:0 20px}}
</style>

<section class="smfq" id="faq">
  <div class="smfq-wrap">
    <div class="smfq-hdr">
      <span class="smfq-label">FAQ</span>
      <h2 class="smfq-h2">Często zadawane <span class="smfq-hl">pytania</span></h2>
      <p class="smfq-sub">Odpowiedzi na najczęstsze pytania o marketing internetowy i współpracę z nami</p>
    </div>

    <div class="smfq-item">
      <div class="smfq-q" onclick="smFaqToggle(this)">
        <span class="smfq-q-text">Ile kosztuje pozycjonowanie lokalne SEO w Warszawie?</span>
        <div class="smfq-icon"><svg viewBox="0 0 12 12"><path d="M6 1v10M1 6h10"/></svg></div>
      </div>
      <div class="smfq-a"><div class="smfq-a-inner">Pozycjonowanie lokalne w Warszawie zaczyna się od <strong>890 zł miesięcznie</strong>. Cena zależy od konkurencyjności branży, liczby fraz kluczowych i zakresu działań. Oferujemy bezpłatną wycenę po krótkim audycie — zadzwoń lub napisz, odezwiemy się w 24 godziny.</div></div>
    </div>

    <div class="smfq-item">
      <div class="smfq-q" onclick="smFaqToggle(this)">
        <span class="smfq-q-text">Jak szybko zobaczę efekty SEO?</span>
        <div class="smfq-icon"><svg viewBox="0 0 12 12"><path d="M6 1v10M1 6h10"/></svg></div>
      </div>
      <div class="smfq-a"><div class="smfq-a-inner">Pierwsze efekty SEO widoczne są po <strong>1–3 miesiącach</strong>. Pełny wzrost ruchu organicznego następuje po 4–6 miesiącach. Wyjątkiem jest wizytówka Google (Google Business Profile) — tam efekty pojawiają się już w pierwszym tygodniu po optymalizacji.</div></div>
    </div>

    <div class="smfq-item">
      <div class="smfq-q" onclick="smFaqToggle(this)">
        <span class="smfq-q-text">Czy obsługujecie firmy spoza Warszawy?</span>
        <div class="smfq-icon"><svg viewBox="0 0 12 12"><path d="M6 1v10M1 6h10"/></svg></div>
      </div>
      <div class="smfq-a"><div class="smfq-a-inner">Tak! Obsługujemy firmy z całej Polski <strong>zdalnie</strong>. Spotkania odbywają się online przez Google Meet lub Teams. Specjalizujemy się w Warszawie i Mazowszu, ale mamy klientów z Krakowa, Wrocławia, Trójmiasta i całego kraju.</div></div>
    </div>

    <div class="smfq-item">
      <div class="smfq-q" onclick="smFaqToggle(this)">
        <span class="smfq-q-text">Co zawiera pakiet Social Media?</span>
        <div class="smfq-icon"><svg viewBox="0 0 12 12"><path d="M6 1v10M1 6h10"/></svg></div>
      </div>
      <div class="smfq-a"><div class="smfq-a-inner">Pakiet Social Media od 650 zł/msc obejmuje: <strong>5 postów miesięcznie</strong> (grafika + tekst), 4 relacje, optymalizację profilu, odpowiadanie na komentarze i wiadomości (24–48h), oraz miesięczny raport wyników z analizą zasięgów i zaangażowania.</div></div>
    </div>

    <div class="smfq-item">
      <div class="smfq-q" onclick="smFaqToggle(this)">
        <span class="smfq-q-text">Czy mogę zrezygnować z usług w każdym momencie?</span>
        <div class="smfq-icon"><svg viewBox="0 0 12 12"><path d="M6 1v10M1 6h10"/></svg></div>
      </div>
      <div class="smfq-a"><div class="smfq-a-inner">Umowy zawieramy na <strong>3 miesiące</strong> z 30-dniowym wypowiedzeniem. Po zakończeniu współpracy wszystkie konta (Google Ads, Analytics, Meta Business, Search Console) <strong>pozostają Twoje</strong>. Nigdy nie blokujemy dostępu do danych klienta.</div></div>
    </div>

  </div>
</section>

<script>
function smFaqToggle(el) {
  const item = el.closest('.smfq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.smfq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
</script>
"""

# ═══════════════════════════════════════════════════════
# SEKCJA 9 – BLOG / WIEDZA (3 karty artykułów)
# ═══════════════════════════════════════════════════════
blog = """
<style>
.smbl{padding:110px 20px;background:#000;font-family:'Inter',sans-serif}
.smbl-wrap{max-width:1280px;margin:0 auto}
.smbl-hdr{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:56px;gap:20px;flex-wrap:wrap}
.smbl-label{display:inline-block;padding:8px 20px;background:rgba(191,255,0,.1);border:1px solid rgba(191,255,0,.3);border-radius:50px;color:#BFFF00;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;display:block}
.smbl-h2{font-size:44px;font-weight:900;line-height:1.2;color:#fff;letter-spacing:-1.5px}
.smbl-hl{background:linear-gradient(135deg,#BFFF00,#00FF87);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.smbl-all-link{display:inline-flex;align-items:center;gap:8px;color:#BFFF00;font-size:14px;font-weight:700;text-decoration:none;border:1.5px solid rgba(191,255,0,.35);border-radius:50px;padding:12px 24px;white-space:nowrap;transition:all .3s;flex-shrink:0}
.smbl-all-link:hover{background:rgba(191,255,0,.08);border-color:#BFFF00;text-decoration:none;color:#BFFF00}
.smbl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.smbl-card{border:1px solid rgba(191,255,0,.1);border-radius:24px;overflow:hidden;transition:all .5s cubic-bezier(.4,0,.2,1);background:rgba(8,8,8,.8)}
.smbl-card:hover{transform:translateY(-10px);border-color:rgba(191,255,0,.4);box-shadow:0 30px 80px rgba(191,255,0,.1)}
.smbl-img{height:200px;background:linear-gradient(135deg,#0a0a0a,#151515);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.smbl-img::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(191,255,0,.1) 0%,transparent 70%)}
.smbl-img-cat{position:absolute;top:16px;left:16px;padding:6px 14px;background:#BFFF00;color:#000;border-radius:50px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1px}
.smbl-img-ph{color:rgba(191,255,0,.3);font-size:12px;font-weight:600;letter-spacing:2px;z-index:1;position:relative}
.smbl-body{padding:28px 28px 32px}
.smbl-meta{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.smbl-date{font-size:12px;color:#666}
.smbl-dot{width:3px;height:3px;border-radius:50%;background:#666}
.smbl-read{font-size:12px;color:#666}
.smbl-card h3{font-size:18px;font-weight:800;color:#fff;line-height:1.4;margin-bottom:12px}
.smbl-card h3 a{color:#fff;text-decoration:none;transition:color .3s}
.smbl-card:hover h3 a{color:#BFFF00}
.smbl-card p{font-size:14px;color:#888;line-height:1.7;margin-bottom:20px}
.smbl-link{display:inline-flex;align-items:center;gap:6px;color:#BFFF00;font-size:13px;font-weight:700;text-decoration:none;transition:gap .3s}
.smbl-link:hover{gap:10px;text-decoration:none;color:#BFFF00}
@media(max-width:1024px){.smbl-grid{grid-template-columns:repeat(2,1fr)}.smbl-h2{font-size:36px}}
@media(max-width:640px){.smbl-grid{grid-template-columns:1fr}.smbl-h2{font-size:28px}.smbl-hdr{flex-direction:column;align-items:flex-start}}
</style>

<section class="smbl" id="blog">
  <div class="smbl-wrap">
    <div class="smbl-hdr">
      <div>
        <span class="smbl-label">Wiedza i Aktualności</span>
        <h2 class="smbl-h2">Blog <span class="smbl-hl">marketingowy</span></h2>
      </div>
      <a href="#" class="smbl-all-link">Wszystkie artykuły &#8594;</a>
    </div>
    <div class="smbl-grid">

      <div class="smbl-card">
        <div class="smbl-img"><span class="smbl-img-cat">SEO</span><span class="smbl-img-ph">MINIATURA ARTYKUŁU</span></div>
        <div class="smbl-body">
          <div class="smbl-meta"><span class="smbl-date">15 maja 2026</span><span class="smbl-dot"></span><span class="smbl-read">5 min czytania</span></div>
          <h3><a href="#">Jak wypozycjonować firmę lokalną w Google w 2026 roku?</a></h3>
          <p>Poznaj sprawdzone metody, które pomogą Twojej firmie zdobyć klientów z okolicy. Od wizytówki Google po frazy lokalne.</p>
          <a href="#" class="smbl-link">Czytaj więcej &#8594;</a>
        </div>
      </div>

      <div class="smbl-card">
        <div class="smbl-img"><span class="smbl-img-cat">Social Media</span><span class="smbl-img-ph">MINIATURA ARTYKUŁU</span></div>
        <div class="smbl-body">
          <div class="smbl-meta"><span class="smbl-date">8 maja 2026</span><span class="smbl-dot"></span><span class="smbl-read">7 min czytania</span></div>
          <h3><a href="#">Instagram Reels dla firm lokalnych&nbsp;&ndash; jak zyskać zasięg organiczny?</a></h3>
          <p>Reelsy to najlepszy sposób na darmowe dotarcie do klientów w Twoim mieście. Oto jak je robić skutecznie bez budżetu reklamowego.</p>
          <a href="#" class="smbl-link">Czytaj więcej &#8594;</a>
        </div>
      </div>

      <div class="smbl-card">
        <div class="smbl-img"><span class="smbl-img-cat">Google Ads</span><span class="smbl-img-ph">MINIATURA ARTYKUŁU</span></div>
        <div class="smbl-body">
          <div class="smbl-meta"><span class="smbl-date">1 maja 2026</span><span class="smbl-dot"></span><span class="smbl-read">6 min czytania</span></div>
          <h3><a href="#">Google Ads dla małej firmy&nbsp;&ndash; jak nie przepalić budżetu?</a></h3>
          <p>5 błędów, które popełniają właściciele firm prowadząc kampanie Google Ads samodzielnie i jak ich uniknąć, żeby każda złotówka pracowała.</p>
          <a href="#" class="smbl-link">Czytaj więcej &#8594;</a>
        </div>
      </div>

    </div>
  </div>
</section>
"""

# ═══════════════════════════════════════════════════════
# SEKCJA 10 – KOŃCOWE CTA / KONTAKT
# ═══════════════════════════════════════════════════════
cta_contact = """
<style>
.smct{padding:120px 20px;background:linear-gradient(135deg,#000 0%,#0a0a0a 100%);font-family:'Inter',sans-serif;position:relative;overflow:hidden}
.smct::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:900px;height:900px;background:radial-gradient(circle,rgba(191,255,0,.07) 0%,transparent 65%);pointer-events:none}
.smct-wrap{max-width:900px;margin:0 auto;text-align:center;position:relative;z-index:1}
.smct-badge{display:inline-block;padding:8px 20px;background:rgba(191,255,0,.1);border:1px solid rgba(191,255,0,.35);border-radius:50px;color:#BFFF00;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:24px}
.smct-h2{font-size:56px;font-weight:900;line-height:1.1;color:#fff;letter-spacing:-2px;margin-bottom:22px}
.smct-hl{background:linear-gradient(135deg,#BFFF00,#00FF87);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.smct-desc{font-size:18px;color:#888;line-height:1.8;margin-bottom:48px;max-width:640px;margin-left:auto;margin-right:auto}
.smct-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:64px}
.smct-btn1{display:inline-flex;align-items:center;gap:12px;padding:20px 44px;background:#BFFF00;color:#000;border-radius:50px;font-size:16px;font-weight:800;text-decoration:none;transition:all .3s;box-shadow:0 10px 40px rgba(191,255,0,.35)}
.smct-btn1:hover{transform:translateY(-3px);box-shadow:0 20px 60px rgba(191,255,0,.55);color:#000;text-decoration:none}
.smct-btn2{display:inline-flex;align-items:center;gap:12px;padding:20px 44px;background:transparent;color:#BFFF00;border:2px solid rgba(191,255,0,.4);border-radius:50px;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s}
.smct-btn2:hover{border-color:#BFFF00;background:rgba(191,255,0,.08);text-decoration:none;color:#BFFF00}
.smct-contact-row{display:flex;justify-content:center;gap:48px;flex-wrap:wrap;padding-top:48px;border-top:1px solid rgba(255,255,255,.08)}
.smct-contact-item{display:flex;align-items:center;gap:14px}
.smct-contact-icon{width:48px;height:48px;border-radius:12px;background:rgba(191,255,0,.12);display:flex;align-items:center;justify-content:center}
.smct-contact-icon svg{width:22px;height:22px;stroke:#BFFF00;fill:none;stroke-width:2.5}
.smct-contact-label{font-size:12px;color:#666;margin-bottom:2px;font-weight:600;text-transform:uppercase;letter-spacing:1px}
.smct-contact-val{font-size:16px;color:#fff;font-weight:700}
.smct-contact-val a{color:#fff;text-decoration:none}
.smct-contact-val a:hover{color:#BFFF00}
@media(max-width:768px){.smct-h2{font-size:36px}.smct-contact-row{gap:28px}.smct-btns{flex-direction:column;align-items:center}}
</style>

<section class="smct" id="kontakt" itemscope itemtype="https://schema.org/ContactPage">
  <div class="smct-wrap">
    <span class="smct-badge">&#128640; Gotowy na wzrost?</span>
    <h2 class="smct-h2">Zacznij <span class="smct-hl">bezpłatną</span><br>konsultację dziś</h2>
    <p class="smct-desc">Skontaktuj się z nami, opiszemy co blokuje Twój wzrost i zaproponujemy konkretny plan działania. Bez zobowiązań, bez ukrytych kosztów.</p>
    <div class="smct-btns">
      <a href="mailto:biuro@socialmagic.pl" class="smct-btn1">&#9993;&nbsp;Napisz do nas</a>
      <a href="tel:+48516076249" class="smct-btn2">&#128222;&nbsp;516 076 249</a>
    </div>
    <div class="smct-contact-row">
      <div class="smct-contact-item">
        <div class="smct-contact-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
        <div><div class="smct-contact-label">Telefon</div><div class="smct-contact-val"><a href="tel:+48516076249">516 076 249</a></div></div>
      </div>
      <div class="smct-contact-item">
        <div class="smct-contact-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg></div>
        <div><div class="smct-contact-label">Email</div><div class="smct-contact-val"><a href="mailto:biuro@socialmagic.pl">biuro@socialmagic.pl</a></div></div>
      </div>
      <div class="smct-contact-item">
        <div class="smct-contact-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <div><div class="smct-contact-label">Lokalizacja</div><div class="smct-contact-val">Warszawa, Mazowsze</div></div>
      </div>
    </div>
  </div>
</section>
"""

# ═══════════════════════════════════════════════════════
# ASEMBLACJA JSON ELEMENTORA
# ═══════════════════════════════════════════════════════
def make_section(html_content):
    return {
        "id": uid(),
        "elType": "section",
        "settings": {
            "layout": "full_width",
            "gap": "no",
            "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0", "isLinked": True},
            "background_background": "classic",
            "background_color": "#000000"
        },
        "elements": [{
            "id": uid(),
            "elType": "column",
            "settings": {
                "_column_size": 100,
                "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0", "isLinked": True}
            },
            "elements": [{
                "id": uid(),
                "elType": "widget",
                "widgetType": "html",
                "settings": {"html": html_content},
                "elements": []
            }]
        }]
    }

template = {
    "version": "0.4",
    "title": "SocialMagic – Strona Główna SEO Lokalne (Pełny Szablon)",
    "type": "page",
    "content": [
        make_section(hero),
        make_section(trust_bar),
        make_section(services),
        make_section(local_coverage),
        make_section(process),
        make_section(why_us),
        make_section(testimonials),
        make_section(faq),
        make_section(blog),
        make_section(cta_contact),
    ]
}

with open('socialmagic-elementor-seo-full.json', 'w', encoding='utf-8') as f:
    json.dump(template, f, ensure_ascii=False, indent=2)

size = len(open('socialmagic-elementor-seo-full.json').read())
print(f"✓ Wygenerowano: socialmagic-elementor-seo-full.json")
print(f"✓ Rozmiar: {size:,} znaków")
print(f"✓ Sekcji: {len(template['content'])}")
