import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

const SCENARIOS = [
  {
    id: 'zabka', emoji: '🏪', title: 'Jestem w Żabce', desc: 'Mam mało czasu i mały budżet',
    color: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.25)',
    response: {
      intro: 'Dobra wiadomość — w Żabce da się zjeść porządnie. Masz 400 kcal do końca dnia? Oto mój wybór:',
      items: [
        { good: true, name: 'Skyr 0% — Zott lub Arla', detail: '~130 kcal · 20g białka · ok. 4 zł' },
        { good: true, name: 'Jajka na twardo (2 szt.)', detail: '~140 kcal · 12g białka · ok. 2.50 zł' },
        { good: true, name: 'Banan', detail: '~90 kcal · energia na 2h · ok. 1.50 zł' },
        { good: false, name: 'Baton proteinowy', detail: 'Dużo cukrów prostych, nie warto' },
      ],
      tip: '💡 Łącznie: ~360 kcal · ~32g białka · ok. 8 zł. Świetny wybór!'
    }
  },
  {
    id: 'kfc', emoji: '🍟', title: 'Zamawiam w KFC', desc: 'Co zamówić żeby było najmniej tragicznie?',
    color: 'rgba(249,115,22,0.06)', border: 'rgba(249,115,22,0.2)',
    response: {
      intro: 'Bez panierowania, bez frytek — grill jest Twoim przyjacielem. Oto ranking:',
      items: [
        { good: true, name: '🏆 Grillowany wrap z sałatą', detail: '~380 kcal · 30g białka · zamień frytki na sałatkę' },
        { good: true, name: 'Kukurydza gotowana', detail: '~100 kcal · zero tłuszczu · świetny dodatek' },
        { good: false, name: 'Duże frytki + Pepsi', detail: '+700 pustych kalorii bez żadnych wartości' },
        { good: false, name: 'Zinger burger', detail: 'Dużo tłuszczu trans, panierowanie na max' },
      ],
      tip: '💡 Pij wodę zamiast Pepsi. Oszczędzasz 200 kcal i naprawdę nie czuć różnicy.'
    }
  },
  {
    id: 'stacja', emoji: '⛽', title: 'Jestem na stacji', desc: 'Długa trasa, muszę coś zjeść',
    color: 'rgba(6,182,212,0.06)', border: 'rgba(6,182,212,0.2)',
    response: {
      intro: 'Na stacji też da się zjeść sensownie. Szukaj tych produktów:',
      items: [
        { good: true, name: 'Orzechy lub migdały', detail: 'Małe opakowanie, dużo energii, zdrowe tłuszcze' },
        { good: true, name: 'Ser Gouda w plastrach', detail: 'Białko + tłuszcze, zero cukru' },
        { good: true, name: 'Woda + kawa czarna', detail: 'Zamiast energy drinków — lepsza koncentracja' },
        { good: false, name: 'Hot-dog ze stacji', detail: 'Przetworzone mięso, dużo soli, brak wartości' },
      ],
      tip: '💡 Energy drinki = crash po 2h. Kawa + orzech = stabilna energia na całą trasę.'
    }
  },
  {
    id: 'impreza', emoji: '🎉', title: 'Byłem na imprezie', desc: 'Po imprezie — co teraz?',
    color: 'rgba(139,92,246,0.06)', border: 'rgba(139,92,246,0.2)',
    response: {
      intro: '1 gorszy dzień nic nie zmienia. Teraz liczy się regeneracja:',
      items: [
        { good: true, name: '1. Nawodnienie ASAP', detail: 'Woda + elektrolity (np. Orsalit). Priorytet numer 1.' },
        { good: true, name: '2. Pełne śniadanie', detail: 'Jajecznica + chleb + banan. Węgle + białko + potas.' },
        { good: true, name: '3. Jedz normalnie', detail: 'Głodzenie to mit — Twoje ciało potrzebuje odbudowy.' },
        { good: false, name: 'NIE głoduj', detail: '"Odchudzanie po imprezie" to pułapka i spowalnia regenerację.' },
      ],
      tip: '❤️ Nie oceniaj się. Jeden gorszy dzień nic nie zmienia. Jutro nowy start.'
    }
  },
  {
    id: 'dzieci', emoji: '👨‍👩‍👧', title: 'Mam dzieci', desc: 'Coś zdrowego co wszyscy zjedzą',
    color: 'rgba(34,197,94,0.06)', border: 'rgba(34,197,94,0.15)',
    response: {
      intro: 'Coś co zjedzą wszyscy — od 2 do 82 lat. Propozycja na dziś:',
      items: [
        { good: true, name: '🍝 Spaghetti bolognese', detail: '25 min · dla 4 osób · ok. 30 zł · dzieci uwielbiają' },
        { good: true, name: 'Sekretny trik', detail: 'Do sosu dorzuć startą marchewkę i cukinię. Dzieci nie zauważą!' },
        { good: true, name: 'Gotuj z dziećmi', detail: 'To buduje ich zdrowe nawyki na całe życie' },
        { good: true, name: 'Zamiana: makaron pełnoziarnisty', detail: 'Więcej błonnika, takie samo smak' },
      ],
      tip: '💡 Tip: zrób podwójną porcję sosu i zamroź połowę — meal prep gotowy!'
    }
  },
  {
    id: 'stres', emoji: '😰', title: 'Ciężki dzień', desc: 'Nie mam siły gotować',
    color: 'rgba(249,115,22,0.06)', border: 'rgba(249,115,22,0.15)',
    response: {
      intro: 'Hej. Rozumiem. Nie musisz gotować. Za 5 minut możesz mieć pełnowartościowy posiłek:',
      items: [
        { good: true, name: '🥣 Miska skyr + owoce + orzechy', detail: '5 min · zero gotowania · pełnowartościowe' },
        { good: true, name: '🥑 Chleb + awokado + jajko sadzone', detail: '7 min · zdrowe tłuszcze + białko' },
        { good: true, name: '🧀 Chleb + ser + pomidor', detail: '2 min · dosłownie 2 minuty · i to wystarczy' },
        { good: false, name: 'NIE biczuj się', detail: 'Jeden gorszy dzień nic nie zmienia długoterminowo.' },
      ],
      tip: '❤️ Jutro nowy start. Dziś ważne jest żebyś w ogóle coś zjadł.'
    }
  },
];

