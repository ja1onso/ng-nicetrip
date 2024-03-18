import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StagesService } from '../services/stages.service';

@Component({
  selector: 'app-stage-form',
  templateUrl: './stage-form.component.html',
  styleUrls: ['./stage-form.component.css']
})
export class StageFormComponent{

  public stageForm!: FormGroup;

  constructor(private fb: FormBuilder, private stagesService: StagesService) { 
    this.initializeForm();
  }

  initializeForm() {
    this.stageForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      locations: this.fb.array([]),
    });
  }

  onSubmit() {
    this.stagesService.createStage(this.stageForm.value).subscribe(res => {
      console.log('Product created!', res);
    });
  }

  get locations() {
    return this.stageForm.controls['locations'] as FormArray;
  }

  addLocation() {
    let locationForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      lat: ['', Validators.required],
      long: ['', Validators.required],
      type: ['', Validators.required],
    });
  
    this.locations.push(locationForm);
  }

  deleteLocation(locationIndex: number) {
    this.locations.removeAt(locationIndex);
  }

}
