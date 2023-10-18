import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  myform: any;

  isVisible: boolean = false;
  isSuccessful: boolean = false;

  constructor(private fb: FormBuilder, private FormService: FormService) {

  }
  ngOnInit(): void {
    this.CreateForm()
  }
  CreateForm(): void {
    this.myform = this.fb.group({
      name: ['', Validators.required],
      dni: ['', Validators.required],
      location: ['', Validators.required]
    })
  }
  OnSubmit() {
    if (this.myform.get('name').invalid || this.myform.get('dni').invalid || this.myform.get('location').invalid) {
      this.isVisible = true;
    } else {
      console.log(this.myform.getRawValue());
      this.FormService.Register(this.myform.getRawValue()).subscribe({
        next: response => {
          console.log(response);
          this.isSuccessful = true
        }
      });
    }
  }
  OnCloseModal() {
    this.isVisible = false;
    this.isSuccessful = false;
  }
}
