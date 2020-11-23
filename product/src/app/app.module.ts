import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProdutlistComponent } from './produtlist/produtlist.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgserviceService } from './ngservice.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    ProdutlistComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NgserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
