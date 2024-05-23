import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ingresar-gasto.component.html',
  styleUrl: './ingresar-gasto.component.css'
})
export class IngresarGastoComponent {
nombreGasto: string;
cantidad: number;
formularioIncorrecto: boolean;
textIncorrecto: string;

constructor(private presupuestoService: PresupuestoService){
  this.nombreGasto = '';
  this.cantidad = 0;
  this.formularioIncorrecto = false;
  this.textIncorrecto = '';
}

ngOnInit(): void{}

agregarGasto(){
  if(this.cantidad > this.presupuestoService.restante){
    this.formularioIncorrecto = true;
    this.textIncorrecto = 'CANTIDAD INGRESADA ES MAYOR AL RESTANTE';
    return;
  }
  if(this.nombreGasto === '' || this.cantidad <=0 ){
    this.formularioIncorrecto = true;
    this.textIncorrecto = 'NOMBRE GASTO O CANTIDAD INCORRECTA';
  }else{

    //crear objeto
    const GASTO = {
      nombre: this.nombreGasto,
      cantidad: this.cantidad
    }

    //enviar objeto a los suscriptores
    this.presupuestoService.agregrarGasto(GASTO);









    this.formularioIncorrecto = false;
    this.nombreGasto = '';
    this.cantidad = 0;
  }
}
}

