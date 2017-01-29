import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {CanDeactivateAware} from "../can-deactivate-aware/can-deactivate-aware.component";

@Component({
  selector: 'app-guarded',
  templateUrl: './guarded.component.html',
  styleUrls: ['./guarded.component.css']
})
export class GuardedComponent implements OnInit, CanDeactivateAware {
  canDeactivate(): Observable<boolean> | boolean {
    console.log("Called can deactivate");
    return confirm('Do you want to leave?');
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
