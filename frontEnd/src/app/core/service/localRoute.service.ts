import {Subscription} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from './item.service';
import {Language} from '../models/global';


@Injectable({
  providedIn: 'root'
})
export class LocalRouteService {
  itemService: ItemService;

  getLanguage(route: ActivatedRoute): string {
    let sub: Subscription;
    let lang: string;
    sub = route.params.subscribe(params => {
      lang = params.lang;
      console.log('in get: ' + lang);
    });
    return lang;
  }
}
