import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipOptionsComponent } from './tip-options.component';

describe('TipOptionsComponent', () => {
  let component: TipOptionsComponent;
  let fixture: ComponentFixture<TipOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
