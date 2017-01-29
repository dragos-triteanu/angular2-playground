import {Observable} from "rxjs";
import {CanDeactivate} from "@angular/router";
import {CanDeactivateAware} from "../can-deactivate-aware/can-deactivate-aware.component";


export class DeactivatingComponent implements CanDeactivate<CanDeactivateAware> {

  canDeactivate(component: CanDeactivateAware): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
