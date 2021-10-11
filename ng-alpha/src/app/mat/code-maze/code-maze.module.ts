import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CodeMazeRoutingModule } from './code-maze-routing.module';
import { RootComponent } from './root/root.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    RootComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    MatTabsModule,
    CodeMazeRoutingModule
  ]
})
export class CodeMazeModule { }
