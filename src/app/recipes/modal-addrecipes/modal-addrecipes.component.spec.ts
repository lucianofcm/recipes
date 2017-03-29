import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddrecipesComponent } from './modal-addrecipes.component';

describe('ModalAddrecipesComponent', () => {
  let component: ModalAddrecipesComponent;
  let fixture: ComponentFixture<ModalAddrecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddrecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
