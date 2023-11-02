import { Route } from '@angular/router';
import { PageBComponent } from './pageb.component';
import { PageAComponent } from './pagea.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: PageAComponent,
  },
  {
    path: 'pageb',
    component: PageBComponent,
  },
];
