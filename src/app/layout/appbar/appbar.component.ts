import { Component, OnInit } from '@angular/core';
import { CartProductService } from 'src/app/service/cartProduct/cart-product.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  itemCount: number = 0;
  message: string;

  constructor(private cartService : CartProductService) { }

  ngOnInit(): void {
    this.cartService.count.subscribe(count => this.itemCount = count);
  }

}
