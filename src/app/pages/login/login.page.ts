import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    // const { email, password } = this;
    // this.authService.signIn(email, password);
    this.showAlert(); //() => this.router.navigateByUrl('/nav-page'));
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Login Warning',
      message:
        'This feature is under development thank you for registering on the new TimeTracker',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
