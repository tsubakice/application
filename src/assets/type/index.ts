export type Tabs = Array<Tab>
interface Tab {
  id: number,
  name: string,
  label: string,
  image?: string,
}

export type Articles = Array<Article>
interface Article {
  id: number,
  title: string,
  source?: string,
  date?: string,
  content?: string,
}