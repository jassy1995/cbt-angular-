import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnsComponent } from './gns.component';

describe('GnsComponent', () => {
  let component: GnsComponent;
  let fixture: ComponentFixture<GnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
