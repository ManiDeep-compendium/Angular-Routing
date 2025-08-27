import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsAcademyComponent } from './sports-academy.component';

describe('SportsAcademyComponent', () => {
  let component: SportsAcademyComponent;
  let fixture: ComponentFixture<SportsAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsAcademyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
