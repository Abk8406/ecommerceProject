import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{IUser} from '../contract/iUser';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  GetUsers():Observable<IUser[]>{
    return  this.http.get<IUser[]>('http://127.0.0.1:8080/getusers');
  } 

  PostUsers(user : IUser):Observable<IUser[]>{
    return this.http.post<IUser[]>('http://127.0.0.1:8080/registeruser',user);
  }

}
