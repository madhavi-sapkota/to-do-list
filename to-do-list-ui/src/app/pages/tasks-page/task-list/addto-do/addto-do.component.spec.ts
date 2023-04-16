import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoDoComponent } from './addto-do.component';

describe('AddtoDoComponent', () => {
  let component: AddtoDoComponent;
  let fixture: ComponentFixture<AddtoDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtoDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtoDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
