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
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  constructor(private loadingController: LoadingController ,private authService: AuthService,private globalVars :MyGlobalServiceService,
    public navCtrl: NavController,
    public alertController: AlertController,private router: Router,private modalController: ModalController) { }

  ngOnInit() {
  }
  

}
