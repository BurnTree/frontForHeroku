import {Observable} from 'rxjs';
import {Title} from '../models/title';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category';
import {Globals} from '../models/global';
import {Injectable} from '@angular/core';
import {Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient,
              private global: Globals) {
  }

  public getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.global.backend + '/api/category/all');
  }

  public catsInItems(cat: Category[]): Item[] {
    let p: Item[];
    for (const category of cat) {
      p.push({
        name: category.name,
        punkt: category.idcategory,
        podpunkt: 0,
        id: 0,
        img: category.photo
      });
      console.log('insade:' + category);
      console.log('name' + category.name);
    }
    return p;
  }

  public getForNav(): Observable<Category[]> {
    return this.http.get<Category[]>(this.global.backend + '/api/category/all');
  }

  public getCtgById(id: number): Observable<Category> {
    console.log('ctg: ' + id);
    return this.http.get<Category>(this.global.backend + '/api/category/' + id);
  }
}
