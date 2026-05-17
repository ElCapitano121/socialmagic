import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../theme';

const INGREDIENTS_PRESETS = [
  'jajka', 'szpinak', 'feta', 'kurczak', 'ryż', 'makaron', 'pomidory',
  'awokado', 'cebula', 'czosnek', 'ser', 'jogurt', 'łosoś', 'brokuły',
  'papryka', 'marchew', 'soczewica', 'tuńczyk',
];

const FILTERS = [
  { id: 'highprotein', label: 'High protein', emoji: '💪' },
  { id: 'quick', label: 'Do 15 min', emoji: '⚡' },
  { id: 'glutenfree', label: 'Bez glutenu', emoji: '🌾' },
  { id: 'cheap', label: 'Tani tydzień', emoji: '💰' },
  { id: 'mealprep', label: 'Meal prep', emoji: '📦' },
  { id: 'hangover', label: 'Na kaca', emoji: '🙈' },
  { id: 'kids', label: 'Dla dzieci', emoji: '👧' },
  { id: 'workout', label: 'Po treningu', emoji: '🏋️' },
];

const RECIPES_DB = {
  default: [
    { emoji: '🥘', name: 'Omlet szpinakowy z fetą', time: '8 min', kcal: 340, protein: 24, carbs: 8, fat: 22, steps: ['Rozbij 3 jajka, przypraw solą i pieprzem', 'Podsmaż szpinak na oliwie 2 min', 'Wlej jajka, dodaj pokruszoną fetę', 'Smaż 3 min, złóż na pół', 'Podawaj z pieczywem'], tags: ['highprotein', 'quick'] },
    { emoji: '🥗', name: 'Bowl z komosą i awokado', time: '12 min', kcal: 380, protein: 14, carbs: 42, fat: 18, steps: ['Ugotuj komosę ryżową 10 min', 'Pokrój awokado, pomidory, ogórek', 'Wyłóż na komosę, polej sokiem z limonki', 'Dopraw solą, pieprzem, oliwą'], tags: ['glutenfree', 'mealprep'] },
    { emoji: '🍳', name: 'Shakshuka z papryką', time: '20 min', kcal: 310, protein: 18, carbs: 24, fat: 16, steps: ['Podsmaż cebulę i paprykę', 'Dodaj pomidory z puszki, przyprawy', 'Zrób zagłębienia, wbij jajka', 'Przykryj, smaż 6 min', 'Podawaj z chlebem'], tags: ['cheap', 'kids'] },
  ],
  highprotein: [
    { emoji: '🍗', name: 'Kurczak teriyaki z ryżem', time: '18 min', kcal: 480, protein: 42, carbs: 38, fat: 12, steps: ['Pokrój pierś kurczaka w kawałki', 'Smaż na patelni 8 min', 'Dodaj sos teriyaki, smaż 3 min', 'Podawaj z ugotowanym ryżem', 'Posyp sezamem'], tags: ['highprotein'] },
    { emoji: '🥚', name: 'Jajka z łososiem i twarogiem', time: '10 min', kcal: 390, protein: 36, carbs: 6, fat: 24, steps: ['Usmaż jajka sadzone', 'Rozsmaruj twaróg na chlebie', 'Ułóż łososia i jajko', 'Dopraw koperkiem i sokiem z cytryny'], tags: ['highprotein', 'quick'] },
  ],
  quick: [
    { emoji: '🥑', name: 'Toast z awokado i jajkiem', time: '5 min', kcal: 280, protein: 16, carbs: 22, fat: 14, steps: ['Opiecz chleb w tosterze', 'Rozgnieć awokado, dopraw solą i pieprzem', 'Posmaruj awokado na chlebie', 'Dodaj jajko sadzone lub gotowane'], tags: ['quick'] },
    { emoji: '🥣', name: 'Skyr z owocami i orzechami', time: '3 min', kcal: 220, protein: 20, carbs: 18, fat: 8, steps: ['Przelej skyr do miseczki', 'Dodaj ulubione owoce', 'Posyp garścią orzechów', 'Opcjonalnie łyżka miodu'], tags: ['quick', 'highprotein'] },
  ],
};

