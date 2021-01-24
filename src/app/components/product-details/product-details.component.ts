import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartProductService } from 'src/app/service/cartProduct/cart-product.service';
import { ImageService } from 'src/app/service/imageService/image.service';
import { ProductServiceService } from 'src/app/service/products/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  productId: number;

  constructor(public imgService: ImageService, private productService : ProductServiceService, private route: ActivatedRoute) {
    this.product = new Product();
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    })
    this.getProductDetailsById();
  }

  getProductDetailsById(){
    this.productService.getProductDetailsById(this.productId)
    .subscribe(p => {
      p.image = this.imgService.getimg();
      this.product = p as Product;
      console.log(this.product);
    })
  }

}
