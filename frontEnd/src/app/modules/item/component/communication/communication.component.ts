import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {compareLogSummaries} from '@angular/core/src/render3/styling/class_and_style_bindings';
import {log} from 'util';
import {Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  comForm = new FormGroup({
    fName: new FormControl('', {validators: [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]}),
    sName: new FormControl('', {validators: [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)]}),
    phone: new FormControl('', {validators: [Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
        Validators.pattern('^[0-9]*$')]}),
    gmail: new FormControl('', {validators: [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
        Validators.email]}),
    comment: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    const name = this.comForm.get('fName').value + ' ' + this.comForm.get('sName').value;
    const phone = this.comForm.get('phone').value;
    const mail = this.comForm.get('gmail').value;
    const comm = this.comForm.get('comment').value;
    this.comForm.reset();
    console.log(name + '\n' + phone + '\n' + mail + '\n' + comm);
  }

}
