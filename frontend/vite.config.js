import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // if using React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [
    react(),
    tailwindcss(),
    require("@tailwindcss/typography"),
  ],
})
