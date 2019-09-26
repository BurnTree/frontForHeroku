import { Pipe, PipeTransform } from '@angular/core';
import {Goods} from '../models/goods';
import {Item} from '../models/item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Item[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
