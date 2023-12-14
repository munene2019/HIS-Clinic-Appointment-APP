import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MyGlobalServiceService } from './my-global-service.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(public globalVars: MyGlobalServiceService) {
    this.globalVars.setGlobalVariable("8882");
  }
  
  
  
  
 
  
}
