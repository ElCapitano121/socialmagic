import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { colors } from '../theme';

const STATS = [
  { label: 'Dni z rzędu', value: '3', emoji: '🔥' },
  { label: 'Nawyki w tym tyg.', value: '18', emoji: '✅' },
  { label: 'Przepisy wygenerowane', value: '7', emoji: '🧠' },
  { label: 'AI rozmowy', value: '12', emoji: '💬' },
];

export default function ProfileScreen() {
  const [mode, setMode] = useState('balance');
  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* User card */}
      <View style={styles.userCard}>
        <View style={styles.userAvatar}>
          <Text style={styles.userAvatarText}>M</Text>
        </View>
        <View>
          <Text style={styles.userName}>Marta K.</Text>
          <View style={styles.planBadge}>
            <Text style={styles.planBadgeText}>✨ Premium · 7 dni gratis</Text>
          </View>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsGrid}>
        {STATS.map(s => (
          <View key={s.label} style={styles.statCard}>
            <Text style={styles.statEmoji}>{s.emoji}</Text>
            <Text style={styles.statValue}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Mode */}
      <Text style={styles.sectionTitle}>Tryb aplikacji</Text>
      <View style={styles.modeRow}>
        <TouchableOpacity
          style={[styles.modeBtn, mode === 'balance' && styles.modeBtnActive]}
          onPress={() => setMode('balance')}
        >
          <Text style={styles.modeBtnEmoji}>🌿</Text>
          <Text style={[styles.modeBtnTitle, mode === 'balance' && styles.modeBtnTitleActive]}>Balance</Text>
          <Text style={styles.modeBtnDesc}>Bez liczenia kalorii</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modeBtn, mode === 'strict' && styles.modeBtnActiveStrict]}
          onPress={() => setMode('strict')}
        >
          <Text style={styles.modeBtnEmoji}>⚡</Text>
          <Text style={[styles.modeBtnTitle, mode === 'strict' && styles.modeBtnTitleActive]}>Strict</Text>
          <Text style={styles.modeBtnDesc}>Pełne makro i kalorie</Text>
        </TouchableOpacity>
      </View>

      {/* Settings */}
      <Text style={styles.sectionTitle}>Ustawienia</Text>
      <View style={styles.settingsCard}>
        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingLabel}>Powiadomienia</Text>
            <Text style={styles.settingDesc}>Codzienne przypomnienia o nawykach</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: colors.border, true: 'rgba(34,197,94,0.4)' }}
            thumbColor={notifications ? colors.green : colors.text3}
          />
        </View>
        <View style={styles.settingDivider} />
        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingLabel}>Poranne przypomnienie</Text>
            <Text style={styles.settingDesc}>Każdego dnia o 8:00</Text>
          </View>
          <Switch
            value={reminders}
            onValueChange={setReminders}
            trackColor={{ false: colors.border, true: 'rgba(34,197,94,0.4)' }}
            thumbColor={reminders ? colors.green : colors.text3}
          />
        </View>
      </View>

      {/* Dislikes */}
      <Text style={styles.sectionTitle}>Moje preferencje</Text>
      <View style={styles.prefCard}>
        <Text style={styles.prefLabel}>Nie lubię / alergie</Text>
        <View style={styles.prefChips}>
          {['ryby', 'gluten'].map(p => (
            <View key={p} style={styles.prefChip}>
              <Text style={styles.prefChipText}>{p}</Text>
              <Text style={styles.prefChipX}>✕</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.prefAddChip}>
            <Text style={styles.prefAddText}>+ dodaj</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Premium CTA */}
      <TouchableOpacity style={styles.premiumCard} activeOpacity={0.9}>
        <View>
          <Text style={styles.premiumTitle}>Przejdź na Premium</Text>
          <Text style={styles.premiumDesc}>Real Life Mode · Analiza zdjęć · AI bez limitu</Text>
        </View>
        <Text style={styles.premiumPrice}>29 zł/mies.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 20, paddingBottom: 40 },
  userCard: {
    flexDirection: 'row', alignItems: 'center', gap: 16,
    backgroundColor: 'rgba(34,197,94,0.06)', borderWidth: 1, borderColor: 'rgba(34,197,94,0.15)',
    borderRadius: 20, padding: 20, marginBottom: 24, marginTop: 8,
  },
  userAvatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center' },
  userAvatarText: { fontSize: 22, fontWeight: '900', color: '#0A1A0F' },
  userName: { fontSize: 20, fontWeight: '800', color: colors.text, marginBottom: 6 },
  planBadge: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, backgroundColor: 'rgba(163,230,53,0.15)', borderRadius: 100, borderWidth: 1, borderColor: 'rgba(163,230,53,0.3)' },
  planBadgeText: { fontSize: 12, color: colors.lime, fontWeight: '600' },
  statsGrid: { flexDirection: 'row', gap: 10, marginBottom: 28 },
  statCard: { flex: 1, backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 14, padding: 12, alignItems: 'center' },
  statEmoji: { fontSize: 20, marginBottom: 6 },
  statValue: { fontSize: 22, fontWeight: '900', color: colors.text, marginBottom: 2 },
  statLabel: { fontSize: 10, color: colors.text3, textAlign: 'center', lineHeight: 13 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: 12 },
  modeRow: { flexDirection: 'row', gap: 12, marginBottom: 28 },
  modeBtn: { flex: 1, backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 16, padding: 16, alignItems: 'center' },
  modeBtnActive: { backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.4)' },
  modeBtnActiveStrict: { backgroundColor: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.4)' },
  modeBtnEmoji: { fontSize: 28, marginBottom: 6 },
  modeBtnTitle: { fontSize: 15, fontWeight: '700', color: colors.text, marginBottom: 2 },
  modeBtnTitleActive: { color: colors.green },
  modeBtnDesc: { fontSize: 11, color: colors.text3, textAlign: 'center' },
  settingsCard: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 16, padding: 4, marginBottom: 28 },
  settingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 14 },
  settingLabel: { fontSize: 14, fontWeight: '600', color: colors.text, marginBottom: 2 },
  settingDesc: { fontSize: 12, color: colors.text3 },
  settingDivider: { height: 1, backgroundColor: colors.border, marginHorizontal: 14 },
  prefCard: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 16, padding: 16, marginBottom: 28 },
  prefLabel: { fontSize: 13, color: colors.text2, marginBottom: 10 },
  prefChips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  prefChip: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: 'rgba(239,68,68,0.1)', borderWidth: 1, borderColor: 'rgba(239,68,68,0.25)', borderRadius: 100 },
  prefChipText: { fontSize: 13, color: '#FCA5A5' },
  prefChipX: { fontSize: 10, color: '#FCA5A5' },
  prefAddChip: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 100 },
  prefAddText: { fontSize: 13, color: colors.text3 },
  premiumCard: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: 'rgba(163,230,53,0.08)', borderWidth: 1, borderColor: 'rgba(163,230,53,0.3)',
    borderRadius: 20, padding: 20,
  },
  premiumTitle: { fontSize: 16, fontWeight: '800', color: colors.text, marginBottom: 4 },
  premiumDesc: { fontSize: 13, color: colors.text2 },
  premiumPrice: { fontSize: 18, fontWeight: '900', color: colors.lime },
});
