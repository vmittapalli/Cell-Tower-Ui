import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title= 'vamshi';
  lat = 51.678418;
  lng = 7.809007;

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  logout() {
this.authService.logout();
this.router.navigate(['login']);
  }
}
