import { Component, OnInit, Input } from '@angular/core';
import { DataProduct } from '../data-product';

@Component({
  selector: 'app-data-product-detail',
  templateUrl: './data-product-detail.component.html',
  styleUrls: ['./data-product-detail.component.css']
})
export class DataProductDetailComponent implements OnInit {

  @Input() dataProduct: DataProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
