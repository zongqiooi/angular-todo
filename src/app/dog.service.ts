import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface DogImageResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  // API
  fetchDogImage(): Observable<DogImageResponse> {
    return this.http.get<DogImageResponse>(this.apiUrl);
  }
}
