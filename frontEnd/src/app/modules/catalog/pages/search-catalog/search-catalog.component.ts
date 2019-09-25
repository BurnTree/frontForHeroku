import {Component, OnInit} from '@angular/core';
import {Item} from '../../../../core/models/item';
import {ItemService} from '../../../../core/service/item.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {RouteMenu} from '../../../../core/models/route';
import {createOutput} from '@angular/compiler/src/core';

@Component({
  selector: 'app-search-catalog',
  templateUrl: './search-catalog.component.html',
  styleUrls: ['./search-catalog.component.css']
})
export class SearchCatalogComponent implements OnInit {

  routeMenu: RouteMenu[] = [];
  txtSearch: string;
  products: Item[];
  sub: Subscription;
  routeNac: RouteMenu[] = [{name: 'поиск', url: 'search'}];

  constructor(private itemService: ItemService,
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
      if (this.txtSearch) {
        this.products = this.itemService.getItems(20, 20);
      }
    });
    this.routeMenu = [{name: 'поиск', url: '/search'}];
  }

}
