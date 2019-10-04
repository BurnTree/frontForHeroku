import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginService} from '../../../../core/service/login.service';
import {User} from '../../../../core/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public check = false;
  public loginFormGroup: FormGroup = new FormGroup({
    login: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)]
    }),
  });

  constructor(public loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = new User();
    user.name = this.loginFormGroup.controls.login.value;
    user.password = this.loginFormGroup.controls.password.value;
    console.log('submit success');
    this.loginService.login(user).subscribe((token: string) => {
        this.loginService.setToken(token);
        console.log('token: ' + token);
        this.router.navigate(['ru/admin/cabinet']);
      }, error1 => {
        console.log('error: ' + error1.toString());
        this.check = true;
      }
    );
    console.log(user);
  }
}
