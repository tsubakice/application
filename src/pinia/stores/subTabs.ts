import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Tabs } from '@/assets/type'

export const useSubTabsStore = defineStore('subTabs', () => {
  const active = ref('')
  const tabs = ref<Tabs>([])

  const resetSubTabs = () => {
    active.value = ''
    tabs.value = []
  }

  const initSubTabs = (newTabs: Tabs) => {
    if (newTabs[0]) {
      active.value = newTabs[0].name
      tabs.value = newTabs
    } else {
      resetSubTabs()
    }
  }

  return { initSubTabs, active, tabs }
})