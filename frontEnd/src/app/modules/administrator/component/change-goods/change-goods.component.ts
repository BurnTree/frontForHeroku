import { Component, OnInit } from '@angular/core';
import {DataGoods, Goods} from '../../../../core/models/goods';
import {Title} from '../../../../core/models/title';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../core/service/category.service';
import {TitleService} from '../../../../core/service/title.service';
import {GoodsService} from '../../../../core/service/goods.service';

@Component({
  selector: 'app-change-goods',
  templateUrl: './change-goods.component.html',
  styleUrls: ['./change-goods.component.css']
})
export class ChangeGoodsComponent implements OnInit {

  public goods: Goods = new Goods();
  public titles: Title[];
  public mnData: FormArray;
  public chrtics: DataGoods[] = [];

  goodsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      title: new FormControl(null, Validators.required),
      short: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image: new FormControl('', Validators.required),
      mainData: new FormArray([new FormGroup(
        {
          nameData: new FormControl(''),
          valueData: new FormControl('')
        }
      )])
    }
  );

  constructor(private categoryService: CategoryService,
              private titleService: TitleService,
              private goodsService: GoodsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.titleService.getAllTitle().subscribe(data => {
      this.titles = data;
      console.log('Title load. Lenght ' + data.length);
    });
  }

  public addMainData(name: string, value: string): void {
    (this.goodsForm.get('mainData') as FormArray).push(
      new FormGroup(
        {
          nameData: new FormControl(name),
          valueData: new FormControl(value)
        }
      )
    );
  }

  createNewGoods() {
    const gds = this.goodsForm.getRawValue();
    this.goods.name = gds.name;
    this.goods.idtitle = gds.title;
    this.goods.photo = gds.image;
    this.goods.shDes = gds.short;
    this.goods.description = gds.description;
    this.mnData = this.goodsForm.get('mainData') as FormArray;
    const data = this.mnData.at(0);
    for (let i = 0; i < this.mnData.length; i++) {
      const n = this.mnData.at(i).get('nameData').value;
      const v = this.mnData.at(i).get('valueData').value;
      this.chrtics.push({name: n, value: v, id: null, idgoods: null});
      console.log(n + v + ': ' + this.chrtics.length);
    }
    this.goodsService.saveGoods(this.goods).subscribe(answer => {
      console.log('goods add: ' + answer.idgoods);
      for (let i = 0; i < this.chrtics.length; i++) {
        this.chrtics[i].idgoods = answer.idgoods;
      }
      this.goodsService.saveData(this.chrtics).subscribe(table => console.log('table save'));
    });
  }
}
