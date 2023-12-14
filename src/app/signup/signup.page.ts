import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  objectblock: any = {};
   patientName: any;
   body:any;
    currentDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }
  signup(){
    console.log("testing.."+this.objectblock.patientName)
    this.body = {
      service:"login",
      patieNname: this.objectblock.patieNname,
      dateOfBirth: this.currentDate,//
      nationalNo: this.objectblock.nationId,
      gender: this.objectblock.gender,//
      countyCode: this.objectblock.county,
      mobileNo: this.objectblock.mobileNo,//

      email: this.objectblock.email,
      alternativePersonNo: this.objectblock.alternativeNo,//
      telephone: this.objectblock.telephoneNo,
      disabilityStatus: this.objectblock.DisaStatus,//
      appointmentDate: this.currentDate,
     // uuid: this.globalVars.getGlobalVariable()

    }



  }

}
