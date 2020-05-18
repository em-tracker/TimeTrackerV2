import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
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
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  login() {
    // const { email, password } = this;
    // this.authService.signIn(email + '@gmail.com', password);
    this.showAlert();
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
