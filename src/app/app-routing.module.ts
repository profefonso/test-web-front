import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { TopicComponent } from 'src/app/components/topic/topic.component';
import { Page404Component } from 'src/app/components/page404/page404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'topic', component: TopicComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
