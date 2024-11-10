import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismExperiencesComponent } from './organism-experiences.component';

describe('OrganismExperiencesComponent', () => {
  let component: OrganismExperiencesComponent;
  let fixture: ComponentFixture<OrganismExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismExperiencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
