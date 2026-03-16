export interface Tab {
  id: number,
  name: string,
  label: string,
  image?: string,
  children?: Tab[],
}