import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  menu: Product[] = [
    new Product(
      1,
      'Soep van de week',
      'Onze seizoenlijke soep met verse ingredienten.',
      7.99,
      ['assets/Tabbouleh1.jpg', '', '']
    ),
    new Product(
      2,
      'Tabouleh',
      'Salade van bulgur, ui, peterselie, tomaat, olijfolie en citroensap',
      6.99,
      ['', '', '']
    ),
    new Product(
      3,
      'Hummus',
      'Puree van kikkererwten, tahini en olijfolie',
      7.99,
      ['', '', '']
    )

  ]

  constructor() { }

  getMenu(){
    return this.menu;
  }

   getProduct(id:number){
     return this.menu.find(product=> product.id === id)
   }
}
