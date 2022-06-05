module.exports = {
  jit: false,
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-back": "#111111",
        green: {
          dark: "#1BA870",
          normal: "#02DC85",
        },
        blue: "#4E44CE",
        field: "#2a303c",
      },
      fontFamily: {
        nunito: ['Nunito', "sans-serif"]
      },
    },
  },
  plugins: [require("daisyui")],
};
