import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';

const AppWrapper = () => {
  const { isDark } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <HomeScreen />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
};

export default App;
