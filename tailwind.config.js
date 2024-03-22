module.exports = {
  content: [
    'storyblok/**/*.{vue,js}', 
    'components/**/*.{vue,js}', 
    "./layouts/**/*.vue",
    'pages/**/*.vue',
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
    './**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'
  ],
  theme: {
    extend: {
      colors: {
        'cs-dark-blue': '#0F054C',
        'cs-light-blue': '#1A96D2',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#0A2D61',
            },
          },
        },
      },


    },
  },
   plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require("flowbite/plugin"),
    require("preline/plugin"),

  ],
}
