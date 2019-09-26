import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../../../core/service/item.service';
import {Item} from '../../../../core/models/item';
import {CategoryService} from '../../../../core/service/category.service';
import {ConvertService} from '../../../../core/service/convert.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  punkts: Item[];

  constructor(public itemService: ItemService,
              public categoryService: CategoryService,
              public conv: ConvertService) {
  }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(cat => {
      this.punkts = this.conv.catsInItems(cat);
    });

  }

}
