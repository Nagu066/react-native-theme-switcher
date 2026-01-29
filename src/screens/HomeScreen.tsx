import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const HomeScreen = () => {
  const { theme, mode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>
          Theme Switcher
        </Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Personalize your app appearance
        </Text>
      </View>

      {/* Current Mode Card */}
      <View
        style={[
          styles.currentCard,
          { backgroundColor: theme.card },
        ]}
      >
        <Text style={[styles.currentLabel, { color: theme.text }]}>
          Current Theme
        </Text>
        <Text style={[styles.currentValue, { color: theme.text }]}>
          {mode.toUpperCase()}
        </Text>
      </View>

      {/* Theme Options */}
      <ThemeToggle />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 4,
  },
  currentCard: {
    padding: 16,
    borderRadius: 14,
    marginBottom: 24,
    elevation: 4,
  },
  currentLabel: {
    fontSize: 14,
    opacity: 0.7,
  },
  currentValue: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 4,
  },
});
