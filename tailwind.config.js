/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      placeholderColor: theme => ({ 
        left: 'left', 
      }), 
    },
  },
  plugins: [],
}

