import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTotalComponent } from './complete-total.component';

describe('CompleteTotalComponent', () => {
  let component: CompleteTotalComponent;
  let fixture: ComponentFixture<CompleteTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
