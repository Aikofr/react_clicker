# 🚀 Template React Native pré config

![React Native](https://img.shields.io/badge/React%20Native-v0.70-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?style=flat-square)
![Expo](https://img.shields.io/badge/Expo-48.0.0-lightgrey?style=flat-square)


## ✨ Fonctionnalités

- 🎨 **Support du mode clair/sombre**
- 🧩 **Composants réutilisables thématiques** (ThemedText, ThemedView)
- 🔧 **Utilisation simple des couleurs personnalisées par mode**


## 📦 Installation

1. Clonez ce dépôt :
    ```bash
    git clone https://github.com/Aikofr/react_native.git
    ```
2. Naviguez dans le dossier du projet :
    ```bash
    cd votre-repo
    ```
3. Installez les dépendances avec `npm` ou `yarn` :
    ```bash
    npm install
    # ou
    yarn install
    ```


## 🚀 Utilisation

### 1. Remplacer les composants `Text` et `View`
Pour utiliser les composants thématiques dans votre application React Native, vous pouvez remplacer les composants natifs `Text` et `View` par `ThemedText` et `ThemedView` respectivement. Cela permet de bénéficier du changement de thème en fonction du mode clair/sombre.

Voici un exemple simple :

```tsx
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Exemple() {
  return (
    <ThemedView>
      <ThemedText variant="title">Bienvenue dans l'application</ThemedText>
    </ThemedView>
  );
}
```

### 2. Spécifier des couleurs personnalisées
Vous pouvez spécifier des couleurs personnalisées pour chaque mode (clair ou sombre) en passant des propriétés `lightColor` et `darkColor` :

```tsx
<ThemedText
  variant="default"
  lightColor="#000000"
  darkColor="#ffffff"
>
  Texte avec couleur personnalisée
</ThemedText>
