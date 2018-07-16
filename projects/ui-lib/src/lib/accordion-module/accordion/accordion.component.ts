import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  _items: any[];
  @Input()
  set items(items: any[]) {
    this._items = items;
  }
  constructor() { }

  ngOnInit() {
  }

}
