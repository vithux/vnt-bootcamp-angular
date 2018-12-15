import { Component, OnInit } from '@angular/core';
import { literal } from '@angular/compiler/src/output/output_ast';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public list;
  public itemName = '';
  
  
  constructor(private shoppingListService: ShoppingListService) {
    this.list = shoppingListService.listItemsFirebase;  
  }

  ngOnInit() {
  }

  addItem(){
    
    let itemObj ={
      name: this.itemName,
      amount: 1,
      checked: false
    };

    this.shoppingListService.add(itemObj);
    this.itemName = '';
  }

}
