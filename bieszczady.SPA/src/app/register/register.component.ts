import { AuthService } from '../_services/auth.service';
import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User ;
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService , private fb: FormBuilder , private router: Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required ],
      Username: ['', Validators.required],
      password: ['', [Validators.required , Validators.minLength(4), Validators.maxLength(10)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidate});
  }

  passwordMatchValidate(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch' : true};
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('canceled');
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({} , this.registerForm.value );

      this.authService.register(this.user).subscribe(() => {
        this.alertify.success('register succes');
      // tslint:disable-next-line:no-shadowed-variable
      }, error => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/members']);
        });
      });
  }


}
}
