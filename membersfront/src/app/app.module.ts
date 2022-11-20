import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { MembersDetailComponent } from './members-detail/members-detail.component';
import { FormsModule } from '@angular/forms';
import { NewmemberComponent } from './newmember/newmember.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersDetailComponent,
    NewmemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
