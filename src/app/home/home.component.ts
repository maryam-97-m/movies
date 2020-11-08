import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  topTenMovies:any =[];
  topTenTv:any =[];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  constructor(_MoviesService:MoviesService) {
    
    _MoviesService.getTredningMovies().subscribe( (data)=> {
      for(let i=0 ; i<10 ; i++){
        this.topTenMovies.push(data.results[i]);
      }
    } , (error)=> {
      console.log(error)
    });
    _MoviesService.getTredningTv().subscribe( (data)=> {
      for(let i=0 ; i<10 ; i++){
        this.topTenTv.push(data.results[i]);
      }
    } , (error)=> {console.log(error) } );
  }

  
  ngOnInit(): void {
  }

}
