import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProjects } from '../../../../core/interfaces/IProjects.interface';

@Component({
  selector: 'molecule-modal-project',
  standalone: true,
  imports: [],
  templateUrl: './molecule-modal-project.component.html',
  styleUrl: './molecule-modal-project.component.scss'
})
export class MoleculeModalProjectComponent {
  @Input() project!: IProjects;
  @Input() modalOpen: boolean = false;

  @Output() controlerModal = new EventEmitter<boolean>();

  closeModal() {
    this.controlerModal.emit(false);
  }
}
