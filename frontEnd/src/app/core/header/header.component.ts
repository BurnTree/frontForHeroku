import {Component, OnInit} from '@angular/core';
import {Item} from '../models/item';
import {ItemService} from '../service/item.service';
import {Globals, Language} from '../models/global';
import {LocalRouteService} from '../service/localRoute.service';
import {ActivatedRoute, Router} from '@angular/router';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';
import {Subscription} from 'rxjs';
import {map, subscribeOn} from 'rxjs/operators';
import {CategoryService} from '../service/category.service';
import {ConvertService} from '../service/convert.service';
import {Category} from '../models/category';
import {subscribeTo} from 'rxjs/internal-compatibility';

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
              public categoryService: CategoryService,
              public conv: ConvertService,
              public routeService: LocalRouteService,
              public activatedRoute: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit() {
    // this.itemService.getForNav().subscribe((cat: Category[]) => {
    //     this.products = this.conv.catsInItems(cat);
    //   }
    // );
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
