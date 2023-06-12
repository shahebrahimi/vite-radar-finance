import {
  START_LOCATION,
  createMemoryHistory,
  createRouter as createClientRouter,
  createWebHistory,
} from 'vue-router'
import routes from 'pages-generated'

export function createRouter() {
  const router = createClientRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
    scrollBehavior: async (to, from, savedPosition) => {
      // scroll instantly to hash on first view
      if (to.hash && from === START_LOCATION) {
        return {
          el: to.hash,
        }
      }

      // smooth scroll to hash on page change
      if (to.hash) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: 'smooth',
            })
          }, 500)
        })
      }

      // return on saved possition if any
      if (savedPosition) return savedPosition

      // scroll to top on page change
      return { top: 0, behavior: 'smooth' }
    },
  })

  return router
}
