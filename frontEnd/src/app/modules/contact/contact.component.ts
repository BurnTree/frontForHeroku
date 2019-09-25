import { Component, OnInit } from '@angular/core';
import {RouteMenu} from '../../core/models/route';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  routeMenu: RouteMenu[] = [{name: 'контакт', url: 'contact'}];
  constructor() { }

  ngOnInit() {
  }

}
