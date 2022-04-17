import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit,OnChanges {

  @Input() recipe: Recipe | undefined
  constructor() { }

  ngOnInit(): void {
    console.log(this.recipe?.name)
  }

  ngOnChanges(): void {
    console.log(this.recipe?.name)
  }

}
