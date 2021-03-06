import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent} from './food-list.component';
// defining annotation aka "decorator"
@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
    <div class="row">
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Burrito", "Finished all of it", 500, 0),
      new Food("Cheese Burger", "Did not get fries", 650, 1),
      new Food("Sushi", "Ate three rolls", 250, 2)
    ];
  }

  foodWasSelected(clickedFood: Food): void {
    console.log("Parent", clickedFood);
  }
}
