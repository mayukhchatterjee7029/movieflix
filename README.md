
# 🎬 Movie App

[![React Native](https://img.shields.io/badge/React%20Native-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](tsconfig.json)
[![Expo](https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white&style=for-the-badge)](app.json)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white&style=for-the-badge)](tailwind.config.js)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)](eslint.config.js)

---

## 🎬 Overview

A modern, mobile-first Movie App built with Expo, React Native, TypeScript, and TailwindCSS. Features include trending movies, search, and user profiles.

---

## 📁 Project Structure

```
.
├── app/                # App entry, navigation, and screens
│   ├── _layout.tsx
│   ├── globals.css
│   ├── (tabs)/
│   └── movies/
├── assets/             # Fonts, icons, images, and readme assets
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── readme/
├── components/         # Reusable UI components
│   ├── MovieCard.tsx
│   ├── ProfileButtons.tsx
│   ├── SearchBar.tsx
│   ├── TrendingCard.tsx
│   └── UserProfile.tsx
├── constants/          # App-wide constants
├── interfaces/         # TypeScript interfaces
├── services/           # API and business logic
├── types/              # Custom types
├── .expo/              # Expo config and device info
├── .vscode/            # Editor settings and extensions
├── .env                # Environment variables
├── package.json        # Project metadata and scripts
├── tailwind.config.js  # TailwindCSS config
├── tsconfig.json       # TypeScript config
└── README.md           # Project documentation
```

---

## 🚀 Features

- 🔥 Trending movies
- 🔍 Search functionality
- 👤 User profiles
- 🎨 Custom UI with TailwindCSS
- ⚡ Fast development with Expo

---

## 🛠️ Getting Started

1. **Install dependencies**
	```sh
	npm install
	```
2. **Start the Expo server**
	```sh
	npm start
	```
3. **Build for production**
	```sh
	npm run build
	```

---

## 📚 Useful Scripts

- `npm run lint` – Run ESLint
- `npm run build` – Build the project

---

## 📝 License

MIT

---

Made with ❤️ using [Expo](https://expo.dev/), [React Native](https://reactnative.dev/), [TypeScript](https://www.typescriptlang.org/), [Nativewind](https://www.nativewind.dev/) and [TailwindCSS](https://tailwindcss.com/)
