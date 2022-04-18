import { Ingredient } from "../shared/ingredient.model";
export class ShoppingListService{


    ingredients: Ingredient[]=[
        new Ingredient("Apple",43),
        new Ingredient ("Oranges",33)
    ];
       

    getIngredients(){
    return this.ingredients;
    }
    
    addIngredient(ing:Ingredient){
    this.ingredients.push(ing);
    }

    addIngredientList(ing:Ingredient[]){

        this.ingredients.push(...ing);

        
    }
        



}