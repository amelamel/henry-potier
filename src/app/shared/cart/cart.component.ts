import { Component, OnInit, Input } from '@angular/core';
import { Cart } from "app/shared/cart/cart";
import { CartService } from "app/shared/cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart: Cart;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    // get cart from service
    this.cartService.getCart().subscribe(cart=> this.cart = cart);
  }

  // remove item from current cart
  removeItemFromCart(index_item:number):void{
    this.cartService.removeItemFromCart(index_item);
  }
  
  // increase item quantity in cart by index
  increaseItemQuantity(index_item: number): void{
    this.cartService.increaseItemQuantity(index_item);
  }

  // decrease item quantity in cart by index
  decreaseItemQuantity(index_item: number): void{
    this.cartService.decreaseItemQuantity(index_item);    
  }

}
