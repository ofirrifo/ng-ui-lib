import { Component, OnInit } from '@angular/core';
import { Accordion } from '../../../../../projects/ui-lib/src/lib/accordion-module/accordion/accordion.interface';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  items: Accordion[] = [{title: '1'}, {title: '2'}, {title: '3'}, {title: '3'}];

  constructor() {
  }

  ngOnInit() {
  }

}
