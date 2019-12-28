import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArInstructionsComponent } from './ar-instructions.component';

describe('ArInstructionsComponent', () => {
  let component: ArInstructionsComponent;
  let fixture: ComponentFixture<ArInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
