import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { CartaoModule } from '../components/cartao/cartao.module';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component';
import { ComentariosComponent } from './detalhes-animal/comentarios/comentarios.component';
import { MessagesModule } from '../components/messages/messages.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotosAnimaisComponent, DetalhesAnimalComponent, ComentariosComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    MessagesModule,
    ReactiveFormsModule
  ]
})
export class AnimaisModule { }
