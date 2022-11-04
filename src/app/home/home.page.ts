import { Component } from '@angular/core';
import { PlatziMusicService } from '../services/platzi-music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  artists = [{},{},{},{},{},{},{},{}];
  songs = [];
  albums = [];
  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides:true,
    speed: 400
  };
  constructor(
    private musicService: PlatziMusicService
  ) {}

  ionViewDidEnter(){
    this.musicService.getNewReleases().then((res)=>{
      this.artists = res.albums.items;
      this.songs = res.albums.items.filter(e=>e.album_type === 'single');
      this.albums = res.albums.items.filter(e=>e.album_type === 'album');
      console.log(this.artists);
      console.log(this.songs);
      console.log(this.albums);
    });
  }
}
