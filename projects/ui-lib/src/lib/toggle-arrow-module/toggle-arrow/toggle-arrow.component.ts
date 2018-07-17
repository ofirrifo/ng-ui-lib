import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-toggle-arrow',
  templateUrl: './toggle-arrow.component.html',
  styleUrls: ['./toggle-arrow.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleArrowComponent implements OnInit {

  _open = false;
  @Input()
  set open(open: boolean) {
    this._open = open;
  }

  constructor() { }

  ngOnInit() {
  }

}
