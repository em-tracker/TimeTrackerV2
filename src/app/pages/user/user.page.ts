import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('hello');
    this.testFunction();
  }

  testFunction() {
    console.log('2nd console');
  }
}
