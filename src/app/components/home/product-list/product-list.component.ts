import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/products/product-service.service';
import { ProductPaginData } from 'src/app/models/product-pagin-data';
import { Paging } from 'src/app/models/paging';
import { Product } from 'src/app/models/product';
import { ImageService } from 'src/app/service/imageService/image.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  loading = false;
  searchString = new String();

  TOTAL = 0;
  CURRENT_PAGE = 1;
  PER_PAGE = 10;
  PRODUCT_COUNT: number;

  constructor(private productService: ProductServiceService, private imgService : ImageService) { }

  ngOnInit(): void {

    this.getProducts();
  }

  getProducts(){
    let filterObj: Paging = new Paging();
    
    filterObj.PageSize = this.PER_PAGE;
    filterObj.CurrentPage = this.CURRENT_PAGE;
  
  
    let productPagingObj: ProductPaginData = new ProductPaginData();
    this.productService.getProductList(filterObj).subscribe(a => {
      productPagingObj = a as ProductPaginData;
      productPagingObj.Products.forEach(product => {
        product.image = this.imgService.getimg();
      });
      this.productList = productPagingObj.Products;
      this.PRODUCT_COUNT = productPagingObj.ProductCount;
      
    });
  }

  setFilters(filters: Paging){
    
    this.searchString = filters.search_string;
   
    let productPagingObj: ProductPaginData = new ProductPaginData();
    this.productService.getProductByName(String(this.searchString)).subscribe(a => {
      productPagingObj = a as unknown as ProductPaginData;
      if(productPagingObj.Products){
        productPagingObj.Products.forEach(e=>{
          e.image = this.imgService.getimg();
        })
      }
      this.productList = productPagingObj.Products;
      this.PRODUCT_COUNT = 1;
    });
  }

  sortedBooks(filters : Paging){
    let filterObj: Paging = new Paging();
    
    filterObj.PageSize = this.PER_PAGE;
    filterObj.CurrentPage = this.CURRENT_PAGE;
    let productPagingObj: ProductPaginData = new ProductPaginData();
    this.productService.getSortedProducts(filterObj).subscribe(a=>{
      productPagingObj = a as ProductPaginData;
      if(productPagingObj.Products){
        productPagingObj.Products.forEach(e=>{
          e.image = this.imgService.getimg();
        })
      }
      this.productList = productPagingObj.Products;

    })
  }

  goToPage(n: number): void {
    this.CURRENT_PAGE = n;
    this.getProducts();
  }

  onNext(): void {
    this.CURRENT_PAGE++;
    this.getProducts();
  }

  onPrev(): void {
    this.CURRENT_PAGE--;
    this.getProducts();
  }


}
