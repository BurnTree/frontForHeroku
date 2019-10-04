import {Injectable} from '@angular/core';
import {Item} from '../models/item';
import {HttpClient} from '@angular/common/http';
import {Sertificate} from '../models/sertificate';
import {CategoryService} from './category.service';
import {Category} from '../models/category';
import {ConvertService} from './convert.service';
import {Observable} from 'rxjs';
import {Globals} from '../models/global';

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
              public convert: ConvertService,
              public global: Globals) {
  }

  public getForNav(): Observable<Category[]> {
    return this.http.get<Category[]>(this.global.backend + '/api/category/all');
  }
  getItem(punkt: number, podpun: number, id: number): Item {
    this.i = new Item();
    this.i.id = id;
    this.i.name = 'Nothing';
    this.i.punkt = punkt;
    this.i.podpunkt = podpun;
    return this.i; // this.http.get<Item>('');
  }


  getPunkts(): Item[] {
    const p: Item[] = [{name: 'Дороги', id: 0, punkt: 1, podpunkt: 0, img: ''},
      {name: 'Не дороги', id: 0, punkt: 2, podpunkt: 0, img: ''},
      {name: 'просто', id: 0, punkt: 3, podpunkt: 0, img: ''}];
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
    const n: Item = {name: 'Punk', id: 0, punkt: pun, podpunkt: 0, img: ''};
    return n;
  }

  getPopunktForId(pun: number, podpun: number): Item {
    const n: Item = {name: 'PodPu', id: 0, punkt: pun, podpunkt: podpun, img: ''};
    return n;
  }

  getItemForId(pun: number, podpun: number, myid: number): Item {
    const n: Item = {name: 'Iteee', id: myid, punkt: pun, podpunkt: podpun, img: ''};
    return n;
  }

  getsome() {
  }

  getSertificate(): Sertificate[] {
    const ser: Sertificate[] = [{id: 1, name: 'Sertificate 1', image: 's1.jpg'},
      {id: 2, name: 'Sertificate 2', image: 's2.jpg'},
      {id: 3, name: 'Sertificate 3', image: 's3.jpg'}];
    return ser;
  }

  getSert(oId: number): Sertificate {
    return {id: oId, name: 'Sertif', image: 's1.jpg'};
  }
}
