import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  public cliente:Cliente = new Cliente();
  public titulo:string="Registro de usuario";

  ngOnInit(): void {
  }

  public create():void{
    console.log("cliqueado");
    console.log(this.cliente);
  }
}
