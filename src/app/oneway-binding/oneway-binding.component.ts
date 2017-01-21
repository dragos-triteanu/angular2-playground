import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.css']
})
export class OnewaybindingComponent {
  stringInterpolation:string = "a string";
  numberInterpolation:number = 2;
  shouldHaveRedBorder:boolean = true;

  @Input()
  bindableProperty:number = 0;


  getHasRedBorder() {
    return this.shouldHaveRedBorder;
  }


}
