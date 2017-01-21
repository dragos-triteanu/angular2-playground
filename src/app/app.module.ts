import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { OtherComponent } from './some-component/some.component';
import { OnewaybindingComponent } from './oneway-binding/oneway-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [AppComponent, OtherComponent, OnewaybindingComponent, EventBindingComponent, TwowayBindingComponent, LifecycleComponent, ViewChildComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
