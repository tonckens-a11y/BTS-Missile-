import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = '/XAU-Missile/'
const isVercel = process.env.VERCEL === '1'

export default defineConfig({
  plugins: [react()],
  base: isVercel ? '/' : repoBase,
})
