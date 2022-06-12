import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/category.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  
  categories$: Observable<any[]>;

  constructor(categoryService: CategoryService, db: AngularFireDatabase) { 
    this.categories$ = db.list('categories').valueChanges();
  }

  ngOnInit(): void {
  }

}




