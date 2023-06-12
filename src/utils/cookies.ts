import type { H3Event } from 'h3'
import { createCookies } from '@vueuse/integrations/useCookies'
import { CookieChangeOptions } from 'universal-cookie'
import { setCookie } from 'h3'

let universalCookies: ReturnType<typeof createCookies>

const useUniversalCookies = (params?: any, options?: any) => {
  return (
    universalCookies?.(params, options) ?? {
      addChangeListener: () => {},
      removeChangeListener: () => {},
      get: () => {},
      getAll: () => {},
      remove: () => {},
      set: () => {},
    }
  )
}

const initCookiesPlugin = (event?: H3Event) => {
  universalCookies = createCookies(event?.node?.req)

  if (!import.meta.env.SSR || !event) {
    return
  }

  // this is a watcher to set the cookie from the server
  useUniversalCookies().addChangeListener((change: CookieChangeOptions) => {
    if (event.node.res!.headersSent) {
      return
    }

    if (change.value === undefined) {
      const unsetOptions = (<any>Object).assign({}, change.options)
      unsetOptions.maxAge = -1

      setCookie(event, change.name, '', change.options)
    } else {
      setCookie(event, change.name, change.value, change.options)
    }
  })
}

export default initCookiesPlugin

export { useUniversalCookies }
