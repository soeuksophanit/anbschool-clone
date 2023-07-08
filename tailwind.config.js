/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hero-des": "rgb(36, 37, 90)",
      },
    },
  },
  plugins: [],
};
