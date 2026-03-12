import { defineStore } from 'pinia'
import { computed } from 'vue'
// @ts-ignore
import lunarjs from '@tenado/lunarjs'

export const useDateStore = defineStore('dateStore', () => {
  const today = new Date()
  const dayOfWeek = ['日', '一', '二', '三', '四', '五', '六']

  const year = computed(() => today.getFullYear())
  const month = computed(() => `${today.getMonth() + 1}`.padStart(2, '0'))
  const day = computed(() => `${today.getDate()}`.padStart(2, '0'))
  const ymd = computed(() => `${year.value}-${month.value}-${day.value}`)
  const week = computed(() => '星期' + dayOfWeek[today.getDay()])

  const calendar = lunarjs.solar2lunar(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  )
  const lunar = computed(() => `农历${calendar.cnMonth}${calendar.cnDay}`)

  return { year, month, day, ymd, week, lunar }
})