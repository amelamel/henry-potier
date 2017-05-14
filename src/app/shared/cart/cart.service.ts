import { Injectable } from '@angular/core';
import { Cart, ItemOrder } from './cart';
import { Offer, OfferTypes } from './offer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import { Http } from "@angular/http";

@Injectable()
export class CartService {
  public cart: Cart;
  constructor(private http: Http) {
    this.cart = {
      items: [], 
      total_items:0
   }
   console.log("cart service constructor");
  }
  //get current Cart
  getCart():Observable<Cart>{
    // if owr WS allow to get cart w must get cart from WS 
    // in this case w have not a WS so we send a static cart
    return Observable.of(this.cart);
  }

  // add item to cart
  // if item exist we just set quantity 
  addItemToCart(itemOrder: ItemOrder):void {
    let exist = false;
    let self = this;
    this.cart.items.forEach(function(item){
      if(item.isbn === itemOrder.isbn){
        exist = true;
        item.quantity += itemOrder.quantity;
      }
    });
    if(!exist){
      this.cart.items.push(itemOrder);
    }
    // calculate the sum of all cart products
    this.calculateCartSum();
  }


// get all cart items Offer by isbn
getItemsOffer():Observable<any>{
  let isbn_list: string[] = [];
  // get lit of isbn of cart 
  this.cart.items.forEach(function(item_oder){
    isbn_list.push(item_oder.isbn);
  })
  // get commercial offers by the list of isbn
  return this.http.get('http://henri-potier.xebia.fr/books/'+isbn_list.join(',')+'/commercialOffers')
    .map(res => <any> res.json().offers)
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

// calculate the cart sum by offers
calculateCartSum():void {
  this.getItemsOffer().subscribe(offers => {
  this.calculateTotalsQuantityPrices();
  // get best offer and associate it to final cart sum
  this.calculateBestOffer(offers);
  })
}

// calculate all cart items prices and total quantity
calculateTotalsQuantityPrices():void{
   // get new sum and total_items
  let sum_cart = 0;
  let total_items = 0;
  this.cart.items.forEach(function(item){
    sum_cart += item.price*item.quantity;
    total_items += item.quantity;
  })
  // initialisation of vars 
  this.cart.new_price = sum_cart;
  this.cart.old_price = sum_cart;
  this.cart.total_items = total_items;
}

// calculate offer by type
// {
//   "offers": [
//     { "type": "percentage", "value": 5 },
//     { "type": "minus", "value": 15 },
//     { "type": "slice", "sliceValue": 100, "value": 12 }
//   ]
// }

calculateBestOffer(offers:Offer[]): void {
  // for each offer we calculate a new price
  let slicedValue = 0; //the value sliced by evry offer
  let offer_prices_object = {};
  let price = this.cart.old_price;
  let offer_prices_list: number[] = [];
  let new_price:number = 0;
  // for each offer we calculate the final total of items 
  offers.forEach(function(offer){
    switch(offer.type){
      case 'percentage':{
        let percentage= offer.value / 100;
        slicedValue = percentage * price
        break;
      } ;
      case 'minus':{
        slicedValue = offer.value;
        break;
      };
      case 'slice':{
        if(offer.sliceValue){
          slicedValue = ( ( price / offer.sliceValue ) * offer.value );
        }
        break;
      }
     
    }
    new_price = price - slicedValue;
    // we use for getting the sliced value of each offer_price 
    offer_prices_object['' + new_price + ''] = slicedValue;
    // append the new price to price list
    offer_prices_list.push(new_price);
  });
  // Sort by ascending order to chose the cheapest one
  offer_prices_list.sort(function(a, b) {
    return a - b;
  });
  if(offer_prices_list){
    this.cart.new_price = offer_prices_list[0]//.toFixed(2);
    this.cart.new_price.toFixed(2);
    this.cart.offer_price = offer_prices_object['' + this.cart.new_price + ''];
    this.cart.offer_price = parseFloat(this.cart.offer_price.toFixed(2));
  }
}

  // remove product from cart
  removeItemFromCart(index_item:number):void{
    this.cart.items.splice(index_item,1);
    if(this.cart.items.length === 0){
      this.cart.total_items = 0;
    } else {
      this.calculateCartSum();
    }
  }
  // increase item quantity in cart by index
  increaseItemQuantity(index_item: number): void{
      this.cart.items[index_item].quantity ++;
      this.calculateCartSum();
  }

  // decrease item quantity in cart by index
  decreaseItemQuantity(index_item: number): void{
    if(this.cart.items[index_item].quantity >= 2){
      this.cart.items[index_item].quantity --;
      this.calculateCartSum();
    }else{
      console.log("cant decrease quantity")
    }
  }
}