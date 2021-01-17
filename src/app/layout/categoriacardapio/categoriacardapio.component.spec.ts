import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriacardapioComponent } from './categoriacardapio.component';

describe('CategoriacardapioComponent', () => {
  let component: CategoriacardapioComponent;
  let fixture: ComponentFixture<CategoriacardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriacardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriacardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
