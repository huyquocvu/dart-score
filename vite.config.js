import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/dart-score/",
  publicPath: process.env.NODE_ENV === 'production' ? '/dart-score/' : '/',
})
