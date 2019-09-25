import {Injectable} from '@angular/core';

@Injectable()
export class Globals {
  lang = Language.RUSSIAN;
  backend = 'http://localhost:8080';
}

export enum Language {
  RUSSIAN = 'ru',
  ENGLISH = 'eng'
}

