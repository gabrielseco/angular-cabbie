import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCabbieComponent } from './form-cabbie.component';

describe('FormCabbieComponent', () => {
  let component: FormCabbieComponent;
  let fixture: ComponentFixture<FormCabbieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCabbieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCabbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
