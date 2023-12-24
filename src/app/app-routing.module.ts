import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuFirstComponent } from './menu-first/menu-first.component';
import { SecondMenuComponent } from './second-menu/second-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu1', component: MenuFirstComponent },
  { path: 'menu2', component: SecondMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
