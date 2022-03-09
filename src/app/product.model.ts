export class Product {
  constructor(public id:number, public name: string, public desc: string, public price: number, public imgUrls: string[]){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imgUrls  = imgUrls ;
  }
  
}
