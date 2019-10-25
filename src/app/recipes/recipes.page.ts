import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {

    console.log('Loaded!');
    
  }

  ionViewWillEnter() {
    console.log('will enter');
    this.recipes = this.recipesService.getAllRecipes();
    
  }

  ionViewWillLeave() {
    console.log('will leave');
    
  }

  ionViewDidLeave() {
    console.log('did leave');
    
  }

  ionViewDidEnter() {
    console.log('did enter');
    
  }

  ngOnDestroy() {
    console.log('destroyed!');
    
  }

}
