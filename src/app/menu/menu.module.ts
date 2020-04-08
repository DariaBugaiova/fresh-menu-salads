import { NgModule } from '@angular/core';
import { CardDetailsComponent } from './card-details/card-details.component';
import { EditMenuCardComponent } from './edit-menu-card/edit-menu-card.component';
import { SaladCardComponent } from './salad-card/salad-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuStartComponent } from './menu-start/menu-start.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    CardDetailsComponent,
    EditMenuCardComponent,
    SaladCardComponent,
    MenuStartComponent,
    MenuComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenuRoutingModule,
    RouterModule
  ],
  exports: [MenuRoutingModule],
  providers: [AuthGuard]
})
export class MenuModule {}
