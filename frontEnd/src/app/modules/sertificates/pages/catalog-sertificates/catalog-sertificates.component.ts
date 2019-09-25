import { Component, OnInit } from '@angular/core';
import {Sertificate} from '../../../../core/models/sertificate';
import {ItemService} from '../../../../core/service/item.service';

@Component({
  selector: 'app-catalog-sertificates',
  templateUrl: './catalog-sertificates.component.html',
  styleUrls: ['./catalog-sertificates.component.css']
})

export class CatalogSertificatesComponent implements OnInit {

  catalog: Sertificate[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.catalog = this.itemService.getSertificate();
  }

}
