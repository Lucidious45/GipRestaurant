import { ProductService } from './../product.service';
import { Observable } from 'rxjs';
import { Component, OnInit, NgModule } from '@angular/core';
import { CategoryService } from 'app/category.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AppData } from 'app/AppData';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

export interface Item { name: string; }

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  //firestore code
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  title: string = '';

  
  categories$: Observable<any[]>;

  constructor(categoryService: CategoryService, db: AngularFireDatabase, private productService: ProductService, private afs: AngularFirestore) { 
    this.categories$ = db.list('categories').valueChanges();
    this.itemsCollection = afs.collection<Item>('categories');
    this.items = this.itemsCollection.valueChanges();
  }

  addItem(product: Item) {
    this.itemsCollection.add(product);
  }

  save(product: any){
    this.productService.create(product);
  }

  ngOnInit(): void {
  }

}




