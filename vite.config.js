import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 確保使用相對路徑，防止 Cloudflare 找不到靜態資產
})