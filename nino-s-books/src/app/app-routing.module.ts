import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ProfileComponent } from './core/components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing-page.module').then(
        (res) => res.LandingPageModule
      ),
  },
  // {
  //   path: 'offers',
  //   loadChildren: () =>
  //     import('./features/Offers/offers.module').then((res) => res.OffersModule),
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
