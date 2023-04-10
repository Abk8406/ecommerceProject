import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreApiService } from '../../services/fakestore-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private fakestore :FakestoreApiService,private route : ActivatedRoute) { }
  
  Products:any[]=[]
  
  CateriesName:string|null= null;
  
  
  ngOnInit(): void {
    //  its not same here category is coming form products/:catagory parameter 
    this.CateriesName =  this.route.snapshot.paramMap.get('category');
      this.fakestore.getProducts().subscribe(data => {
        // remaber here ..  category its a property of products.. 
        this.Products = data.filter( product => product.category == this.CateriesName );
        console.log(this.Products)
      })
  }

}
 