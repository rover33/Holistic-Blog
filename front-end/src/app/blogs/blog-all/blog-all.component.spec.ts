import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAllComponent } from './blog-all.component';

describe('BlogAllComponent', () => {
  let component: BlogAllComponent;
  let fixture: ComponentFixture<BlogAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
