import { Component, OnInit } from '@angular/core';
import { DataProduct } from '../data-product';
import { DataProductService } from '../data-product.service';

@Component({
  selector: 'app-data-products',
  templateUrl: './data-products.component.html',
  styleUrls: ['./data-products.component.css']
})
export class DataProductsComponent implements OnInit {

  dataProducts: DataProduct[];

  selectedDataProduct: DataProduct;
  onSelect(dataProduct: DataProduct): void {
    this.selectedDataProduct = dataProduct;
  }

  constructor(private dataProductService: DataProductService) { }

  ngOnInit(): void {
    this.getDataProducts();
  }

  getDataProducts(): void {
    this.dataProducts = this.dataProductService.getDataProducts();
  }

}
