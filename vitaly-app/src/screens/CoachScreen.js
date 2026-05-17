import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity,
  TextInput, KeyboardAvoidingView, Platform, ActivityIndicator,
} from 'react-native';
import { colors } from '../theme';

const SUGGESTIONS = [
  { label: 'Co zjeść po treningu?', reply: 'Super, trening zaliczony! Teraz potrzebujesz białka i węglowodanów w stosunku 1:3. Polecam: shake proteinowy + banan, albo ryż z kurczakiem. Zjedz najlepiej w ciągu 30-60 min — wtedy okno anaboliczne jest otwarte 💪' },
  { label: 'Mam ochotę na słodkie 🍫', reply: 'Rozumiem! Ochotę na słodkie może wywoływać głód, zmęczenie lub stres. Kiedy ostatnio jadłeś? Mam kilka opcji które zaspokoją bez poczucia winy: daktyle z masłem orzechowym, mrożone winogrona, lub 2 kostki ciemnej czekolady (70%+). Co masz w domu?' },
  { label: 'Ułóż tani meal plan', reply: 'Chętnie! Mogę ułożyć pełny tydzień za 100-150 zł dla 1 osoby. Na ile osób planujesz i ile chcesz wydać? Zrobię listę zakupów + jadłospis + przepisy — wszystko w jednym 🛒' },
  { label: 'Co zamówić w McDonaldzie?', reply: 'Bez panierowania, bez frytek — to klucz! Najlepszy wybór: McWrap Grillowany lub Big Mac bez sosu (ok. 380-450 kcal, 30g białka). Zamień frytki na sałatkę, pij wodę zamiast Coli. To naprawdę nie jest tragedia jeśli robisz to rzadko 😄' },
];

const GENERIC = [
  'Opowiedz mi więcej o swoich celach — schudnąć, nabrać masy, czy po prostu więcej energii? 😊',
  'Rozumiem! Każdy organizm reaguje inaczej. Jak się czujesz po typowym posiłku — masz energię czy jesteś śpiący?',
  'Świetne pytanie. Ile czasu dziennie możesz przeznaczyć na gotowanie? Na tej podstawie dobiorę najlepsze opcje dla Ciebie.',
  'Mam kilka pomysłów! Ale najpierw — czy masz jakieś alergie lub produkty które absolutnie nie wchodzą w grę?',
  'To zależy od kilku rzeczy 🤔 Jak wygląda Twój typowy dzień? Praca zmianowa, dużo w terenie, czy raczej biuro?',
];

let genericIdx = 0;

export default function CoachScreen() {
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', text: 'Cześć! Jestem Twoim AI coachem zdrowia 👋\n\nMogę Ci pomóc z przepisami, planem żywieniowym, odpowiedź na każde pytanie o zdrowie. Bez oceniania, bez stresu.\n\nW czym mogę Ci dziś pomóc?' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
  }, [messages, typing]);

  const send = (text, reply) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), type: 'user', text: text.trim() };
    setMessages(m => [...m, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const aiText = reply || GENERIC[genericIdx % GENERIC.length];
      genericIdx++;
      setMessages(m => [...m, { id: Date.now() + 1, type: 'ai', text: aiText }]);
    }, 1000 + Math.random() * 800);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      <View style={styles.header}>
        <View style={styles.headerAvatar}>
          <Text style={styles.headerAvatarIcon}>🤖</Text>
        </View>
        <View>
          <Text style={styles.headerName}>Vitaly AI Coach</Text>
          <View style={styles.headerStatus}>
            <View style={styles.onlineDot} />
            <Text style={styles.headerStatusText}>Online · zawsze dostępny</Text>
          </View>
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        style={styles.messages}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map(msg => (
          <View key={msg.id} style={[styles.bubble, msg.type === 'user' ? styles.bubbleUser : styles.bubbleAi]}>
            <Text style={[styles.bubbleText, msg.type === 'user' && styles.bubbleTextUser]}>{msg.text}</Text>
          </View>
        ))}
        {typing && (
          <View style={[styles.bubble, styles.bubbleAi, styles.typingBubble]}>
            <ActivityIndicator size="small" color={colors.text3} />
            <Text style={styles.typingText}>Vitaly pisze...</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.suggestions}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {SUGGESTIONS.map((s, i) => (
            <TouchableOpacity key={i} style={styles.suggBtn} onPress={() => send(s.label, s.reply)} activeOpacity={0.7}>
              <Text style={styles.suggBtnText}>{s.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Napisz do AI Coacha..."
          placeholderTextColor={colors.text3}
          value={input}
          onChangeText={setInput}
          multiline
          maxLength={500}
        />
        <TouchableOpacity
          style={[styles.sendBtn, !input.trim() && styles.sendBtnDisabled]}
          onPress={() => send(input)}
          activeOpacity={0.85}
        >
          <Text style={styles.sendBtnIcon}>↑</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    padding: 16, paddingTop: 20,
    borderBottomWidth: 1, borderBottomColor: colors.border,
    backgroundColor: colors.bg2,
  },
  headerAvatar: {
    width: 44, height: 44, borderRadius: 14,
    backgroundColor: 'rgba(34,197,94,0.15)',
    borderWidth: 1, borderColor: 'rgba(34,197,94,0.3)',
    alignItems: 'center', justifyContent: 'center',
  },
  headerAvatarIcon: { fontSize: 22 },
  headerName: { fontSize: 15, fontWeight: '700', color: colors.text },
  headerStatus: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 2 },
  onlineDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.green },
  headerStatusText: { fontSize: 12, color: colors.text3 },
  messages: { flex: 1 },
  messagesContent: { padding: 16, paddingBottom: 8, gap: 10 },
  bubble: {
    maxWidth: '82%', padding: 14, borderRadius: 18,
    borderWidth: 1,
  },
  bubbleAi: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderColor: colors.border,
    borderBottomLeftRadius: 4,
  },
  bubbleUser: {
    alignSelf: 'flex-end',
    backgroundColor: colors.green,
    borderColor: colors.green,
    borderBottomRightRadius: 4,
  },
  bubbleText: { fontSize: 15, color: colors.text, lineHeight: 22 },
  bubbleTextUser: { color: '#0A1A0F', fontWeight: '600' },
  typingBubble: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 12 },
  typingText: { fontSize: 13, color: colors.text3 },
  suggestions: {
    paddingHorizontal: 12, paddingVertical: 8,
    borderTopWidth: 1, borderTopColor: colors.border,
  },
  suggBtn: {
    paddingHorizontal: 14, paddingVertical: 8, marginRight: 8,
    backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border,
    borderRadius: 100,
  },
  suggBtnText: { fontSize: 12, color: colors.text2 },
  inputRow: {
    flexDirection: 'row', alignItems: 'flex-end', gap: 10,
    padding: 12, paddingBottom: Platform.OS === 'ios' ? 28 : 12,
    borderTopWidth: 1, borderTopColor: colors.border,
    backgroundColor: colors.bg2,
  },
  input: {
    flex: 1, backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1, borderColor: colors.border, borderRadius: 22,
    paddingHorizontal: 16, paddingVertical: 11,
    color: colors.text, fontSize: 15, maxHeight: 100,
  },
  sendBtn: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: colors.green,
    alignItems: 'center', justifyContent: 'center',
  },
  sendBtnDisabled: { backgroundColor: 'rgba(34,197,94,0.3)' },
  sendBtnIcon: { fontSize: 20, fontWeight: '800', color: '#0A1A0F' },
});
