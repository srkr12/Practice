/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        orange:"#F6820C",
        purple:"#5F00D9",
        yellow:"#FCCA3F",
        "light-yellow":"#FFEAAE",
        gray:"#5A5959",
      },
    },
  },
  plugins: [],
};
