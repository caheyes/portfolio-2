import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismContactComponent } from './organism-contact.component';

describe('OrganismContactComponent', () => {
  let component: OrganismContactComponent;
  let fixture: ComponentFixture<OrganismContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
