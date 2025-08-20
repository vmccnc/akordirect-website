import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  services = [
    { title: 'SERVICES.LIST.WEB', description: 'SERVICES.LIST.WEB_DESC', isExpanded: false},
    { title: 'SERVICES.LIST.IOS', description: 'SERVICES.LIST.IOS_DESC', isExpanded: false},
    { title: 'SERVICES.LIST.AUTO', description: 'SERVICES.LIST.AUTO_DESC', isExpanded: false},
    { title: 'SERVICES.LIST.BA', description: 'SERVICES.LIST.BA_DESC', isExpanded: false},
    { title: 'SERVICES.LIST.DESIGN', description: 'SERVICES.LIST.DESIGN_DESC', isExpanded: false},
  ];

  getServices() {
    return this.services;
  }
}