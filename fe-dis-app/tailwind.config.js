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
          hover: "#e0e0e0",
        },
        dark: {
          background: "#212121",
          text: "#e0e0e0",
          hover: "#3D3D3D",
        },
      },
    },
  },
  plugins: [],
};
