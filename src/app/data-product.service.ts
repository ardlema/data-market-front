import { Injectable } from '@angular/core';
import { DataProduct } from './data-product';
import { DATAPRODUCTS } from './mock-data-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DataProductService {

  constructor(private messageService: MessageService) { }

  getDataProducts(): Observable<DataProduct[]> {
    this.messageService.add('DataProductService: fetched data products');
    return of(DATAPRODUCTS);
  }

  getDataProduct(id: number): Observable<DataProduct> {
    // TODO: send the message _after_ fetching the data product
    this.messageService.add(`DataProductService: fetched data product id=${id}`);
    return of(DATAPRODUCTS.find(dataproduct => dataproduct.id === id));
  }

}
