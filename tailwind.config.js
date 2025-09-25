/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // esto le dice a Tailwind dónde buscar clases CSS
  ],
  theme: {
    extend: {}, // aquí podés agregar colores o fuentes personalizados si querés
  },
  plugins: [],
};
