import { Component, OnInit } from '@angular/core';

declare var servicesBusinessStepsTabs:any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    servicesBusinessStepsTabs();
  }

}
