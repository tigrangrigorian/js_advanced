import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appToUpperCase]'
})
export class ToUpperCaseDirective implements OnInit {
  @Input('appToUpperCase') case;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this.case === 'up') {
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.toUpperCase();
    }
    if (this.case === 'low') {
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.toLowerCase();
    }
  }
}
