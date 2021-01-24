import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ImageService } from 'src/app/service/imageService/image.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('productData') product: Product;


  


  constructor(public imgservice : ImageService) { }

  ngOnInit(): void {
  }

  getimg(){
   return this.imgservice.getimg();
  
  }

}
