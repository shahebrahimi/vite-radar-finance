import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'
import PurgeIcons from 'vite-plugin-purge-icons'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VitePluginRadar } from 'vite-plugin-radar'
import Components from 'unplugin-vue-components/vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'

const SITEMAP_HOST = process.env.SITEMAP_HOST || 'http://localhost:3000/'

export default defineConfig({
  // Project root directory (where index.html is located).
  root: process.cwd(),
  // Base public path when served in development or production.
  base: '/',
  // Directory to serve as plain static assets.
  publicDir: 'public',
  // Adjust console output verbosity.
  logLevel: 'info',
  // development server configuration
  server: {
    // Vite 3 now defaults to 5173, but you can override it with the port option.
    port: 3000,
  },
  // Will be passed to @rollup/plugin-alias as its entries option.
  resolve: {
    alias: [
      {
        find: '/@src/',
        replacement: `/src/`,
      },
      {
        find: '/@/',
        replacement: `/`,
      },
    ],
  },
  optimizeDeps: {
    exclude: ['@vueuse/core', '@vueuse/components'],
    include: [
      'h3',
      'plyr',
      'vue-scrollto',
      'vue-marquee-text-component',
      'cobe',
      'vue3-carousel',
      'vue3-popper',
      'vue-my-photos',
      'vue3-markdown-it',
      'vue-accessible-color-picker',
      'prismjs',
      'vue-prism-component',
      '@iconify/iconify',
      'nprogress',
      '@vueform/slider',
    ],
  },
  build: {
    chunkSizeWarningLimit: Infinity,

    /**
     * Uncomment this section to build the demo with missing images
     * Don't forget to remove this section when you replaced assets with yours
     */
    /// rollupOptions: {
    ///   external: [/\/assets\/demo\/.*/],
    /// },
  },
  ssr: {
    // SSG Vue-i18n workaround
    noExternal: [/vue-i18n/],
  },
  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    Vue({
      include: [/\.vue$/],
    }),

    /**
     * vite-plugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
     *
     * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
     */
    VueI18nPlugin({
      compositionOnly: true,
      fullInstall: false,
      include: resolve(
        // @ts-ignore
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/**'
      ),
    }),

    /**
     * vite-plugin-pages plugin generate routes based on file system
     *
     * @see https://github.com/hannoeru/vite-plugin-pages
     */
    Pages({
      pagesDir: [
        {
          dir: 'src/pages',
          baseRoute: '',
        },
      ],
      onRoutesGenerated: (routes) =>
        generateSitemap({
          routes,
          hostname: SITEMAP_HOST,
        }),
    }),

    /**
     * unplugin-auto-import allow to automaticaly import modules/components
     *
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      dts: true,
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia', '@vueuse/head'],
    }),

    /**
     * unplugin-vue-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/unplugin-vue-components
     */
    Components({
      directoryAsNamespace: false,
      dirs: ['src/components', 'src/layouts'],
      extensions: ['vue'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [IconsResolver()],
    }),

    /**
     * vite-plugin-fonts plugin inject webfonts from differents providers
     *
     * @see https://github.com/stafyniaksacha/vite-plugin-fonts
     */
    VitePluginFonts({
      google: {
        families: [
          /*{
            name: 'Poppins',
            styles: 'ital,wght@0,300;0,400;1,500',
          },*/
          {
            name: 'Roboto',
            styles: 'ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400',
          },
          {
            name: 'Montserrat',
            styles: 'ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,300;1,400',
          },
        ],
      },
    }),

    /**
     * unplugin-icons plugin injects icons from differents providers
     *
     * @see https://github.com/antfu/unplugin-icons
     */
    Icons({ compiler: 'vue3' }),

    /**
     * vite-plugin-purge-icons plugin is responsible of autoloading icones from multiples providers
     *
     * @see https://icones.netlify.app/
     * @see https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
     */
    PurgeIcons(),

    /**
     * vite-plugin-radar plugin inject snippets from analytics providers
     *
     * @see https://github.com/stafyniaksacha/vite-plugin-radar
     */
    VitePluginRadar({
      enableDev: true,
      gtm: {
        id: 'GTM-P4BKNDB',
      },
    }),

    /**
     * vite-plugin-pwa generate manifest.json and register services worker to enable PWA
     *
     * @see https://github.com/antfu/vite-plugin-pwa
     */
    VitePWA({
      base: '/',
      minify: false,
      mode: 'development',
      // includeAssets: [
      //   'android-chrome-192x192.png',
      //   'android-chrome-512x512.png',
      //   'apple-touch-icon.png',
      //   'favicon-16x16.png',
      //   'favicon-32x32.png',
      //   'favicon.ico',
      //   'robots.txt',
      //   'mstile-150x150.png',
      // ],
      // manifest: {
      //   name: 'Vulk - Vue 3 Landing Pages',
      //   short_name: 'Vulk',
      //   start_url: '/?utm_source=pwa',
      //   display: 'standalone',
      //   theme_color: '#ffffff',
      //   background_color: '#ffffff',
      //   icons: [
      //     {
      //       src: 'android-chrome-192x192.png',
      //       sizes: '192x192',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'android-chrome-512x512.png',
      //       sizes: '512x512',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'android-chrome-512x512.png',
      //       sizes: '512x512',
      //       type: 'image/png',
      //       purpose: 'any maskable',
      //     },
      //   ],
      // },
    }),
  ],
})
