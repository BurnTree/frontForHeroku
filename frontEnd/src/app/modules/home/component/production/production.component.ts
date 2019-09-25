import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../../../core/service/item.service';
import {Item} from '../../../../core/models/item';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  punkts: Item[];
  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.punkts = this.itemService.getPunkts();
  }

}
