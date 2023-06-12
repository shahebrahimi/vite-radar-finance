import { definePlugin } from '/@src/app'

export default definePlugin(({ app, initialState }) => {
  const pinia = createPinia()
  app.use(pinia)

  if (typeof window !== 'undefined') {
    pinia.state.value = initialState?.pinia || {}
  } else {
    initialState.pinia = pinia.state.value
  }
})
