import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Sertificate} from '../../../../core/models/sertificate';
import {ItemService} from '../../../../core/service/item.service';

@Component({
  selector: 'app-item-sertificate',
  templateUrl: './item-sertificate.component.html',
  styleUrls: ['./item-sertificate.component.css']
})
export class ItemSertificateComponent implements OnInit {

  id: number;
  item: Sertificate;
  constructor(private route: ActivatedRoute,
              private itemService: ItemService) { }

  ngOnInit() {
    this.id = this.getId();
    this.item = this.itemService.getSert(this.id);
  }

  getId(): number {
    let sub: Subscription;
    let id: number;
    sub = this.route.params.subscribe(params => {
       id = params.id;
    });
    return id;
  }
}
