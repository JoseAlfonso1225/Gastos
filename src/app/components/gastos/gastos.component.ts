import { Component } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { IngresarGastoComponent } from "./ingresar-gasto/ingresar-gasto.component";
import { ListarGastoComponent } from "./listar-gasto/listar-gasto.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  standalone: true,
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css',
  imports: [IngresarGastoComponent, ListarGastoComponent]
})
export class GastosComponent {


  constructor(private presupuestoService: PresupuestoService, private router: Router) { }

  ngOnInit(): void {
    if (this.presupuestoService.presupuesto === 0) {
      this.router.navigate(['/ingresarPresupuesto']);
    }
  }
}
