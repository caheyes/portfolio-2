import { Injectable, signal } from "@angular/core";
import { IProjects } from "../interfaces/IProjects.interface";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects = signal<IProjects[]>([
    {
      img: 'assets/files/images/projects/spotify.png',
      title: 'Spotify',
      date: '04 de janeiro de 2025',
      video: 'assets/files/videos/spotify.mp4',
      description: `
      <p> Este site foi desenvolvido como parte de um projeto de estudos em HTML e CSS, inspirado na Imersão Alura. O objetivo foi aprimorar minhas habilidades em estruturação de páginas e estilização, recriando a interface do Spotify. </p> <p> Durante o desenvolvimento, aprofundei meus conhecimentos em CSS Grid, Flexbox e responsividade, garantindo uma experiência visual agradável em diferentes dispositivos. Além disso, explorei boas práticas de organização de código e semântica HTML. </p>
      `,
      links: [
        {
          text: 'Conheça o site',
          href: 'https://caheyes.github.io/Imers-o-Spotify/'
        },
        {
          text: 'Acessar repositório',
          href: 'https://github.com/caheyes/Imers-o-Spotify'
        },
      ],
      skills: [
        { text: 'HTML5', src: 'assets/files/images/icons/svg/html5.svg' },
        { text: 'Javascript', src: 'assets/files/images/icons/svg/javascript.svg' },
        { text: 'CSS3', src: 'assets/files/images/icons/svg/css3.svg' },
      ]
    },
    {
      img: 'assets/files/images/projects/memoteca.png',
      title: 'Memoteca',
      date: '30 de dezembro de 2024',
      video: 'assets/files/videos/memoteca.mp4',
      description: `
      <p>
        Este site foi desenvolvido como um espaço para registrar pensamentos, músicas, anotações e muito mais. Ele foi criado como parte de um projeto de estudos em Angular, utilizando a versão 14. O design é uma contribuição do curso da Alura.
      </p>
      <p>
        Durante o desenvolvimento, adquiri uma experiência valiosa com os formulários do Angular, integração com APIs e boas práticas de desenvolvimento front-end.
      </p>
      `,
      links: [
        {
          text: 'Acessar repositório',
          href: 'https://github.com/caheyes/Memoteca'
        },
      ],
      skills: [
        { text: 'HTML5', src: 'assets/files/images/icons/svg/html5.svg' },
        { text: 'Angular', src: 'assets/files/images/icons/svg/angular.svg' },
        { text: 'Javascript', src: 'assets/files/images/icons/svg/javascript.svg' },
        { text: 'CSS3', src: 'assets/files/images/icons/svg/css3.svg' },
        { text: 'SASS', src: 'assets/files/images/icons/svg/sass.svg' },
      ]
    },
    {
      img: 'assets/files/images/projects/brafe1.png',
      title: 'Brafé',
      date: '07 de junho de 2021',
      video: 'assets/files/videos/brafe1.mp4',
      description: `
      <p>
        Este é um blog dedicado a explorar diversos tipos de cafés que refletem a essência do Brasil.
      </p>
      <p>
        O projeto foi um dos meus primeiros em que pude aplicar técnicas de CSS Grid e responsividade, permitindo-me criar um layout flexível e adaptável a diferentes dispositivos. Foi uma experiência fundamental para o meu desenvolvimento.
      </p>
      `,
      links: [
        {
          text: 'Conheça o blog',
          href: 'https://caheyes.github.io/brafe_grid_site/?#'
        },
        {
          text: 'Acessar repositório',
          href: 'https://github.com/caheyes/brafe_grid_site'
        },
      ],
      skills: [
        { text: 'HTML5', src: 'assets/files/images/icons/svg/html5.svg' },
        { text: 'CSS3', src: 'assets/files/images/icons/svg/css3.svg' },
      ]
    },
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
        { text: 'HTML5', src: 'assets/files/images/icons/svg/html5.svg' },
        { text: 'Javascript', src: 'assets/files/images/icons/svg/javascript.svg' },
        { text: 'CSS3', src: 'assets/files/images/icons/svg/css3.svg' },
      ]
    },
    {
      img: 'assets/files/images/projects/animais-fantasticos.png',
      title: 'Animais Fantásticos',
      date: '07 de junho de 2021',
      video: 'assets/files/videos/animais-fantasticos.mp4',
      description: `
      <p>
        <strong>Animais Fantásticos</strong> foi um projeto criado com o objetivo de aprofundar técnicas avançadas de estilização.
      </p>
      <p>
        O projeto traz uma coleção interativa dos animais mais fascinantes, com um design envolvente e responsivo, pensado para proporcionar uma experiência visual agradável em diferentes dispositivos. Além disso, dediquei atenção especial aos detalhes visuais, combinando cores, tipografia e imagens para criar uma interface que encanta e informa ao mesmo tempo.
      </p>
      <p>
        Este projeto foi uma oportunidade incrível para consolidar minhas habilidades em front-end e explorar minha criatividade ao unir tecnologia e design de forma harmônica.
      </p>
      `,
      links: [
        {
          text: 'Conheça o site',
          href: 'https://caheyes.github.io/Animais_Fantasticos/'
        },
        {
          text: 'Acessar repositório',
          href: 'https://github.com/caheyes/Animais_Fantasticos'
        },
      ],
      skills: [
        { text: 'HTML5', src: 'assets/files/images/icons/svg/html5.svg' },
        { text: 'CSS3', src: 'assets/files/images/icons/svg/css3.svg' },
      ]
    },
    {
      img: 'assets/files/images/projects/snackgame.png',
      title: 'Snack Game',
      date: '08 de dezembro de 2020',
      video: 'assets/files/videos/snackgame.mp4',
      description: `
      <p>
        Este projeto foi um dos meus primeiros desenvolvimentos com JavaScript. Trata-se de um clássico jogo da cobrinha, criado utilizando HTML, CSS e JavaScript.
      </p>
      <p>
        O jogo foi uma oportunidade de aplicar conceitos fundamentais de programação, como manipulação de eventos, lógica de jogo e controle de animações, além de aprimorar minhas habilidades na criação de interfaces interativas.
      </p>
      `,
      links: [
        {
          text: 'Conheça o jogo',
          href: 'https://caheyes.github.io/snakeGame/'
        },
        {
          text: 'Acessar repositório',
          href: 'https://github.com/caheyes/snakeGame'
        },
      ],
      skills: [
        { text: 'HTML5', src: 'assets/files/images/icons/svg/html5.svg' },
        { text: 'Javascript', src: 'assets/files/images/icons/svg/javascript.svg' },
        { text: 'CSS3', src: 'assets/files/images/icons/svg/css3.svg' },
      ]
    },
  ])
}
