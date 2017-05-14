import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { routing } from './item.routing'
import { MdCardModule, MdSelectModule, MdButtonModule, MdTabsModule, MdDialog, MdDialogRef, MdSnackBarModule } from '@angular/material';
// import { FormsModule } from "@angular/forms";
import { ItemComponent } from './item.component';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { ItemService } from "app/shared/item/item.service";
import { RouterModule } from "@angular/router";
import { ActivatedRoute, Params }   from '@angular/router';


describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ routing,
        RouterModule,
        HttpModule,
        CommonModule,
        MdCardModule,
        MdSelectModule,
        MdButtonModule,
        MdTabsModule,
        MdSnackBarModule],
      declarations: [ ItemComponent ],
      providers:[ItemService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
