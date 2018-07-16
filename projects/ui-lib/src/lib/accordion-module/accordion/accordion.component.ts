import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Accordion } from './accordion.interface';

@Component({
  selector: 'ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit {
  _items: Accordion[];
  @Input()
  set items(items: Accordion[]) {
    this._items = items;
  }

  constructor() {
  }

  ngOnInit() {
  }

  toggle(item: Accordion): void {
    item.open = !item.open;
  }

}
