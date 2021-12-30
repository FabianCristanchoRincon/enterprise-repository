import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:UserModel = new UserModel();
  remember = false;

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  signUp(form: NgForm){
    if(form.invalid){ return; }
    console.log("Formulario válido");

    swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    swal.showLoading();

    this.authService.signUp(this.user)
    .subscribe(resp => {
      console.log(resp);
      swal.close();

      const idToken = resp['idToken'];
      this.authService.saveToken(idToken);

      if(this.remember){
        localStorage.setItem('email', this.user.email);
      }

      this.router.navigateByUrl('/repositorio/comites_calidad');
    }, (err)=>{
      console.log(err.error.error.message);
      swal.fire({
       icon: 'error',
       title: 'Error al registrarse',
       text: err.error.error.message
     });
    })
  }

}
