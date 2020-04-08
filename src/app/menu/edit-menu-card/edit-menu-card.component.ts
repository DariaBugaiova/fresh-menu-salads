import { Component,
         OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SaladDishService } from '../../services/salad-dish.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-menu-card',
  templateUrl: './edit-menu-card.component.html',
  styleUrls: ['./edit-menu-card.component.scss']
})
export class EditMenuCardComponent implements OnInit {
  editForm: FormGroup;
  editMode = false;
  editedCardIndex: number;
  subscription: Subscription = new Subscription();

  constructor( private route: ActivatedRoute,
               private formBuilder: FormBuilder,
               private saladDishService: SaladDishService ) { }

  ngOnInit(): void {
    this.initForm();
    this.subscription.add( this.saladDishService.cardId.subscribe(
      (index: number) => {
        this.editedCardIndex = index;
        this.editMode = true;
        }));

    this.subscription.add(this.saladDishService.getSaladById(this.editedCardIndex).subscribe(
      val => {
        this.editForm.setValue({
            name: val.name,
            ingredients: val.ingredient
          });
      }));
  }

  initForm() {
    this.editForm = this.formBuilder.group({
        name: '',
        ingredients: ''
    });
  }

}
