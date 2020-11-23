import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product = new Product;
  constructor(private _route: Router, private _service: NgserviceService, private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    let id = parseInt(this._activatedRouter.snapshot.paramMap.get('id'));

    this._service.fetchProductByIdFromRemote(id).subscribe(
      data => {
        console.log("Data fetched for given Id ");
        this.product = data;
      },
      error => console.log("Error occured while fetching id")

    )
  }
  updateproductformsubmit() {

    this._service.addUserToRemote(this.product).subscribe
      (
        data => {
          console.log("Data added Successfully");
          this._route.navigate(['productlist']);
        },
        error => console.log("error")

      )

  }

  gotolist() {
    console.log("Go back");
    this._route.navigate(['productlist']);
  }





}
