// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  app: {
    baseURL: '/user/'  // This ensures the app serves under /user/
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'PWA App 2',
      short_name: 'PWA2',
      description: 'A simple Nuxt PWA App 2',
      theme_color: '#ff5733',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
       icons: [
        { src: '/pwa-assets/pwa-64x64.png', sizes: '64x64', type: 'image/png' },
        {
          src: '/pwa-assets/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-assets/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa-assets/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      // related_applications: [
      //   {
      //     platform: 'webapp',
      //     url: 'https://groot-pwa-app-1.vercel.app/manifest.json',
      //   },
      // ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      type: 'module'
    }
  },
})