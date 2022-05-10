import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  menu: Product[] = [
    new Product(
      1,
      'Falafel',
      'Falafel gereserveerd met een Lebanees brood en een portie hummus',
      12.00,
      ['', '', '']
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
      'Kefta',
      'Gegrild lamsgehakt (3 spiezen)',
      12.00,
      ['', '', '']
      
    ),
    new Product(
      6,
      'Kefta',
      'Gegrild lamsgehakt (3 spiezen)',
      12.00,
      ['', '', '']
      
    ),
    new Product(
      7,
      'Jawaneh',
      'Gegrilde Kippenvleugels',
      13.00,
      ['', '', '']
      
    ),
    new Product(
      8,
      'Lamskotelet',
      'Gegrilde lamskotelet',
      20.00,
      ['', '', '']
      
    ),
    new Product(
      9,
      'Kibbi mishwiyye',
      '2 stukjes Kibbi Mishwiyye bulgur',
      14.00,
      ['', '', '']
      
    ),
    new Product(
      10,
      'Vegan Grill',
      'Gegrilde  tomaat, ui, aubergine en paprika',
      8.00,
      ['', '', '']
      
    ),
    new Product(
      11,
      'Baklava',
      '2 stukjes Kibbi Mishwiyye bulgur',
      14.00,
      ['', '', '']
      
    ),
    new Product(
      12,
      'Kibbi mishwiyye',
      '4 stukjes Baklava',
      14.00,
      ['', '', '']
      
    ),
    new Product(
      13,
      'Palmyra Petitfour',
      '5 stukjes verse Syrische petitfour',
      6.00,
      ['', '', '']
      
    ),
    new Product(
      14,
      'Syrische zwarte thee',
      '2 stukjes Kibbi Mishwiyye bulgur',
      14.00,
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
