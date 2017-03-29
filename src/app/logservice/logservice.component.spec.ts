import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogserviceComponent } from './logservice.component';

describe('LogserviceComponent', () => {
  let component: LogserviceComponent;
  let fixture: ComponentFixture<LogserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
