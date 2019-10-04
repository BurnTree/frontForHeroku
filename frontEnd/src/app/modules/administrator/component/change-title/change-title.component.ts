import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '../../../../core/models/title';
import {CategoryService} from '../../../../core/service/category.service';
import {TitleService} from '../../../../core/service/title.service';
import {Category} from '../../../../core/models/category';

@Component({
  selector: 'app-change-title',
  templateUrl: './change-title.component.html',
  styleUrls: ['./change-title.component.css']
})
export class ChangeTitleComponent implements OnInit {

  @Input()
  public myTitle: Title;
  public ttl: Title = new Title();
  public categories: Category[];

  titleForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl(null, Validators.required),
      image: new FormControl('', Validators.required)
    }
  );

  constructor(private categoryService: CategoryService,
              private titleService: TitleService) {
  }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
      console.log('categories load. Lenght' + data.length);
    });
    this.titleForm.controls['name'].setValue(this.myTitle.name);
    this.titleForm.controls['image'].setValue(this.myTitle.photo);
    this.titleForm.controls['category'].setValue(this.myTitle.idcategory);
  }


  changeTitle() {
    const title = this.titleForm.getRawValue();
    this.ttl.idtitle = this.myTitle.idtitle;
    this.ttl.name = title.name;
    this.ttl.idcategory = title.category;
    this.ttl.photo = title.image;
    this.titleService.update(this.ttl).subscribe(data => {
      console.log('Title update');
    });
  }

  refresh() {
    this.titleForm.controls['name'].setValue(this.myTitle.name);
    this.titleForm.controls['image'].setValue(this.myTitle.photo);
    this.titleForm.controls['category'].setValue(this.myTitle.idcategory);
  }

  delete() {
    this.titleService.delete(this.myTitle.idtitle);
    this.titleForm.reset();
  }
}
