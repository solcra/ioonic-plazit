import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: Storage,
  ){}
  async canActivate(){
    this.storage.create();
    const isUserLoggedIn = await this.storage.get('isUserLoggedIn');
    if(isUserLoggedIn === true){
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
