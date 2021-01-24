import { Component, OnInit , Input} from '@angular/core';
import { Paging } from 'src/app/models/paging';
import { ProductListComponent } from '../product-list/product-list.component';



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  searchString: string;
  @Input() productList: ProductListComponent;



  constructor() { }

  ngOnInit(): void {
  }

  onClickSearch(){
    
      let filter: Paging = new Paging();
      filter.search_string = this.searchString;
      this.productList.setFilters(filter);
    
  }

  onSelectFilter(){
    let filter: Paging = new Paging();
    filter.CurrentPage = 1;
    filter.PageSize = 10
    this.productList.sortedBooks(filter);
  }

}
