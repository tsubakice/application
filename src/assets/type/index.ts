export interface Tab {
  id: number,
  name: string,
  label: string,
  image?: string,
  children?: Tab[],
}

export interface Article {
  id: number,
  title: string,
  content?: string,
  source?: string,
  date?: string,
  cover?: string,
}

export interface Media {
  id: number,
  title: string,
  date: string,
  cover: string,
}

export interface Label {
  id: number,
  label: string,
}

export interface Project {
  id: number,
  label: string,
  name: string,
  type: string,
  batch: string,
  unit: string,
  address: string,
}