import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string;
  password: string;
  conpassword: string;
  manager: string;
  team: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  register() {
    const { email, password, conpassword, manager, team } = this;
    if (password !== conpassword) {
      return this.passwordAlert();
    }
    this.authService.register(email, password, manager, team);
    this.successAlert();
  }

  async successAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Registration',
      message: 'Successfully Registered',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async passwordAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Registration',
      message: 'Incorrect Password',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
