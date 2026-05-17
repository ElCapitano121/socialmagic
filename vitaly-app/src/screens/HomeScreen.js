import React, { useState, useEffect } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity, Animated,
} from 'react-native';
import { colors } from '../theme';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';

const habits = [
  { id: 'water', emoji: '💧', label: 'Woda', goal: 8, unit: 'szklanek' },
  { id: 'steps', emoji: '🦶', label: 'Kroki', goal: 10000, unit: 'kroków' },
  { id: 'sleep', emoji: '🌙', label: 'Sen', goal: 8, unit: 'godz' },
  { id: 'veggies', emoji: '🥦', label: 'Warzywa', goal: 5, unit: 'porcji' },
  { id: 'meditation', emoji: '🧘', label: 'Medytacja', goal: 10, unit: 'min' },
  { id: 'protein', emoji: '🥩', label: 'Białko', goal: 3, unit: 'posiłki' },
];

const suggestions = [
  { emoji: '🥗', name: 'Bowl z komosą i awokado', time: '12 min', kcal: 380 },
  { emoji: '🥘', name: 'Omlet szpinakowy z fetą', time: '8 min', kcal: 340 },
  { emoji: '🍜', name: 'Makaron soba z warzywami', time: '15 min', kcal: 420 },
];

function ScoreRing({ score }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <Svg width={140} height={140} viewBox="0 0 140 140">
      <Circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
      <Circle
        cx="70" cy="70" r={r} fill="none"
        stroke="#22C55E" strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${circ}`}
        strokeDashoffset={offset}
        transform="rotate(-90 70 70)"
      />
      <SvgText x="70" y="65" textAnchor="middle" fill="#F0F6FF" fontSize="28" fontWeight="900">{score}</SvgText>
      <SvgText x="70" y="84" textAnchor="middle" fill="#475569" fontSize="11">wynik dnia</SvgText>
    </Svg>
  );
}

export default function HomeScreen() {
  const [habitProgress, setHabitProgress] = useState({ water: 5, steps: 6200, sleep: 7, veggies: 3, meditation: 0, protein: 2 });
  const [score] = useState(72);
  const suggestion = suggestions[new Date().getDay() % suggestions.length];

  const incrementHabit = (id) => {
    setHabitProgress(p => {
      const habit = habits.find(h => h.id === id);
      const current = p[id] || 0;
      if (current < habit.goal) return { ...p, [id]: current + 1 };
      return p;
    });
  };

  const getHabitPercent = (id) => {
    const habit = habits.find(h => h.id === id);
    return Math.min(100, Math.round(((habitProgress[id] || 0) / habit.goal) * 100));
  };

  const getDayName = () => {
    const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const months = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];
    const d = new Date();
    return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Cześć 👋</Text>
          <Text style={styles.date}>{getDayName()}</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
        </View>
      </View>

      {/* Score */}
      <View style={styles.scoreCard}>
        <View style={styles.scoreLeft}>
          <ScoreRing score={score} />
        </View>
        <View style={styles.scoreRight}>
          <Text style={styles.scoreLabel}>Twój wynik</Text>
          <Text style={styles.scoreDesc}>Świetny dzień! Zostały jeszcze 3 nawyki do zaliczenia.</Text>
          <View style={styles.scoreBadge}>
            <Text style={styles.scoreBadgeText}>🔥 3-dniowa seria</Text>
          </View>
        </View>
      </View>

      {/* Suggestion */}
      <Text style={styles.sectionTitle}>Propozycja na dziś</Text>
      <TouchableOpacity style={styles.suggestionCard} activeOpacity={0.8}>
        <Text style={styles.suggestionEmoji}>{suggestion.emoji}</Text>
        <View style={styles.suggestionInfo}>
          <Text style={styles.suggestionName}>{suggestion.name}</Text>
          <View style={styles.suggestionMeta}>
            <Text style={styles.metaChip}>⏱ {suggestion.time}</Text>
            <Text style={styles.metaChip}>🔥 {suggestion.kcal} kcal</Text>
          </View>
        </View>
        <Text style={styles.suggestionArrow}>›</Text>
      </TouchableOpacity>

      {/* Habits */}
      <Text style={styles.sectionTitle}>Dzisiejsze nawyki</Text>
      <View style={styles.habitsGrid}>
        {habits.map(habit => {
          const pct = getHabitPercent(habit.id);
          const done = pct >= 100;
          return (
            <TouchableOpacity
              key={habit.id}
              style={[styles.habitCard, done && styles.habitCardDone]}
              onPress={() => incrementHabit(habit.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.habitEmoji}>{habit.emoji}</Text>
              <Text style={styles.habitLabel}>{habit.label}</Text>
              <Text style={styles.habitValue}>
                {habitProgress[habit.id] || 0}/{habit.goal}
              </Text>
              <View style={styles.habitBar}>
                <View style={[styles.habitBarFill, { width: `${pct}%`, backgroundColor: done ? colors.green : colors.purple }]} />
              </View>
              {done && <Text style={styles.habitDone}>✓</Text>}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Mood Check */}
      <Text style={styles.sectionTitle}>Jak się dziś czujesz?</Text>
      <View style={styles.moodRow}>
        {['😩', '😐', '🙂', '😊', '🤩'].map((emoji, i) => (
          <TouchableOpacity key={i} style={styles.moodBtn} activeOpacity={0.7}>
            <Text style={styles.moodEmoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 20, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 8 },
  greeting: { fontSize: 22, fontWeight: '800', color: colors.text },
  date: { fontSize: 13, color: colors.text3, marginTop: 2 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 16, fontWeight: '800', color: '#0A1A0F' },
  scoreCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(34,197,94,0.06)',
    borderWidth: 1, borderColor: 'rgba(34,197,94,0.15)',
    borderRadius: 24, padding: 20, marginBottom: 28, gap: 16,
  },
  scoreLeft: { alignItems: 'center' },
  scoreRight: { flex: 1 },
  scoreLabel: { fontSize: 12, color: colors.green, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 },
  scoreDesc: { fontSize: 14, color: colors.text2, lineHeight: 20, marginBottom: 10 },
  scoreBadge: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 5, backgroundColor: 'rgba(249,115,22,0.15)', borderRadius: 100, borderWidth: 1, borderColor: 'rgba(249,115,22,0.3)' },
  scoreBadgeText: { fontSize: 12, color: colors.orange, fontWeight: '600' },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: 12 },
  suggestionCard: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border,
    borderRadius: 16, padding: 16, marginBottom: 24,
  },
  suggestionEmoji: { fontSize: 36 },
  suggestionInfo: { flex: 1 },
  suggestionName: { fontSize: 15, fontWeight: '700', color: colors.text, marginBottom: 6 },
  suggestionMeta: { flexDirection: 'row', gap: 8 },
  metaChip: { fontSize: 12, color: colors.text2 },
  suggestionArrow: { fontSize: 22, color: colors.text3 },
  habitsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 28 },
  habitCard: {
    width: '30%', flexGrow: 1,
    backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border,
    borderRadius: 16, padding: 12, alignItems: 'center', minWidth: 90,
  },
  habitCardDone: { backgroundColor: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.25)' },
  habitEmoji: { fontSize: 22, marginBottom: 6 },
  habitLabel: { fontSize: 11, color: colors.text2, marginBottom: 4 },
  habitValue: { fontSize: 12, fontWeight: '700', color: colors.text, marginBottom: 8 },
  habitBar: { width: '100%', height: 4, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' },
  habitBarFill: { height: '100%', borderRadius: 2 },
  habitDone: { position: 'absolute', top: 8, right: 8, color: colors.green, fontSize: 12, fontWeight: '700' },
  moodRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  moodBtn: {
    flex: 1, marginHorizontal: 4, paddingVertical: 12,
    backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border,
    borderRadius: 14, alignItems: 'center',
  },
  moodEmoji: { fontSize: 24 },
});
