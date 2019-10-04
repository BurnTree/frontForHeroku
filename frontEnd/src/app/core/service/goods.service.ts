import {DataGoods, Goods} from '../models/goods';
import {Category} from '../models/category';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../models/global';
import {Injectable} from '@angular/core';
import {Title} from '../models/title';

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

  public getSource(): Observable<any> {
    return this.http.get<any>(this.global.backend + 'api/admin/source');
  }

  public saveGoods(goods: Goods): Observable<Goods> {
    return this.http.post<Goods>(this.global.backend + '/api/goods/add', goods);
  }

  public update(goods: Goods): Observable<Goods> {
    return this.http.put<Goods>(this.global.backend + '/api/goods/change', goods);
  }

  public delete(id: number) {
    this.http.delete(this.global.backend + '/api/goods/delete/' + id).subscribe();
  }

  public saveData(table: DataGoods[]): Observable<DataGoods[]> {
    return this.http.post<DataGoods[]>(this.global.backend + '/api/goods/addData', table);
  }

  public updateData(table: DataGoods[]): Observable<DataGoods[]> {
    return this.http.put<DataGoods[]>(this.global.backend + '/api/goods/changeData', table);
  }
}
