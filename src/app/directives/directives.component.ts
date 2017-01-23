import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directived',
  template: `
    <div class="directiv">
        <h2>Attribute directives</h2>
        <h3>NgClass/NgStyle</h3>
        <p [ngClass]="{redText:true}" [ngStyle]="{'background-color':'darkgray'}">Some paragraph</p>
        <h3>Custom directives</h3>
        <p [highlighted]="'yellow'" [default]="'blue'">Highlighted by custom directive</p>
        <h2>Structural directives</h2>
        <h3>*ngIf</h3>
        <div *ngIf="toggle">Shown if toggle is true</div>
        <!-- Same as -->
        <template [ngIf]="toggle">
          <div>
            Shown only conditionally  
          </div>
        </template>
        <button (click)="toggleChange()">Toggle</button>
        <h3>*ngFor</h3>
        <ul style="list-style: none;">
          <li *ngFor="let item of items;let i = index">Item[{{i}}]: {{item}}</li>
        </ul>
        <h3>*ngSwitch</h3>
        <div [ngSwitch]="value">
          <p *ngSwitchCase="1">1</p>
          <p *ngSwitchCase="10">10</p>
          <p *ngSwitchCase="100">100</p>
          <p *ngSwitchDefault>Default</p>
        </div>
        <button (click)="switchChange">Switch toggle</button>
        <h3>Unless custom directive</h3>
        <div *unless="toggle">Conditional Div made by custom directive</div>
        <button (click)="toggleChange()">Toggle</button>
</div>
  `,
  styles: ['.directiv {border: 1px solid darkgray; } .redText{color:darkred;}']
})
export class DirectivesComponent implements OnInit {

  toggle = true;
  items = [1,2,3,4,5];
  value = 1;

  constructor() {
  }

  ngOnInit() {
  }

  toggleChange() {
    this.toggle = !this.toggle;
  }

  switchChange(){
    this.value = this.value * 10;
    if(this.value == 10000){
      this.value = 1;
    }
  }

}
