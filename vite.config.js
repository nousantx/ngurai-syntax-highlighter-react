import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tenoxui from 'vite-plugin-tenoxui-beta'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tenoxui()]
})
