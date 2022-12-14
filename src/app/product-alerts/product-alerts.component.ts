import { Component, Input, OnInit } from '@angular/core';
//input is used to import data from product list
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  @Input() product!: Product;

  ngOnInit(): void {}
}
