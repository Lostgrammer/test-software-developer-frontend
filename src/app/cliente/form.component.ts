import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import {Router,ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  public cliente:Cliente = new Cliente();
  public titulo:string="Registro de usuario";

  constructor(private clienteService:ClienteService,
  private router : Router,
  private ActivateRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente():void{
    this.ActivateRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }

  public create():void{
    this.clienteService.create(this.cliente).subscribe(
      response =>{ 
        this.router.navigate(['/cliente'])
        swal('Nuevo usuario', `Usuario ${this.cliente.nombre} creado con exito`)
      }
    )
  }
}
