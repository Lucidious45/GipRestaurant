import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories$: any;

  constructor(categoryService: CategoryService) { 
    this.categories$ = categoryService.GetCategories();
  }

  ngOnInit(): void {
  }

}
