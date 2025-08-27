import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WicketKeepingComponent } from './wicket-keeping.component';

describe('WicketKeepingComponent', () => {
  let component: WicketKeepingComponent;
  let fixture: ComponentFixture<WicketKeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WicketKeepingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WicketKeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
