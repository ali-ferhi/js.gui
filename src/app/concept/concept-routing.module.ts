import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path:'', component: RootComponent, children: [
    { path:'', component: HomeComponent },
    { path:'events', component: EventComponent },
    { path:'directives', component: DirectiveComponent },
    { path:'pipes', component: PipeComponent },
    { path: '**', redirectTo: '',  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptRoutingModule {}
