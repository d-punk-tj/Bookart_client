import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { CartProductService } from 'src/app/service/cartProduct/cart-product.service';
import { ImageService } from 'src/app/service/imageService/image.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart: CartProduct[] = [];
  total: number = 0;
  constructor(private cartService : CartProductService, public imgService: ImageService) { }

  ngOnInit(): void {

    this.cartService.cart.subscribe(a => this.cart = a);
    this.getTotal();
  }

  getCartProductItems(){
    this.cart = JSON.parse(localStorage.getItem('Cart') || '{}');
  }

  onRemoveProductsFromCart(productId: number){
    this.cart = this.cart.filter(a => a.bookID != productId);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    this.cartService.updateCartItemCount(this.cart.length);
    this.cartService.updateShoppingCart(this.cart);
    this.getTotal();
  }

  onUpdateQuantity(type : any, productId : any){
    if(type == 1){
      this.cart.forEach((element, index) => {
        if(element.bookID == productId){
          this.cart[index].Quantity = element.Quantity + 1;
        }
      });
    } else {
      this.cart.forEach((element, index) => {
        if(element.bookID == productId){
          this.cart[index].Quantity = element.Quantity - 1;
        }
      });
    }
    this.getTotal();
  }

  getTotal(){
    this.total = 0;
    this.cart.forEach((element) => {
      this.total = this.total + (element.price * element.Quantity);
    })
  }
}
