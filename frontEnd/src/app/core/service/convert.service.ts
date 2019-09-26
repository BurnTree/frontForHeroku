import {Category} from '../models/category';
import {Item, Punkt} from '../models/item';
import {forEach} from '@angular/router/src/utils/collection';
import {Injectable} from '@angular/core';
import {Title} from '../models/title';
import {Goods} from '../models/goods';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  p: Item[] = [];
  i: Item = new Item();

  asPath = 'assets/resource/images/';
  asGoods = 'goods/';
  asCat = 'category/';
  asTitle = 'title/';

  public catsInItems(cat: Category[]): Item[] {
    for (const category of cat) {
      this.p.push({
        name: category.name,
        punkt: category.idcategory,
        podpunkt: 0,
        id: 0,
        img: this.asPath + this.asCat + category.photo
      });
      console.log('insade:' + category);
      console.log('name' + category.name);
    }
    return this.p;
  }

  public ctgInItem(cat: Category): Item {
    this.i.name = cat.name;
    this.i.punkt = cat.idcategory;
    this.i.podpunkt = 0;
    this.i.id = 0;
    this.i.img = this.asPath + this.asCat + cat.photo;
    return this.i;
  }

  public ttlsInItems(ttl: Title[]): Item[] {
    this.p = [];
    for (const title of ttl) {
      this.p.push({
        name: title.name,
        punkt: title.idcategory,
        podpunkt: title.idtitle,
        id: 0,
        img: this.asPath + this.asTitle + title.photo
      });
      console.log('insade title:' + title);
    }
    return this.p;
  }

  public ttlInItem(ttl: Title): Item {
    this.i.name = ttl.name;
    this.i.podpunkt = ttl.idcategory;
    this.i.punkt = ttl.idtitle;
    this.i.id = 0;
    this.i.img = this.asPath + this.asTitle +ttl.photo;
    return this.i;
  }

  public goodsInItems(go: Goods[], pp: number): Item[] {
    this.p = [];
    for (const good of go) {
      this.p.push({name: good.name, podpunkt: pp, punkt: good.idtitle, id: good.idgoods, img: this.asPath + this.asGoods + good.photo});
      console.log('insade good:' + good);
    }
    return this.p;
  }

  public goodInItem(go: Goods, pp: number): Item {
    this.i.name = go.name;
    this.i.podpunkt = pp;
    this.i.punkt = go.idtitle;
    this.i.id = go.idgoods;
    this.i.img = this.asPath + this.asGoods + go.photo;
    return this.i;
  }

}
