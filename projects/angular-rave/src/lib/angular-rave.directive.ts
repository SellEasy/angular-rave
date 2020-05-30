import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';

import { PrivateRaveOptions, PaymentSetup, RaveOptions } from './rave-options';
import { AngularRaveService } from './angular-rave.service';
import { chargeType } from './charge-type';

interface MyWindow extends Window {
  getpaidSetup: (raveOptions: Partial<PrivateRaveOptions>) => PaymentSetup;
}

declare var window: MyWindow;

@Directive({
  selector: '[angular-rave]', // tslint:disable-line
})
export class AngularRaveDirective {
  @Input() amount: number;
  @Input() autoClose: boolean;
  @Input() country: string;
  @Input() currency: string;
  @Input() custom_description: string;
  @Input() custom_logo: string;
  @Input() custom_title: string;
  @Input() customer_email: string;
  @Input() customer_firstname: string;
  @Input() customer_lastname: string;
  @Input() customer_phone: string;
  @Input() integrity_hash: string;
  @Input() meta: any;
  @Input() pay_button_text: string;
  @Input() payment_method: string;
  @Input() payment_options: string;
  @Input() charge_type:chargeType;
  @Input() payment_plan: number;
  @Input() PBFPubKey: string;
  @Input() raveOptions: Partial<PrivateRaveOptions> = {};
  @Input() redirect_url: string;
  @Input() subaccounts: { id: string, transaction_split_ratio: string }[];
  @Input() txref: string;
  @Output() onclose: EventEmitter<void> = new EventEmitter<void>();
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();
  @Output() init: EventEmitter<object> = new EventEmitter<object>();
  private _raveOptions: Partial<PrivateRaveOptions> = {};
  private paymentSetup: PaymentSetup;

  constructor(private raveService: AngularRaveService) { }

  @HostListener('click')
  buttonClick() {
    this.pay();
  }

  async pay() {
    let errorExists = false;
    if (this.raveOptions && Object.keys(this.raveOptions).length > 1) {
      errorExists = this.checkInvalidOptions(this.raveOptions);
      this.insertRaveOptions(this.raveOptions);
    } else {
      errorExists = this.checkInvalidOptions(this);
      this.insertRaveOptions(this);
    }
    if (errorExists) { return; }
    await this.raveService.loadScript();
    this.paymentSetup = window.getpaidSetup(this._raveOptions);
    if (this.init.observers.length > 0) {
      this.init.emit(this.paymentSetup);
    }
  }

  checkInvalidOptions(object: Partial<RaveOptions>): boolean {
    const optionsInvalid = this.raveService.isInvalidOptions(object);
    if (optionsInvalid) {
      console.error(optionsInvalid);
    }
    return optionsInvalid !== '';
  }

  insertRaveOptions(object: Partial<RaveOptions>) {
    this._raveOptions = this.raveService.createRaveOptionsObject(object);
    if (this.onclose) { this._raveOptions.onclose = () => this.onclose.emit(); }
    if (this.callback) { this._raveOptions.callback = res => this.callback.emit(res); }
  }

}

