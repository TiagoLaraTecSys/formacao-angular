import { Injectable } from '@angular/core';

const LOCAL_STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  retornaToken() {
    return localStorage.getItem(LOCAL_STORAGE_KEY) ?? '';
  }

  salvaToken(token: string) {
    localStorage.setItem(LOCAL_STORAGE_KEY, token);
  }

  removeToken() {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  possuiToken() {
    return !!this.retornaToken();
  }
}
