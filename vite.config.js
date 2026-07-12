import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 讓 Tailwind v4 的 Vite 外掛接管編譯
  ],
  base: './', // 確保使用相對路徑，防止 Cloudflare 找不到靜態資產
})