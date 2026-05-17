import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import RealLifeScreen from './src/screens/RealLifeScreen';
import CoachScreen from './src/screens/CoachScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import { colors } from './src/theme';

const Tab = createBottomTabNavigator();

const ICONS = {
  Home:     '🏠',
  Przepisy: '🍳',
  RealLife: '📍',
  Coach:    '🤖',
  Profil:   '👤',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => (
              <View style={{ alignItems: 'center', paddingTop: 2 }}>
                <Text style={{ fontSize: 20 }}>{ICONS[route.name]}</Text>
              </View>
            ),
            tabBarActiveTintColor: colors.green,
            tabBarInactiveTintColor: colors.text3,
            tabBarStyle: {
              backgroundColor: colors.bg2,
              borderTopColor: colors.border,
              borderTopWidth: 1,
              paddingBottom: 6,
              paddingTop: 4,
              height: 62,
            },
            tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
            headerStyle: {
              backgroundColor: colors.bg2,
              borderBottomColor: colors.border,
              borderBottomWidth: 1,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: colors.text,
            headerTitleStyle: { fontWeight: '800', fontSize: 17 },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Dom', headerTitle: 'Vitaly 🌿' }} />
          <Tab.Screen name="Przepisy" component={RecipesScreen} options={{ headerTitle: 'AI Przepisy 🧠' }} />
          <Tab.Screen name="RealLife" component={RealLifeScreen} options={{ title: 'Real Life', headerTitle: 'Real Life Mode 📍' }} />
          <Tab.Screen name="Coach" component={CoachScreen} options={{ title: 'Coach', headerShown: false }} />
          <Tab.Screen name="Profil" component={ProfileScreen} options={{ headerTitle: 'Mój profil 👤' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
