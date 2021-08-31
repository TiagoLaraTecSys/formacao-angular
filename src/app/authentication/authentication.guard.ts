import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {

  constructor(private userService: UsuarioService, private router: Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(!this.userService.isLoged()){
        this.router.navigate(['']);
        return false;
      }
    
      return true;
  }
}
