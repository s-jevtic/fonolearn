import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpaComponent } from './ipa/ipa.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main-menu', pathMatch: 'full'
  },
  {
    path: "main-menu",
    component: MainMenuComponent
  },
  {
    path: "ipa",
    component: IpaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
