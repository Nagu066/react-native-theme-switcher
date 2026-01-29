import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { setThemeMode, mode, theme } = useTheme();

  const Card = ({
    label,
    value,
  }: {
    label: string;
    value: 'light' | 'dark' | 'system';
  }) => {
    const isActive = mode === value;

    return (
      <Pressable
        onPress={() => setThemeMode(value)}
        style={[
          styles.card,
          {
            backgroundColor: theme.card,
            borderColor: isActive ? '#4F46E5' : 'transparent',
          },
        ]}
      >
        <Text style={[styles.cardText, { color: theme.text }]}>
          {label}
        </Text>
        {isActive && <Text style={styles.active}>Active</Text>}
      </Pressable>
    );
  };

  return (
    <View>
      <Card label="Light Theme" value="light" />
      <Card label="Dark Theme" value="dark" />
      <Card label="System Default" value="system" />
    </View>
  );
};

export default ThemeToggle;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 2,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
  },
  active: {
    marginTop: 6,
    fontSize: 12,
    color: '#4F46E5',
    fontWeight: '500',
  },
});
