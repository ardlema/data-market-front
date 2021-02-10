import { Component, OnInit, Input } from '@angular/core';
import { DataProduct } from '../data-product';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataProductService } from '../data-product.service';

@Component({
  selector: 'app-data-product-detail',
  templateUrl: './data-product-detail.component.html',
  styleUrls: ['./data-product-detail.component.css']
})
export class DataProductDetailComponent implements OnInit {

  @Input() dataProduct: DataProduct;

  constructor(private route: ActivatedRoute,
              private dataProductService: DataProductService,
              private location: Location) { }

  getDataProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataProductService.getDataProduct(id)
      .subscribe(dataproduct => this.dataProduct = dataproduct);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.dataProductService.updateDataProduct(this.dataProduct)
      .subscribe(() => this.goBack());
  }

  ngOnInit(): void {
    this.getDataProduct();
  }
}
