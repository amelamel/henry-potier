import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import { Item } from "../../item/item";


//import { Item } from 'item/item';

@Injectable()
export class ItemService {
  public items:Item[];
  constructor(private http: Http) {
    console.log('create itemService');
  }

// return items list from et WS and convert it to Item[]
// get one time ths list of items because the number is limited

getCachedItems():Observable<Item[]> {
  // return items if it has already benn charged
  if(this.items && this.items.length>0){
    return Observable.of(this.items);
  }else{
  // get items from WS the  
  return this.http.get('http://henri-potier.xebia.fr/books')
      .map(res => <Item[]> res.json())
      .map(items => { this.items = items;
        return this.items; 
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
  }

// chercher l'item à partir de la liste cachée des items
getItem(isbn: string): Observable<Item> {
  if(this.items && this.items.length>0){
    return Observable.of(this.items.find(item => item.isbn === isbn));
  }else{
    // if there is no items w get item from back end
    return this.http.get('http://localhost:3000/book/book/'+isbn+'')
      .map(res => <Item> res.json().data, error => error)
  }
}

// dans le cas d'une pagination et d'un nombre illimité de produits
getItemsByPage(offset:number, size:null):void{

}
// getItem Offer by isbn
getItemsOffer(isbn_list: string[]):Observable<any>{
   return this.http.get('http://henri-potier.xebia.fr/books/'+isbn_list.join(',')+'/commercialOffers')
      .map(res => <any> res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}
}