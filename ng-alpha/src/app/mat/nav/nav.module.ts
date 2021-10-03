import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavRoutingModule } from './nav-routing.module';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent
  ],
  imports: [
    MatSidenavModule,
    NavRoutingModule
  ]
})
export class NavModule { }
