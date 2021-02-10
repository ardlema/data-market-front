import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { DataProduct } from '../data-product';
import { DataProductService } from '../data-product.service';

@Component({
  selector: 'app-data-product-search',
  templateUrl: './data-product-search.component.html',
  styleUrls: [ './data-product-search.component.css' ]
})
export class DataProductSearchComponent implements OnInit {
  dataproducts$: Observable<DataProduct[]>;
  private searchTerms = new Subject<string>();

  constructor(private dataProductService: DataProductService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.dataproducts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dataProductService.searchDataProducts(term)),
    );
  }
}


