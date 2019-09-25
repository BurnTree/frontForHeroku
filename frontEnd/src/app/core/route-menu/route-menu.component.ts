import {Component, Input, OnInit} from '@angular/core';
import {RouteMenu} from '../models/route';
import {LocalRouteService} from '../service/localRoute.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-route-menu',
  templateUrl: './route-menu.component.html',
  styleUrls: ['./route-menu.component.css']
})
export class RouteMenuComponent implements OnInit {

  lang: string;
  @Input()
  public routeMenu: RouteMenu[] = [];

  constructor(private routeService: LocalRouteService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.lang = this.routeService.getLanguage(this.activatedRoute);
  }

}
