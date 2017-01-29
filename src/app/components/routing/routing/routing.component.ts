import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['/another']);
  }

  navigateWithParams() {
    this.router.navigate(['/another'], {queryParams: {'queryParam': 100}});
  }
}
