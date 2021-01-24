import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Paging } from 'src/app/models/paging';
import { ProductPaginData } from 'src/app/models/product-pagin-data';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  Url = 'https://boiling-shore-13022.herokuapp.com/api/product'

  constructor(private http: HttpClient) { }

  getProductList(paging: Paging): Observable<ProductPaginData> {
    return this.http.get<ProductPaginData>(`${this.Url}/getProductsByPage?PageSize=${paging.PageSize}&CurrentPage=${paging.CurrentPage}`);
  }

  getProductDetailsById(productId: number):Observable<Product> {
    return this.http.get<Product>(`${this.Url}/getProductDetails?productId=${productId}`);
  }

  getProductByName(title : string){
    return this.http.get<Product>(`${this.Url}/getProductByName?title=${title}`);
  }

  getSortedProducts(paging: Paging){
    return this.http.get<ProductPaginData>(`${this.Url}/getSortedProducts?PageSize=${paging.PageSize}&CurrentPage=${paging.CurrentPage}`)
  }
}
