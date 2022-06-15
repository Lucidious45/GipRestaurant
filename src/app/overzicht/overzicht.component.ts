import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss']
})
export class OverzichtComponent implements OnInit {
  products$: Observable<any[]>;

  constructor(productService: ProductService, db: AngularFireDatabase,) { 
    this.products$ = db.list('products').valueChanges()
  }

  ngOnInit(): void {
  }

}
