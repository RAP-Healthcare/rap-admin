import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: 'input[xaCurrency]',
})
export class CurrencyMaskDirective {
    @Input('prefix') prefix: string = 'Rp';
    @Input('decimal') decimalSeparator: string = '.';
    @Input('thousand') thousandsSeparator: string = ',';
    @Input('suffix') suffix: string = ',-';
    @Input('padding') padding: number = 5;
    private value: string;

    constructor(private ngControl: NgControl, private el: ElementRef) { }

    @HostListener('focus', ['$event.target.value', '$event'])
    onFocus(value, event) {
        value = value ? value : this.prefix.concat(' ');
        value = this.onLeave(value.replace(this.suffix, ''));
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }

    @HostListener('blur', ['$event.target.value', '$event'])
    onBlur(value, event) {
        value = value.replace(/\D/g, '') ? this.onLeave(value).concat(this.suffix) : '';
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }

    @HostListener('ngModelChange', ['$event'])
    onModelChange(value) {
        value = this.toNumber(value);
        value = value.replace(new RegExp('[^0-9|^' + this.decimalSeparator + '|^-]', 'g'), '');
        if (value.toString().match(new RegExp('^\-?[0-9]*(' + this.decimalSeparator + '[0-9]*)?$', 'g'))) {
            let {val, frac} = this.onInputChange(value);
            if (value.toString().match(new RegExp('^\-?[0-9]*$', 'g'))) {
                val = (!isNaN(parseInt(val, 10)) && val !== '-0') ? parseInt(val, 10).toString() : val;
                value = this.onTransform(val, frac);
                this.value = this.prefix.concat(' ').concat(value);
            }
            if (value.toString().match(new RegExp('^(\-?[0-9])*[' + this.decimalSeparator + '][0-9]*$', 'g')) &&
                !value.toString().startsWith(this.decimalSeparator, 0)) {
                frac = frac.substring(0, this.padding);
                frac = this.decimalSeparator.concat(frac);
                value = this.onTransform(val, frac);
                this.value = this.prefix.concat(' ').concat(value);
            }
            this.el.nativeElement.toNumber = this.toNumber(
                this.prefix.concat(' ').concat(
                    this.onTransform(val,
                        (parseInt(frac.replace(this.decimalSeparator, ''), 10) > 0) ?
                            this.pad(frac, this.padding + 1).substring(0, this.padding + 1) :
                            '')));
        }
        this.ngControl.valueAccessor.writeValue(this.value);
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {
        if (
            [46, 8, 9, 27, 13, 110, 190, 189].indexOf(e.keyCode) !== -1 ||
            (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
            (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
            (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
            (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return;  // let it happen, don't do anything
        }

        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }

    onLeave(value): string {
        const {val, frac} = this.onInputChange(value);
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
              fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return this.onTransform(val, fraction);
    }

    onInputChange(value): {val: string, frac: string} {
        const [ val = '', fraction = ''] = (value || '').split(this.decimalSeparator);
        return {val : val, frac: fraction};
    }

    onTransform(val: string, fraction: string): string {
      val = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return val + fraction;
    }

    toNumber(val: string) {
        return val
            .replace(this.prefix, '')
            .replace(' ', '')
            .replace(this.suffix, '')
            .replace(new RegExp(this.thousandsSeparator, 'g'), '');
    }

    private pad(val, size): string {
        while (val.length < size) val = val + '0';
        return val;
    }
}
