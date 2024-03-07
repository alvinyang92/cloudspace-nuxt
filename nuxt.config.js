// import { fetchStories } from './fetchStories'
// require('dotenv').config()
export default defineNuxtConfig({
  //  generate: { fallback: '404.html' },
  experimental: {
    componentIslands: true
  },

  //  optimization: {
  //    minimize: true,
  //    splitChunks: {
  //      chunks: 'all',
  //      automaticNameDelimiter: '.',
  //      name: true,
  //      maxSize: 90000,
  //      cacheGroups: {
  //        vendor: {
  //          name: 'node_vendors',
  //          test: /[\\/]node_modules[\\/]/,
  //          chunks: 'all',
  //          maxSize: 90000
  //        }
  //      }
  //    }
  //  },

  //solve fsevents
  vite: { optimizeDeps: { exclude: ["fsevents"] }, },

  //modules
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'DpBofGpsODYuQk0AFLdQhQtt',
        cache: {
          clear: "auto",
          type: "memory",
        },
        //  bridge: true
        // apiOptions: {
        //   region: "us" // When creating your space in US region (EU default)
        // }
      },
    ], '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/robots', 'nuxt-simple-sitemap'
  ],


  // i18n: {
  //   strategy: 'prefix_except_default',
  //   locales: ['en', 'ja', 'zh'],
  //   defaultLocale: 'en', // default locale
  // },

  //storyblok
  // storyblok: {
  //   accessToken: ["6kZ1lLQDxyAZAeeQvkxrAQtt"],
  //   // useApiClient: true,
  //   // bridge: true,
  //   // apiOptions: { cache: { type: 'memory' } },
  // },

  //  hooks: {
  //    'vite:extendConfig': (config, { isClient, isServer }) => {
  //      if (isClient) {
  //        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler'
  //      }
  //    },
  //  },

  //sitemap 
  nitro: {
    prerender: {
      crawlLinks: true,
      // autoSubfolderIndex: true,
      // routes: ['/', '/articles/**'],
    },

    //    // hooks: {
    //    //   async 'nitro:config'(nitroConfig) {
    //    //     if (!nitroConfig || nitroConfig.dev) {
    //    //       return
    //    //     }
    //    //     const token = "6kZ1lLQDxyAZAeeQvkxrAQtt"

    //    //     let cache_version = 0

    //    //     // other routes that are not in Storyblok with their slug.
    //    //     let routes = ['/'] // adds home directly but with / instead of /home
    //    //     try {
    //    //       const result = await fetch(`https://api.storyblok.com/v2/cdn/spaces/me?token=${token}`)

    //    //       if (!result.ok) {
    //    //         throw new Error('Could not fetch Storyblok data')
    //    //       }
    //    //       // timestamp of latest publish
    //    //       const space = await result.json()
    //    //       cache_version = space.space.version

    //    //       // Recursively fetch all routes and set them to the routes array
    //    //       await fetchStories(routes, cache_version)
    //    //       // Adds the routes to the prerenderer
    //    //       nitroConfig.prerender.routes.push('...slug')
    //    //     } catch (error) {
    //    //       console.error(error)
    //    //     }
    //    //   },


  },

  //  },
  // site: { url: 'https://packlyft-final.vercel.app', },



  //image
  image:
    { storyblok: { baseURL: 'https://a.storyblok.com' }, },


  //tailwindcss
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    },
  },

  // Header
  app: {
    head: {
      htmlAttrs: { lang: 'en-US', prefix: 'og: https://ogp.me/ns#' },
      title: 'Cloud-Space – Home',
      meta: [

        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes' },

        { name: 'description', content: 'Cloud Automation Transforming & Streamlining Cost Optimization' },
        { name: 'robots', content: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large' },

        //twitter
        { name: 'twitter:title', content: 'Cloud-Space – Home' },
        { name: 'twitter:description', content: 'Cloud Automation Transforming & Streamlining Cost Optimization' },
        { name: 'twitter:card', content: 'summary_large_image', },
        { property: 'twitter:image', content: 'https://a.storyblok.com/f/278050/32x32/a99e4835aa/favicon.svg/m/' },

        //og 
        { property: 'og:locale', content: 'en-US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image:secure_url', content: 'https://a.storyblok.com/f/278050/32x32/a99e4835aa/favicon.svg/m/' },
        { property: 'og:image', content: 'https://a.storyblok.com/f/278050/32x32/a99e4835aa/favicon.svg/m/' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Etech' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:description', content: 'Cloud Automation Transforming & Streamlining Cost Optimization' },
      ],
      link: [
        //favicon
        { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: 'https://a.storyblok.com/f/278050/32x32/a99e4835aa/favicon.svg/m/' },
        //font
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+SC:wght@100;200;300;400;500;600;700;800;900&display=swap' },
        //canonical
        // { rel: 'canonical', href: `https://www.etech.net.my/` },
      ],
      script:
        [
          // {
          //   src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
          //   body: true
          // },
        ],
    },
  },

})

