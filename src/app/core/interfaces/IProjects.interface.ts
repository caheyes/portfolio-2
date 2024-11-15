export interface IProjects {
  img: string,
  title: string,
  date?: string,
  video?: string,
  description: string,
  links?: { text: string, href: string }[],
  skills?: { text: string, src: string }[]
}