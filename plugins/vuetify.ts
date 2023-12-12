// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                dark: true,
                colors: {
                    background: '#121212', // Dark background
                    primary: '#1976D2',   // Blue for primary buttons and links
                    secondary: '#424242', // Grey for secondary elements
                    accent: '#82B1FF',    // Light blue for accents
                    error: '#FF5252',     // Red for error messages
                    info: '#2196F3',      // Blue for informational messages
                    success: '#4CAF50',   // Green for success messages
                    warning: '#FFC107',   // Amber for warnings
                  },
            }
        }
    },
    ssr: true,
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})