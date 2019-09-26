import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../../core/models/item';
import {LocalRouteService} from '../../../../core/service/localRoute.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  public item: Item;
  url: string;
  lang: string;
  constructor(public routeService: LocalRouteService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.lang = this.routeService.getLanguage(this.activatedRoute);
    this.url = this.lang + '/product/';
    if (this.item.punkt !== 0) { this.url += this.item.punkt + '/'; }
    if (this.item.podpunkt !== 0) { this.url += this.item.podpunkt + '/'; }
    if (this.item.id !== 0) { this.url += this.item.id; }
    console.log('product: ' + this.item);
  }
}
