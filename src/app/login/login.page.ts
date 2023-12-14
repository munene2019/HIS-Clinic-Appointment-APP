import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ConfirmationModalPage } from '../confirm-modal/confirmation-modal.page';
import { AuthService } from '../services/auth.service';
import { ErrorModalPage } from '../error-modal/error-modal.page';
import { v4 as uuidv4 } from 'uuid';

import { MyGlobalServiceService } from '../my-global-service.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
 
  objectblock: any = {};
  body:any;
  uid:any;
  
  // credentials = { username: 'fff', password: '' };
  generateUUID() {
    this.uid = uuidv4();
    console.log('Generated UUID:', this.uid);
  }

  constructor(private loadingController: LoadingController ,private authService: AuthService,private globalVars :MyGlobalServiceService,
    public navCtrl: NavController,
    public alertController: AlertController,private router: Router,private modalController: ModalController
  ) {}


  async submit() {
    
    const modal = await this.modalController.create({
      component: ConfirmationModalPage, // Replace with the actual modal component
      componentProps: {
        message: 'Are you sure you want to proceed with the login?',
      },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data && data.proceed) {
      this.login();
    }
  }
 async login() {
    // Show loader
  const loader = await this.loadingController.create({
    message: 'Logging in...',
    duration: 5000  // Adjust the duration as needed
  });

  await loader.present();
   console.log("UID....."+this.globalVars.getGlobalVariable());
    this.body = {
    service:"login",
    username: this.objectblock.username,
    password: this.objectblock.password,
    uuid: this.globalVars.getGlobalVariable()
  }

  console.log("body"+this.body.uid)
    this.authService.login(this.body).subscribe(
      (response) => {
        console.log('Login successful', response);
        loader.dismiss();
        this.router.navigate(['/services']);
        // Handle successful login, e.g., store the token and navigate to the next page
        // this.navCtrl.navigateForward('/next-page');
      },
      (error) => {
        loader.dismiss();
       // console.error('Login failed', error);
        // Handle login error, e.g., show an error message to the user
        this.presentErrorModal(error);
      }
    );
  }

  async presentErrorModal(error: any) {
    const modal = await this.modalController.create({
      component: ErrorModalPage, // Replace with the actual error modal component
      componentProps: {
        errorMessage: 'Login failed. Please try again.', // Pass the error message to the modal
      },
    });

    await modal.present();
  }

  

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  signup() {
    this.router.navigate(['/signup']);
  }
  loging() {
    this.router.navigate(['/loginscreen']);
  }
  

}
