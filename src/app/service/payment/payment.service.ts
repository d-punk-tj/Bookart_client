import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient ) { }

  Url = 'https://boiling-shore-13022.herokuapp.com/api'
  
  createPaymentReuest(payload: any): Observable<any> {
    return this.http.post<any>(`${this.Url}/payment/makePayment`, payload)
  }

}
