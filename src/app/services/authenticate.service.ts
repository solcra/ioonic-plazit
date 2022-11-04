import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private storage: Storage
  ) { }
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
  registerUser(userData){
    this.storage.create();
    userData.password = btoa(userData.password);
    return this.storage.set('user', userData);
  }
}
