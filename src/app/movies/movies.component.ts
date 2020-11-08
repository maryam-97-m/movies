import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  isLoading:boolean = false ;
  constructor(public _ActivatedRoute:ActivatedRoute , public _MoviesService:MoviesService) {
    
    _MoviesService.getTredningMovies().subscribe(movies=>
      {
        this.trendingMovies = movies.results;

    })
  }


  ngOnInit(): void {
  }

}
