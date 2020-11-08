import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  id:any;
  movieDetails:any;
  topTen:any =[];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  isLoading:boolean = false ;
  constructor(public _ActivatedRoute:ActivatedRoute , public _MoviesService:MoviesService) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    _MoviesService.getMovieDetails(this.id).subscribe(data =>{
      
      this.movieDetails = data;
      this.isLoading = true ;
    })
    _MoviesService.getTredningMovies().subscribe(movies=>
      {
      for(let i=0 ; i<10 ; i++){
        this.topTen.push(movies.results[i]);
      }
    })
  }

  ngOnInit(): void {
  }

}
