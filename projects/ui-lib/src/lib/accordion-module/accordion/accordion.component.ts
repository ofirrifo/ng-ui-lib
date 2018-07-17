import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
    this.cdr.markForCheck();
  }

  _onlyOneAllowOpen = true;
  @Input()
  set onlyOneAllowOpen(onlyOneAllowOpen: boolean) {
    this._onlyOneAllowOpen = onlyOneAllowOpen;
    this.cdr.markForCheck();
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  toggle(item: Accordion): void {
    const newState = !item.open;
    this._items.map((_item: Accordion) => _item.open = false);
    item.open = newState;
  }

}
