import { NgModule } from '@angular/core';
import { MatRoutingModule } from './mat-routing.module';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent
  ],
  imports: [
    MatRoutingModule
  ]
})
export class MatModule {}
