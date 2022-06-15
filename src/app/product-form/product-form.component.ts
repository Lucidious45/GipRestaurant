import { ProductService } from './../product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/category.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AppData } from 'app/AppData';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs-compat/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  
  categories$: Observable<any[]>;
  product: any;


  constructor(
    private categoryService: CategoryService, 
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute,
    db: AngularFireDatabase, 
    ) 
      { 
        this.categories$ = db.list('categories').valueChanges();
        let id = this.route.snapshot.paramMap.get('id');
      }

  save(product: any){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit(): void {
  }

}




