import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeColorOnClick]'
})

export class ChangeColorOnClickDirective {
  @Input('appChangeColorOnClick') color;
  toggle = false;

  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target'])
  onClick(event: Event) {
    this.toggle = !this.toggle;
    this.toggle ? this.r.setStyle(event, 'background-color', this.color) : this.r.setStyle(event, 'background-color', 'black');
  }
}
