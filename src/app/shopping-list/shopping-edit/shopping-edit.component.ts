import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingName',{static:false}) ingNameRef:ElementRef | undefined;
  @ViewChild('ingAmount',{static:false}) ingAmountRef:ElementRef | undefined;
 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {

  }

  onAddIngredient(){
   const name= this.ingNameRef?.nativeElement.value;
   const amount=this.ingAmountRef?.nativeElement.value;
   const addIngredient=new Ingredient(name,amount);
   this.shoppingListService.addIngredient(addIngredient);
  }
}
