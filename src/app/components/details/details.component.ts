import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreApiService } from '../../services/fakestore-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( private route : ActivatedRoute,private fakestore:FakestoreApiService) { }

  ProductId:string|null ='';
   
  product:any={};

  ngOnInit(): void {
    this.ProductId = this.route.snapshot.paramMap.get('id');
    this.fakestore.getProducts().subscribe(data =>{
      this.product = data.find(lstProduct => lstProduct.id == this.ProductId);
    })

  }

}
