import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

const routes: Routes = [
  { path: '', component: ListaAnimaisComponent },
  { path: ':animalId', component: DetalhesAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }