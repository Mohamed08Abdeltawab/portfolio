/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    "text-primary",
    "text-secondary",
    "text-tertiary",
    "text-on-surface",
    "ring-primary",
    "ring-secondary",
    "ring-tertiary",
    "bg-primary",
    "bg-secondary",
    "bg-tertiary",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-container-lowest":
          "rgb(var(--color-surface-card) / <alpha-value>)",
        "surface-container-low":
          "rgb(var(--color-surface-low) / <alpha-value>)",
        "surface-container":
          "rgb(var(--color-surface-container) / <alpha-value>)",
        "surface-container-high":
          "rgb(var(--color-surface-container-high) / <alpha-value>)",
        "surface-container-highest":
          "rgb(var(--color-border) / var(--color-border-alpha))",
        "on-surface": "rgb(var(--color-text) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-muted) / <alpha-value>)",
        outline: "rgb(var(--color-outline) / <alpha-value>)",
        "outline-variant": "rgb(var(--color-outline-variant) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-container": "#2563eb",
        "primary-fixed": "#dbeafe",
        "on-primary-fixed": "#0f172a",
        "on-primary-fixed-variant": "#1d4ed8",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-container": "#0ea5e9",
        "secondary-fixed": "#e0f2fe",
        "on-secondary-fixed": "#082f49",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        "tertiary-container": "#10b981",
        "tertiary-fixed": "#d1fae5",
        "on-tertiary-fixed": "#064e3b",
        "on-tertiary-fixed-variant": "#047857",
      },
      maxWidth: {
        portfolio: "1280px",
      },
      spacing: {
        "margin-mobile": "1.25rem",
        "margin-desktop": "2.5rem",
        gutter: "1.5rem",
        "space-2xs": ".25rem",
        "space-xs": ".5rem",
        "space-sm": ".75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3.25rem",
        "space-3xl": "5rem",
      },
      borderRadius: {
        DEFAULT: ".375rem",
        lg: ".625rem",
        xl: ".875rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-hero": [
          "62px",
          { lineHeight: "1.08", letterSpacing: "-0.032em", fontWeight: "800" },
        ],
        "display-hero-mobile": [
          "38px",
          { lineHeight: "1.14", letterSpacing: "-0.026em", fontWeight: "800" },
        ],
        "headline-lg": [
          "40px",
          { lineHeight: "1.18", letterSpacing: "-0.024em", fontWeight: "700" },
        ],
        "headline-md": [
          "28px",
          { lineHeight: "1.26", letterSpacing: "-0.018em", fontWeight: "700" },
        ],
        "headline-sm": [
          "20px",
          { lineHeight: "1.35", letterSpacing: "-0.012em", fontWeight: "600" },
        ],
        "body-lg": ["17px", { lineHeight: "1.68", letterSpacing: "-0.005em" }],
        "body-md": ["15.5px", { lineHeight: "1.65" }],
        "body-sm": ["13.5px", { lineHeight: "1.55" }],
        "label-md": [
          "13.5px",
          { lineHeight: "1.35", letterSpacing: "0.01em", fontWeight: "600" },
        ],
        "label-sm": [
          "11.5px",
          { lineHeight: "1.35", letterSpacing: "0.045em", fontWeight: "600" },
        ],
      },
    },
  },
  plugins: [],
};
