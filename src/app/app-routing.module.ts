import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './core/home/home.component';
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactUsComponent },
  { path: 'menu', loadChildren: () => MenuModule },

  { path: 'not-found', component: NotFoundPageComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
