import { TestBed, async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing/app-routing.module';

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Cart } from "app/shared/cart/cart";
import { CartService } from "app/shared/cart/cart.service";
import { AppComponent } from './app.component';
import { CartComponent } from "app/shared/cart/cart.component";
import { APP_BASE_HREF } from "@angular/common";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, HttpModule, AppRoutingModule],
      declarations: [
        AppComponent,
        CartComponent
      ],
      providers:[CartService, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Henry Potier store'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Henry Potier store');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Henry Potier store');
  // }));
});
