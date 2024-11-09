import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismAboutComponent } from './organism-about.component';

describe('AboutComponent', () => {
  let component: OrganismAboutComponent;
  let fixture: ComponentFixture<OrganismAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
