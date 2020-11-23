import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }

  fetchProductListFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8088/getproductlist");
  }

  addUserToRemote(product: Product): Observable<any> {
    return this._http.post<any>("http://localhost:8088/addproduct", product);
  }

  fetchProductByIdFromRemote(id): Observable<any> {
    return this._http.get<any>("http://localhost:8088/getproductbyId/" + id);
  }

  deleteProductByIdFromRemote(id) {
    return this._http.delete("http://localhost:8088/deleteproductById/2");
  }

}
