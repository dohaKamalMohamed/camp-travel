import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { usersService } from 'src/app/@service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  user = { email: '', password: '' }
  errorMsg: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: usersService
  ) { }

  ngOnInit() {
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
    this.userService.login(this.f.email.value, this.f.password.value)
      .subscribe(
        data => {
          if (data.result == true) {
            localStorage.setItem('campTraveUser', JSON.stringify(data.token))
            this.router.navigate(['/home']);
          } else {
            this.errorMsg = data.message;
          }

        },
        error => {
          this.errorMsg = error.error || error.statusText;
          console.log(error);
        });
  }

 
}
