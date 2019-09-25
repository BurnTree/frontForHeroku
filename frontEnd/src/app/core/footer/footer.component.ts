import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import * as glob from '../models/global';
import {Globals} from '../models/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any
  ) {
  }

  ngOnInit() {
  }

  goToUrl(): void {
    this.document.location.href = 'https://stackoverflow.com';
  }

}
