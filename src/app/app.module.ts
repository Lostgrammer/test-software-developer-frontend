import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './cliente/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './cliente/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes=[
  {path:'',redirectTo:'/usuarios',pathMatch:'full'},
  {path:'cliente', component: ClienteComponent},
  {path:'cliente/form', component: FormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
