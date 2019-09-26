import {DataGoods, Goods} from '../models/goods';
import {Category} from '../models/category';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../models/global';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http: HttpClient,
              private global: Globals) {
  }

  public getAllGoods(): Observable<Goods[]> {
    return this.http.get<Goods[]>(this.global.backend + '/api/goods/all');
  }

  public getGoodsById(id: number): Observable<Goods> {
    return this.http.get<Goods>(this.global.backend + '/api/goods/' + id);
  }

  public getGoodsByTitle(idTtl: number): Observable<Goods[]> {
    console.log('goods by title start');
    return this.http.get<Goods[]>(this.global.backend + '/api/goods/ttl?idTtl=' + idTtl);
  }

  public getData(id: number): Observable<DataGoods[]> {
    return this.http.get<DataGoods[]>(this.global.backend + '/api/goods/data/' + id);
  }

  public getImage(id: number): Observable<any> {
    return this.http.get<any>(this.global.backend + 'api/goods/' + id + '/image');
  }
}
