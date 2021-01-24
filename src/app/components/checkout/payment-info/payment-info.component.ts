import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { PaymentService } from 'src/app/service/payment/payment.service';


@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {

  checkoutProducts: CartProduct[];
  totalPrice: number = 0;
  date: number;
  tax = 6.4;
  remark: string = '';

  constructor(private paymentService : PaymentService) {
    const products = JSON.parse(localStorage.getItem('Cart') || '{}');
    this.checkoutProducts = products;
    products.forEach((product : any) => {
			this.totalPrice += product.price;
		});
   }

  ngOnInit(): void {
  }

  makePayment(){
    const payload = {
      amount : this.totalPrice,
      purpose : "Book purchase from Bookart",
      redirect_url: 'http://localhost:4200/checkout/confirmPayment'
    }

    this.paymentService.createPaymentReuest(payload).subscribe(e=>{
      window.location.href = e;                                                                                                                                                                   
    })
  }

}
