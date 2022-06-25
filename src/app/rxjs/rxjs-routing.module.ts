import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { ObserverComponent } from './observer/observer.component';

const routes: Routes = [
  { path:'', component: RootComponent, children: [
    { path:'', component: HomeComponent },
    { path:'observer', component: ObserverComponent },
    { path: '**', redirectTo: '',  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {}
