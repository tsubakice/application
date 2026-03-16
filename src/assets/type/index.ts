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
  image?: string,
}