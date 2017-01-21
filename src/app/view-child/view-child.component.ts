import {Component, ViewChild, ContentChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
          <div class="viewChild">
            <b>Defining a variable</b><p #someVariable> someVariableValue</p>
            <b>Referencing the variable</b><p>{{someVariable.textContent}}</p>
            <p>Open console for ViewChild and ContentChild</p>
          </div>
`,
  styles: ['.viewChild { border: 1px solid darkgray;}']
})
export class ViewChildComponent {
  @ViewChild("someVariable")
  someVariable:HTMLElement;

  @ContentChild("boundContent")
  boundContent:HTMLElement;


  ngAfterViewChecked() {
    console.log("-------------");
    console.log(this.someVariable);
    console.log(this.boundContent);

  }

}
