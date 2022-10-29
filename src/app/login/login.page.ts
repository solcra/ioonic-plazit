import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loguinForm: FormGroup;
  validationMessage = {
    email:[
      {type: 'required', message: 'El email es requerido'},
      {type: 'pattern', message: 'Ojo! este no es un email válido'}
    ],
    password:[
      {type:'required', message: 'El password es requerido'},
      {type:'minlength', message: 'Es demasiado conrto deve ser miniomo de 6'}
    ]
  };
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
  ) {
    this.loguinForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]{3,}.+[a-zA-Z0-9-]{2,6}$')]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }

  ngOnInit() {
  }

  loguinUser(){
    console.log(this.loguinForm);
    this.authService.logionUser(this.loguinForm.value).then(res=>{
      this.errorMessage = '';
      this.navCtrl.navigateForward('home');
    });
  }

}
