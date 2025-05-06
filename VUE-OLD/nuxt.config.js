export default {
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vee-validate.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }],
  ],
  head: {
    titleTemplate: '%s',
    title: 'Olczański Dom – tanie noclegi i apartamenty w Zakopanem!',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      { title: 'Olczański Dom – tanie noclegi i apartamenty w Zakopanem!' },
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Olczański Dom – tanie noclegi i apartamenty w Zakopanem!',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Olczański Dom – tanie noclegi i apartamenty w Zakopanem!',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Olczański Dom – tanie noclegi i apartamenty w Zakopanem!',
      },
      { hid: 'author', name: 'author', content: 'Olczański Dom' },
      { hid: 'og:url', name: 'og:url', content: 'https://olczanskidom.pl' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Tanie noclegi blisko centrum Zakopanego, apartamenty, prywatny parking, bezpłatne wifi, pokoje gościnne w Zakopanem',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Tanie noclegi blisko centrum Zakopanego, apartamenty, prywatny parking, bezpłatne wifi, pokoje gościnne w Zakopanem',
      },
      {
        hid: 'og:favicon',
        rel: 'icon',
        type: 'image/x-icon',
        name: 'og:favicon',
        content: '/favicon.ico',
        href: '/favicon.ico',
      },
    ],
    link: [
      {
        hid: 'icon',
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
    },
    manifest: {
      name: 'Olczański Dom – tanie noclegi i apartamenty w Zakopanem!',
      short_name: 'Olczański Dom – tanie noclegi i apartamenty w Zakopanem!',
      description:
        'Tanie noclegi blisko centrum Zakopanego, apartamenty, prywatny parking, bezpłatne wifi, pokoje gościnne w Zakopanem',
      lang: 'pl',
      background_color: '#fcc150',
    },
  },
  loading: {
    color: '#fcc150',
    height: '2px',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'staging'
        ? 'https://api.olczanskidom.pl'
        : 'http://localhost:8000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
