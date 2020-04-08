import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SaladDishService } from './services/salad-dish.service';
import { SaladDishResolve } from './resolvers/salad-dish-resolve';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { DropdownDirective } from './shared/dropdown.directive';
import { MaterialModule } from './angular-material.module';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule.withServerTransition({appId: 'my-universal-app'}),
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,

    AuthModule,
    ContactUsModule,
    AppRoutingModule
  ],
  providers: [
    SaladDishService,
    SaladDishResolve,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
