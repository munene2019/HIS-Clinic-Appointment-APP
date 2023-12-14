// confirmation-modal.page.ts
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-modal', // Make sure this matches the selector used in other components
  templateUrl: 'confirmation-modal.page.html',
  styleUrls: ['confirmation-modal.page.scss'],
})
export class ConfirmationModalPage {
  @Input() message!: string;

  constructor(private modalCtrl: ModalController) {}

  dismiss(proceed: boolean) {
    this.modalCtrl.dismiss({ proceed });
  }
}
