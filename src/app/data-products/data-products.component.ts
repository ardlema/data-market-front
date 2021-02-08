import { Component, OnInit } from '@angular/core';
import { DataProduct } from '../data-product';
import { DATAPRODUCTS } from '../mock-data-products';

@Component({
  selector: 'app-data-products',
  templateUrl: './data-products.component.html',
  styleUrls: ['./data-products.component.css']
})
export class DataProductsComponent implements OnInit {

  dataProduct: DataProduct = {
    id: 1,
    name: 'Post Flight Report ingester'
  };

  dataProducts = DATAPRODUCTS;

  selectedDataProduct: DataProduct;
  onSelect(dataProduct: DataProduct): void {
    this.selectedDataProduct = dataProduct;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
