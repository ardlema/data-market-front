import { Injectable } from '@angular/core';
import { DataProduct } from './data-product';
import { DATAPRODUCTS } from './mock-data-products';

@Injectable({
  providedIn: 'root'
})
export class DataProductService {

  constructor() { }

  getDataProducts(): DataProduct[] {
    return DATAPRODUCTS;
  }

}
