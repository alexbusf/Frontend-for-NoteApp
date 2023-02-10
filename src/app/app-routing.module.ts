import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './note/create/create.component';
import { DetailsComponent } from './note/details/details.component';
import { ListComponent } from './note/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full'},
  { path: 'notes', component: ListComponent },
  { path: 'note/:id', component: DetailsComponent },
  { path: 'add', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
