import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { default as dataArtists } from './artists.json';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  constructor(
    public wsConexion: ConexionService<any>,
  ) { }

  getArtists(){
    return dataArtists.items;
  }

  getNewReleases(){
    return fetch('https://platzi-music-api.herokuapp.com/browse/new-releases').then(
      res=>res.json()
    );
  }

  getArtistTopTracks(artistId){
    return fetch(`https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`).then(
      res=>res.json()
    );
  }
}
