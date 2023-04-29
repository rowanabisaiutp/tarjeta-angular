import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaListComponent } from "./components/tarjeta-list/tarjeta-list.component";
import { TarjetaFormComponent } from "./components/tarjeta-form/tarjeta-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarjetas',
    pathMatch: 'full'
  },
  {
    path:'tarjetas',
    component: TarjetaListComponent
  },
  {
    path: 'tarjetas/add',
    component: TarjetaFormComponent
  },
  {
    path: 'tarjetas/edit/:id',
    component: TarjetaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
