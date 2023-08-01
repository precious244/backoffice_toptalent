import { Component } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  showPassword: boolean = false;
  hide = true;
  hide2 = true;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  constructor() { }

}
