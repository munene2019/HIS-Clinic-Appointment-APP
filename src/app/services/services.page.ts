import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor(private router: Router) { 
    this.router=router;
  }

  ngOnInit() {
  }
  navigateToSecondPage(){
    console.log("........")
    this.router.navigate(['/login']);

  }
  

}
