import { Injectable, signal } from "@angular/core";
import { IProjects } from "../interfaces/IProjects.interface";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects = signal<IProjects[]>([
    {
      img: '',
      title: 'Bikcraft',
      date: '21 de novembro de 2022',
      video: '',
      description: `
      <p>
        Este é um site para encomendas de bicicletas feitas a mão. É um projeto final do curso Web Design da Origamid, onde tive oportunidade de colocar em prática UX/UI Design, Adobe XD, Semântica, SEO, Grid, Reset, Responsividade, Animações, Domínio, hospedagem e muito mais.
      </p>
      `,
      // links: { text: string, href: string }[],
      // skills: { text: string, src: string }[]
    },
  ])
}