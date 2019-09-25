import {Component, OnInit} from '@angular/core';
import {DataGoods, Goods} from '../../../../core/models/goods';
import {GoodsService} from '../../../../core/service/goods.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: Goods;
  table: DataGoods[];

  constructor(
    private goodsService: GoodsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let id: number;
    this.route.params.subscribe(params => {
      id = params.id;
      this.goodsService.getGoodsById(id).subscribe(goods => {
        this.product = goods;
      });
      this.goodsService.getData(id).subscribe(data => this.table = data);
    });
  }


}
