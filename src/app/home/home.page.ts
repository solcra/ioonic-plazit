import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlatziMusicService } from '../services/platzi-music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  artists = [];
  songs = [];
  albums = [];
  song: any = {};
  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides:true,
    speed: 400
  };
  currentSong: HTMLAudioElement;
  newTeam;
  constructor(
    private musicService: PlatziMusicService,
    private modalController: ModalController
  ) {}

  ionViewDidEnter(){
    this.musicService.getNewReleases().then((res)=>{
      this.artists = this.musicService.getArtists();
      this.songs = res.albums.items.filter(e=>e.album_type === 'single');
      this.albums = res.albums.items.filter(e=>e.album_type === 'album');
      console.log(this.artists);
      console.log(this.songs);
      console.log(this.albums);
    });
  }

  async showSongs(artista){
    const songs = await this.musicService.getArtistTopTracks(artista.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps:{
        songs: songs.tracks,
        artist: artista.name
      }
    });
    modal.onDidDismiss().then(dataRetuned=>{
      this.song = dataRetuned.data;
    });
    await modal.present();
  }

  play(){
    console.log(new Audio(this.song.preview_url));
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener('timeupdate', ()=>{
      this.newTeam = (this.currentSong.currentTime * (this.currentSong.duration /10)/100);
    });
    this.song.playing = true;
    console.log(this.song);
  }
  pause(){
    this.currentSong.pause();
    this.song.playing = false;
    console.log(this.song);
  }

  paseTime(time = '0.00'){
    if (time){
      const paseTime = parseInt(time.toString().split('.')[0],10);
      let minute = Math.floor(paseTime/60).toString();
      if(minute.length === 1){
        minute = '0' + minute;
      }
      let seconds = (paseTime%60).toString();
      if(seconds.length === 1){
        seconds = '0' + seconds;
      }
      return minute + ':' + seconds;
    }
  }
}
