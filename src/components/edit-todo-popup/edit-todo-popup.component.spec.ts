import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoPopupComponent } from './edit-todo-popup.component';

describe('EditTodoPopupComponent', () => {
  let component: EditTodoPopupComponent;
  let fixture: ComponentFixture<EditTodoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
