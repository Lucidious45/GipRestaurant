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
      ['']
    ),
    new Product(
      2,
      'Tabouleh',
      'Salade van bulgur, ui, peterselie, tomaat, olijfolie en citroensap',
      6.99,
      ['assets/Tabbouleh1.jpg', '', '']
    ),
    new Product(
      3,
      'Hummus',
      'Puree van kikkererwten, tahini en olijfolie',
      4.99,
      ['', '', '']
    ),
    new Product(
      4,
      'Kibbeh',
      'Gefrituurde hapjes met bulgur korst gevuld met kefta',
      7.99,
      ['', '', '']
    ),
    new Product(
      5,
      'Fatayer',
      'Gegrild brood belegd met Syrische kaas of za atar',
      6.50,
      ['', '', '']
    ),
    new Product(
      6,
      'Falafel',
      'Falafel gereserveerd met een Lebanees brood en een portie hummus',
      12.00,
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
