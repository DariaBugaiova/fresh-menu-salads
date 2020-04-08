import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  subscription: Subscription = new Subscription();
  genders = ['male', 'female'];
  name = 'Lena';
  info: string;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();

    this.contactForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  initForm() {
    this.contactForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      message: new FormGroup({
          nameMessage: new FormControl(''),
          info: new FormControl('')
        })
    });

    this.contactForm.patchValue({
        firstName: 'Anna',
    });
  }

  checkName(control: FormControl): {[s: string]: boolean} {
    if (this.name.indexOf(control.value) !== -1 ) {
      return {firstName: true};
    } else {
      return null;
    }
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.onReset();
  }

  onReset() {
    this.contactForm.reset();
  }
}
