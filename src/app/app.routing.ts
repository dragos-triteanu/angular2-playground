import {Route, Routes, RouterModule} from "@angular/router";
import {HomePage} from "./components/routing/home-page/home-component.component";
import {AnotherPage} from "./components/routing/another-page/another-page.component";
import {USER_ROUTES} from "./components/some-component/someComponents.routes";
import {GuardedComponent} from "./components/routing/guarded/guarded.component";
import {GuardComponent} from "./components/routing/guard/guard.component";
import {DeactivatingComponent} from "./components/routing/deactivating/deactivating.component";
/**
 * Created by drago on 1/28/2017.
 */

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'another', component: AnotherPage, children: USER_ROUTES}, //ChildRoutes do not do nothing, but they are listed to illustrate functionality
  {path: 'another/:pathParam', component: AnotherPage},
  {path: 'guarded', component: GuardedComponent, canActivate: [GuardComponent], canDeactivate: [DeactivatingComponent]},
  {path: 'redipath', redirectTo: 'another'}
];

export const routing = RouterModule.forRoot(routes);
