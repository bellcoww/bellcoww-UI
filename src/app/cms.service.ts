import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CMS_API_URL,API_ENDPOINTS } from 'src/environments/environment';
import { ServicesPage } from './models/services-page';


@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http:HttpClient) { }
  url = CMS_API_URL;        
  endpoints = API_ENDPOINTS;
  
  public fetchServicesPageContent(){
    return this.http.get<any>(this.url + this.endpoints.servicesPage);
  }
  
         
}
