import {Component, OnInit} from '@angular/core';
import {Item} from '../../../../core/models/item';
import {ItemService} from '../../../../core/service/item.service';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {RouteMenu} from '../../../../core/models/route';
import {createOutput} from '@angular/compiler/src/core';
import {debounceTime} from 'rxjs/operators';
import {ConvertService} from '../../../../core/service/convert.service';
import {GoodsService} from '../../../../core/service/goods.service';
import {Goods} from '../../../../core/models/goods';
import {FilterPipe} from '../../../../core/service/filter.pipe';

@Component({
  selector: 'app-search-catalog',
  templateUrl: './search-catalog.component.html',
  styleUrls: ['./search-catalog.component.css']
})
export class SearchCatalogComponent implements OnInit {

  routeMenu: RouteMenu[] = [];
  txtSearch: string;
  seaAria: string;
  allProduct: Item[];
  products: Item[];
  sub: Subscription;
  routeNac: RouteMenu[] = [{name: 'поиск', url: 'search'}];

  constructor(private itemService: ItemService,
              private conv: ConvertService,
              private goodsSerice: GoodsService,
              private route: ActivatedRoute,
              private router: Router) {
    // const id: Observable<string> = route.params.pipe(map(p => p.id));
  }

  ngOnInit() {

    this.route.url.subscribe(urls => {
        console.log(urls[0].toString());
      }
    );
    this.sub = this.route.params.subscribe(params => {
      this.txtSearch = params.product;
      const str = params.lang;
      console.log('search str: ' + str);
      if (!this.txtSearch) {
        this.txtSearch = '';
      }
      this.goodsSerice.getAllGoods().subscribe((data: Goods[]) => {
        this.allProduct = this.conv.goodsInItems(data, 1);
        this.products = this.searchFromTxt(this.allProduct, this.txtSearch);
      });
    });
    this.routeMenu = [{name: 'поиск', url: '/search'}];
  }

  searchFromTxt(items: Item[], txt: string): any[] {

    if (!items) {
      return [];
    }
    if (!txt) {
      return items;
    }
    txt = txt.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(txt);
    });
  }

  sbmSearch() {
    console.log('search suseec: ' + this.seaAria);
    this.txtSearch = this.seaAria;
    this.products = this.searchFromTxt(this.allProduct, this.txtSearch);
  }
}
