import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Cart } from "app/shared/cart/cart";
import { CartService } from "app/shared/cart/cart.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public cart:Cart;
  constructor(private cartService:CartService){
    this.cart = {
        items: [], 
        total_items: 0
    }
  }
  ngOnInit(): void {
    // get cart from service
    this.cartService.getCart().subscribe(cart => this.cart = cart);
  }
  title = 'Henry Potier store';
}
