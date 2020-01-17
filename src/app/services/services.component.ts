import { Component, OnInit } from '@angular/core';
import { CmsService } from '../cms.service';
import { ServicesPage } from '../models/services-page';

declare var servicesBusinessStepsTabs:any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private cmsService:CmsService) { }

  ngOnInit() {
    servicesBusinessStepsTabs();
    this.cmsService.fetchServicesPageContent().subscribe((result)=>{
      this.content = result.acf;
    });
  }

  content:ServicesPage;

}
