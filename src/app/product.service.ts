import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private db: AngularFireDatabase) { }

  create(product: unknown){
    this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products');
  }

  get(productId: any){
    return this.db.object('/products/' + productId);
  }

  deleteSingular(product: unknown){
    this.db.list('/products').push(product);
  }

  remove(productId: any){
    return this.db.object('/products/' + productId).remove();
  }

}
