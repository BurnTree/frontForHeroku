import {Component, Input, OnInit} from '@angular/core';
import {Title} from '../../../../core/models/title';
import {Category} from '../../../../core/models/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../core/service/category.service';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-change-catalog',
  templateUrl: './change-catalog.component.html',
  styleUrls: ['./change-catalog.component.css']
})
export class ChangeCatalogComponent implements OnInit {

  @Input()
  public category: Category;

  categoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    }
  );

  fileData: File = null;
  newCtg: Category = new Category();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryForm.controls['name'].setValue(this.category.name);
    this.categoryForm.controls['image'].setValue(this.category.photo);
  }

  createNewCategory() {
    const ctg = this.categoryForm.getRawValue();
    this.newCtg.idcategory = this.category.idcategory;
    this.newCtg.name = ctg.name;
    this.newCtg.photo = ctg.image;
    this.categoryService.update(this.newCtg).subscribe(data =>
      console.log('update succes: ' + data.toStrin()));
  }

  refresh() {
    this.categoryForm.controls['name'].setValue(this.category.name);
    this.categoryForm.controls['image'].setValue(this.category.photo);
  }

  deleteCategoty() {
    this.categoryService.delete(this.category.idcategory);
    this.categoryForm.reset();
  }
}
