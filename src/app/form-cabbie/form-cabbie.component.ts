import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cabbie',
  templateUrl: './form-cabbie.component.html',
  styleUrls: ['./form-cabbie.component.css']
})
export class FormCabbieComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup ({
      value: new FormControl()
    });
  }

  onSubmit() {
    const { value } = this.form.value;
    const newValue: string = value.split('').reverse().join('');
    this.form.controls.value.setValue(newValue);
  }

}
