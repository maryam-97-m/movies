import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './auth.guard';
import { TvComponent } from './tv/tv.component';
import {MoviesComponent} from './movies/movies.component'
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'' , redirectTo:'signin' , pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard]  , component:HomeComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'tv' , component:TvComponent},
  {path:'register' , component:RegisterComponent},
  {path:'signin' , component:LogInComponent},
  {path:'moviedetails/:id' , component:MoviedetailsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
