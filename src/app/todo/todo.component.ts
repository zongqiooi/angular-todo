import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  displayedColumns: string[] = ['id', 'name', 'status', 'update', 'delete'];
  dataSource: Task[] = [];

  constructor(private taskService: TaskService) {}

  // Like useEffect in React
  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.readTasks().subscribe((tasks: Task[]) => {
      this.dataSource = tasks;
    });
  }

  deleteItem(id: number): void {
    this.taskService.deleteTask(id).subscribe((tasks: Task[]) => {
      this.dataSource = tasks;
    });
  }
}
