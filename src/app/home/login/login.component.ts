import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = "robinso"
  senha = ""

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(`username: ${this.usuario}, senha: ${this.senha}`)

    this.authenticationService.authenticate(this.usuario, this.senha)
      .subscribe((success) => {
        console.log("Autenticado com sucesso", success)
        this.router.navigate(['animais'])
      }, (error) =>
        console.log("Usuário ou senha inválido", error)
      )
  }

}
