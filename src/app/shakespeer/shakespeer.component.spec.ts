import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakespeerComponent } from './shakespeer.component';

describe('ShakespeerComponent', () => {
  let component: ShakespeerComponent;
  let fixture: ComponentFixture<ShakespeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakespeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakespeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
