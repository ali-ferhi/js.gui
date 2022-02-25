import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptRoutingModule } from './concept-routing.module';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { DirectiveComponent } from './directive/directive.component';
import { TextDirective } from './directive/text.directive';
import { PipeComponent } from './pipe/pipe.component';
import { SqrtPipe } from './pipe/sqrt.pipe';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    EventComponent,
    DirectiveComponent,
    TextDirective,
    PipeComponent,
    SqrtPipe
  ],
  imports: [
    CommonModule,
    ConceptRoutingModule
  ]
})
export class ConceptModule {}
