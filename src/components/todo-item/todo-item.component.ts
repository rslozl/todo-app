import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { NgxSpinnerService } from "ngx-spinner";
import { TodoService } from '../../services/todo.service';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService) {
    this.todo ={
      id: 0,
      title : 'Servet Get Task',
      completed : true
    }
  }

  ngOnInit(): void {}
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }
  onToggle(todo : any) {
    todo.completed = !todo.completed;
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }
  onDelete(todo :any) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.deleteTodo.emit(todo);
      this.toastr.success('', 'Todo deleted!');
    }, 1500);
  }

  onEdit(todo: Todo) {

    // @ts-ignore
    $('#'+todo.id+'-todo-modal').modal('show');

  }
}
