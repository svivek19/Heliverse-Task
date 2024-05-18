/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-text": "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
      },
    },
  },
  plugins: [],
};
