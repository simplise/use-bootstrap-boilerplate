// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ['usebootstrap', '@nuxt/eslint'], 
 devtools: { enabled: false },
 css: [
  './assets/scss/custom.scss',
 ],
 compatibilityDate: '2024-07-03',
 vite: {
  css: {
   preprocessorOptions: {
    scss: {
     additionalData: `
           @import "@/assets/scss/_variables.scss";
           `,
    },
   },
  },
 },
 eslint: {
  config: {
   stylistic: {
    indent: 1,
    semi: true,
   },
  },
 },
 usebootstrap: {
 },
},
);
