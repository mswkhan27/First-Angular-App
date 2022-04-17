import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/incredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]=[

new Ingredient("Apple",43),
new Ingredient ("Oranges",33)

  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ing:Ingredient){

  this.ingredients.push(ing);
  }

}
