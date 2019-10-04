import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../../core/models/category';
import {Title} from '../../../../core/models/title';
import {debounceTime, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CategoryService} from '../../../../core/service/category.service';
import {TitleService} from '../../../../core/service/title.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.css']
})
export class AddTitleComponent implements OnInit {

  @Input()
  idCtg: number;
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
    this.titleForm.controls['category'].setValue(this.idCtg);
  }

  createNewTitle() {
    const title = this.titleForm.getRawValue();
    this.ttl.name = title.name;
    this.ttl.idcategory = title.category;
    this.ttl.photo = title.image;
    this.titleService.save(this.ttl).subscribe(data => {
      console.log('Title add');
      this.titleForm.reset();
    });
  }
}
