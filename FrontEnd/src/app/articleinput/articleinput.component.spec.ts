import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleinputComponent } from './articleinput.component';

describe('ArticleinputComponent', () => {
  let component: ArticleinputComponent;
  let fixture: ComponentFixture<ArticleinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
