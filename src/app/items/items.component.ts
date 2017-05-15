import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Item } from '../item/item';
import { ItemService } from '../shared/item/item.service';
import { MdInputContainer } from '@angular/material';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ItemsComponent implements OnInit {
  public items: Item[];
  constructor(private itemSrvice:ItemService) { }
  public search_title: string;
  public search_price: number;
  public is_error:boolean = false;
  ngOnInit() {
    this.getItems();
  }
  // get items list by using itemService
  getItems():void{
    this.itemSrvice.getCachedItems().subscribe(items => {
      if(items instanceof(Array)){
        this.items = items;
      }else{
        this.is_error = true;
      }
    }, error => this.is_error = true )
  }
  // filter items by title
  searchItemsBytitle(title:string, price: number):void{
      this.items = this.itemSrvice.items;
      if(title){
        this.items = this.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase())); 
        if(price){
          this.items = this.items.filter( item => item.price <= price);
        } 
      }
    }

  // filter by price
  searchItemsByPrice(price:number, title: string): void{
    this.items = this.itemSrvice.items;
    this.items = this.items.filter( item => item.price <= price);
    if(title){
      this.items = this.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase())); 
    }
  }

  // getAmazon Items in case of search null in our site
  getAmazonItems():void{

  }

}
