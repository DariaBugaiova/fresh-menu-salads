import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { SaladDishResolve } from '../resolvers/salad-dish-resolve';
import { EditMenuCardComponent } from './edit-menu-card/edit-menu-card.component';
import { MenuStartComponent } from './menu-start/menu-start.component';
import { MenuComponent } from './menu.component';
import { AuthGuard } from '../auth/auth-guard.service';

const menuRoutes: Routes = [
  { path: '', component: MenuComponent, children: [
    { path: '', component: MenuStartComponent },
    {
        path: ':id',
        component: CardDetailsComponent,
        resolve: { salad: SaladDishResolve},
      },
      {
        path: ':id/card-edit',
        component: EditMenuCardComponent,
        canActivate: [AuthGuard],
        resolve: { salad: SaladDishResolve }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(menuRoutes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
