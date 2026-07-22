import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Enables Vite's React transform and development integration for JSX files.
export default defineConfig({
  plugins: [react()],

  base: 'Williamokogwu.github.io',
})
