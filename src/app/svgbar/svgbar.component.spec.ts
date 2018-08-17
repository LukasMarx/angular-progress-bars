import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgbarComponent } from './svgbar.component';

describe('SvgbarComponent', () => {
  let component: SvgbarComponent;
  let fixture: ComponentFixture<SvgbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
