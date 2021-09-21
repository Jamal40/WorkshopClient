import { Component, OnInit, Input } from '@angular/core';
import { OptionsList } from '../Types';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Input() options: OptionsList[] = [];
  constructor() {}

  ngOnInit(): void {}
}
