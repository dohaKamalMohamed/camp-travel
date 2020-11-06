import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  user ={email:'',password:''}
  errorMsg: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
     console.log(this.form.controls)
    // this.authenticationService.login(this.f.email.value, this.f.password.value)
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['/home']);
    //     },
    //     error => {
    //       this.errorMsg = error.error || error.statusText;
    //       console.log(error);
    //     });
  }
 
}
