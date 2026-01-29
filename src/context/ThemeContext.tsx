import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { DarkTheme, LightTheme, ThemeType } from '../theme/colors';
import { getThemePreference, saveThemePreference } from '../utils/storage';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeType;
  mode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemTheme = Appearance.getColorScheme();
  const [mode, setMode] = useState<ThemeMode>('system');
  const [theme, setTheme] = useState<ThemeType>(
    systemTheme === 'dark' ? DarkTheme : LightTheme
  );

  // Load stored preference
  useEffect(() => {
    const loadTheme = async () => {
      const saved = await getThemePreference();
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        setMode(saved);
      }
    };
    loadTheme();
  }, []);

  // Apply theme
  useEffect(() => {
    let appliedTheme: ColorSchemeName =
      mode === 'system' ? Appearance.getColorScheme() : mode;

    setTheme(appliedTheme === 'dark' ? DarkTheme : LightTheme);
    saveThemePreference(mode);
  }, [mode]);

  // Listen to system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (mode === 'system') {
        setTheme(colorScheme === 'dark' ? DarkTheme : LightTheme);
      }
    });

    return () => subscription.remove();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setThemeMode: setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
