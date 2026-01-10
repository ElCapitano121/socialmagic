# 🚀 ULTRA NOWOCZESNE SEKCJE DLA ELEMENTORA

## 📂 Pliki gotowe do wklejenia w Elementor

Każdy plik to gotowa sekcja z **inline CSS i JavaScript** - wystarczy skopiować i wkleić w Custom HTML widget w Elementorze.

### 📁 Lista sekcji:

1. **01-hero-section.html** - Hero z animowanym tłem i floating stats cards
2. **02-why-us-section.html** - Sekcja "Dlaczego My" z 4 kartami + central visual
3. **03-pricing-section.html** - Cennik z 2 planami (featured + standard)
4. **04-testimonials-section.html** - 3 testimoniale z statystykami

---

## 🎯 Jak wkleić sekcje do Elementora?

### Krok 1: Otwórz stronę w Elementorze
1. Zaloguj się do WordPress
2. Przejdź do strony głównej
3. Kliknij "Edytuj za pomocą Elementora"

### Krok 2: Dodaj Custom HTML Widget
1. Kliknij **+** (dodaj nową sekcję)
2. Wybierz **1 kolumnę** (pełna szerokość)
3. W panelu po lewej stronie znajdź widget **"HTML"** lub **"Custom HTML"**
4. Przeciągnij widget do sekcji

### Krok 3: Wklej kod
1. Otwórz plik sekcji (np. `01-hero-section.html`)
2. Skopiuj **CAŁY** kod (Ctrl+A, Ctrl+C)
3. Wklej w pole "HTML Code" w Elementorze
4. Kliknij "Update" lub "Zastosuj"

### Krok 4: Powtórz dla każdej sekcji
- Dodawaj sekcje od góry do dołu w kolejności:
  1. Hero Section
  2. Why Us Section
  3. Pricing Section
  4. Testimonials Section

---

## ✨ Co zawiera każda sekcja?

### 🎨 Design Features:
- ✅ **Glassmorphism** - przezroczyste karty z blur effect
- ✅ **Animated gradients** - poruszające się kolorowe orby w tle
- ✅ **3D hover effects** - karty unoszą się i świecą przy najechaniu
- ✅ **Smooth animations** - płynne pojawienie się elementów przy scrollu
- ✅ **Neon glow** - świecące efekty w kolorze #BFFF00
- ✅ **Counter animations** - liczby animują się do docelowej wartości
- ✅ **Fully responsive** - działa na wszystkich urządzeniach

### 🎨 Kolorystyka:
- **Tło:** Czarne (#000, #0a0a0a)
- **Akcent:** Neonowy zielony (#BFFF00)
- **Tekst:** Biały (#fff) i szary (#888, #ccc)

---

## 🔧 Dodatkowe ustawienia Elementora

### Usuń padding/margin z sekcji:
1. Kliknij na **sekcję** (niebieski pasek na górze)
2. Przejdź do zakładki **"Advanced"**
3. Ustaw **Padding** na `0` ze wszystkich stron
4. Ustaw **Margin** na `0` ze wszystkich stron

### Ustaw pełną szerokość:
1. Kliknij na sekcję
2. W zakładce **"Layout"**
3. Ustaw **Content Width** na `Full Width`
4. Ustaw **Column Gap** na `No Gap`

---

## 📱 Responsywność

Wszystkie sekcje są **w pełni responsywne** i automatycznie dostosowują się do:
- 💻 Desktop (1280px+)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (< 768px)

---

## 🎨 Dodawanie własnych zdjęć

W Hero Section i innych miejscach możesz dodać własne zdjęcia:

1. Znajdź w kodzie komentarz `<!-- Tutaj możesz dodać zdjęcie -->`
2. Dodaj tag `<img>`:
```html
<img src="LINK_DO_ZDJĘCIA" alt="opis" style="width:100%; height:100%; object-fit:cover; border-radius:24px;">
```

Lub użyj Elementor Image Widget obok Custom HTML.

---

## 🚀 Optymalizacja

### Jeśli strona ładuje się wolno:
1. **Usuń nieużywane sekcje** - zostaw tylko te, których potrzebujesz
2. **Zoptymalizuj zdjęcia** - użyj WebP zamiast PNG/JPG
3. **Włącz cache** - użyj wtyczki WP Rocket lub W3 Total Cache

---

## 💡 Tips & Tricks

1. **Kolor akcentu** - Jeśli chcesz zmienić kolor z #BFFF00 na inny, użyj funkcji "Find & Replace" w edytorze tekstu (zamień wszystkie wystąpienia)

2. **Animacje** - Jeśli animacje są za szybkie/wolne, zmień wartości w `transition: all 0.6s` (większa liczba = wolniej)

3. **Odstępy** - Zmień padding sekcji w CSS: `.sm-hero-section { padding: 120px 20px; }` (pierwsza liczba to góra/dół, druga to lewo/prawo)

---

## 🆘 Pomoc

Jeśli coś nie działa:
1. Sprawdź czy skopiowałeś **cały** kod (od `<!--` do końca `</script>`)
2. Upewnij się że używasz **Custom HTML widget** (nie Text Editor)
3. Wyczyść cache WordPress i przeglądarki
4. Sprawdź czy nie ma konfliktów z innymi wtyczkami

---

## 📞 Kontakt

Agencja: **SocialMagic**
Email: biuro@socialmagic.pl
Tel: 516-076-249

---

**Made with 💚 for SocialMagic - Ultra Modern Web Design 2026**