function RecipeCard({ recipe, onClose }) {
  return (
    <View style={styles.recipeDetail}>
      <View style={styles.recipeDetailHeader}>
        <Text style={styles.recipeDetailEmoji}>{recipe.emoji}</Text>
        <View style={styles.recipeDetailInfo}>
          <Text style={styles.recipeDetailName}>{recipe.name}</Text>
          <View style={styles.recipeDetailMeta}>
            <Text style={styles.metaTag}>⏱ {recipe.time}</Text>
            <Text style={styles.metaTag}>🔥 {recipe.kcal} kcal</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Text style={styles.closeBtnText}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.macroRow}>
        <View style={styles.macroBox}>
          <Text style={styles.macroVal}>{recipe.protein}g</Text>
          <Text style={styles.macroLabel}>Białko</Text>
        </View>
        <View style={styles.macroBox}>
          <Text style={styles.macroVal}>{recipe.carbs}g</Text>
          <Text style={styles.macroLabel}>Węgle</Text>
        </View>
        <View style={styles.macroBox}>
          <Text style={styles.macroVal}>{recipe.fat}g</Text>
          <Text style={styles.macroLabel}>Tłuszcz</Text>
        </View>
      </View>
      <Text style={styles.stepsTitle}>Przygotowanie</Text>
      {recipe.steps.map((step, i) => (
        <View key={i} style={styles.stepRow}>
          <View style={styles.stepNum}><Text style={styles.stepNumText}>{i + 1}</Text></View>
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}
    </View>
  );
}

export default function RecipesScreen() {
  const [selected, setSelected] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [generated, setGenerated] = useState(false);
  const [openRecipe, setOpenRecipe] = useState(null);

  const toggleIngredient = (ing) => {
    setSelected(s => s.includes(ing) ? s.filter(i => i !== ing) : [...s, ing]);
  };

  const toggleFilter = (id) => {
    setActiveFilters(f => f.includes(id) ? f.filter(i => i !== id) : [...f, id]);
  };

  const generate = () => {
    setLoading(true);
    setGenerated(false);
    setTimeout(() => {
      let pool = [];
      if (activeFilters.length > 0) {
        activeFilters.forEach(f => {
          const dbKey = RECIPES_DB[f];
          if (dbKey) pool = [...pool, ...dbKey];
        });
      }
      if (pool.length === 0) pool = RECIPES_DB.default;
      const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
      setRecipes(shuffled);
      setLoading(false);
      setGenerated(true);
    }, 1600);
  };

  if (openRecipe) return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <RecipeCard recipe={openRecipe} onClose={() => setOpenRecipe(null)} />
    </ScrollView>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>AI Przepisy 🧠</Text>
      <Text style={styles.subtitle}>Powiedz co masz w lodówce — AI dopasuje przepisy</Text>

      <Text style={styles.label}>Co masz w lodówce?</Text>
      <View style={styles.chipsWrap}>
        {INGREDIENTS_PRESETS.map(ing => (
          <TouchableOpacity
            key={ing}
            style={[styles.chip, selected.includes(ing) && styles.chipActive]}
            onPress={() => toggleIngredient(ing)}
          >
            <Text style={[styles.chipText, selected.includes(ing) && styles.chipTextActive]}>{ing}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Preferencje</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
        {FILTERS.map(f => (
          <TouchableOpacity
            key={f.id}
            style={[styles.filterChip, activeFilters.includes(f.id) && styles.filterChipActive]}
            onPress={() => toggleFilter(f.id)}
          >
            <Text style={styles.filterEmoji}>{f.emoji}</Text>
            <Text style={[styles.filterText, activeFilters.includes(f.id) && styles.filterTextActive]}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[styles.generateBtn, (selected.length === 0 && activeFilters.length === 0) && styles.generateBtnDisabled]}
        onPress={generate}
        activeOpacity={0.85}
      >
        {loading
          ? <ActivityIndicator color="#0A1A0F" />
          : <Text style={styles.generateBtnText}>✨ Generuj przepisy</Text>
        }
      </TouchableOpacity>

      {generated && recipes.length > 0 && (
        <>
          <Text style={styles.resultsTitle}>Znalazłem {recipes.length} przepisy dla Ciebie</Text>
          {recipes.map((recipe, i) => (
            <TouchableOpacity key={i} style={styles.recipeCard} onPress={() => setOpenRecipe(recipe)} activeOpacity={0.85}>
              <Text style={styles.recipeEmoji}>{recipe.emoji}</Text>
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeName}>{recipe.name}</Text>
                <View style={styles.recipeMeta}>
                  <Text style={styles.recipeMetaText}>⏱ {recipe.time}</Text>
                  <Text style={styles.recipeMetaText}>💪 {recipe.protein}g białka</Text>
                  <Text style={styles.recipeMetaText}>🔥 {recipe.kcal} kcal</Text>
                </View>
              </View>
              <Text style={styles.recipeArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 24, fontWeight: '800', color: colors.text, marginBottom: 4, marginTop: 8 },
  subtitle: { fontSize: 14, color: colors.text2, marginBottom: 24, lineHeight: 20 },
  label: { fontSize: 13, fontWeight: '600', color: colors.text2, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12 },
  chipsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 24 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 100 },
  chipActive: { backgroundColor: 'rgba(34,197,94,0.15)', borderColor: 'rgba(34,197,94,0.4)' },
  chipText: { fontSize: 13, color: colors.text2 },
  chipTextActive: { color: colors.greenLight, fontWeight: '600' },
  filtersScroll: { marginBottom: 24 },
  filterChip: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 14, paddingVertical: 9, backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 100, marginRight: 8 },
  filterChipActive: { backgroundColor: 'rgba(163,230,53,0.12)', borderColor: 'rgba(163,230,53,0.4)' },
  filterEmoji: { fontSize: 14 },
  filterText: { fontSize: 13, color: colors.text2 },
  filterTextActive: { color: colors.lime, fontWeight: '600' },
  generateBtn: { backgroundColor: colors.green, borderRadius: 100, paddingVertical: 16, alignItems: 'center', marginBottom: 28 },
  generateBtnDisabled: { backgroundColor: 'rgba(34,197,94,0.4)' },
  generateBtnText: { fontSize: 16, fontWeight: '700', color: '#0A1A0F' },
  resultsTitle: { fontSize: 14, color: colors.text2, marginBottom: 14 },
  recipeCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 16, padding: 16, marginBottom: 12, gap: 14 },
  recipeEmoji: { fontSize: 36 },
  recipeInfo: { flex: 1 },
  recipeName: { fontSize: 15, fontWeight: '700', color: colors.text, marginBottom: 6 },
  recipeMeta: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  recipeMetaText: { fontSize: 12, color: colors.text2 },
  recipeArrow: { fontSize: 22, color: colors.text3 },
  recipeDetail: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 20, padding: 20, marginTop: 8 },
  recipeDetailHeader: { flexDirection: 'row', gap: 12, marginBottom: 16, alignItems: 'flex-start' },
  recipeDetailEmoji: { fontSize: 40 },
  recipeDetailInfo: { flex: 1 },
  recipeDetailName: { fontSize: 18, fontWeight: '800', color: colors.text, marginBottom: 6 },
  recipeDetailMeta: { flexDirection: 'row', gap: 10 },
  metaTag: { fontSize: 13, color: colors.text2 },
  closeBtn: { width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.08)', alignItems: 'center', justifyContent: 'center' },
  closeBtnText: { fontSize: 12, color: colors.text2 },
  macroRow: { flexDirection: 'row', gap: 12, marginBottom: 20 },
  macroBox: { flex: 1, alignItems: 'center', paddingVertical: 12, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 12, borderWidth: 1, borderColor: colors.border },
  macroVal: { fontSize: 20, fontWeight: '800', color: colors.green, marginBottom: 2 },
  macroLabel: { fontSize: 11, color: colors.text3 },
  stepsTitle: { fontSize: 14, fontWeight: '700', color: colors.text, marginBottom: 12 },
  stepRow: { flexDirection: 'row', gap: 12, marginBottom: 12, alignItems: 'flex-start' },
  stepNum: { width: 24, height: 24, borderRadius: 12, backgroundColor: 'rgba(34,197,94,0.2)', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 },
  stepNumText: { fontSize: 11, fontWeight: '700', color: colors.green },
  stepText: { flex: 1, fontSize: 14, color: colors.text2, lineHeight: 20 },
});
