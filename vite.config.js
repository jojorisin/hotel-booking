import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages at https://<user>.github.io/<repo>/
  // set `base` to `'/<repo>/'`. This ensures asset paths are correct.
  // Replace 'hotel-booking' with your repo name if it differs.
  base: '/hotel-booking/',
  plugins: [react()],
})
