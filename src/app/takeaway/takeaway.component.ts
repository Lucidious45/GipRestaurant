import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takeaway',
  templateUrl: './takeaway.component.html',
  styleUrls: ['./takeaway.component.scss']
})

export class TakeawayComponent implements OnInit {
  menu:Product[] = [];
  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.menu = this.ProductService.getMenu();
  }

}
