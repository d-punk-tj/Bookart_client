import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
import { ToastrModule } from 'ngx-toastr';
import { NgHttpLoaderModule } from 'ng-http-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MainComponent } from './layout/main/main.component';
import { AppbarComponent } from './layout/appbar/appbar.component';
import { MiniCartComponent } from './layout/mini-cart/mini-cart.component';
import { CustomerInfoComponent } from './components/checkout/customer-info/customer-info.component';
import { PaymentInfoComponent } from './components/checkout/payment-info/payment-info.component';
import { ReviewComponent } from './components/checkout/review/review.component';
import { ProductListComponent } from './components/home/product-list/product-list.component';
import { FiltersComponent } from './components/home/filters/filters.component';
import { ProductCardComponent } from './components/home/product-list/product-card/product-card.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { AddToCartComponent } from './shared/add-to-cart/add-to-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbToastModule } from 'ngb-toast';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from './components/checkout/confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    HomeComponent,
    OrderConfirmComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    MainComponent,
    AppbarComponent,
    MiniCartComponent,
    CustomerInfoComponent,
    PaymentInfoComponent,
    ReviewComponent,
    ProductListComponent,
    FiltersComponent,
    ProductCardComponent,
    PaginationComponent,
    AddToCartComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbToastModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgHttpLoaderModule.forRoot(),

   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
