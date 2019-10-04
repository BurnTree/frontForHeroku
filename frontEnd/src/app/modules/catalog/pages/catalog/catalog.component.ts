import {Component, OnInit} from '@angular/core';
import {enumPodPunkt, enumPunkt, Item} from '../../../../core/models/item';
import {Subscription} from 'rxjs';
import {ItemService} from '../../../../core/service/item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteMenu} from '../../../../core/models/route';
import {Category} from '../../../../core/models/category';
import {CategoryService} from '../../../../core/service/category.service';
import {ConvertService} from '../../../../core/service/convert.service';
import {TitleService} from '../../../../core/service/title.service';
import {Title} from '../../../../core/models/title';
import {GoodsService} from '../../../../core/service/goods.service';
import {Goods} from '../../../../core/models/goods';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: Item[];
  title: Item;
  categor: Category;
  private subscriptions: Subscription[] = [];

  routeMenu: RouteMenu[] = [];
  punkt: Item;
  podPunkts: Item[];
  sub: Subscription;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private titleService: TitleService,
              private goodsService: GoodsService,
              private conv: ConvertService,
              private router: Router) {
    // const id: Observable<string> = route.params.pipe(map(p => p.id));
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const p: number = params.p;
      const pp: number = params.pp;
      this.goodsService.getGoodsByTitle(pp).subscribe(
        (allGoods: Goods[]) => {
          console.log('goods: ' + allGoods[0].idgoods);
          this.products = this.conv.goodsInItems(allGoods, pp);
        });
      this.titleService.getTitleById(pp).subscribe(
        (data: Title) => {
          console.log('p: ' + p + 'pp: ' + pp);
          this.title = this.conv.ttlInItem(data);
          console.log('title id: ' + data.idtitle);
          this.categoryService.getCtgById(this.title.podpunkt).subscribe(ctg => {
            this.routeMenu = [{name: 'продукция', url: 'product'},
              {name: ctg.name, url: 'product' + '/' + this.title.podpunkt.toString()},
              {name: this.title.name, url: 'product' + '/' + this.title.podpunkt.toString() + '/' + this.title.punkt.toString()}];
          });
        });
    });
  }

}
