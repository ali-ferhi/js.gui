import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  { path:'', component: RootComponent, children: [
    { path:'', component: HomeComponent },
    { path: '**', redirectTo: '' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatRoutingModule { }
