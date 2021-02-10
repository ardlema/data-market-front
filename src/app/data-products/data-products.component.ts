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

  dataProducts: DataProduct[];

  constructor(private dataProductService: DataProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getDataProducts();
  }

  getDataProducts(): void {
    this.dataProductService.getDataProducts()
      .subscribe(dataProducts => this.dataProducts = dataProducts);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dataProductService.addDataProduct({ name } as DataProduct)
      .subscribe(dataProduct => {
        this.dataProducts.push(dataProduct);
      });
  }

  delete(dataProduct: DataProduct): void {
    this.dataProducts = this.dataProducts.filter(h => h !== dataProduct);
    this.dataProductService.deleteDataProduct(dataProduct).subscribe();
  }
}
