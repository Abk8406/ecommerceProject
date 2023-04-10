import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesGuard implements CanActivate {

constructor(private cookie:CookieService,private route : Router){}

  canActivate():boolean{
    if(this.cookie.get('userid')==''){
     this.route.navigate(["/login"]);
      return false;
    }
  else{
    
    return true;
  }
  }
  
}
