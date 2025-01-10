import { Injectable, signal } from "@angular/core";
import { IProjects } from "../interfaces/IProjects.interface";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects = signal<IProjects[]>([
    {
      img: 'assets/files/images/projects/bikcraft.png',
      title: 'Bikcraft',
      date: '21 de novembro de 2022',
      video: 'assets/files/videos/bikcraft.mp4',
      description: `
      <p>
        Este é um site para encomendas de bicicletas feitas a mão. É um projeto final do curso Web Design da Origamid, onde tive oportunidade de colocar em prática UX/UI Design, Adobe XD, Semântica, SEO, Grid, Reset, Responsividade, Animações, Domínio, hospedagem e muito mais.
      </p>
      `,
      links: [
        {
          text: 'Conheça o site',
          href: 'https://caheyes.github.io/Bikcraft/'
        },
        {
          text: 'Acessar repositório',
          href: 'https://github.com/caheyes/Bikcraft'
        },
      ],
      skills: [
        { text: 'Javascript', src: 'assets/files/images/icons/svg/javascript.svg' },
        { text: 'CSS3', src: 'assets/files/images/icons/svg/css3.svg' },
      ]
    },
  ])
}
