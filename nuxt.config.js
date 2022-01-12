export default {
  components: true,
  head: {
    titleTemplate: 'LevoBnB: %s',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: ['my-style'],
    },
    meta: [
      {
        charset: 'utf-8',
      },
    ],
  },
  router: {
    prefetchLinks: false,
  },
  plugins: [
    '~/plugins/maps.client',
    '~/plugins/dataApi',
    '~/plugins/auth.client',
    '~/plugins/vCalendar.client',
    '~/plugins/stripe.client',
  ],
  modules: [
    '~/modules/auth',
    '~/modules/algolia',
    '~/modules/cloudinary',
    '@nuxtjs/cloudinary',
    '~/modules/stripe',
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
  cloudinary: {
    cloudName: 'dy9jmzxjx',
  },
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    },
  },
  publicRuntimeConfig: {
    rootUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://levo-bnb.vercel.app'
        : 'http://localhost:3000',
    auth: {
      cookieName: 'idToken',
      clientId:
        '586769034827-u6fvionv6mh7sr95se524j95u8cl8htm.apps.googleusercontent.com',
    },
    algolia: {
      appId: '3LWUG0HA7L',
      key: '1cd64085e2f8f1d343257c7f760f44a8',
    },
    cloudinary: {
      apiKey: '466848933876658',
    },
    stripe: {
      key: 'pk_test_kJej6mAAN0hPu1ffCPQpinxq00X6Dbpvch',
    },
  },
  privateRuntimeConfig: {
    algolia: {
      appId: '3LWUG0HA7L',
      key: process.env.ALGOLIA_SECRET_KEY,
    },
    cloudinary: {
      apiSecret: process.env.CLOUDINARY_SECRET_KEY,
    },
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY,
    },
  },
}
