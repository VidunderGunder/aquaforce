import chroma from "chroma-js";

type ThemeColors = {
  // Status colors
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;

  // Special colors
  dark: string;
  light: string;

  // Regular colors
  black: string;
  white: string;
  red: string;
  orange: string;
  blue: string;
  green: string;
  purple: string;
  brown: string;
  gray: string;
  pink: string;
  teal: string;
};

/**
 * Typed theme colors in CSS format.
 *
 * Use [`chroma.js`](https://www.npmjs.com/package/chroma-js) to adjust colors, like so:
 *
 * ```ts
 * const primaryDark = chroma(colors.primary).darken(0.25).css();
 * ```
 *
 * Remember to add the `.css()` at the end there, so it works with [Emotion](https://emotion.sh/docs/introduction).
 */
export const colors: ThemeColors = {
  // Status
  primary: "#0070f3",
  secondary: "#f0f0f0",
  success: "#00bb9f",
  danger: "#F04158",
  warning: "#FF970F",
  info: "#00acc1",

  // Special colors
  dark: "#1a1b1d",
  light: "#dddddd",

  // Regular colors
  black: "#000000",
  white: "#ffffff",
  red: "#f44336",
  orange: "#ff5722",
  blue: "#00a6cf",
  green: "#00bb9f",
  purple: "#9c27b0",
  brown: "#795548",
  gray: "#9e9e9e",
  pink: "#ff227e",
  teal: "#14A8AD",
};
