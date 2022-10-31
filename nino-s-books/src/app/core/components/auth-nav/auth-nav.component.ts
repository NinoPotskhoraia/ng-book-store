import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss'],
})
export class AuthNavComponent implements OnInit {
  constructor(public auth: AuthService) {}
  showDiv = false;

  ngOnInit(): void {}

  toggleDisplayDiv() {
    this.showDiv = !this.showDiv;
  }
}
