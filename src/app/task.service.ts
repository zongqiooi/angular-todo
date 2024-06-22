import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, name: 'Add more todo list items!', status: 'Todo' },
  ];
  private currentId = this.tasks.length;

  constructor() {}

  // CRUD for todo list
  createTask(task: Task): void {
    this.currentId++;
    task.id = this.currentId;
    this.tasks.push(task);
  }

  readTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  updateTask(id: number | undefined, task: Task): void {
    this.tasks.forEach((t) => {
      if (t.id === id) {
        t.name = task.name;
        t.status = task.status;
      }
    });
  }

  deleteTask(id: number): Observable<Task[]> {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== id;
    });
    return of(this.tasks);
  }

  readTask(id: number): Observable<Task> {
    const task = this.tasks.find((t) => t.id === id);
    return of(task!);
  }
}
