import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ProfileComponent } from './core/components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing-page/landing-page.module').then(
        (res) => res.LandingPageModule
      ),
  },
  {
    path: 'fiction',
    loadChildren: () =>
      import('./features/fiction/fiction.module').then(
        (res) => res.FictionModule
      ),
  },
  {
    path: 'sci-fi',
    loadChildren: () =>
      import('./features/sci-fi/sci-fi.module').then((res) => res.SciFiModule),
  },
  {
    path: 'top',
    loadChildren: () =>
      import('./features/top/top.module').then((res) => res.TopModule),
  },
  {
    path: 'bio',
    loadChildren: () =>
      import('./features/bio/bio.module').then((res) => res.BioModule),
  },
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
