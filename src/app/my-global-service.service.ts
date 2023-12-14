import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGlobalServiceService {
  globalVariable :any;

 
  constructor() { }

  setGlobalVariable(value:any) {
    this.globalVariable = value;
  }
  getGlobalVariable(){
    return this.globalVariable;
  }

}
