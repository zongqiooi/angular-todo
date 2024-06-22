import { Routes } from '@angular/router';
import { NewtaskComponent } from './newtask/newtask.component';
import { TodoComponent } from './todo/todo.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { EastereggComponent } from './easteregg/easteregg.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: TodoComponent },
  { path: 'new-task', component: NewtaskComponent },
  { path: 'update-task/:id', component: UpdatetaskComponent },
  { path: 'easter-egg', component: EastereggComponent },
];
