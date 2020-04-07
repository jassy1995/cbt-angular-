import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChmComponent } from './chm.component';

describe('ChmComponent', () => {
  let component: ChmComponent;
  let fixture: ComponentFixture<ChmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
