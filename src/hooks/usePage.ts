import { ref } from 'vue'

export default () => {
  const page = ref(1)
  const changePage = (value: number) => page.value = value

  return { page, changePage }
}