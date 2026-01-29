import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'APP_THEME';

export const saveThemePreference = async (value: string) => {
  await AsyncStorage.setItem(THEME_KEY, value);
};

export const getThemePreference = async () => {
  return await AsyncStorage.getItem(THEME_KEY);
};
