import { Component, OnInit } from '@angular/core';
import { DataProduct } from '../data-product';
import { DataProductService } from '../data-product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  dataProducts: DataProduct[] = [];

  constructor(private dataProductService: DataProductService) { }

  ngOnInit() {
    this.getDataProducts();
  }

  getDataProducts(): void {
    this.dataProductService.getDataProducts()
      .subscribe(dataProducts => this.dataProducts = dataProducts.slice(1, 5));
  }
}
