import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MinusculoValidator } from './validations/minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './validations/usuario-existe.service';
import { usuarioSenhaIguais } from './validations/usuario-senha-iguais.validator'
import { Router } from '@angular/router';
import { senhasDiferentes } from './validations/senhas-diferentes.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      userName: ['', [MinusculoValidator], [this.usuarioExistenteService.usuarioExiste()]],
      password: [''],
      confirmPassword: ['']
    },
      {
        validators: [usuarioSenhaIguais, senhasDiferentes]
      })
  }

  cadastrar() {

    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe((success) => {
        this.router.navigate(['']);
      }, (error) => {
        alert("Erro ao cadastrar usuário\n" + error.message)
      });
    }
  }

}
