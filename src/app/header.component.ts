import {Component, OnInit} from '@angular/core';
import {Route, Router, Routes} from '@angular/router';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['']);
  }

}
export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
