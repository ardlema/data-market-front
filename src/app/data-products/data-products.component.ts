import { Component, OnInit } from '@angular/core';
import { DataProduct } from '../data-product';

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

  constructor() { }

  ngOnInit(): void {
  }

}
