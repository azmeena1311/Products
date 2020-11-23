import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutlistComponent } from './produtlist/produtlist.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  { path: '', component: ProdutlistComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'editproduct', component: EditProductComponent },
  { path: 'editproduct/:id', component: EditProductComponent },
  { path: 'viewproduct', component: ViewProductComponent },
  { path: 'viewproduct/:id', component: ViewProductComponent },
  { path: 'productlist', component: ProdutlistComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
