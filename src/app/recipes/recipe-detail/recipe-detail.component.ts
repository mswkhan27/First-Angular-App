import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit,OnChanges {

 recipe: Recipe | undefined
 id:number=0;
  constructor(private recipeServe:RecipeService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
  this.route.params.subscribe(
    (params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeServe.getRecipe(this.id)
    }
  )
  }

  ngOnChanges(): void {
    console.log(this.recipe?.name)
  }


  onAddToShoppingList(){

    const ing=this.recipe?.ingredients

    if (ing)
    this.recipeServe.addIngredientToShoppingList(ing)

   
  }

  onEditRecipe(){
this.router.navigate(['edit'], {relativeTo:this.route})
  }

}
