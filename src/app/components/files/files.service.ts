import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Files } from './files.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private apiUrl = 'http://localhost:3000/files'; // Adjust the URL to where your server is hosted

  constructor(private http: HttpClient) { }

  getFiles(): Observable<Files[]> {
    return this.http.get<{ message: string, files: Files[] }>(this.apiUrl).pipe(
      map(response => response.files)
    );
  }
}