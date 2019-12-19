import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { UserService} from './services/user.service';
import { AddusersComponent } from './components/addusers/addusers.component';

@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    AddusersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
      path: "listusers",
      component: ListusersComponent
    },{
      path: "listusers/addusers",
      component: AddusersComponent
    }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
