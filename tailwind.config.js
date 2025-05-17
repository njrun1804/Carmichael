/** @type {import('tailwindcss').Config} */
export default {
  // Paths that Tailwind should scan for class names.
  // Include both `app/` (App Router) and `src/` (traditional src layout)
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // Example custom tokens - merge any additional tokens your
      // previous configs defined here.
      colors: {
        brand: {
          DEFAULT: "#1e40af", // indigo-800 as a placeholder brand color
          light: "#3b82f6",  // indigo-500
        },
      },
    },
  },

  plugins: [
    // e.g., require("@tailwindcss/typography"),
    //       require("@tailwindcss/forms"),
  ],
};