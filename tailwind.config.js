module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-back": "#111111",
        green: "#02DC85",
        blue: "#4E44CE",
      },
    },
  },
  plugins: [require("daisyui")],
};
