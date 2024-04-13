import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'common-input',
  templateUrl: './common-input.component.html',
  styleUrl: './common-input.component.css',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CommonInputComponent),
    multi: true
  }]
})
export class CommonInputComponent implements ControlValueAccessor {
  @Input() id = '';
  @Input() type = '';
  @Input() required = '';
  @Input() placeholder = '';
  @Input() label = '';

  private _value = '';

  get value() {
    return this._value;
  }
  
  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  onChange(_: any) {}
  onTouch() {}

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  writeValue(value: any) {
    this.value = value;
  }
}