import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 💡 최신 플러그인 로드

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 💡 여기에 플러그인을 주입해야 테일윈드가 작동합니다!
  ],
})