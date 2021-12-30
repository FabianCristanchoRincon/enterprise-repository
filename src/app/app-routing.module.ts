import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  {
    path: 'repositorio',
    component: HomePageComponent,
    loadChildren: ()=> import(`./modules/home/home.module`).then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
