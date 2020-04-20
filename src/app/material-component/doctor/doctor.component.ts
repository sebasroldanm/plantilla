import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Specialty {
    id: number;
    nombre: string;
  }

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue:
      { displayDefaultIndicatorType: false }
  }]


})
export class DoctorComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Medicina General', 'Pediatría', 'Cardiología', 'Oftalmología', 'Anesteciología'];


  optionalfirstFormGroup: FormGroup;
  optionalsecondFormGroup: FormGroup;
  isOptional = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    // optional
    this.optionalfirstFormGroup = this._formBuilder.group({
      optionalfirstCtrl: ['', Validators.required]
    });
    this.optionalsecondFormGroup = this._formBuilder.group({
      optionalsecondCtrl: ['', Validators.required]
    });

  }

}
