import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckStatusService } from '../services/check-status.service';
import { ErrorDoc, OptionsList } from '../Types';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css'],
})
export class StatusFormComponent implements OnInit {
  @Output() optionsAvailable = new EventEmitter<OptionsList[]>();
  @Output() errorDocumentAvailable = new EventEmitter<ErrorDoc>();
  statusForm = new FormGroup({
    dial: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[1|5|2|0][0-9]{8}$/),
    ]),
    sourceId: new FormControl('', Validators.required),
    langId: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(1|2)$/),
    ]),
  });
  constructor(private checkStatusService: CheckStatusService) {}

  onSubmit(event: any) {
    event.preventDefault();
    this.checkStatusService
      .checkStatus(this.statusForm.value)
      .subscribe((value) => {
        this.optionsAvailable.emit(value?.BucketInfo[0].optionsList);
        this.errorDocumentAvailable.emit(value?.errorDoc);
        console.log(value);
      });
  }
  ngOnInit(): void {}
}
