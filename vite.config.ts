import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { homepage } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: homepage,
  plugins: [preact()]
})
