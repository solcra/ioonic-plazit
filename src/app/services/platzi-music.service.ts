import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  constructor(
    public wsConexion: ConexionService<any>,
  ) { }

  getNewReleases(){
    return fetch('https://platzi-music-api.herokuapp.com/browse/new-releases').then(
      res=>res.json()
    );
  }
}
