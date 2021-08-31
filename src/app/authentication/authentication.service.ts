import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  authenticate(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(`${API}/user/login`,
      {
        userName: usuario, password: senha
      },
      { observe: 'response' }
    ).pipe(
      tap((response) => {
        const authToken = response.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    )
  }
}
