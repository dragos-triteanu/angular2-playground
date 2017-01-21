import {Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  @Output() customeEvent = new EventEmitter<string>();


  buttonClicked() {
    console.log("click!");
    this.customeEvent.emit("customeEvent!");
  }

}
