/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-pseudo-left":
          "linear-gradient(to left, rgba(242,236,228,0) 0%, rgba(242,236,228,1) 100%)",
        "gradient-pseudo-right":
          "linear-gradient(to right, rgba(242,236,228,0) 0%, rgba(242,236,228,1) 100%)",
        "gradient-pseudo-right-dark":
          "linear-gradient(to right, rgba(17,24,39,0) 0%, rgba(17,24,39,1) 100%)",
        "gradient-pseudo-left-dark":
          "linear-gradient(to left, rgba(17,24,39,0) 0%, rgba(17,24,39,1) 100%)",
      },
      backgroundColor: {
        LIGHT_PRIMARY_BG_COLOR: "#f2ece4",
        LIGHT_SECONDARY_BG_COLOR: "#f7f6f2",
        DARK_PRIMARY_BG_COLOR: "#111827",
        DARK_SECONDARY_BG_COLOR: "#1F2937",
      },
      minHeight: {
        PAGE_MIN_HEIGHT: "calc(100vh - 12rem)",
      },
      keyframes: {
        shift: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        shift: "shift 15s  infinite linear",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
  variants: {
    extend: {
      backgroundClip: ["responsive"],
    },
  },
};
