import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { ImageService } from 'src/app/service/imageService/image.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  checkoutProducts: CartProduct[];
  totalPrice: number = 0;
  constructor(private imgService : ImageService) { 
    const products = JSON.parse(localStorage.getItem('Cart') || '{}');
    this.checkoutProducts = products;
    products.forEach((product:any) => {
      product.image = this.imgService.getimg();
			this.totalPrice += product.price;
		});
  }

  ngOnInit(): void {
  }

}
