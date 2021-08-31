import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/authentication/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  constructor(private usuarioService: UsuarioService, private router: Router) { }
  user$ = this.usuarioService.retornaUsuario();

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

}
