import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLongToursComponent } from './add-long-tours.component';

describe('AddLongToursComponent', () => {
  let component: AddLongToursComponent;
  let fixture: ComponentFixture<AddLongToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLongToursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLongToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
