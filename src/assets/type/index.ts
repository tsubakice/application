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

export type Types = Array<Label>
export type Batches = Array<Label>
interface Label {
  id: number,
  text: string,
}

export type Projects = Array<Project>
interface Project {
  id: number,
  label: string,
  name: string,
  type: string,
  date: string,
  unit: string,
  address: string,
}