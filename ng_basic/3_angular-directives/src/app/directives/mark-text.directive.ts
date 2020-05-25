import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMarkText]'
})
export class MarkTextDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.innerHTML = `<mark> ${this.el.nativeElement.innerHTML} </mark>`;
  }
}
