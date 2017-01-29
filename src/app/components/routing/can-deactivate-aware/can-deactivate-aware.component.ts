import {Observable} from "rxjs";


export interface CanDeactivateAware {
  canDeactivate: () => boolean | Observable<boolean>;
}
