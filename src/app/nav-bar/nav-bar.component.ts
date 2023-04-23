import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedin: string;
  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn() {
    this.loggedin = localStorage.getItem('token') || '';
    return this.loggedin;

  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success("logged out successfully");
  }

}
