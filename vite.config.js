import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // Inject SASS variables into all scss files
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/variables.scss";`
      }
    }
  }
})
