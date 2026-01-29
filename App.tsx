import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';

const AppWrapper = () => {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={theme.background === '#000000' ? 'light-content' : 'dark-content'}
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
