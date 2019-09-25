import {Component, Input, OnInit} from '@angular/core';
import {Sertificate} from '../../../../core/models/sertificate';
import {LocalRouteService} from '../../../../core/service/localRoute.service';
import {ActivatedRoute} from '@angular/router';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';

@Component({
  selector: 'app-sertificate-icon',
  templateUrl: './sertificate-icon.component.html',
  styleUrls: ['./sertificate-icon.component.css']
})
export class SertificateIconComponent implements OnInit {

  @Input()
  public serti: Sertificate;
  url: string;
  lang: string;

  constructor(private routeService: LocalRouteService,
              public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.lang = this.routeService.getLanguage(this.activeRoute);
  }

}
