
export default defineNuxtConfig({
  ssr: true,       // enable server-side rendering
  devtools: true,  // optional
  app: {
    head: {
      title: 'Nuxt 4 SSR App'
    }
  },
   modules: ['@nuxt/ui'],
    css: ['~/assets/css/main.css']
})
