import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from "@angular/http";
import { CartService } from './cart.service';
import { Offer } from "app/shared/cart/offer";

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
      imports:[HttpModule]
    });
  });

  it('should ...', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

   it('should return new pice 230, offer_price: 30', inject([CartService], (service: CartService) => {
    // let cartService: CartService;
    service.cart = {
      items: [{price:30, quantity:5}, {price:20, quantity:5}],
      total_items: 10,
      old_price: 250,
      new_price: 250,
    }
    service.calculateTotalsQuantityPrices();
    let offers: Offer[] =  [
      { "type": "percentage", "value": 5 }, // 250-250*0.05 = 250 - 12.5 = 237.5 
      { "type": "minus", "value": 15},      // 250 - 15 = 235 
      { "type": "slice", "sliceValue": 100, "value": 12 } //250 - (250/100)*12) = 220
    ]
    service.calculateBestOffer(offers)
    expect(service.cart.new_price).toBe(220);
    expect(service.cart.offer_price).toBe(30);
    expect(service.cart.old_price).toBe(250);
  }));

});
