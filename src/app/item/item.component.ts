import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ItemService } from '../shared/item/item.service';
import 'rxjs/add/operator/switchMap';
import { Item } from './item';
import { MdSnackBar } from "@angular/material";
import { ItemOrder } from "app/shared/cart/cart";
import { CartService } from "app/shared/cart/cart.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
   encapsulation: ViewEncapsulation.None,
})
export class ItemComponent implements OnInit {
  private item:Item;
  private quantity:number = 0;
  private is_error: boolean = false;
  constructor(private itemService:ItemService, private route: ActivatedRoute,
  private location: Location, public snackBar: MdSnackBar, private cartService:CartService) { 
  }
  ngOnInit() {
    // get the item by route param isbn
    this.route.params
      .switchMap((params: Params) => this.itemService.getItem(params['isbn']))
      .subscribe(item => { this.item = item;
        this.item['author'] = "Henry Potier";
      }, error => {this.is_error = true;});
    }

  addItemToCart(){
    let item_order: ItemOrder = {
        isbn: this.item.isbn,
        quantity: this.quantity,
        image: this.item.cover,
        price: this.item.price,
        title: this.item.title
    }
    // open snackbar
    this.snackBar.open(this.quantity + ' book(s) added to you cart', '' + this.quantity*this.item.price + '€', {duration:700});
    this.cartService.addItemToCart(item_order);
  }
    
}

// @Component({
//   selector: 'dialog-result-example',
//   templateUrl: './dialog-result-example.html',
// })
// export class DialogResultExample {
//   selectedOption: string;

//   constructor(public dialog: MdDialog) {}

//   openDialog() {
//     let dialogRef = this.dialog.open(DialogCart);
//     dialogRef.afterClosed().subscribe(result => {
//       this.selectedOption = result;
//     });
//   }
// }
