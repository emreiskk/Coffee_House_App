# COFFEEhouse

A modern coffee ordering mobile application built with React Native and TypeScript. Designed with a sleek dark-themed UI, smooth animations, and intuitive user experience for coffee lovers.

## Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/placeholder1" width="180" alt="Home Screen"/>
  <img src="https://github.com/user-attachments/assets/placeholder2" width="180" alt="Detail Screen"/>
  <img src="https://github.com/user-attachments/assets/placeholder3" width="180" alt="Cart Screen"/>
  <img src="https://github.com/user-attachments/assets/placeholder4" width="180" alt="Payment Screen"/>
</p>

## Features

- **Rich Product Catalog** - Espresso, Cappuccino, Latte, Americano, Macchiato, Black Coffee and various coffee beans
- **Smart Cart Management** - Add products, select sizes (S, M, L), adjust quantities with automatic price calculation
- **Favorites List** - Save your favorite coffees for quick access
- **Order History** - View all past orders with date and price details
- **Multiple Payment Options** - Apple Pay, Google Pay and Amazon Pay support
- **Smooth Animations** - Lottie animations and Linear Gradient effects
- **Persistent Storage** - Cart, favorites and order history saved locally with AsyncStorage
- **Cross-Platform** - Runs on both iOS and Android

## Tech Stack

| Technology | Purpose |
|---|---|
| **React Native** | Cross-platform mobile framework |
| **TypeScript** | Type-safe development |
| **Zustand** | Lightweight state management |
| **Immer** | Immutable state updates |
| **React Navigation** | Bottom tabs & native stack navigation |
| **Lottie** | Smooth animations |
| **AsyncStorage** | Local data persistence |
| **Linear Gradient** | Beautiful gradient effects |

## Getting Started

### Prerequisites

- Node.js >= 18
- React Native CLI
- Xcode (for iOS) / Android Studio (for Android)

### Installation

```bash
# Clone the repository
git clone https://github.com/emreiskk/Coffee_House_App.git

# Navigate to project directory
cd Coffee_House_App

# Install dependencies
npm install

# Install iOS pods (macOS only)
cd ios && pod install && cd ..
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Project Structure

```
src/
  assets/         # Images, fonts, and icons
  components/     # Reusable UI components
  data/           # Coffee and beans data
  lottie/         # Lottie animation files
  navigators/     # Navigation configuration
  screens/        # App screens
  store/          # Zustand store
  theme/          # Theme constants
```

## Author

**Emre Isik** - [GitHub](https://github.com/emreiskk) | [LinkedIn](https://www.linkedin.com/in/emreisikdeveloper/)
