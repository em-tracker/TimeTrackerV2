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
    let validEmail = false;
    let reg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]*\.([a-z]{2,4})$/;

    if (password !== conpassword) {
      return this.passwordAlert();
    }

    if (reg.test(email)) {
      validEmail = true;
    } else {
      validEmail = false;
    }

    if (!validEmail) {
      return this.badEmail();
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
      message: 'Password Not Match',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async badEmail() {
    const alert = await this.alertCtrl.create({
      header: 'Registration',
      message: 'The username/email address is badly formatted.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
