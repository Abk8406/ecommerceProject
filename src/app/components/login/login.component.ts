import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from '../../contract/iUser';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userdata:UserDataService,private router: Router,private cookie : CookieService) { }

    Users:IUser[]=[];
    LoginUser:any;
  ngOnInit(): void {
    this.userdata.GetUsers().subscribe(user =>this.Users =user);
  
  } 
  
  LoginClick(obj:any){
    this.LoginUser  = this.Users.find(data => data.UserId==obj.UserId);
    if(this.LoginUser.UserId==obj.UserId && this.LoginUser.Password==obj.Password){
      this.cookie.set('userid',obj.UserId);
      this.router.navigate(['/categories']);
    } 
    else{
        this.router.navigate(['/invaildlogin']);
       }
    
  }
}
