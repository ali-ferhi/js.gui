import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FxLayoutRoutingModule } from './fx-layout-routing.module';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent
  ],
  imports: [
    FlexLayoutModule,
    FxLayoutRoutingModule
  ]
})
export class FxLayoutModule { }
