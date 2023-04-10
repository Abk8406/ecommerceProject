import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FakestoreApiService } from '../../services/fakestore-api.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private fakestore : FakestoreApiService,private cookie:CookieService,private route :Router ) { }

  Categories:any[] =[];
  UserId:any;
  ngOnInit(): void {
      this.fakestore.getCategories().subscribe(data =>this.Categories = data);
      this.UserId= this.cookie.get('userid');
  }

  RemoveClick(){
    this.cookie.delete('userid');
    this.route.navigate(['/login']);
  }

}
 