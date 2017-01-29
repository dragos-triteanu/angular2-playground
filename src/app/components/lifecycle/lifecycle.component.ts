import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
  <div class="lifecycle">
    <button (click)="addToScreen()">Show</button>
    <p *ngIf="isDisplayed">onInit--> onDoCheck--> onAfterContentInit--> onAfterContentChecked--> onAfterViewInit--> onAfterViewChecked--> onDoCheck--> onAfterContentChecked--> onAfterViewChecked--> onDoCheck--> onAfterContentChecked</p>
  </div>`,
  styles: [".lifecycle { border: 1px solid darkgray;}"]
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  lifecycle = "";
  isDisplayed:boolean = false;

  constructor() {
  }

  ngOnChanges() {
    console.log("onChanges");
  }

  ngOnInit() {
    console.log("onInit");
  }

  ngDoCheck() {
    console.log("onDoCheck");
  }

  ngAfterContentInit() {
    console.log("onAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("onAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("onAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("onAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("onDestroy");
  }

  addToScreen() {
    this.isDisplayed = true;
  }

}
