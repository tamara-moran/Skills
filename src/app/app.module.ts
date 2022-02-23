import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsFeatureModule } from './products-feature/products-feature.module';
import { ProductComponent } from './products/product.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
