module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      whitemilk: "#E0E2E8",
      greymilk: "#5E6064",
      secondary: "#272425",
      primary: "#e75810",
      green: "#098A22",
      orange: "#ff6800",
      yellow: "#F2BC00",
      mustard: "#f3ca20",
      grey: "#5d6d7c",
      darkSlate: "#1d1e22",
      darkBlue: "#12232E",
      red: "#EB1700",
      black: "#212121",
      moodyblues: "#1D273B",
      gray: {
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        700: "#374151",
        800: "#1F2937",
        900: "#111827"
      }
    },

    darkSelector: ".dark-mode",

    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },

    extend: {}
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "responsive"
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "responsive"
    ],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};
