import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomProjectComponent } from './atom-project.component';

describe('AtomProjectComponent', () => {
  let component: AtomProjectComponent;
  let fixture: ComponentFixture<AtomProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
