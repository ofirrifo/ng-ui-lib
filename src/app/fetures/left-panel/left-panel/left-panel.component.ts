import { Component, OnInit } from '@angular/core';
import { Accordion } from '../../../../../projects/ui-lib/src/lib/accordion-module/accordion/accordion.interface';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  items: Accordion[] = [{title: 'Input Components'}, {title: 'Tables'}, {title: 'Modals & Alerts'}, {title: '3'}];

  constructor() {
  }

  ngOnInit() {
  }

}
