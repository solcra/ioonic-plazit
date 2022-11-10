import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage implements OnInit {
  songs: any[];
  artist: string;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }
  ionViewDidEnter(){
    this.artist = this.navParams.data.artist;
    this.songs = this.navParams.data.songs;
  }
  ngOnInit() {
  }
  async selectSong(song?){
    await this.modalController.dismiss(song);
  }

}
