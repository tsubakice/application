import { Solar } from 'lunar-typescript'
import { computed } from 'vue'

export default () => {
  const solar = Solar.fromDate(new Date())
  const lunar = solar.getLunar()

  const year = computed(() => solar.getYear())
  const month = computed(() => `${solar.getMonth()}`.padStart(2, '0'))
  const day = computed(() => `${solar.getDay()}`.padStart(2, '0'))

  const week = computed(() => '星期' + lunar.getWeekInChinese())
  const date = computed(() => `农历${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}` )

  return { year, month, day,  week, date }
}