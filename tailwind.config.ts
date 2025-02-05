import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        foreground: "hsl(var(--foreground))",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    keyframes: {
      "flip-words": {
        "10%": { transform: "translateY(-112%)" },
        "25%": { transform: "translateY(-100%)" },
        "35%": { transform: "translateY(-212%)" },
        "50%": { transform: "translateY(-200%)" },
        "60%": { transform: "translateY(-312%)" },
        "75%": { transform: "translateY(-300%)" },
        "85%": { transform: "translateY(-412%)" },
        "100%": { transform: "translateY(-400%)" },
      },
    },
    animation: {
      "flip-words": "flip-words 6s infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
