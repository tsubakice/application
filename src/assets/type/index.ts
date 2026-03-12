export type Tabs = Array<Tab>
interface Tab {
  id: number,
  name: string,
  label: string,
  image?: string,
  children?: Array<Tab>,
}

export type Articles = Array<Article>
interface Article {
  id: number,
  title: string,
  source?: string,
  date?: string,
  content?: string,
  image?: string,
}

export type Types = Array<{ id: number, label: string }>
export type Batches = Types

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

export type Regions = Array<Region>
interface Region {
  id: number,
  label: string,
  children: Array<Region>,
}

export type Inheritors = Array<Inheritor>
interface Inheritor {
  id: number,
  name: string,
  gender: string,
  ethnic: string,
  type: string,
  project: string,
  address: string,
}

export type Bases = Array<Base>
interface Base {
  id: number,
  name: string,
  address: string,
}