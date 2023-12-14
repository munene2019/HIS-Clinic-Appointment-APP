import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// import { ConfirmationModalPageRoutingModule } from './confirmation-modal-routing.module';
import { ConfirmationModalPageRoutingModule } from './confirmation-modal-routing.module';
// import { ConfirmModalPageRoutingModule } from './confirmation-modal.module';
import { ConfirmationModalPage } from '../confirm-modal/confirmation-modal.page';

// import { ConfirmationModalPage } from './confirmation-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationModalPageRoutingModule
  ],
  declarations: [ConfirmationModalPage]
})
export class ConfirmationModalPageModule {}
