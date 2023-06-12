/**
 * This is a store that hold the dark mode state
 * It could be auto (fit system preference), dark or light
 *
 * Using useStorage from @vueuse/core allow persistance storage accross tabs/sessions
 *
 * We can import and set isDark anywhere in our project
 * @see /src/components/navigation/LandingNavigation.vue
 * @see /src/components/partials/toolbars/Toolbar.vue
 */
import { skipHydrate } from 'pinia'

export const DARK_MODE_BODY_CLASS = 'is-dark'
export type DarkModeSchema = 'auto' | 'dark' | 'light'

export const useDarkmode = defineStore('darkmode', () => {
  const preferredDark = usePreferredDark()

  const colorSchema = useLocalStorage<'system' | 'light' | 'dark'>(
    'color-schema',
    'system'
  )

  const isDark = computed({
    get() {
      return colorSchema.value === undefined
        ? preferredDark.value
        : colorSchema.value === 'dark'
    },
    set(v: boolean) {
      colorSchema.value = v ? 'dark' : 'light'
    },
  })

  if (!import.meta.env.SSR) {
    watch(
      isDark,
      (v) => {
        if (v) {
          document.documentElement.classList.add(DARK_MODE_BODY_CLASS)
        } else {
          document.documentElement.classList.remove(DARK_MODE_BODY_CLASS)
        }
      },
      { immediate: true }
    )
  }

  return {
    isDark: skipHydrate(isDark),
  }
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDarkmode, import.meta.hot))
}
