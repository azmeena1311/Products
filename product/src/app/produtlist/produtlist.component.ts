import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-produtlist',
  templateUrl: './produtlist.component.html',
  styleUrls: ['./produtlist.component.css']
})
export class ProdutlistComponent implements OnInit {


  _productlist: Product[]
  constructor(private _service: NgserviceService, private _route: Router) { }

  ngOnInit(): void {

    this._service.fetchProductListFromRemote().subscribe(
      data => {
        console.log("Response received");
        this._productlist = data;
        console.log("data" + this._productlist)
      },
      error => console.log("Exception Occured")
    )
  }

  goToAddProduct() {
    this._route.navigate(['addproduct']);
  }

  goToEditProduct(id: number) {
    console.log("id" + id);
    this._route.navigate(['/editproduct', id]);

  }

  goToViewProduct(id: number) {
    console.log("id" + id);
    this._route.navigate(['/viewproduct', id]);

  }

  goToDeleteProduct(id: number) {
    this._service.deleteProductByIdFromRemote(id).subscribe(
      data => {
        console.log("Deleted Successfully");
        this._route.navigate(['/productlist']);
      },
      error => console.log("Exception occured")
    )
  }

}
