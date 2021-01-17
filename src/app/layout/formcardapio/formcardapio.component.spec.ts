import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcardapioComponent } from './formcardapio.component';

describe('FormcardapioComponent', () => {
  let component: FormcardapioComponent;
  let fixture: ComponentFixture<FormcardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
