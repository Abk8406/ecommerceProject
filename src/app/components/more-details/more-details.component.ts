import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreApiService } from '../../services/fakestore-api.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  constructor(private fakestore : FakestoreApiService, private route :ActivatedRoute) { }

  more_productId:string|null=null ;
  product:any={};

  ngOnInit(): void {
    this.more_productId = this.route.snapshot.paramMap.get('productsid');
    this.fakestore.getProducts().subscribe(data=>{
      this.product= data.find(lstproduct=> lstproduct.id == this.more_productId);
    })
  }

}
