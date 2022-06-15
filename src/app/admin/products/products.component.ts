import { CategoryService } from './../../category.service';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import {Router, RouterModule, ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] | undefined;
  products$: Observable<any[]>;
  itemRef: AngularFireObject<any>;

  constructor(
    private productService: ProductService, 
    db: AngularFireDatabase, 
    private router: Router,
    private route: ActivatedRoute,) 
    { 
      this.products$ = db.list('products').valueChanges()
      this.itemRef = db.object('products');
    }

    delete() {
      this.itemRef.remove();
    }

    remove(){
      if(!confirm("Are you sure you want to delete this product")) return;

      this.itemRef.remove();
      this.router.navigate(['/admin/products'])
      
    }

  ngOnInit(): void {
  }


}
