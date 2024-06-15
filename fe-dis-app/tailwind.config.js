/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f7f7f7",
          text: "#333333",
        },
        dark: {
          background: "#1a1a1a",
          text: "#e0e0e0",
        },
      },
    },
  },
  plugins: [],
};
