import { createPinia } from 'pinia'
import plugin from 'pinia-plugin-persistedstate'

export default createPinia().use(plugin)