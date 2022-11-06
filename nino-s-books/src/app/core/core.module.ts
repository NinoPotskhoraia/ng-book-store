import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../../environments/environment';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthNavComponent,
    AuthButtonComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    ProfileComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    RouterModule,
    SharedModule,
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    ProfileComponent,
  ],
})
export class CoreModule {}
