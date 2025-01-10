import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeModalProjectComponent } from './molecule-modal-project.component';

describe('MoleculeModalProjectComponent', () => {
  let component: MoleculeModalProjectComponent;
  let fixture: ComponentFixture<MoleculeModalProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculeModalProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeModalProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
