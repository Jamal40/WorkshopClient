import { Component } from '@angular/core';
import { OptionsList } from './Types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options: OptionsList[] = [];
  takeOptions(options: OptionsList[]) {
    this.options = options;
  }
}
