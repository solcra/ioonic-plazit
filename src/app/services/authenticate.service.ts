import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  logionUser(credential){
    console.log(credential);
    console.log(credential.email);
    console.log(credential.password);
    return new Promise((cor, err)=>{
      if(
        credential.email === 'test@test.com' && credential.password === '123456'
      ) {
        cor('Loguin correcto');
      } else {
        err('Login incorrecto');
      }
    });
  }
}
