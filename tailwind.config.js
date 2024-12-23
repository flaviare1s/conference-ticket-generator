/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inconsolata': ["Inconsolata", "serif"],
        'fira': ["Fira Code", "serif"],
      },
      colors: {
        neutral_0: "hsl(0, 0%, 100%)",
        neutral_300: "hsl(252, 6%, 83%)",
        neutral_500: "hsl(245, 15%, 58%)",
        neutral_700: "hsl(245, 19%, 35%)",
        neutral_900: "hsl(248, 70%, 10%)",

        orange_500: "hsl(7, 88%, 67%)",
        orange_700: "hsl(7, 71%, 60%)",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, hsl(7, 88%, 67%) 0%, hsl(0, 0%, 100%) 100%)",
      },
    },
  },
  plugins: [],
};
