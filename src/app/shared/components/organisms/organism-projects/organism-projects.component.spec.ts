import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismProjectsComponent } from './organism-projects.component';

describe('OrganismProjectsComponent', () => {
  let component: OrganismProjectsComponent;
  let fixture: ComponentFixture<OrganismProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
