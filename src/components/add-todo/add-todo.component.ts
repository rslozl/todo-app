import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string = '';

  constructor(private spinner: NgxSpinnerService,
              private toastr: ToastrService) {}

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false,
    };
    this.title = '';
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.addTodo.emit(todo);
      this.toastr.success('', 'Todo Added!');

    }, 1500);
  }
}
