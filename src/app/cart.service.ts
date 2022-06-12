import { Injectable } from '@angular/core';
import {
  Firestore, 
  addDoc, 
  collection, 
  collectionData,
  doc, 
  docData, 
  deleteDoc, 
  updateDoc, 
  DocumentReference, 
  setDoc, 
  getDoc,
  getDocs
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICategory } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private firestore: Firestore) { 

  }



  // addCategory(category: ICategory){
  //   const categoryRef = collection(this.firestore, 'categories')
  //   return this.addCategory(categoryRef, category)
  // }
}
