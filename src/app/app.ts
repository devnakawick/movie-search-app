import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
    const apiKey = '8e4566fc62383d170fd11c8b12990669';

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.searchText}`;

    this.http.get(url).subscribe((response) => {
      this.movies = (response as any).results;
      console.log(this.movies);
    });
  }
}
