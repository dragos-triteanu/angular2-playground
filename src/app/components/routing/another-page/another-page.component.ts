import {Component, OnInit, OnDestroy} from '@angular/core';
import {Route, Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.css']
})
export class AnotherPage implements OnInit, OnDestroy {
  private subscription: Subscription;
  pathParam: string;
  queryParam: string;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => this.pathParam = param['pathParam']
    );

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (queryParam: any) => this.queryParam = queryParam['queryParam']
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
