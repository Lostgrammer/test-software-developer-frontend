import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './cliente/cliente.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path:'',redirectTo:'/usuarios',pathMatch:'full'},
  //{path:'formulario', component: FormularioComponent},
  {path:'cliente', component: ClienteComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
