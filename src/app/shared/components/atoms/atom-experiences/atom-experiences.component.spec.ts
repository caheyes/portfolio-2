import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomExperiencesComponent } from './atom-experiences.component';

describe('AtomExperiencesComponent', () => {
  let component: AtomExperiencesComponent;
  let fixture: ComponentFixture<AtomExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomExperiencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
