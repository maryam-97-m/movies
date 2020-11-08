import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  err:string;
  constructor(public _AuthService:AuthService , public _Router:Router) { 

  }
  signinForm:FormGroup = new FormGroup({
    
    'email':new FormControl(null , [Validators.required,Validators.email]),
    'password':new FormControl(null ,[Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,8}$')])

  })

  ngOnInit(): void {
  }


  getFormData(formData){
    if(formData.valid == true){

      this._AuthService.signIn(formData.value).subscribe(data=>{
        
        if(data.message == 'success'){
          
          this._AuthService.saveUserData(data.user , data.token);
          this._Router.navigate(['/home']);
        }
        else{
          this.err = 'email or userName is wrong'
        }
      })

    }
    
  }

}
