import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = []

  getDashboardMovies(): void {
    this.movieService.getMovies().subscribe(theseMovies => this.movies = theseMovies.slice(1, 12));
  }

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.getDashboardMovies();
  }

}
