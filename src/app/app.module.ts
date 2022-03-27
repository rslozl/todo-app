import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from "../components/view/header/header.component";
import {AddTodoComponent} from "../components/add-todo/add-todo.component";
import {TodosComponent} from "../components/todos/todos.component";
import {TodoItemComponent} from "../components/todo-item/todo-item.component";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import {EditTodoPopupComponent} from "../components/edit-todo-popup/edit-todo-popup.component";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    TodosComponent,
    TodoItemComponent,
    EditTodoPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, FormsModule, MatButtonModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    CommonModule

  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
