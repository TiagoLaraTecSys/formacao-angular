import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { NovoUsuarioService } from '../novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>

          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)),

        map((usuarioExiste) => {
          console.log(usuarioExiste)
          return usuarioExiste ? { usuarioExistente: true } : null
        }),
        first()
      )
    }
  }
}
