import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') ingredientForm : NgForm;
  editSubscription: Subscription;
  editMode = false;
  editItemId: number;
  editIngredient : Ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.ingredientEdit.subscribe(
      (index: number) => {
        this.editItemId = index;
        this.editMode = true;

        this.editIngredient = this.shoppingListService.getIngredient(index);
        this.ingredientForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        });
      }
    );      
  }

  onSubmit(form:NgForm){
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
      if(!this.editMode){
      this.shoppingListService.addIngredient(newIng);
      }
      else if(this.editMode){
        this.shoppingListService.onUpdate(this.editItemId, newIng);
      }
      this.editMode = false;
        // Setting form values empty
      form.reset();
  }

  onClear(){
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.onRemove(this.editItemId);
    this.onClear();`  `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  }

  ngOnDestroy(){
    this.editSubscription.unsubscribe();
  }

}
