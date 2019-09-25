import {Injectable} from '@angular/core';
import {Item} from '../models/item';
import {HttpClient} from '@angular/common/http';
import {Sertificate} from '../models/sertificate';
import {CategoryService} from './category.service';
import {Category} from '../models/category';
import {ConvertService} from './convert.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  i: Item;
  punkts: Item[];
  cat: Category[];
  stI: Item;

  constructor(private http: HttpClient,
              public categoryService: CategoryService,
              public convert: ConvertService) {
  }

  getItem(punkt: number, podpun: number, id: number): Item {
    this.i = new Item();
    this.i.id = id;
    this.i.name = 'Nothing';
    this.i.punkt = punkt;
    this.i.podpunkt = podpun;
    return this.i; // this.http.get<Item>('');
  }

  // getAllItem(): Item[] {
  //   this.stI = Array();
  //   return
  // }

  getPunkts(): Item[] {
    const p: Item[] = [{name: 'Дороги', id: 0, punkt: 1, podpunkt: 0},
      {name: 'Не дороги', id: 0, punkt: 2, podpunkt: 0},
      {name: 'просто', id: 0, punkt: 3, podpunkt: 0}];
    return p;
  }

  getPodpunkts(pun: number): Item[] {
    const p: Item[] = [{name: 'Эсковаторы', id: 0, punkt: pun, podpunkt: 4},
      {name: 'Почти эсковаторы', id: 0, punkt: pun, podpunkt: 5},
      {name: 'Оснастка', id: 0, punkt: pun, podpunkt: 6}];
    return p;
  }


  getItems(pun: number, podpu: number): Item[] {
    this.punkts = [];
    console.log('start: ');
    this.categoryService.getAllCategory().subscribe(
      (data: Category[]) => {
        console.log('caty: ' + data[0].name);
        this.cat = data;
        // this.punkts = this.convert.catInItem(data);
      });
    console.log('punkts: ' + this.punkts);
    console.log('name punkts: ' + this.punkts[1].name);
    return this.punkts;
  }

  getPunktForId(pun: number): Item {
    const n: Item = {name: 'Punk', id: 0, punkt: pun, podpunkt: 0};
    return n;
  }

  getPopunktForId(pun: number, podpun: number): Item {
    const n: Item = {name: 'PodPu', id: 0, punkt: pun, podpunkt: podpun};
    return n;
  }

  getItemForId(pun: number, podpun: number, myid: number): Item {
    const n: Item = {name: 'Iteee', id: myid, punkt: pun, podpunkt: podpun};
    return n;
  }

  getsome() {
  }

  getSertificate(): Sertificate[] {
    const ser: Sertificate[] = [{id: 1, name: 'Sertificate 1'},
      {id: 2, name: 'Sertificate 2'},
      {id: 3, name: 'Sertificate 3'},
      {id: 4, name: 'Sertificate 4'}];
    return ser;
  }

  getSert(oId: number): Sertificate {
    return {id: oId, name: 'Sertif'};
  }
}
