import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { ObserverComponent } from './observer/observer.component';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    ObserverComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule {}
