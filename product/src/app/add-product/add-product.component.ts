import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = new Product;

  constructor(private _route: Router, private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  addproductformsubmit() {

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
