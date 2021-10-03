import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component: RootComponent, children: [
    { path:'', component: HomeComponent },
    { path:'navigation-bar', loadChildren: () => import('./nav/nav.module').then(m => m.NavModule) },
    { path: '**', redirectTo: '' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatRoutingModule { }
