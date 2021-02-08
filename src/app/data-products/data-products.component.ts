import { Component, OnInit } from '@angular/core';
import { DataProduct } from '../data-product';
import { DataProductService } from '../data-product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-data-products',
  templateUrl: './data-products.component.html',
  styleUrls: ['./data-products.component.css']
})
export class DataProductsComponent implements OnInit {

  selectedDataProduct: DataProduct;

  dataProducts: DataProduct[];

  onSelect(dataProduct: DataProduct): void {
    this.selectedDataProduct = dataProduct;
    this.messageService.add(`DataProductComponent: Selected data product id=${dataProduct.id}`);
  }

  constructor(private dataProductService: DataProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getDataProducts();
  }

  getDataProducts(): void {
    this.dataProductService.getDataProducts()
      .subscribe(dataProducts => this.dataProducts = dataProducts);
  }
}
