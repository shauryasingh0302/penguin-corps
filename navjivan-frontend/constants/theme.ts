

import { Platform } from "react-native";

const tintColorLight = "#FF6B6B";
const tintColorDark = "#FF6B6B";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#ffffff",
    tint: tintColorLight,
    icon: "#687076",
    card: "#f4f4f4",
  },
  dark: {
    text: "#ECEDEE",
    background: "#1A1A2E",
    tint: tintColorDark,
    icon: "#9BA1A6",
    card: "#16213E",
  },
};


export const LPColors = {
  // Backgrounds — Deep navy game console palette
  bg: "#1A1A2E",
  surface: "#16213E",
  surfaceLight: "#1E2A4A",
  surfaceHighlight: "#2A3B5E",

  // Brand Colors — Coral console theme
  primary: "#FF6B6B",
  primaryDark: "#E85D5D",
  secondary: "#55EFC4",
  accent: "#74B9FF",

  // Text
  text: "#FFFFFF",
  textGray: "#A0AEC0",
  textMuted: "#6B7280",
  textHighlight: "#E2E8F0",

  // Status
  border: "#2A3B5E",
  success: "#55EFC4",
  error: "#FF6B6B",
  warning: "#FFEAA7",
  info: "#74B9FF",

  // UI Elements
  neon: "#FF6B6B",
  card: "#16213E",
  gray: "#A0AEC0",

  // Console Pastels
  coral: "#FF6B6B",
  mint: "#A8E6CF",
  peach: "#FFDAC1",
  lavender: "#C3B1E1",
  btnBlue: "#74B9FF",
  btnGreen: "#55EFC4",
  btnYellow: "#FFEAA7",
  btnRed: "#FF7675",

  // Gradients
  gradientStart: "#FF6B6B",
  gradientEnd: "#E85D5D",

  // Shadows
  shadow: {
    shadowColor: "#FF6B6B",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  }
};

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono:
      "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
