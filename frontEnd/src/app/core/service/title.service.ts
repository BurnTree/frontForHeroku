import {HttpClient} from '@angular/common/http';
import {Globals} from '../models/global';
import {Observable} from 'rxjs';
import {Goods} from '../models/goods';
import {Title} from '../models/title';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(private http: HttpClient,
              private global: Globals) {
  }

  public getAllTitle(): Observable<Title[]> {
    return this.http.get<Title[]>(this.global.backend + '/api/title/all');
  }

  public getTitleById(id: number): Observable<Title> {
    return this.http.get<Title>(this.global.backend + '/api/title/' + id);
  }

  public getTitleByCtg(idCtg: number): Observable<Title[]> {
    console.log('idCtg: ' + idCtg);
    return this.http.get<Title[]>(this.global.backend + '/api/title/ctg?idCtg=' + idCtg);
  }

  public save(title: Title): Observable<Title> {
    return this.http.post<Title>(this.global.backend + '/api/title/add', title);
  }

  public update(title: Title): Observable<Title> {
    return this.http.put<Title>(this.global.backend + '/api/title/change', title);
  }

  public delete(id: number) {
    this.http.delete(this.global.backend + '/api/title/delete/' + id).subscribe();
  }
}
