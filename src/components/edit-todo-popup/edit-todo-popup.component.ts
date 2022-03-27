import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../models/Todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-edit-todo-popup',
  templateUrl: './edit-todo-popup.component.html',
  styleUrls: ['./edit-todo-popup.component.scss']
})
export class EditTodoPopupComponent implements OnInit {
  @Input() todo: Todo;
  todos: Todo[] = [];
  @Input() modalId:string;
  constructor(private todoService: TodoService) {
    this.todo ={
      id: 0,
      title : 'Servet Get Task',
      completed : true
    }
    this.modalId = '';
  }
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });

  };

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => {
      console.log(todo);
      this.todos.push(todo);
    });
  }



}
