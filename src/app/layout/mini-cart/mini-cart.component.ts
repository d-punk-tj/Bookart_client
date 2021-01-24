import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { CartProductService } from 'src/app/service/cartProduct/cart-product.service';
import { ImageService } from 'src/app/service/imageService/image.service';


@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {

  cart: CartProduct[] = [];

  constructor(private cartService: CartProductService, public imgservice : ImageService) { }

  ngOnInit(): void {

    this.cartService.cart.subscribe( (a) => {
      a.forEach( (e:Product)=>{
        e.image = this.getimage();
      })
      this.cart = a
    });

    console.log(this.cart);
  }

  getCartProductItems(){
    this.cart = JSON.parse(localStorage.getItem('Cart') || '{}');
  }

  onRemoveProductsFromCart(bookID: number){
    this.cart = this.cart.filter(a => a.bookID != bookID);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    this.cartService.updateCartItemCount(this.cart.length);
    this.cartService.updateShoppingCart(this.cart);
  }

  getimage(){
    return this.imgservice.getimg();
  }


}
