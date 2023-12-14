import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-error-modal',
  templateUrl: 'error-modal.page.html',
  styleUrls: ['error-modal.page.scss'],
})
export class ErrorModalPage {
 
  @Input() errorMessage!: string;


  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
