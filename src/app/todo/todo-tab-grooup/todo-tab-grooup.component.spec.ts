import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTabGrooupComponent } from './todo-tab-grooup.component';

describe('TodoTabGrooupComponent', () => {
  let component: TodoTabGrooupComponent;
  let fixture: ComponentFixture<TodoTabGrooupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTabGrooupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTabGrooupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
