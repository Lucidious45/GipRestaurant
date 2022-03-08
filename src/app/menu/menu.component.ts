import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menu:Product[] = [];
  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.menu = this.ProductService.getMenu();
  }

}