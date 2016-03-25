import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template:
  `
  <div class="food-form container">
    <h3>Edit Name: </h3>
    <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form" />
    <h3>Edit Details: </h3>
    <input [(ngModel)]="food.details" class="col-sm-8 input-lg food-form" />
    <h3>Edit Calories: </h3>
    <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form" />
  </div>
  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}