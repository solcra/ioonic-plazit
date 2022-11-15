import { Component, OnInit } from '@angular/core';
import{ Camera, CameraResultType, CameraSource  } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins } from 'protractor/built/plugins';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userImage: string;
  photo: SafeResourceUrl;
  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.userImage = 'assets/img/carlos.jpg';
   }

  ngOnInit() {
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    console.log(image);
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }

}
