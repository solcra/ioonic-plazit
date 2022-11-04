import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService<T> {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(path: string): Observable<T[]> {
    //this.loader.onShowPreloader()
    const options = this.getHeaders();
    const httpUrl: string = path;
    return  this.http.get<T[]>(httpUrl,options);
  }

  getHeaders(){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    //console.log("token 1:",this.wsUsuario.dtUsuario.token)
    const options = {
      headers
    };
    return options;
  }
}
