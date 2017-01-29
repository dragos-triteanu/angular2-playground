import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {OtherComponent} from './components/some-component/some.component';
import {OnewaybindingComponent} from './components/oneway-binding/oneway-binding.component';
import {EventBindingComponent} from './components/event-binding/event-binding.component';
import {TwowayBindingComponent} from './components/twoway-binding/twoway-binding.component';
import {LifecycleComponent} from './components/lifecycle/lifecycle.component';
import {ViewChildComponent} from './components/view-child/view-child.component';
import {DirectivesComponent} from './components/directives/directives.component';
import {HighlightDirective} from './components/directives/highlight.directive';
import {CustomStructuralDirective} from './components/directives/custom-structural.directive';
import {HomePage} from './components/routing/home-page/home-component.component';
import {AnotherPage} from './components/routing/another-page/another-page.component';
import {routing} from "./app.routing";
import {RoutingComponent} from './components/routing/routing/routing.component';
import {GuardedComponent} from './components/routing/guarded/guarded.component';
import {GuardComponent} from './components/routing/guard/guard.component';
import {DeactivatingComponent} from "./components/routing/deactivating/deactivating.component";

@NgModule({
  declarations: [AppComponent, OtherComponent, OnewaybindingComponent, EventBindingComponent, TwowayBindingComponent, LifecycleComponent, ViewChildComponent, DirectivesComponent, HighlightDirective, CustomStructuralDirective, HomePage, AnotherPage, RoutingComponent, GuardedComponent, GuardComponent],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [GuardComponent, DeactivatingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
