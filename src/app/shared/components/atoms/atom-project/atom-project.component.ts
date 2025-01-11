import { Component, Input } from '@angular/core';
import { IProjects } from '../../../../core/interfaces/IProjects.interface';
import { MoleculeModalProjectComponent } from '../../molecules/molecule-modal-project/molecule-modal-project.component';

@Component({
  selector: 'atom-project',
  standalone: true,
  imports: [MoleculeModalProjectComponent],
  templateUrl: './atom-project.component.html',
  styleUrl: './atom-project.component.scss'
})
export class AtomProjectComponent {
  @Input() project!: IProjects;

  modalOpen: boolean = false;

  constructor () {
  }

  controlerModal(bool: boolean) {
    this.modalOpen = bool;
  }
}
