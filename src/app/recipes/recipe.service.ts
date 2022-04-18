
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

  recipeSelected=new EventEmitter<Recipe>();

  constructor(private shoppingListService:ShoppingListService){

  }
   private recipes : Recipe[]=[
    
        new Recipe("abc","123","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
        [new Ingredient('Meat',1),
        new Ingredient('French Fries',20)] )
        ,new Recipe("cde","345",
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505" 
        ,[new Ingredient('Buns',2),new Ingredient('Meat ',1)])
      ];

      getRecipes(){
        return this.recipes.slice();
      }
      getRecipe(id:number){
        return this.recipes[id];
      }
      addIngredientToShoppingList(ing:Ingredient[]){
        this.shoppingListService.addIngredientList(ing);
      }
     

}