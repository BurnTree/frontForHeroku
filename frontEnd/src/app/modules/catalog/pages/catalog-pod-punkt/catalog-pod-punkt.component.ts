import {Component, OnInit} from '@angular/core';
import {Item, PodPunkt, Punkt} from '../../../../core/models/item';
import {ItemService} from '../../../../core/service/item.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';
import {RouteMenu} from '../../../../core/models/route';
import {CategoryService} from '../../../../core/service/category.service';
import {ConvertService} from '../../../../core/service/convert.service';
import {TitleService} from '../../../../core/service/title.service';
import {Category} from '../../../../core/models/category';
import {Title} from '../../../../core/models/title';

@Component({
  selector: 'app-catalog-pod-punkt',
  templateUrl: './catalog-pod-punkt.component.html',
  styleUrls: ['./catalog-pod-punkt.component.css']
})
export class CatalogPodPunktComponent implements OnInit {


  routeMenu: RouteMenu[] = [];
  punkt: Item;
  podPunkts: Item[];
  sub: Subscription;
  private subscriptions: Subscription[] = [];

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private titleService: TitleService,
              private conv: ConvertService,
              private router: Router) {
    // const id: Observable<string> = route.params.pipe(map(p => p.id));
  }

  ngOnInit() {
    let idPunk: number;
    // let cat: Category;
    this.route.params.subscribe(params => {
      idPunk = params.p;
      this.categoryService.getCtgById(idPunk).subscribe(
        (data: Category) => {
          this.punkt = this.conv.ctgInItem(data);
          this.routeMenu = [{name: 'продукция', url: '/product'},
            {name: this.punkt.punkt.toString(), url: this.punkt.punkt.toString()}];
        });
      this.titleService.getTitleByCtg(idPunk).subscribe(
        (ttls: Title[]) => {
          this.podPunkts = this.conv.ttlsInItems(ttls);
        });
    });
  }
}
