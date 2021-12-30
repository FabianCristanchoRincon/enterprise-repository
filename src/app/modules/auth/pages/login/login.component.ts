import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel;
  remember = false;

  constructor(private router:Router, private authService:AuthService) {
    this.user = new UserModel();
  }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.user.email = String(localStorage.getItem('email'));
      this.remember = true;
    }
  }

  login(form:NgForm){
    if(form.invalid){ return; }
    console.log('Formulario válido');
    swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    swal.showLoading();

    this.authService.login(this.user)
    .subscribe((resp):any => {
      swal.close();

      const idToken = resp['idToken'];
      this.authService.saveToken(idToken);

      if(this.remember){
        localStorage.setItem('email', this.user.email);
      }

      this.router.navigateByUrl('/repositorio/comites_calidad');
    }, (err) => {
      console.log(err.error.error.message)
      swal.fire({
        icon: 'error',
        title: 'Error al ingresar',
        text: err.error.error.message
      });
    })
  }

}
