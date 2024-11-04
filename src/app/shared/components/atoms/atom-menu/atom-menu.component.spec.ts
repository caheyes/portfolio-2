import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomMenuComponent } from './atom-menu.component';

describe('AtomMenuComponent', () => {
  let component: AtomMenuComponent;
  let fixture: ComponentFixture<AtomMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
