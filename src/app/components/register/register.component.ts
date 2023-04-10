import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../contract/iUser';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users:IUser[]=[];

  constructor(private  usersData: UserDataService,private router : Router) { }

  ngOnInit(): void {
    this.usersData.GetUsers().subscribe(user => this.users=user);
  } 

  RegisterClick(user:IUser){
    this.usersData.PostUsers(user).subscribe();
    alert('Registerd Successfully');
    this.router.navigate(['/login']);
  } 

  userError:String="";
  ErrorClass:string='';

  verifyUser(e:any){
      for(var user of this.users){
         if(user.UserId == e.target.value){
          this.userError = 'User Id Taken - Try Another';
          this.ErrorClass='text-danger';
          break;
         }
         else{
           this.userError = 'User Id Available';
           this.ErrorClass= 'text-success';
         }
      }
  }

}
