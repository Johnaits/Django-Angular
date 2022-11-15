import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersDetailComponent } from './members-detail/members-detail.component';

const routes: Routes = [
  {path: 'member/detail/:id', component: MembersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MembersDetailComponent,]
