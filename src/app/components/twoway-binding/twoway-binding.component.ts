import {Component} from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent {
  person = {
    username: 'X',
    password: 'Y'
  };

  logUsernameAndPassword() {
    console.log("Username:" + this.person.username + " " + "Password:" + this.person.password);
  }

}
