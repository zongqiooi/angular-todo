import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  ActivatedRoute,
} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatetask',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './updatetask.component.html',
  styleUrl: './updatetask.component.css',
})
export class UpdatetaskComponent {
  task: Task = { id: 0, name: '', status: '' };

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Improve UX by pre-filling with existing data
    const taskId = +this.route.snapshot.paramMap.get('id')!;
    this.taskService.readTask(taskId).subscribe((task) => {
      this.task = task;
    });
  }

  onSubmit(): void {
    const taskId = +this.route.snapshot.paramMap.get('id')!;
    this.taskService.updateTask(taskId, this.task);
    this.task = { id: 0, name: '', status: '' };
    this.router.navigate(['/']);
  }
}
