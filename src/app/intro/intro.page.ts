import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };
  slides = [
    {
      title: 'Escucha tu música',
      subTitle: 'EN CUALQUIR LUGAR',
      description: 'Los mejores álbunes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.',
      icon: 'play'
    },
    {
      title: 'Disfruta de nuestro reproductor',
      subTitle: 'DE VIDEOS UNCREÍBLES',
      description:
      'Entra al modo video de nuestro reproductor y obtén acceso a clips, documentales y making offs increíble de tu artista favorito.',
      icon: 'play'
    },
    {
      title: 'Accede al exclusivo',
      subTitle: 'MODO DEPORTE',
      description: 'Crea una playlist basada en tu actividad física. <br> Ten reportes y acceso a lo que necesites, integrado con GPS',
      icon: 'play'
    }
  ];

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {

  }

  finish(){
    this.storage.create();
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }

}
