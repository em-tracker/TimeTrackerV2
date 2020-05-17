import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    const { email, password } = this;
    this.authService.signIn(email + '@gmail.com', password);
  }
}
