import { Component, OnInit, Input } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { CartProductService } from 'src/app/service/cartProduct/cart-product.service';
import { ProductServiceService } from 'src/app/service/products/product-service.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  quantity: number;
  @Input() productId: number;
  @Input() isHomePage: boolean;
  messge: string;

  constructor(private productService: ProductServiceService,
    private toastr: ToastrService,
    private cartService: CartProductService) { }

  ngOnInit(): void {
    this.quantity = 1;
    this.cartService.currentMessage.subscribe(msg => this.messge = msg);
  }

  onAddProductToCart(){
    let product: CartProduct;
    this.productService.getProductDetailsById(this.productId)
    .subscribe(p => {
      console.log(p);
      product = p as CartProduct;
      product.Quantity = this.quantity;
      let cart: CartProduct[] = JSON.parse(localStorage.getItem('Cart') || '{}');
      if(cart == null){
        cart = [];
        cart.push(product);
      } else{
        let currentProduct = cart.filter(a => a.bookID == product.bookID);
        if(currentProduct.length > 0){
          cart.filter(a => {
            a.Quantity = a.Quantity + this.quantity;
          });
        } else{
          cart.push(product);
        }
      }
      this.cartService.updateCartItemCount(cart.length);
      this.cartService.updateShoppingCart(cart);
      localStorage.setItem('Cart', JSON.stringify(cart));
     
        this.toastr.success('Keep Shopping', 'Added to Cart');
    
    });
    
  }

}
