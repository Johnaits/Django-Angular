import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersDetailComponent } from './members-detail/members-detail.component';
import { NewmemberComponent } from './newmember/newmember.component';

const routes: Routes = [
  {path: 'member-detail/:id', component: MembersDetailComponent},
  {path: 'newmember', component: NewmemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MembersDetailComponent,]
