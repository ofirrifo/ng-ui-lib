import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit {

  _label: string;
  @Input()
  set label(label: string) {
    this._label = label;
    this.cdr.markForCheck();
  }

  _id: string;
  @Input()
  set id(id: string) {
    this._id = id;
    this.cdr.markForCheck();
  }

  /**
   * disable checkbox.
   * in case disable = true user can't change checkbox state
   * the css cursor will be auto
   */
  _disabled: boolean;
  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    this.cdr.markForCheck();
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

}
