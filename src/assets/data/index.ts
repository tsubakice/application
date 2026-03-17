import { ref } from 'vue'
import type { Label } from '@/assets/type'

export const types = ref<Label[]>([
  { id: 0, label: '民间文学' },
  { id: 1, label: '传统音乐' },
  { id: 2, label: '传统舞蹈' },
  { id: 3, label: '传统戏剧' },
  { id: 4, label: '曲艺' },
  { id: 5, label: '传统体育、游艺与杂技' },
  { id: 6, label: '传统美术' },
  { id: 7, label: '传统技艺' },
  { id: 8, label: '传统医药' },
  { id: 9, label: '民俗' },
])

export const batches = ref<Label[]>([
  { id: 0, label: '第一批' },
  { id: 1, label: '第二批' },
  { id: 2, label: '第三批' },
  { id: 3, label: '第四批' },
  { id: 4, label: '第五批' },
  { id: 5, label: '第六批' },
  { id: 6, label: '第七批' },
  { id: 7, label: '第八批' },
  { id: 8, label: '第九批' },
])