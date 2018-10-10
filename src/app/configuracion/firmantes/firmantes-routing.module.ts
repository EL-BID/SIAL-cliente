import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { AuthGuard } from '../../auth-guard.service';

const routes: Routes = [
{path: 'configuracion/firmantes', redirectTo: 'configuracion/firmantes', pathMatch: 'full'},
	  {
	    path:'configuracion/firmantes',
	    children:[
	      { path: '', component: FormularioComponent},
	    ],
	    canActivate: [AuthGuard]
	  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmantesRoutingModule { }
