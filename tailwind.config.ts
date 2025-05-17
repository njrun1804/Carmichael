import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{tsx,mdx}", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        terracotta:  "#C56B47",
        sandshell:   "#F2E6D8",
        taupe:       "#A89A8E",
        charcoal:    "#333533",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans:  ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
