import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../../core/models/category';
import {FileSaver} from 'file-saver';
import {CategoryService} from '../../../../core/service/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

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
  }

  createNewCategory() {
    const ctg = this.categoryForm.getRawValue();
    this.newCtg.name = ctg.name;
    this.newCtg.photo = ctg.image;
    this.categoryService.saveCtg(this.newCtg).subscribe(data =>
      console.log('all is good: ' + data.toStrin())
    );
    // const formData = new FormData();
    // formData.append('file', this.fileData);
  }

}
