import {Component, OnInit} from '@angular/core';
import {Goods} from '../../../../core/models/goods';
import {Category} from '../../../../core/models/category';
import {Title} from '../../../../core/models/title';
import {GoodsService} from '../../../../core/service/goods.service';
import {CategoryService} from '../../../../core/service/category.service';
import {TitleService} from '../../../../core/service/title.service';
import {forEach} from '@angular/router/src/utils/collection';
import {LoginService} from '../../../../core/service/login.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {

  isAdmin = false;
  chaCtg: Category = {
    idcategory: 10, name: 'new name', photo: 'new', toStrin(): string {
      return this.idcategory + ': ' + this.name + ': ' + this.photo;
    }
  };
  chaTtl: Title;
  ChaGood: Goods;
  theme = 'cat';
  catForAdd: number;

  titles: Map<number, Title[]> = new Map<number, Title[]>();
  categories: Category[];

  iter: Category;

  constructor(private goodsService: GoodsService,
              private categoryService: CategoryService,
              private titleService: TitleService,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.checkToken().subscribe(data => {
      this.isAdmin = true;
      console.log('we a created token');
    });
    this.categoryService.getAllCategory().subscribe(ctgs => {
      this.categories = new Category()[ctgs.length];
      this.categories = ctgs;
      for (let i of ctgs) {
        console.log('category: ' + i.name);
        this.titleService.getTitleByCtg(i.idcategory).subscribe(title => this.titles.set(i.idcategory, title));
      }
      // this.titleService.getSource().subscribe(data => {
      //   this.titles = data;
      // });
    });
  }

  changeCategory(ctg: Category) {
    this.chaCtg = new Category();
    this.chaCtg = {
      idcategory: ctg.idcategory, name: ctg.name, photo: ctg.photo, toStrin(): string {
        return this.idcategory + ': ' + this.name + ': ' + this.photo;
      }
    };
    console.log('category change. Category name: ' + this.chaCtg.name);
    this.theme = 'upCtg';
  }

  changeTitle(ttl: Title) {
    this.chaTtl = new Title();
    this.chaTtl = {
      idcategory: ttl.idcategory, name: ttl.name, photo: ttl.photo, idtitle: ttl.idtitle
    };
    console.log('category change. Category name: ' + this.chaTtl.name);
    this.theme = 'upTtl';
  }

  logOut() {
    this.loginService.logout();
  }

  refresh() {
    this.categoryService.getAllCategory().subscribe(ctgs => {
      this.categories = new Category()[ctgs.length];
      this.categories = ctgs;
      for (let i of ctgs) {
        console.log('category: ' + i.name);
        this.titleService.getTitleByCtg(i.idcategory).subscribe(title => this.titles.set(i.idcategory, title));
      }
      // this.titleService.getSource().subscribe(data => {
      //   this.titles = data;
      // });
    });
  }
}
