import { Injectable, signal } from "@angular/core";
import { IExperiences } from "../interfaces/IExperiences.interface";

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  public experiences = signal<IExperiences[]>([
    {
      title: 'Banco Alfa',
      position: 'Desenvolvedora pleno',
      time: 'Atual',
      description: 'Desenvolvimento de sistemas web com foco financeiro, telas responsivas para diversos dispositivos mobile, integração de APIs, utilização de metodologias ágeis.',
      tags: ['Javascript', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'SASS', 'Git', 'Sourcetree', 'Azure']
    },
    {
      title: 'GregHub',
      position: 'Desenvolvedora júnior',
      time: '05/2022 - 12/2023',
      description: 'Desenvolvimento de sistemas web, dividido em vários módulos de entrega, telas responsivas para diversos dispositivos mobile, integração de APIs, utilização de metodologias ágeis, scrum e kanban.',
      tags: ['Javascript', 'Vue.js', 'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Git', 'Sourcetree', 'Azure', 'Quasar', 'Flutter']
    },
    {
      title: 'T.group',
      position: 'Desenvolvedora júnior',
      time: '03/2022 - 05/2022',
      description: 'Atuava na manutenção e evolução de sistema, garantindo a consistência e a qualidade dos produtos já desenvolvidos, após a transição para um novo CNPJ que se tornou a empresa GregHub.',
      tags: ['Javascript', 'Vue.js', 'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Git', 'Sourcetree', 'Azure', 'Quasar', 'Flutter']
    },
    {
      title: 'Wiplay',
      position: 'Desenvolvedora júnior',
      time: '06/2021 - 03/2022',
      description: 'Manutenção da plataforma e correção de bugs. riação de novos módulos para a plataforma e implementação de gráficos analíticos.',
      tags: ['Javascript', 'Vue.js', 'HTML5', 'CSS3', 'SASS']
    },
  ])
}
