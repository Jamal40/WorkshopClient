import { Component } from '@angular/core';
import { ErrorDoc, OptionsList } from './Types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options: OptionsList[] = [];
  errorDocument: ErrorDoc = { errorCode: '', errorMessage: '', status: '' };

  takeErrorDoc(er: ErrorDoc) {
    console.log(er);
    this.errorDocument = er;
  }

  takeOptions(options: OptionsList[]) {
    this.options = options;
  }
}
