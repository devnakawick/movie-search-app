import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Movie Search App 🎬';

  searchText = '';
  movies: any[] = [];

  constructor(private http: HttpClient) {}

  searchMovie() {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&query=${this.searchText}`;

    this.http.get(url).subscribe((response) => {
      this.movies = (response as any).results;
      console.log(this.movies);
    });
  }
}
