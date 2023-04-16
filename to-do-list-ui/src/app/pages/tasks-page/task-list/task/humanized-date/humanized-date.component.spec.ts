import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanizedDateComponent } from './humanized-date.component';

describe('HumanizedDateComponent', () => {
  let component: HumanizedDateComponent;
  let fixture: ComponentFixture<HumanizedDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanizedDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanizedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
