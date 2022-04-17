import { Component, EventEmitter ,ElementRef, OnInit, ViewChild, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/incredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingName',{static:false}) ingNameRef:ElementRef | undefined;
  @ViewChild('ingAmount',{static:false}) ingAmountRef:ElementRef | undefined;
  @Output() ingredientAdded=new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {

  }

  onAddIngredient(){
   const name= this.ingNameRef?.nativeElement.value;
   const amount=this.ingAmountRef?.nativeElement.value;
   const addIngredient=new Ingredient(name,amount)
   this.ingredientAdded.emit(addIngredient);
  }
}
