import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShowComponent } from './form-show.component';

describe('FormShowComponent', () => {
  let component: FormShowComponent;
  let fixture: ComponentFixture<FormShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormShowComponent]
    });
    fixture = TestBed.createComponent(FormShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
