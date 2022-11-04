import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validationMessage = {
    email:[
      {type: 'required', message: 'El email es requerido'},
      {type: 'pattern', message: 'Ojo! este no es un email válido'}
    ],
    password:[
      {type:'required', message: 'El password es requerido'},
      {type:'minlength', message: 'Es demasiado conrto deve ser miniomo de 6'}
    ],
    nombre:[
      {type:'required', message: 'El nombre es requerido'},
      {type:'minlength', message: 'Es demasiado conrto deve ser miniomo de 3'}
    ],
    apellido:[
      {type:'required', message: 'El apellido es requerido'},
      {type:'minlength', message: 'Es demasiado conrto deve ser miniomo de 3'}
    ]
  };
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage,
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]{3,}.+[a-zA-Z0-9-]{2,6}$')]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
      apellido: new FormControl('',[Validators.required,Validators.minLength(3)])
    });
  }

  ngOnInit() {
  }

  registerUser(){
    this.authService.registerUser(this.registerForm.value).then(()=>{
      console.log(this.registerForm.value);
      this.navCtrl.navigateBack('login');
    });
  }

  goToLoguin(){
    this.navCtrl.navigateForward('login');
  }
  goToLogin(){
    this.navCtrl.navigateBack('login');
  }

}
