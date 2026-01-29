# React Native Theme Switcher App

A React Native application demonstrating light, dark, and system theme switching with persisted user preferences.

---

## ✨ Features

- Light, Dark, and System theme support
- Persists user-selected theme across app restarts
- Automatically responds to system theme changes
- Centralized theme handling using Context API
- No prop drilling
- Modern, card-based UI

---

## 🛠 Tech Stack

- React Native 0.83
- TypeScript
- Context API
- AsyncStorage
- Appearance API

---

## 📁 Project Structure
---
- src/
- ├── components/
- │ └── ThemeToggle.tsx
- ├── context/
- │ └── ThemeContext.tsx
- ├── screens/
- │ └── HomeScreen.tsx
- ├── theme/
- │ └── colors.ts
- └── utils/
- └── storage.ts


---

## 🚀 How to Run the Project

> Assumes React Native environment is already set up (Node, Android SDK, Java, Emulator/Device).

### 1️⃣ Install dependencies
npm install

2️⃣ Run on Android
npx react-native run-android

🌓 Theme Behavior

Light / Dark: Manually applies the selected theme

System: Follows the device theme automatically

Selected theme is persisted using AsyncStorage

📦 APK Download

The release APK is available at the link below:

👉 Google Drive APK: https://drive.google.com/file/d/1OlUoT4_5JVfo7PkNXm65h7nAIPq89dhL/view?usp=drive_link