export default function RealLifeScreen() {
  const [active, setActive] = useState(null);

  const scenario = SCENARIOS.find(s => s.id === active);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Real Life Mode 📍</Text>
      <Text style={styles.subtitle}>AI wie że nie żyjesz w idealnym świecie dietetycznym. Wybierz sytuację:</Text>

      <View style={styles.grid}>
        {SCENARIOS.map(s => (
          <TouchableOpacity
            key={s.id}
            style={[styles.card, active === s.id && { borderColor: colors.lime, backgroundColor: 'rgba(163,230,53,0.07)' }]}
            onPress={() => setActive(active === s.id ? null : s.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.cardEmoji}>{s.emoji}</Text>
            <Text style={styles.cardTitle}>{s.title}</Text>
            <Text style={styles.cardDesc}>{s.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {scenario && (
        <View style={[styles.response, { backgroundColor: scenario.color, borderColor: scenario.border }]}>
          <View style={styles.responseHeader}>
            <Text style={styles.responseEmoji}>{scenario.emoji}</Text>
            <Text style={styles.responseTitle}>{scenario.title}</Text>
          </View>
          <Text style={styles.responseIntro}>{scenario.response.intro}</Text>
          {scenario.response.items.map((item, i) => (
            <View key={i} style={[styles.responseItem, { backgroundColor: item.good ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)', borderColor: item.good ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)' }]}>
              <Text style={styles.responseItemIcon}>{item.good ? '✅' : '⚠️'}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.responseItemName}>{item.name}</Text>
                <Text style={styles.responseItemDetail}>{item.detail}</Text>
              </View>
            </View>
          ))}
          <View style={styles.responseTip}>
            <Text style={styles.responseTipText}>{scenario.response.tip}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 24, fontWeight: '800', color: colors.text, marginBottom: 4, marginTop: 8 },
  subtitle: { fontSize: 14, color: colors.text2, marginBottom: 24, lineHeight: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  card: {
    width: '47%', padding: 16,
    backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border,
    borderRadius: 16, alignItems: 'center',
  },
  cardEmoji: { fontSize: 30, marginBottom: 8 },
  cardTitle: { fontSize: 13, fontWeight: '700', color: colors.text, textAlign: 'center', marginBottom: 4 },
  cardDesc: { fontSize: 11, color: colors.text3, textAlign: 'center', lineHeight: 15 },
  response: { borderWidth: 1, borderRadius: 20, padding: 20, marginBottom: 16 },
  responseHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  responseEmoji: { fontSize: 28 },
  responseTitle: { fontSize: 16, fontWeight: '800', color: colors.text },
  responseIntro: { fontSize: 14, color: colors.text2, lineHeight: 20, marginBottom: 14 },
  responseItem: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, padding: 12, borderRadius: 12, borderWidth: 1, marginBottom: 8 },
  responseItemIcon: { fontSize: 16, marginTop: 1 },
  responseItemName: { fontSize: 13, fontWeight: '700', color: colors.text, marginBottom: 2 },
  responseItemDetail: { fontSize: 12, color: colors.text3, lineHeight: 16 },
  responseTip: { marginTop: 8, padding: 12, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 10 },
  responseTipText: { fontSize: 13, color: colors.text2, lineHeight: 18 },
});
