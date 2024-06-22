import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-easteregg',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './easteregg.component.html',
  styleUrl: './easteregg.component.css',
})
export class EastereggComponent implements OnInit {
  imageUrlFetched: string | undefined;

  constructor(private dogService: DogService) {}

  // Like useEffect in React
  ngOnInit(): void {
    this.fetchDogImage();
  }

  fetchDogImage(): void {
    this.dogService.fetchDogImage().subscribe((response) => {
      this.imageUrlFetched = response.message;
    });
  }
}
