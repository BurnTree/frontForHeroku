import {Component, OnInit} from '@angular/core';
import {Item} from '../models/item';
import {ItemService} from '../service/item.service';
import {Globals, Language} from '../models/global';
import {LocalRouteService} from '../service/localRoute.service';
import {ActivatedRoute, Router} from '@angular/router';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products: Item[];
  public txtsea: string;
  public lang: string;
  sub: Subscription;

  constructor(public itemService: ItemService,
              public routeService: LocalRouteService,
              public activatedRoute: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit() {
    this.products = this.itemService.getPunkts();
    this.lang = this.routeService.getLanguage(this.activatedRoute);
    console.log('wtf ' + this.lang);
  }

  isEnglish(): boolean {
    if (this.lang === Language.ENGLISH) {
      return true;
    }
    return false;
  }

  isRussian(): boolean {
    if (this.lang === Language.RUSSIAN) {
      return true;
    }
    return false;
  }

  changeRussian() {
    window.location.reload();
    this.router.navigate(['ru']);
  }
}
