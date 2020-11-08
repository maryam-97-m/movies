import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  trendingTv = []; 
  
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  isLoading:boolean = false ;
  constructor(public _ActivatedRoute:ActivatedRoute , public _MoviesService:MoviesService) {
    
    _MoviesService.getTredningTv().subscribe(tv=>
      {
        this.trendingTv = tv.results;

    })
  }

  ngOnInit(): void {
  }

}
