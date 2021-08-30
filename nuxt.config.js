const main_base_URL = "https://dealertoyotajogja.net";

export default {
  sitemap: {
    hostname: main_base_URL
  },
  env: {
    main_base_URL
  },
  robots: {
    /* opsi */
    UserAgent: "*",
    Disallow: ""
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "",
    titleTemplate: " %s | Toyota Jogja",
    title: "Dealer Toyota Jogja" | "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    htmlAtters: {
      lang: "id",
      amp: true
    },
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: `https://dealertoyotajogja.net`
      },
      { rel: "icon", type: "image/x-icon", href: "/toyota-yogya.webp" }
    ]
  },
  loading: { color: "#fff" },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/tailwind.scss"],
  purgeCSS: {
    whitelist: ["dark-mode"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/html-validator",
    // "@nuxtjs/google-analytics",
    "@nuxt/image"
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots"
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "id"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    },
    nestedProperties: ["author.name"]
  },

  htmlValidator: {
    usePrettier: false,
    failOnError: false,
    options: {
      extends: [
        "html-validate:document",
        "html-validate:recommended",
        "html-validate:standard"
      ],
      rules: {
        "svg-focusable": "off",
        "no-unknown-elements": "error",
        // Conflicts or not needed as we use prettier formatting
        "void-style": "off",
        "no-trailing-whitespace": "off",
        // Conflict with Nuxt defaults
        "require-sri": "off",
        "attribute-boolean-style": "off",
        "doctype-style": "off",
        // Unreasonable rule
        "no-inline-style": "off"
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: "./tailwind.config.js"
      }
    }
  },
  generate: {
    fallback: "404.html"
  }
};
