import { Component, OnInit } from '@angular/core';
import {Item, Punkt} from '../../../../core/models/item';
import {ItemService} from '../../../../core/service/item.service';
import {HttpClient} from '@angular/common/http';
import {RouteMenu} from '../../../../core/models/route';
import {Category} from '../../../../core/models/category';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../../core/service/category.service';
import {ConvertService} from '../../../../core/service/convert.service';

@Component({
  selector: 'app-catalog-punkt',
  templateUrl: './catalog-punkt.component.html',
  styleUrls: ['./catalog-punkt.component.css']
})
export class CatalogPunktComponent implements OnInit {

  punkts: Item[];

  products: Item[];
  categor: Category[];
  private subscriptions: Subscription[] = [];

  routeMenu: RouteMenu[] = [];
  punkt: Item;
  sub: Subscription;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private conv: ConvertService,
              private router: Router) {
    // const id: Observable<string> = route.params.pipe(map(p => p.id));
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const p: number = params.p;
      const pp: number = params.pp;
      if (p) {
        this.punkt = this.itemService.getPopunktForId(p, pp);
      }
    });
    this.subscriptions.push(this.categoryService.getAllCategory().subscribe(
      (data: Category[]) => {
      this.categor = data;
      console.log('category in item: ' + this.categor);
      this.products = this.conv.catsInItems(this.categor);
    }));
    this.routeMenu = [{name: 'продукция', url: 'product'}];
  }

}
