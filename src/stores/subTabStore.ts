import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Tab } from '@/assets/type'

export const useSubTabStore = defineStore('subTabStore', () => {
  const active = ref('')
  const tabs = ref<Tab[]>([])

  const initTabs = (values: Tab[]) => {
    if (values[0]) {
      tabs.value = values
      active.value = tabs.value[0].name
    } else {
      tabs.value = []
      active.value = ''
    }
  }

  return { initTabs, tabs, active }
})